const express = require('express');
const bodyParser = require('body-parser');
const House = require('../db/House.js');

const app = express();
const PORT = 3000;

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: true }));
app.use(express.static('public/dist'));

app.get('/api/listing/:Listing_id/history', (req, res) =>{
  const id = req.params.Listing_id;
  House.find({ Listing_id: id.toString() }, (err, house) => {
    if (err) return console.error(err);
    return res.send(house);
  });
});


app.listen(PORT, () => { console.log(`listening on port ${PORT}`); });
