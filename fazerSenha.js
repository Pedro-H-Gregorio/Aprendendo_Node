let getRandomArbitrary = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};
function shuffle(array) {
  let currentIndex = array.length,  randomIndex;
  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

const caracters = "abcdefghijklmnopqrstuvwxyz".split("");
const algarimos = "0123456789".split("");
const simbols = "#$%".split("");
let senha = new Array(9);
for (let i = 0; i <= 9; i++) {
  senha[i] =
    i <= 5
      ? caracters.splice(getRandomArbitrary(0, caracters.length),1).toString()
      : i > 5 && i < 8
      ? algarimos.splice(getRandomArbitrary(0, algarimos.length),1).toString()
      : simbols.splice(getRandomArbitrary(0, simbols.length),1).toString();
}
senha.map((l, i) => {
  if (i == 0|| i == 1) {
    senha[i] = l.toUpperCase();
  }
})
senha = shuffle(senha)
console.log(senha.join(''))