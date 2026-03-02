/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement1 = function (nums, val) {
    let k = 0
    for (let i = 0; i < nums.length; i++) {
        const currentNum = nums[i];
        if (currentNum !== val) {
            nums[k] = currentNum;
            k++;
        }
    }
    return k;
};
console.log(removeElement1([3, 2, 2, 3], 3)) // 2
console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2)) // 5