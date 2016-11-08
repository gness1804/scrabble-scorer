const multiplier = 2;
const userWord = 'zucchini';
const letterScores = {
  A: 1,
  B: 3,
  C: 3,
  D: 2,
  E: 1,
  F: 4,
  G: 2,
  H: 4,
  I: 1,
  J: 8,
  K: 5,
  L: 1,
  M: 3,
  N: 1,
  O: 1,
  P: 3,
  Q: 10,
  R: 1,
  S: 1,
  T: 1,
  U: 1,
  V: 4,
  W: 4,
  X: 8,
  Y: 4,
  Z: 10,
};

function scoreWord (userWord, multiplier) {
  const scores = [];
  const userWordArray = userWord.toUpperCase().trim().split('');
  const wordIsValid = userWord.length > 0 && isNaN(parseInt(userWord, 10));
  if (wordIsValid) {
      userWordArray.forEach((letter) => {
        scores.push(parseInt(letterScores[letter], 10));
      });
      const score = scores.reduce((a, b) => {
        return a + b;
      }, 0);
      return score * (multiplier || 1);
      // console.log(score * (multiplier || 1))
  } else {
    return 0;
  }
}

scoreWord(userWord, multiplier);

module.exports = scoreWord;
