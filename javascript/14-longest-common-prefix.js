/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix0 = function(strs) {
  // Find the index of shorter strings
  const strsLen = []
  for (let i = 0; i < strs.length; i++) {
    strsLen.push(strs[i].length)
  }
  const min = Math.min(...strsLen)
  const shorterIdx = strsLen.indexOf(min)
  // Record it for the benchmark and remove it from strings
  const base = strs[shorterIdx]
  strs.splice(shorterIdx, 1)
  // Start to compare
  let ans = base
  for (let i = 0; i < strs.length; i++) {
    for (let j = 0; j < base.length; j++) {
      if (base[j] != strs[i][j]) {
        ans = ans.substring(0, j)
        break
      }
    }
  }
  return ans
}

console.log(longestCommonPrefix0(['flower', 'flow', 'flight']))
console.log(longestCommonPrefix0(['dog', 'racecar', 'car']))