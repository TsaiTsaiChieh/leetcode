/**
 * @param {string} s
 * @return {number}
 */
const countAsterisks = function(s) {
    const barSplit = s.split('|')
    let count = 0

    for (let i = 0; i < barSplit.length; i++) {
        if (i % 2 === 0) {
            for (const char of barSplit[i]) {
                if (char === '*') count++
            }
        }
    }
    return count
}

// const s = 'l|*e*et|c**o|*de|' // 2
// const s = 'yo|uar|e**|b|e***au|tifu|l' // 5
const s = '|**|*|*|**||***||' // 6
console.log(countAsterisks(s))