const {getEightOrSevenDigitsNumber} = require('./utils/number-generator');
const { getControlLetter } = require('./utils/letter-generator');

const getValidDNI = () => {
  const number = getEightOrSevenDigitsNumber();
  return `${number}${getControlLetter(number)}`;
};

module.exports = getValidDNI;