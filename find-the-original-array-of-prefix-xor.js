/**
 * Bitwise operator
 * Time O(n) | Space O(1)
 * https://leetcode.com/problems/find-the-original-array-of-prefix-xor
 * @param {number[]} pref
 * @return {number[]}
 */
var findArray = function(pref) {
    
    // to understnd this solution understand the below.
    // (a^x = b) === (a^b = x) both equations are same. That is the gist of the problem.

    // const result = [];
    let current = 0;
    for(let i = 0; i < pref.length; i++) {
        const currentNumber = current;
        current = pref[i];
        pref[i] = pref[i] ^ currentNumber;
    }

    return pref;
};

/**
 * Bitwise operator
 * Time O(n) | Space O(n)
 * @param {number[]} pref
 * @return {number[]}
 */
var findArray = function(pref) {
    
    const result = [pref[0]];

    for(let i = 1; i < pref.length; i++) {
        result.push(pref[i-1] ^ pref[i]);
    }

    return result;
};