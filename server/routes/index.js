const express = require('express');
const bodyParser = require('body-parser');

const House = require('../db/House.js');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.route('api/listing/listing_id/history')
  .get((req, res) => {
    House.find({Listing_id: req.body})
      .then((houseHistory) => res.send(houseHistory))
      .catch(() => res.status(500).send());
  });

app.listen(PORT, () => { console.log(`listening on port ${PORT}`); });