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

// rl.question('wtf?', (answer) => {
//   console.log('ok');
//   D.push(answer)
// })

// const D = [];

// let N;
// // rl.question('# words in dictionary:  ', (answer) => {
//   N = parseInt(answer);
//   // rl.pause();
// // });

// for (let i = 0; i < N; i++) {
//   let w = [];
//   let W = rl();
//   // rl.question(`Word #${i + 1}`, (answer) => {
//     W.forEach(l => {
//       w.push(l);
//     // })
//     D.push(w);
//   });
//   // rl.pause();
// }

// // rl.question('what the hell is this bit? ', (answer) => {
//   const LETTERS = answer;
//   rl.close();
// });

// D.forEach(word => {
//   console.log(word.join(''));
// })

// // console.log('invalid word');