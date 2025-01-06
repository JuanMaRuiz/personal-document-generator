import { expect, test } from 'vitest';
import { getValidDNI } from '../../generators/dni-generator.js';

test('should generate a string with 8 numbers one letter', () => {
  expect(getValidDNI()).toMatch(/\d{8}[A-Z]{1}/);
});
