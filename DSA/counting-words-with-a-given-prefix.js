/**
 * BruteForce 
 * Time O(n^2 * m) | Space O(n) | (m is max length of each word)
 * https://leetcode.com/problems/counting-words-with-a-given-prefix
 * @param {string[]} words
 * @param {string} pref
 * @return {number}
 */
var prefixCount = function(words, pref) {
    
    let count = 0;
    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        if (isPrefix(pref, word)) count++; 
    }

    return count;
};

const isPrefix = (pref, word) => {

    let i = 0;
    while (i < pref.length) {
        if (pref[i] !==  word[i]) return false;
        i++;
    }

    return true;
}