const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const houseSchema = new mongoose.Schema({
    Listing_id: String,
    initial_cost: Number,
    last_sold: Date,
    zip: Number,
  }
);

const House = mongoose.model('Blog', houseSchema, 'houseHistory');

module.exports = House;