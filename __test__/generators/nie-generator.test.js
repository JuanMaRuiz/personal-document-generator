const getValidNIE = require('../../generators/nie-generator');

test('should return a string with the correct format X, Y or Z letter 7 numbers and a letter', () => {
  let n = 5;
  while( n > 0 ) {
    expect(getValidNIE()).toMatch(/(X|Y|Z){1}\d{7}[A-Z]{1}/);
    n--;
  }
});