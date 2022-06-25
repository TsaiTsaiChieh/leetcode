/**
 * @param {number[][]} grid
 * @return {number}
 */

const countNegatives = function(grid) {
    const gridFlat = grid.flat()
    let count = 0
    gridFlat.forEach(num => { if (num < 0) count++ })
    return count
};

const grid = [
    [4, 3, 2, -1],
    [3, 2, 1, -1],
    [1, 1, -1, -2],
    [-1, -1, -2, -3],
];

console.log(countNegatives(grid))