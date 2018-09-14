const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database/database');

// Set up Express server and JSON parsing of API requests
const app = express();
app.use('/:id', express.static('client/dist'));
app.use(bodyParser.json());
app.listen(3002, () => console.log('Listening on 3002...'));
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
