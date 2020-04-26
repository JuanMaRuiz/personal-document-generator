const lengths = {
    7: 10000000,
    8: 100000000
};

const getEightOrSevenDigitsNumber = (numberLength = 8) => {
    const randomNumber = parseInt(Math.random() * lengths[numberLength]);
    return randomNumber.toString().length === numberLength ? randomNumber : getEightOrSevenDigitsNumber()
};

const generateNumber = () => {
    const number = parseInt(Math.random() * 10);
    return number > 3 ? generateNumber() : number;
}

module.exports = {
    getEightOrSevenDigitsNumber,
    generateNumber
};