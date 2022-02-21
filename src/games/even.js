import readlineSync from 'readline-sync';
import getRandomNumber from '../random-number.js';
import greeting from '../cli.js';

const evenGame = () => {
  const userName = greeting();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let i = 0;

  while (i < 3) {
    const randomNum = getRandomNumber();
    const userAnswer = readlineSync.question(`Question: ${randomNum}\nYour answer: `);
    const answer = randomNum % 2 === 0 ? 'yes' : 'no';
    if (userAnswer === answer) {
      console.log('Correct!');
      i += 1;
    } else {
      return console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.\nLet's try again, ${userName}!`);
    }
  }

  return console.log(`Congratulations, ${userName}!`);
};

export default evenGame;
