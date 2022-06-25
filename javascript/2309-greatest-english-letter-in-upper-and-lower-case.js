/**
 * @param {string} s
 * @return {string}
 */
const greatestLetter = function(s) {
    const lowersCount = Array(26).fill(0)
    const uppersCount = Array(26).fill(0)
    let result = ''

    s.split('').forEach((char) => {
        if (char === char.toLowerCase()) {
            lowersCount[char.charCodeAt(0) - 97]++
        } else {
            uppersCount[char.charCodeAt(0) - 65]++
        }
    })

    lowersCount.forEach((ele, i) => {
        if (ele > 0 && uppersCount[i] > 0) {
            result = String.fromCharCode(i + 65)
        }
    })
    return result
}

const s = 'lEeTcOdE'
console.log(greatestLetter(s))