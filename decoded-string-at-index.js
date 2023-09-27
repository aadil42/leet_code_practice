/**
 * String
 * Time O(n) | Space O(1)
 * https://leetcode.com/problems/decoded-string-at-index/
 * 
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var decodeAtIndex = function(s, k) {
    
    let total = 0;

    for(let i = 0; i < s.length; i++) {
        if(!isNaN(s[i])) {
            total = total * +s[i];
            continue;
        }
        total++;
    }

    for(let i = s.length - 1; i > -1; i--) {
        k = k%total;
        if(k === 0 && isNaN(s[i])) return s[i];

        if(!isNaN(s[i])) {
            total = Math.ceil(total / +s[i]);
            continue;
        }
        total -= 1;
    }
    return "";
};


/**
 * Brute Force
 * Time O(9^n) | Space O(9^n)
 * https://leetcode.com/problems/decoded-string-at-index/)
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var decodeAtIndex1 = function(s, k) {
    
    if(k===1) return s[0];
    let result = "";
    for(let i = 0; i < s.length; i++) {
        if(s[i].charCodeAt(0) > 49 && s[i].charCodeAt(0) < 58) {
            // it means there's a digit between 2 to 9
            const digit = s[i];
            console.log(digit);
            result = result.repeat(+digit);
            continue;
        }
        result += s[i];
    }
    console.log(result);
    return result[k-1];
};