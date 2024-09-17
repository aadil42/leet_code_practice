/**
 * Hashing 
 * Time O(n) | Space O(1)
 * https://leetcode.com/problems/uncommon-words-from-two-sentences
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function(s1, s2) {
    
    const s1Map = {};
    const s2Map = {};
    s1 = s1.split(" ");
    s2 = s2.split(" ");

    s1.forEach((word) => {
        s1Map[word] = (s1Map[word] && s1Map[word] + 1) || 1;
    });
    s2.forEach((word) => {
        s2Map[word] = (s2Map[word] && s2Map[word] + 1) || 1;
    });    

    const uncommonWords = []

    for(const key in s1Map) {
        if(s1Map[key] === 1 && !s2Map[key]) uncommonWords.push(key);
    }
    for(const key in s2Map) {
        if(s2Map[key] === 1 && !s1Map[key]) uncommonWords.push(key);
    }

    return uncommonWords;
};