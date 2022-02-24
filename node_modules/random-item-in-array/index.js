var randomNumberInRange = require('random-number-in-range');

module.exports = function randomItemInArray (array) {

  return array[
    randomNumberInRange(
      0,
      array.length
    )
  ];

}
