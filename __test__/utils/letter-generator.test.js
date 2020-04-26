const { getControlLetter } = require('../../generators/utils/letter-generator')

test('should return the correct letter for the given number', () => {
    expect(getControlLetter(12345678)).toBe('Z');
});