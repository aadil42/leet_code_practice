/**
 * Array | Two Pointers
 * Time O(n) | Space O(n)
 * https://leetcode.com/problems/merge-strings-alternately/
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    
    const word3 = [];
    
    let i = 0;
    let j = 0;
    let k = true;

    while(i < word1.length && j < word2.length) {
        if(k) {
            word3.push(word1[i]);
            i++;
            k = !k;
            continue;
        }    
        word3.push(word2[j]);
        j++;
        k = !k;
    }

    while(i < word1.length) {
        word3.push(word1[i]);
        i++;
    }
    while(j < word2.length) {
        word3.push(word2[j]);
        j++;
    }

    return word3.join("");
};
