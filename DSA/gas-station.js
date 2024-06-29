/**
 * 
 * Greedy.
 * Time O(n) | Space O(1)
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {

    const totalGas = gas.reduce((pre,g) => {
        return pre + g;
    },0);

    const totalCost = cost.reduce((pre,c) => {
        return pre + c;
    },0);

    if(totalGas - totalCost < 0) return -1;

    const diff = gas.map((gasStation,i) => {
        return gasStation - cost[i];
    });

    let i = 0;
    let gasLevel = 0;
    let startingPos = 0;
    while(i < gas.length) {
        gasLevel += diff[i];
        if(gasLevel < 0){
            gasLevel = 0;
            startingPos = i + 1;
        } 
        i++;
    }

    return startingPos;
    // return (gasLevel > 0) ? startingPos : -1;  
    // return -1;
};


/**
 * Brute Force
 * Time O(n^2) | Space O(n);
 * https://leetcode.com/problems/gas-station/
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit0 = function(gas, cost) {

    // so you don't have to worry about remainders and all.
    const cycleGas = [...gas, ...gas];
    const cycleCost = [...cost, ...cost]; 

    const tryToCompleteFromIdx = (startingPos) => {
        let gasStatus = 0;
        let mySwitch = false;

        for(let i = startingPos; i <= startingPos + gas.length; i++) {
            if(gasStatus < 0 && mySwitch) return false;
            mySwitch = true;
            gasStatus += cycleGas[i];
            if(gasStatus < 0) return false;
            gasStatus -= cycleCost[i];
        }

        return true;
    }

    for(let i = 0; i < gas.length; i++) {
        const isPossible = tryToCompleteFromIdx(i);
        console.log(isPossible, i); 
        if(isPossible) return i;
    }
    return -1;
};
