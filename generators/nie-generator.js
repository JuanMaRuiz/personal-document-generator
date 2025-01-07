import { getEightOrSevenDigitsNumber, generateNumber } from './utils/number-generator.js';
import { getFirsNieLetter, getControlLetter } from './utils/letter-generator.js';

export const getValidNIE = () => {
  const n = generateNumber();
  const firstLetter = getFirsNieLetter(n);
  const number = getEightOrSevenDigitsNumber(7);
  return `${firstLetter}${number}${getControlLetter(n.toString() + number.toString())}`;
};
