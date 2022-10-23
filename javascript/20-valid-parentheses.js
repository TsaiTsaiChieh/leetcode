/**
 * @param {string} s
 * @return {boolean}
 */
const isValid0 = function(s) {
  const map = {
    '(': ')',
    '[': ']',
    '{': '}',
  }
  const record = []
  for (let i = 0; i < s.length; i++) {
    const curr = s[i]
    if (curr in map) {
      record.unshift(map[curr])
    } else if (record[0] === curr) {
      record.shift()
    } else {
      return false
    }
  }
  return record.length === 0
}

console.log(isValid0('()')) // true
console.log(isValid0('()[]{}')) // true
console.log(isValid0('(]')) // false
console.log(isValid0('{[]}')) // true

const isValid1 = function(s) {
  if (s.length === 1) return false
  const map = new Map([
    ['(', ')'], ['[', ']'], ['{', '}'],
  ])
  const record = []
  for (let i = 0; i < s.length; i++) {
    const curr = s[i]
    if (map.has(curr)) {
      record.unshift(map.get(curr))
    } else if (record[0] === curr) {
      record.shift()
    } else {
      return false
    }
  }
  return record.length === 0
}

console.log(isValid1('()')) // true
console.log(isValid1('()[]{}')) // true
console.log(isValid1('(]')) // false
console.log(isValid1('{[]}')) // true
console.log(isValid1('(')) // false