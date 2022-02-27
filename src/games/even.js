import getRandomNumber from '../random-number.js';
import game from '../index.js';

const generateData = () => {
  const isEven = (num) => num % 2 === 0;

  const num = getRandomNumber();
  const question = num.toString();
  const answer = isEven(num) ? 'yes' : 'no';

  return [question, answer];
};

const even = () => {
  const rulesMessage = 'Answer "yes" if the number is even, otherwise answer "no".';
  const roundsCount = 3;
  game(rulesMessage, roundsCount, generateData);
};
export default even;
