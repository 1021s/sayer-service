const faker = require('faker');
const House = require('./House');

let seedData = [

];

// eslint-disable-next-line func-names

// TODO turn to function
for (let i = 0; i < 100; i++) {
  const zip = faker.address.zipCode('#####');
  const price = faker.commerce.price(100000, 1000000);
  const pastDate = faker.date.past(20);
  let id = i;
  if (id.toString().length < 2) {
    id = `00${id.toString()}`;
  } else {
    id = `0${id.toString()}`;
  }
  const houseObj = {
    Listing_id: id,
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
