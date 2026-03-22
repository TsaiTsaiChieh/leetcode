/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates1 = function (nums) {
  let ans = 0;
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const current = nums[i];
    if (map.get(current)) {
      // nums[i] = '';
    } else {
      map.set(current, true);
      ans += 1;
    }
  }
  let i = 0;
  for (let [key, value] of map) {
    nums[i] = key;
    i++;
  }
  return ans;
};
console.log(removeDuplicates1([1, 1, 2])); // 2
console.log(removeDuplicates1([0, 0, 1, 1, 2, 2, 3, 3, 4])); // 5

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates2 = function (nums) {
  if (nums.length === 0) return 0;

  // should start from 1
  let k = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[k] = nums[i];
      k++;
    }
  }
  return k;
};
console.log(removeDuplicates2([1, 1, 2])); // 2
console.log(removeDuplicates2([0, 0, 1, 1, 2, 2, 3, 3, 4])); // 5
