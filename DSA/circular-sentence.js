/**
 * String | Array
 * Time O(n) | Space O(n)
 * https://leetcode.com/problems/circular-sentence
 * @param {string} sentence
 * @return {boolean}
 */
var isCircularSentence = function(sentence) {
    
    sentence = sentence.split(" ");
    const firstWord = sentence[0];
    const lastWord = sentence[sentence.length - 1];

    if (firstWord[0] !== lastWord[lastWord.length - 1]) return false;

    for (let i = 1; i < sentence.length; i++) {
        const pre = sentence[i - 1];
        const curr = sentence[i];

        if (pre[pre.length - 1] !== curr[0]) return false;
    }

    return true;
};