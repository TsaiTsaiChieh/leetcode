
from typing import List


class Solution:
    def countNegatives(self, grid: List[List[int]]) -> int:
        grid_flat = [ele for col in grid for ele in col]
        count = len([ele for ele in grid_flat if ele < 0])
        return count
               
               
grid: List[List[int]] = [
    [4, 3, 2, -1],
    [3, 2, 1, -1],
    [1, 1, -1, -2],
    [-1, -1, -2, -3],
]
print(Solution().countNegatives(grid))
