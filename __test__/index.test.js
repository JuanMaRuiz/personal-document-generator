const { getValidDNI, getValidNIE } = require('./../index');

test('should export getValidDNI and getValidNIE', () => {
    expect(typeof getValidDNI).toBe('function');
    expect(typeof getValidNIE).toBe('function');
});