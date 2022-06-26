class Solution:
    def countAsterisks(self, s: str) -> int:
        bar_split = s.split("|")
        count = 0
    
        for i in range(0, len(bar_split), 2):
            count += bar_split[i].count("*")

        return count


s = '|**|*|*|**||***||'
print(Solution().countAsterisks(s))
