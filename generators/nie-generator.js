// Los NIE's de extranjeros residentes en España tienen una letra (X, Y, Z), 7 números y dígito de control.
// Para el cálculo del dígito de control se sustituye:

// X → 0
// Y → 1
// Z → 2
// y se aplica el mismo algoritmo que para el NIF.
const { getEightOrSevenDigitsNumber, generateNumber } = require('./utils/number-generator');
const { getFirsNieLetter, getControlLetter } = require('./utils/letter-generator');

const generateValidNIE = () => {
    const n = generateNumber();
    const firstLetter = getFirsNieLetter(n);
    const number = getEightOrSevenDigitsNumber(7);
    return `${firstLetter}${number}${getControlLetter((number).toString() + number.toString())}`;
};

module.exports = generateValidNIE;