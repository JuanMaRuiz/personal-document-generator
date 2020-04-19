const randomNumber = require('./utils/number-generator');
const letters = ['T','R','W','A','G','M','Y','F','P','D','X','B','N','J','Z','S','Q','V','H','L','C','K','E'];

const getLetter = (dniNumber) => letters[dniNumber%23];

const getValidDNI = () => {
    const number = randomNumber();
    return `${number}${getLetter(number)}`;
};

module.exports = {
    getValidDNI,
};