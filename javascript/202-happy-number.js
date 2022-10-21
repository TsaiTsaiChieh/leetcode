/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy0 = function (n) {
  if (n === 1 || n === 7) return true;
  if (n / 10 < 1) return false;
  n2str = n.toString();
  if (n2str.length >= 2) {
    do {
      let sum = 0;
      for (let i = 0; i < n2str.split("").length; i++) {
        sum += Math.pow(Number(n2str[i]), 2);
      }
      n2str = sum.toString();
    } while (n2str.length > 1);
  }
  const num = parseInt(n2str);
  if (num === 1 || num === 7) return true;
  else return false;
};

console.log(isHappy0(19)); // true
console.log(isHappy0(2)); // true
console.log(isHappy0(1111111)); // true
