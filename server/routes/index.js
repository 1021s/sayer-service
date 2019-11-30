const express = require('express');
const bodyParser = require('body-parser');
const db = require('../db/index.js');
const House = require('../db/House.js');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/api/listing/:listing_id/history', function(req, res) {
  const id = req.params.listing_id;
  House.find({Listing_id: id.toString()}, (err, house) => {
    if (err) return console.error(err);
    res.send(house);
    console.log(house);
  });
});

app.listen(PORT, () => { console.log(`listening on port ${PORT}`); });