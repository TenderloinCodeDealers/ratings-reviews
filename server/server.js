const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database/database');

// Set up Express server and JSON parsing of API requests
const app = express();
// Allow Cross Origin Requests
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', req.get('Origin') || '*');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE');
  res.header('Access-Control-Expose-Headers', 'Content-Length');
  res.header(
    'Access-Control-Allow-Headers',
    'Accept, Authorization, Content-Type, X-Requested-With, Range'
  );
  if (req.method === 'OPTIONS') {
    return res.send(200);
  }
  return next();
});
app.use('/:id', express.static('client/dist'));
app.use(bodyParser.json());
app.listen(3002, () => console.log('Listening on 3002...'));
/* --------------------------------------------------------------------------------------------- */

/* --------------------------------------------------------------------------------------------- */

// Set up routes
app.get('/:dealId/api/ratings', (req, res) => {
  db.getRatings(req.params.dealId)
    .then(result => {
      if (req.query.total !== undefined && req.query.average !== undefined) {
        res.send(result);
      } else if (req.query.total !== undefined) {
        res.send({ total: result.total });
      } else if (req.query.average !== undefined) {
        res.send({ average: result.average });
      } else {
        res.sendStatus(400);
      }
    })
    .catch(err => {
      res.sendStatus(500);
      throw err;
    });
});

app.get('/:dealId/api/reviews', (req, res) => {
  db.getAllReviews(req.params.dealId)
    .then(result => {
      res.send(result);
    })
    .catch(err => {
      res.sendStatus(500);
      throw err;
    });
});
