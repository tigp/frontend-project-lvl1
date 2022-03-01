import getRandomNumber from '../random-number.js';
import game from '../index.js';

const generateData = () => {
  const progression = [];
  let current = getRandomNumber();
  const progressionStep = getRandomNumber(7, 20);

  for (let i = 0; i < getRandomNumber(5, 10); i += 1) {
    progression.push(current);
    current += progressionStep;
  }

  const missingIndex = getRandomNumber(0, progression.length - 1);
  const answer = progression[missingIndex].toString();
  progression[missingIndex] = '..';
  const question = progression.join(' ');

  return [question, answer];
};

const progression = () => {
  const rulesMessage = 'What number is missing in the progression?';
  game(rulesMessage, generateData);
};

export default progression;
