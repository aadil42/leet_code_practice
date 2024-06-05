/**
 * Array
 * Time O(n^3) | Space O(n^2) 
 * https://leetcode.com/problems/find-common-characters
 * 
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function(words) {
    
    const result = [];
    const wordsArr = [];

    for(let i = 0; i < words.length; i++) {
        wordsArr.push(words[i].split(""));
    }

    for(let i = 0; i < words[0].length; i++) {
        const char = words[0][i];
        let hasChar = true;

        for(let j = 1; j < wordsArr.length; j++) {
            const word = wordsArr[j];
            if(!word.includes(char)) {
                hasChar = false;
                break;
            };
        }

        if(hasChar) {
            for(let j = 1;  j < wordsArr.length; j++) {
                word = wordsArr[j];
                const idx = word.indexOf(char);
                word[idx] = "#";
            }
            result.push(char);
        }
    }

    return result;
};