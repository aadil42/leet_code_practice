/**
 * Array | Iteration
 * Time O(n)  | Space O(1)
 *  https://leetcode.com/problems/minimum-amount-of-time-to-collect-garbage/
 * 
 * @param {string[]} garbage
 * @param {number[]} travel
 * @return {number}
 */
var garbageCollection = function(garbage, travel) {
    
    travel.unshift(0);
    let lastIndexOfP = 0;
    let lastIndexOfG = 0;
    let lastIndexOfM = 0;
    let time = 0;

    for(let i = 0; i < garbage.length;  i++) {
        if(garbage[i].includes("P")) lastIndexOfP = i;
        if(garbage[i].includes("G")) lastIndexOfG = i;
        if(garbage[i].includes("M")) lastIndexOfM = i;
    }

    // get paper garbage
    for(let i = 0;  i < lastIndexOfP + 1; i++) {
        if(travel[i]) time += travel[i];
        time += garbage[i].split('').filter((char) => char === "P").length;
    }

    // get glass garbage
    for(let i = 0;  i < lastIndexOfG + 1; i++) {
        if(travel[i]) time += travel[i];
        time += garbage[i].split('').filter((char) => char === "G").length;
    }

    // get metal garbage
    for(let i = 0;  i < lastIndexOfM + 1; i++) {
        if(travel[i]) time += travel[i];
        time += garbage[i].split('').filter((char) => char === "M").length;
    }

    return time;
};