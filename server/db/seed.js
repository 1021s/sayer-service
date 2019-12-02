const faker = require('faker');
const House = require('./House');

let seedData = [

];

// eslint-disable-next-line func-names
Number.prototype.pad = (size) => {
  let s = String(this);
  while (s.length < (size || 2)) { s = '0' + s; }
  return s;
};
// TODO turn to function
for (let i = 0; i < 100; i++) {
  const zip = faker.address.zipCode('#####');
  const price = faker.commerce.price(100000, 1000000);
  const pastDate = faker.date.past(20);
  const houseObj = {
    Listing_id: (i).pad(3),
    initial_cost: price,
    last_sold: pastDate,
    zip: zip,
  };
  seedData.push(houseObj);
}

const insertSeed = () => {
  House.create(seedData, (err, house) => {
    if (err) {
      console.log(err);
    } else {
      console.log(house);
    }
  });
};

insertSeed();
