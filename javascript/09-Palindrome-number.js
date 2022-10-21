/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome0 = function(x) {
  const x2str = x.toString()
  const middleIdx = (x2str.length - 1) / 2
  const left = x2str.substring(0, middleIdx + 1).split('')
  const right = x2str.substring(middleIdx, x2str.length).split('').reverse()
  return left.every((ele, i) => ele === right[i])
}

console.log(isPalindrome0(121)) // true
console.log(isPalindrome0(-121)) // false
console.log(isPalindrome0(10)) // false
console.log(isPalindrome0(0)) // false
console.log(isPalindrome0(11)) // false