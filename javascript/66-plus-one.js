/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne1 = function (digits) {
  const num = BigInt(digits.join('')) + 1n;

  return num.toString().split('').map(Number);
};

var plusOne2 = function (digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    digits[i]++;
    if (digits[i] < 10) {
      return digits;
    }
    digits[i] = 0;
  }
  digits.unshift(1);
  return digits;
};

console.log(plusOne1([1, 2, 3])); // [1, 2, 4]
console.log(plusOne1([4, 3, 2, 1])); // [4, 3, 2, 2]
console.log(plusOne1([9, 9])); // [1, 0, 0]

console.log(plusOne2([1, 2, 3])); // [1, 2, 4]
console.log(plusOne2([4, 3, 2, 1])); // [4, 3, 2, 2]
console.log(plusOne2([9, 9])); // [1, 0, 0]
