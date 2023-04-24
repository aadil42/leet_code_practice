/**
 * Time O(n) | Space O(1)
 * @param {number[]} rolls
 * @param {number} mean
 * @param {number} n
 * @return {number[]}
 */
var missingRolls = function(rolls, mean, n) {
    
    const nTotal = mean * (n + rolls.length) - rolls.reduce((acc, roll) => acc+roll,0);

    if(nTotal < n || nTotal > n*6) return [];

    const result = [];
    const eachRoll = Math.floor(nTotal/n)
    let remainder = nTotal % n;

    for(let i = 0; i < n; i++) {
        let extra = 0;
        if(remainder) {
            extra = 1;
            remainder--;
        }
        result.push(eachRoll+extra);
    }

    return result;
};