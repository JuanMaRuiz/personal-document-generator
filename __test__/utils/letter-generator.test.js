import { expect, test } from 'vitest';

import { getControlLetter } from '../../generators/utils/letter-generator.js';

test('should return the correct letter for the given number', () => {
  expect(getControlLetter(12345678)).toBe('Z');
});
