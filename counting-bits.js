/**
 * 
 * https://leetcode.com/problems/counting-bits/
 * Time O(n*log(n)) | Space O(1)
 * @param {number} n
 * @return {number[]}
 */

var countBits = function(n) {
    
    if(!n) return [0];
    
    const result = [];
    result.push(0);
    
    for(let i = 1; i <= n; i++) {
        result.push(countBit(i));
    }
    
    return result;
};

function countBit(number) {
    
    let count = 0;
    while(number > 0) {
        if(number % 2) {
            count++
        }
        number = Math.floor(number/2);
    }
    return count;
}

/**
 * https://leetcode.com/problems/counting-bits/
 * Brute Force
 * 
 * Time O(n*17) | Space O(n) | 17 because (n) won't exceed 10^5 and we don't require more than 17 bit for 10^5
 * @param {number} n
 * @return {number[]}
 */

// constant time O(1)
const countBitInNumber = (number) => {
    return number.toString(2).split('').filter((bit) => bit === '1').length;
}

// linear time O(n)
var countBits = function(n) {
    if(!n) return [0];
    const bits = [0];

    for(let i = 1;  i < n+1; i++) {
        bits.push(countBitInNumber(i));
    }

    return bits;
};

