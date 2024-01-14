/**
 * Hashing | Counting
 * Time O(n) | Space O(1) because we won't exceed 26 for the size. Only lowercase english chars.
 * https://leetcode.com/problems/determine-if-two-strings-are-close
 * 
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function(word1, word2) {

    if(word1.length !== word2.length) return false;

    const word1Frequency = {};
    const word2Frequency = {};

    for(let i = 0; i < word1.length; i++) {
        word1Frequency[word1[i]] = (word1Frequency[word1[i]] && word1Frequency[word1[i]] + 1) || 1;
        word2Frequency[word2[i]] = (word2Frequency[word2[i]] && word2Frequency[word2[i]] + 1) || 1;
    }

    const swap = (key1, key2) => {
        const temp = word1Frequency[key1];
        word1Frequency[key1] = word1Frequency[key2];
        word1Frequency[key2] = temp;
    }

    console.log(word1Frequency, word2Frequency);
    for(const key1 in word1Frequency) {
        
        if(!word2Frequency[key1]) return false;
        for(const key2 in word1Frequency) {
            swap(key1, key2);
            if(word2Frequency[key1] === word1Frequency[key1]) {
                delete word2Frequency[key1];
                delete word1Frequency[key1];
                break;
            }
        }
    }

    return Object.keys(word2Frequency).length === 0;
};