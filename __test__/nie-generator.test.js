const generateValidNIE = require('./../generators/nie-generator');

test('should return a string with the correct format X, Y or Z letter 7 numbers and a letter', () => {
    expect(generateValidNIE()).toMatch(/(X|Y|Z){1}\d{7}[A-Z]{1}/);
});