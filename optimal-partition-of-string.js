/**
 * Hashing
 * Time O(n) | Space O(1);
 * https://leetcode.com/problems/optimal-partition-of-string/
 * @param {string} s
 * @return {number}
 */
var partitionString = function(s) {
    
    const unique = new Set();
    let i = 0;

    let subStrings = 0;
    while(i < s.length) {
        if(unique.has(s[i])) {
            subStrings++;
            unique.clear();
        }
        unique.add(s[i]);
        i++;
    }
    return subStrings+1;
};