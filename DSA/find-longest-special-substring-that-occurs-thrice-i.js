/**
 * Array | Logic | Counting
 * Time O(n) (Actually it's n*26 but 26 is constant so O(n)) | Space O(1)
 * https://leetcode.com/problems/find-longest-special-substring-that-occurs-thrice-i
 * @param {string} s
 * @return {number}
 */
var maximumLength = function(s) {
    
    const countSubArray = (char, len) => {
        let count = 0;
        let i = 0;
        while(i < s.length) {
            if(s[i] === char) {
                let j = i;
                while(j < s.length && j < i + len && s[j] ===  s[i]) {
                    j++;
                }
                if(j-i === len) count++;
            }
            i++;
        }
        return count;
    }

    let max = 0;
    for(let i = 0; i < 26; i++) {
        const char = String.fromCharCode(97+i);
        for(let j = 1; j < s.length+1; j++) {
            const subArrCount = countSubArray(char, j);
            if(subArrCount >= 3) {
                max = Math.max(max, j);
            }
        }
    }

    if(max === 0) return -1;
    return max;
};