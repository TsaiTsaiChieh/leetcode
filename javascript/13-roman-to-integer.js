/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = function(s) {
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
console.log(romanToInt('III')) // 3
console.log(romanToInt('LVIII')) // 58
console.log(romanToInt('MCMXCIV')) // 58