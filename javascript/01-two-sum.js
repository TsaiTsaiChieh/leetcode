/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum0 = function(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] === target - nums[i]) {
        return [i, j]
      }
    }
  }
}

console.log(twoSum0([2, 7, 11, 15], 9)) // [0, 1]
console.log(twoSum0([3, 2, 4], 6)) // [1, 2]
console.log(twoSum0([3, 3], 6)) // [0, 1]

const twoSum1 = function(nums, target) {
  const hashmap = {}
  for (let i = 0; i < nums.length; i++) {
    hashmap[nums[i]] = i
  }
  for (let i = 0; i < nums.length; i++) {
    const rest = target - nums[i]
    if (rest in hashmap && i !== hashmap[rest]) {
      return [i, hashmap[rest]]
    }
  }
}
console.log(twoSum1([2, 7, 11, 15], 9)) // [0, 1]
console.log(twoSum1([3, 2, 4], 6)) // [1, 2]
console.log(twoSum1([3, 3], 6)) // [0, 1]