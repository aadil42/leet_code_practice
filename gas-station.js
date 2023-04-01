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

