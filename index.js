const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');
const rl = readline.createInterface({ input, output });

const D = []
let N;

const q1 = () => {
  return new Promise((resolve, reject) => {
    rl.question('how many words?: ', (answer) => {
      N = parseInt(answer);
      resolve();
    });
  });
}

const q2 = async () => {
  return new Promise((resolve, reject) => {
    rl.on('line', (line) => {
      D.push(line);
      if (D.length === N) {
        resolve();
      }
    });
  })
}

rl.on('close', () => {
  console.log(D.join(','));
})

const main = async () => {
  await q1();
  await q2();
  rl.close();
}

main();
