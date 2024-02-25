/**
 * Binary Search
 * Time O(n*log(n)) | Space O(1)
 * https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
var shipWithinDays = function(weights, days) {
    
    
    const daysTaken = (capacity) => {

        let d = 0;
        let i = 0;

        while(i < weights.length) {
            let currTotal = 0;
            while(currTotal + weights[i] < capacity) {
                currTotal += weights[i];
                i++;
            }
            if(currTotal + weights[i] === capacity) {
                i++;
            }
            d++;
        }

        return d;

    }

    let min = Math.max(...weights);
    let max = weights.reduce((acc, curr) => {
        return acc+curr;
    }, 0);

    let minCapacity = Infinity;

    while(min <= max) {

        const mid = min + Math.floor((max-min)/2);
        
        const tookDays = daysTaken(mid);

        if(tookDays <= days) {
            minCapacity = Math.min(minCapacity, mid);
            max = mid - 1;    
        } else {
            min = mid + 1;
        }
    }

    return minCapacity;
};