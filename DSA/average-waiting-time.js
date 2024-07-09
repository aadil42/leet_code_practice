/**
 * Time O(n) | Space O(1)
 * Array | Math | Simulation
 * https://leetcode.com/problems/average-waiting-time
 * @param {number[][]} customers
 * @return {number}
 */
var averageWaitingTime = function(customers) {
    
    let startPreperationTime = customers[0][0];
    let totalWaiting = 0;
    for(let i = 0; i < customers.length; i++) {
        
        const takenTime = customers[i][1];
        totalWaiting += (startPreperationTime + takenTime) - customers[i][0];
        startPreperationTime = Math.max(startPreperationTime + takenTime, 
                                        ((customers[i+1] && customers[i+1][0]) || 0) 
                                        );
    }

    return totalWaiting/customers.length;
};