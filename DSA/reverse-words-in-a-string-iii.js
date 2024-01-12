/**
 * Itrating
 * Time O(n) | Space O(n)
 * https://leetcode.com/problems/reverse-words-in-a-string-iii
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {

    const wordArr = s.split(' ');

    let i = 0;
    while(i < wordArr.length) {
        let word = wordArr[i];
        word = word.split('').reverse().join('');
        wordArr[i] = word;    
        i++;
    }

    return wordArr.join(' ');
};