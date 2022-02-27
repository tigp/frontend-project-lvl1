import getRandomNumber from '../random-number.js';
import game from '../index.js';

const generateDate = () => {
  const num1 = getRandomNumber();
  const num2 = getRandomNumber();
  const question = `${num1} ${num2}`;

  const divisor = (a, b) => {
    if (!b) {
      return a;
    }

    return divisor(b, a % b);
  };

  const answer = divisor(num1, num2).toString();

  return [question, answer];
};

const gcd = () => {
  const rulesMessage = 'Find the greatest common divisor of given numbers.';
  const roundsCount = 3;
  game(rulesMessage, roundsCount, generateDate);
};

export default gcd;
