// El formato del NIF consiste básicamente en ocho números más un código de control 
// (letra) para españoles con DNI, o bien en una letra, siete números y un código 
// de control (letra) para el resto de personas físicas
const { getValidNif } = require('./../generators/nif-generator');

test('nif should be a string', () => {
    expect(typeof getValidNif()).toBe('string');
});

test('nif should have a length of greater than 7 and lower than 10', () => {
    expect(getValidNif().length).toBeGreaterThan(7);
    expect(getValidNif().length).toBeLessThan(10);
});

test('nif should have the correct format', () => {
    expect(getValidNif()).toMatch(/\d{8}[A-Z]{1}/);
});