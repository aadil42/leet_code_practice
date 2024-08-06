/**
 * Hashing | Couting | Sorting
 * Time O(1) | Space O(1) | Constant Time/Space Because there are only 26 letters in alphabet in worst case we're sorting 26 and storing 26 chars
 * https://leetcode.com/problems/minimum-number-of-pushes-to-type-word-ii/
 * @param {string} word
 * @return {number}
 */
var minimumPushes = function(word) {
    
    if(new Set(word.split("")).size <= 8 ) return word.length;

    const freq = {};
    for(let i = 0; i < word.length; i++) {
        const char = word[i];
        freq[char] = (freq[char] && freq[char] + 1) || 1;
    }

    const freqArr = [];
    for(const key in freq) {
        freqArr.push([freq[key], key]);
    }
    
    freqArr.sort((a,b) => b[0]-a[0]);

    let minPushes = 0;
    for(let i = 0; i < freqArr.length; i++) {
        const [count, char] = freqArr[i];
        minPushes += (Math.ceil((i+1)/8) * count);
    }

    return minPushes;
};