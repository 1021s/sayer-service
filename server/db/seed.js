const faker = require('faker');
const House = require('./House');
const db = require('./index.js');

var seedData = [

];

Number.prototype.pad = function(size) {
  var s = String(this);
  while (s.length < (size || 2)) {s = "0" + s;}
  return s;
};

for (let i = 0; i < 100; i++) {
  let zip = faker.address.zipCode('#####');
  let price = faker.commerce.price(100000, 1000000);
  let pastDate = faker.date.past(20);
  let houseObj = {
    Listing_id: (i).pad(3),
    intial_cost: price,
    last_sold: pastDate,
    zip: zip,
  };
  seedData.push(houseObj);
}

const insertSeed = function() {
  House.create(seedData, (err, house) => {
    if (err) {
      console.log(err);
    } else {
      console.log(house);
    }
  })
};
console.log('len: ', seedData.length);
insertSeed();
