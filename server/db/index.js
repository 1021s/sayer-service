const mongoose = require('mongoose');
const mongoUri = 'mongodb://localhost/zestimate';

const db = mongoose.connect(mongoUri);
const dataBase = mongoose.connection;
dataBase.on('error', console.error.bind(console, 'connection error:'));
dataBase.once('open', () => {
  console.log("Connected to DB!")
});

module.exports = db;