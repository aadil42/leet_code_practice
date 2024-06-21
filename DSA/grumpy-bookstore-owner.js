/**
 * Sliding Window
 * Time O(n) | Space O(1)
 * https://leetcode.com/problems/grumpy-bookstore-owner/
 * @param {number[]} customers
 * @param {number[]} grumpy
 * @param {number} minutes
 * @return {number}
 */
var maxSatisfied = function(customers, grumpy, minutes) {
    
    let maxWhenNotGrumpy = 0;
    
    for(let i = 0; i < customers.length; i++) {
        if(!grumpy[i]) {
            maxWhenNotGrumpy += customers[i];
        }
    }

    let runningTotal = 0;
    
    for(let i = 0; i < minutes; i++) {
        if(grumpy[i]) {
            runningTotal += customers[i];
        }
    }

    let left = 0;
    let right = minutes - 1;
    let finalMax = maxWhenNotGrumpy;

    while(right < customers.length) {
        
        finalMax = Math.max(finalMax, maxWhenNotGrumpy + runningTotal);
        if(grumpy[left]) {
            runningTotal -= customers[left];
        }
        left++;
        right++;
        if(grumpy[right]) {
            runningTotal += customers[right];
        }
    }

    return finalMax;
};