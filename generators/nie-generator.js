const { getEightOrSevenDigitsNumber, generateNumber } = require('./utils/number-generator');
const { getFirsNieLetter, getControlLetter } = require('./utils/letter-generator');

const getValidNIE = () => {
    const n = generateNumber();
    const firstLetter = getFirsNieLetter(n);
    const number = getEightOrSevenDigitsNumber(7);
    return `${firstLetter}${number}${getControlLetter((n).toString() + number.toString())}`;
};

module.exports = getValidNIE;