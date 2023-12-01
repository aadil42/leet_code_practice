/**
 * Iteration | pointers
 * Time O(n) | Space O(1)
 * https://leetcode.com/problems/check-if-two-string-arrays-are-equivalent/
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function(word1, word2) {
    // return word1.join('') === word2.join('');
    
    let pointer1 = 0;
    let subPointer1 = 0;
    let pointer2 = 0;
    let subPointer2 = 0;
    let globlePointer = 0;

    const word1Len = word1.reduce((acc, curr) => acc+curr.length, 0);
    const word2Len = word2.reduce((acc, curr) => acc+curr.length, 0);

    if(word1Len !== word2Len) return false;
    
    while(globlePointer < word1Len) {
        if(!word1[pointer1][subPointer1]) {
            subPointer1 = 0;
            pointer1++;
        }
        if(!word2[pointer2][subPointer2]) {
            subPointer2 = 0;
            pointer2++;
        }
        if(word1[pointer1][subPointer1] !== word2[pointer2][subPointer2]) return false;
        subPointer1++;
        subPointer2++;
        globlePointer++;
    }

    return true;
};