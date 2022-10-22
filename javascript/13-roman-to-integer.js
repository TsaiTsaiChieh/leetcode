/**
 * @param {string} s
 * @return {number}
 */
const romanToInt0 = function(s) {
  const map = {
    'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000,
  }
  let sum = 0
  for (let i = 0; i < s.length; i++) {
    if (map[s[i + 1]] > map[s[i]]) sum -= map[s[i]]
    else sum += map[s[i]]
  }
  return sum
}
console.log(romanToInt0('III')) // 3
console.log(romanToInt0('LVIII')) // 58
console.log(romanToInt0('MCMXCIV')) // 1994

const romanToInt1 = function(s) {
  const map = new Map([
    ['I', 1],
    ['V', 5],
    ['X', 10],
    ['L', 50],
    ['C', 100],
    ['D', 500],
    ['M', 1000]],
  )
  let sum = 0
  for (let i = 0; i < s.length; i++) {
    const curr = s[i]
    const next = s[i + 1]

    if (map.get(next) > map.get(curr)) sum -= map.get(curr)
    else sum += map.get(curr)
  }
  return sum
}
console.log(romanToInt1('III')) // 3
console.log(romanToInt1('LVIII')) // 58
console.log(romanToInt1('MCMXCIV')) // 58