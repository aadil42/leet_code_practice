/**
 * Hashing | Counting | Greedy 
 * Time O(n) | Space O(1) 
 * https://leetcode.com/problems/partition-labels/
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function(s) {
    
    const lastPosOfAlphabets = {};
    for(let i = 0; i < 26; i++) {
        const char = String.fromCharCode(i+97);
        lastPosOfAlphabets[char] = 0;
    }


    for(let i = 0; i < s.length; i++) {
        const char = s[i];
        lastPosOfAlphabets[char] = Math.max(lastPosOfAlphabets[char], i);
    }

    const result = [];

    let i = 0;
    while(i < s.length) {

        let currCount = 1;
        let maxCharPosition = lastPosOfAlphabets[s[i]];

        while(i < s.length && i < maxCharPosition) {
            maxCharPosition = Math.max(maxCharPosition, lastPosOfAlphabets[s[i]]);
            i++;
            currCount++;
        }

        result.push(currCount);
        i++;
    }

    return result;
};

/**
 * 
 * Time O(n) | Space O(n);
 * @param {string} s
 * @return {number[]}
 */


var partitionLabels0 = function(s) {
    
    s = s.split('');

    const hash = new Map();

    for(let i = 0; i < s.length; i++) {
        hash.set(s[i], i);
    }

    const result = [];
    let start = 0;
    let end = hash.get(s[start]);

    for(let i = 0; i < s.length; i++) {
        end = Math.max(hash.get(s[i]), end);
        if(i === end) {
            result.push(end - start + 1);
            start = end+1;
            end = hash.get(s[start]);
        }
    }

    return result;
};