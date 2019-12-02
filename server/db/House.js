const mongoose = require('mongoose');
const db = require('../db/index.js');

mongoose.Promise = global.Promise;

const houseSchema = new mongoose.Schema({
  Listing_id: String,
  initial_cost: Number,
  last_sold: Date,
  zip: Number,
});

const House = mongoose.model('House', houseSchema, 'houseHistory');


module.exports = House;
