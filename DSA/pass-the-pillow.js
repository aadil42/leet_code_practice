/**
 * Brute force
 * Time O(n) | Space O(1);
 * @param {number} n
 * @param {number} time
 * @return {number}
 */
var passThePillow = function(n, time) { 

    let i = 1;
    let plusMinus = 1;

    while(time) {
        if(i === n) {
            plusMinus = -1;
        }
        if(i === 1) {
            plusMinus = 1;
        }
        i += plusMinus;
        time--;
    }

    return i;
};