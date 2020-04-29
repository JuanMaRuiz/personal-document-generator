const letters = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];
const firstNieLetter = ['X', 'Y', 'Z'];

const getControlLetter = (dniNumber) => letters[dniNumber % 23];
const getFirsNieLetter = (number) => firstNieLetter[number];

module.exports = {
  getControlLetter,
  getFirsNieLetter
};