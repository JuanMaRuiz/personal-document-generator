const randomNumber = require('./../generators/utils/number-generator');

test('should generate a number', () => {
    expect(typeof randomNumber()).toBe('number');
});

test('should generate a number of 8 numbers', () => {
    expect(randomNumber().toString().length).toBe(8);
});