const generateRandomNumber = () => {
    const randomNumber = parseInt(Math.random() * 100000000);
    return randomNumber.toString().length === 8 ? randomNumber : generateRandomNumber()
};

module.exports = generateRandomNumber;