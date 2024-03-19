/**
 * Sorting 
 * Time O(n*log(n)) | Space o(n)
 * https://leetcode.com/problems/verifying-an-alien-dictionary/
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function(words, order) {
    
    const wordPreceedent = {};
    for(let i = 0;  i < order.length; i++) {
        const char = order[i];
        wordPreceedent[char] = i;
    }


    const alianOrderWords = words.slice(0).sort((w1, w2) => {
        let i = 0;
        let j = 0;

        while(w1[i] && w2[j] && w1[i] === w2[j]) {
            i++;
            j++;
        }

        if(!w1[i]) return -1;
        if(!w2[j]) return 1;

        return wordPreceedent[w1[i]] - wordPreceedent[w2[j]];
    });

    for(let i  = 0; i < words.length; i++) {
        if(alianOrderWords[i] !== words[i]) return false;
    }

    return true;
};

/**
 * Brute Force
 * Time O(n*m) where n is number of words and m is len of word | Space O(1) or 26 because we're storing 26 letters.
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function(words, order) {
    
    const orderDict = {}

    order.split('').forEach((char, index) => {
        orderDict[char] = index;
    });

    for(let i = 0;  i < words.length - 1; i++) {
        const word1 = words[i];
        const word2 = words[i+1];

        for(let j = 0; j < word1.length; j++) {
            if(j === word2.length) return false;
            if(orderDict[word1[j]] > orderDict[word2[j]]) return false;
            if(orderDict[word1[j]] < orderDict[word2[j]]) break;
        }
    }

    return true;
};