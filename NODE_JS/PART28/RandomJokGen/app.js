// ----------Random Joke Generator App------------------

import https from 'https';
import chalk from 'chalk';

const getJoke = () => {
  const url = 'https://official-joke-api.appspot.com/random_joke';

  https.get(url, (res) => {
    let data = "";

    res.on('data', (chunk) => {
      data += chunk;
    });

    res.on('end', () => {
      try {
        const joke = JSON.parse(data);

        console.log(chalk.green('Here is a random joke:'));
        console.log(chalk.red(joke.setup));
        console.log(chalk.blue.bgRed.bold(joke.punchline));
      } catch (error) {
        console.error(chalk.red('Failed to parse joke:'), error.message);
      }
    });
  }).on('error', (err) => {
    console.error(chalk.red('Request failed:'), err.message);
  });
};

getJoke();

