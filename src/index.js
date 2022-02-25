import readlineSync from 'readline-sync';

const game = (rulesMessage, roundsCount, generateData) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May i have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(rulesMessage);

  for (let i = 0; i < roundsCount; i += 1) {
    const [question, answer] = generateData();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === answer) {
      console.log('Correct!');
    } else {
      return console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.\nLet's try again, ${userName}!`);
    }
  }

  console.log(`Congratulations, ${userName}!`);
};

export default game;
