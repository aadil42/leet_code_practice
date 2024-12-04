/**
 * Two Pointer | Logic
 * Time O(n) | Space O(1)
 * https://leetcode.com/problems/make-string-a-subsequence-using-cyclic-increments/
 * @param {string} str1
 * @param {string} str2
 * @return {boolean}
 */
var canMakeSubsequence = function(str1, str2) {
    
    let pointer1 = 0;
    let pointer2 = 0;

    while(pointer1 < str1.length && pointer2 < str2.length) {

        if(str1[pointer1] === str2[pointer2]) {
            pointer1++;
            pointer2++;
            continue;
        }

        const str1Char = str1[pointer1];
        const str1CharNum = str1Char.charCodeAt(0);

        let nextCharNum = str1CharNum + 1;
        if(nextCharNum === 123) {
            nextCharNum = 97;
        }

        const str1NextChar = String.fromCharCode(nextCharNum);
        if(str1NextChar === str2[pointer2]) {
            pointer1++;
            pointer2++;
            continue;
        }

        pointer1++;
    }


    return pointer2 === str2.length;
};