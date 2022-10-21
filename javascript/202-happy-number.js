/**
 * @param {number} n
 * @return {boolean}
 */
const isHappy0 = function(n) {
  if (n === 1 || n === 7) return true
  if (n / 10 < 1) return false
  n2str = n.toString()
  if (n2str.length >= 2) {
    do {
      let sum = 0
      for (let i = 0; i < n2str.split('').length; i++) {
        sum += Math.pow(Number(n2str[i]), 2)
      }
      n2str = sum.toString()
    } while (n2str.length > 1)
  }
  const num = parseInt(n2str)
  if (num === 1 || num === 7) return true
  else return false
}

console.log(isHappy0(19)) // true
console.log(isHappy0(2)) // false
console.log(isHappy0(1111111)) // true

// New a set to save sum number,
// if the next sum calculation already exist on the hash set, it means a loop
const isHappy1 = function(n) {
  const hashSet = new Set()
  let n2str = n.toString()
  let sum = 0
  do {
    hashSet.add(sum)
    sum = 0
    for (let i = 0; i < n2str.split('').length; i++) {
      sum += n2str[i] ** 2
    }
    n2str = sum.toString()
    if (sum === 1) return true
  } while (!hashSet.has(sum))
  return false
}

console.log(isHappy1(19)) // true
console.log(isHappy1(2)) // false
console.log(isHappy1(1111111)) // true

const isHappy2 = function(n) {
  if (n === 0) return false
  const hashSet = new Set()
  let n2str = n.toString()
  let sum = 0

  while (parseInt(n2str) !== 1) {
    sum = n2str
      .split('')
      .map((ele) => ele ** 2)
      .reduce((acc, cur) => acc + cur)
    if (hashSet.has(sum)) return false
    hashSet.add(sum)
    n2str = sum.toString()
    sum = 0
  }
  return true
}

console.log(isHappy2(19)) // true
console.log(isHappy2(2)) // false
console.log(isHappy2(1111111)) // true