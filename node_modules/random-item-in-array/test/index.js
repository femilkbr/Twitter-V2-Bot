var expect = require('chai').expect;

var NUM_ITEMS = 100;
var NUM_ROUNDS = 1000*10;

// load module
var randomItemInArray = require('../');
expect(randomItemInArray).to.exist;

// populate items and related counts
var items = [];
var counts = [];
for (var i = 0; i < NUM_ITEMS; i++) {
  items[i] = i;
  counts[i] = 0;
}

// run rounds
for (var i = 0; i < NUM_ROUNDS; i++) {
  // get random item
  var item = randomItemInArray(items);
  // ensure item is in items
  expect(items).to.include(item);
  // increment item's count
  counts[item]++;
}

// display counts
var bar = require('terminal-bar');
console.log("test success!\n")
console.log(bar(counts, {
  title: "distribution of items' random access counts:",
  color: true,
  rows: counts.length,
}))
