import game from '../index.js';
import getRandomNumber from '../random-number.js';

const isPrime = (number) => {
  for (let i = 1; i <= number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};

const generateData = () => {
  const num = getRandomNumber();
  const question = num.toString();
  const answer = isPrime(num) ? 'yes' : 'no';

  return [question, answer];
};

const prime = () => {
  const rulesMessage = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const roundsCount = 3;
  game(rulesMessage, roundsCount, generateData);
};

export default prime;
