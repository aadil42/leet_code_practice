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

/**
 * Time O(n) | Space O(1)
 * Math | Simulation | Array
 * https://leetcode.com/problems/find-missing-observations/
 * @param {number[]} rolls
 * @param {number} mean
 * @param {number} n
 * @return {number[]}
 */
var missingRolls1 = function(rolls, mean, n) {
    const m = rolls.length;
    const mTotal = rolls.reduce((acc,curr) => acc+curr, 0);
    const totalOfMissingObservation = (mean * (m+n)) - mTotal;
    let remainder = totalOfMissingObservation % n
    const divisions = Math.floor(totalOfMissingObservation/n);

    if(divisions > 6) return []; 
    if(divisions < 1) return [];

    const missingObservationArr = [];
    
    for(let i = 0; i < n; i++) {
        missingObservationArr.push(divisions);
    }

    let i = 0;
    while(remainder) {
        if(missingObservationArr[i] + 1 > 6) return [];
        missingObservationArr[i] += 1;
        i++;
        remainder--;
    }

    return missingObservationArr;
};