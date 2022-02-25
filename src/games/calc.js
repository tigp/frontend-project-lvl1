import getRandomNumber from '../random-number.js';
import game from '../index.js';

const generateDate = () => {
  const num1 = getRandomNumber();
  const num2 = getRandomNumber();
  const operators = ['+', '-', '*'];
  const indexOfOperation = getRandomNumber(0, operators.length - 1);
  const question = `${num1} ${operators[indexOfOperation]} ${num2}`;

  let result = 0;

  switch (indexOfOperation) {
    case 0:
      result = num1 + num2;
      break;
    case 1:
      result = num1 - num2;
      break;
    case 2:
      result = num1 * num2;
      break;
    default:
      break;
  }

  const answer = result.toString();

  return [question, answer];
};

const calc = () => {
  const rulesMessage = 'What is the result of the expression?';
  const roundsCount = 3;
  game(rulesMessage, roundsCount, generateDate);
};

export default calc;
