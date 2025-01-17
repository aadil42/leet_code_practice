/**
 * Bit-manupilation
 * Time O(n) |  Space O(1)
 * https://leetcode.com/problems/neighboring-bitwise-xor/
 * @param {number[]} derived
 * @return {boolean}
 */
var doesValidArrayExist = function(derived) {
    return derived.reduce((acc, bit) => acc^bit, 0) === 0;
};

/**
 * 
 * Very easy you need to grasp the intuition
 * @param {number[]} derived
 * @return {boolean}
 */
var doesValidArrayExist1 = function(derived) {
    let ones = 0;
    derived.forEach((bit) => {
        if(bit) ones++;
    });
    
    if(!(ones%2) && !(derived.length % 2)) return true;
    if((ones%2) && !(derived.length % 2)) return false;
    if(!(ones%2) && (derived.length%2)) return true;
    if((ones%2) && (derived.length%2)) return false;
};