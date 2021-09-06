import {getEightOrSevenDigitsNumber} from './utils/number-generator.js';
import { getControlLetter } from './utils/letter-generator.js';

export const getValidDNI = () => {
  const number = getEightOrSevenDigitsNumber();
  return `${number}${getControlLetter(number)}`;
};