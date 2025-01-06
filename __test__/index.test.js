import { expect, test } from 'vitest';

import { getValidDNI, getValidNIE } from './../index.js';

test('should export getValidDNI and getValidNIE', () => {
  expect(typeof getValidDNI).toBe('function');
  expect(typeof getValidNIE).toBe('function');
});
