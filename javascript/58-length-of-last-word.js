/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord1 = function (s) {
  const words = s.trim().split(' ');
  return words[words.length - 1].length;
};

var lengthOfLastWord2 = function (s) {
  let length = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === ' ' && length > 0) {
      break;
    } else if (s[i] !== ' ') {
      length++;
    }
  }
  return length;
};

var lengthOfLastWord3 = function (s) {
  let length = 0;
  let i = s.length - 1;
  while (i >= 0 && s[i] === ' ') {
    i--;
  }
  while (i > 0 && s[i] !== ' ') {
    length++;
    i--;
  }
  return length;
};

console.log(lengthOfLastWord1('Hello World')); // 5
console.log(lengthOfLastWord1('   fly me   to   the moon  ')); // 4

console.log(lengthOfLastWord2('Hello World')); // 5
console.log(lengthOfLastWord2('   fly me   to   the moon  ')); // 4

console.log(lengthOfLastWord3('Hello World')); // 5
console.log(lengthOfLastWord3('   fly me   to   the moon  ')); // 4
