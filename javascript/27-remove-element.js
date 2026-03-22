/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement1 = function (nums, val) {
  if (nums.length === 0) return 0;

  let k = 0; // k is the position to place the next valid number
  for (let i = 0; i < nums.length; i++) {
    const current = nums[i];
    if (current !== val) {
      nums[k] = current; // put valid number
      k++;
    }
  }
  return k;
};
console.log(removeElement1([3, 2, 2, 3], 3)); // 2
console.log(removeElement1([0, 1, 2, 2, 3, 0, 4, 2], 2)); // 5
