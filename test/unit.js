'use strict';

const metatests = require('metatests');
const metacms = require('..');

metatests.test('Test', async (test) => {
  test.strictSame(typeof metacms, 'object');
  test.end();
});
