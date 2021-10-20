const { getEightOrSevenDigitsNumber, generateNumber } = require('../../generators/utils/number-generator');

test('should generate a number', () => {
  expect(typeof getEightOrSevenDigitsNumber()).toBe('number');
});

test('should generate a number of 8 digits by default', () => {
<<<<<<< HEAD
<<<<<<< HEAD
  expect(getEightOrSevenDigitsNumber().toString().length).toBe(8);
});

test('should generate a number with the passed number of digits', () => {
  expect(getEightOrSevenDigitsNumber(8).toString().length).toBe(8);
  expect(getEightOrSevenDigitsNumber(7).toString().length).toBe(7);
});

test('getEightOrSevenDigitsNumber should return a number of 7 digits', () => {
  let n = 8;
  while ( n > 0 ) {
    expect(getEightOrSevenDigitsNumber(7).toString().length).toBe(7);
    n--;
  }
=======
    expect(getEightOrSevenDigitsNumber().toString()).toHaveLength(8);
});

test('should generate a number with the passed number of digits', () => {
=======
    expect(getEightOrSevenDigitsNumber().toString()).toHaveLength(8);
});

test('should generate a number with the passed number of digits', () => {
>>>>>>> ae5b300c3ef67203b70748299a1fc2c3f2ec83e6
    expect(getEightOrSevenDigitsNumber(8).toString()).toHaveLength(8);
    expect(getEightOrSevenDigitsNumber(7).toString()).toHaveLength(7);
});

test('getEightOrSevenDigitsNumber should return a number of 7 digits', () => {
    let n = 8;
    while ( n > 0 ) {
        expect(getEightOrSevenDigitsNumber(7).toString()).toHaveLength(7);
        n--;
    }
>>>>>>> (feat) configure eslint-jest linter
});
test('generate number should return a value between 0 an 2', () => {
  let n = 5;
  while ( n > 0 ) {
    const num = generateNumber();
    expect((num >= 0 || num < 3)).toBe(true);
    n--;
  }
});