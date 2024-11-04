/**
 * String | Array
 * Time O(n) | Space O(n)
 * https://leetcode.com/problems/string-compression-iii/
 * @param {string} word
 * @return {string}
 */
var compressedString = function(word) {
    
    let i = 0;
    const compStr = [];

    while(i < word.length) {
        let occ = 1;
        const char = word[i];

        while(i < word.length && occ < 9 && word[i] === word[i+1]) {
              occ++;
              i++;
        }

        compStr.push(occ+char);
        i++;
    }

    return compStr.join("");
};
