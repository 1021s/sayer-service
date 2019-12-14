/* eslint-disable no-undef */
const seed = require('../server/db/seed.js');

test('creates 100 mock listings', () => {
  expect(seed.seedData.length).toBe(100);
});

test('adds mock listings to the database', () => {
  expect(seed.insertSeed()).toBe('completed');
});