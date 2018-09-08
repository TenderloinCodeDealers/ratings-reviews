const express = require('express');
const bodyParser = require('body-parser');

// Set up Express server and JSON parsing of API requests
const app = express();
app.use(bodyParser.json());
app.listen('http://localhost:3002', () => console.log('Listening on 3001...'));
/* --------------------------------------------------------------------------------------------- */

// Set up routes
app.get('/:dealId/api/ratings', (req, res) => {
  if (req.query.total !== undefined && req.query.average !== undefined) {
  } else if (req.query.total !== undefined) {
  } else if (req.query.average !== undefined) {
  } else {
    res.sendStatus(400);
  }
  res.send();
});

app.get('/:dealId/api/reviews', (req, res) => {
  res.send();
});
