/**
 * Monotonic Stack
 * Time O(n) | Space O(n)
 * https://leetcode.com/problems/daily-temperatures/
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    
    const stack = [];
    const warmerTempArr = [];

    for(let i = temperatures.length - 1; i > -1; i--) {
        
        while(stack.length && stack[stack.length - 1][0] <= temperatures[i])  {
            stack.pop();
        }

        if(!stack.length) {
            warmerTempArr.push(0);
        } else {
            warmerTempArr.push(stack[stack.length - 1][1] - i);
        }
        stack.push([temperatures[i], i]);
    }

    return warmerTempArr.reverse();
};

/**
 * Monotonic Stack
 * Time O(n) | Space O(n)
 * https://leetcode.com/problems/daily-temperatures/
 * 
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures0 = function(temperatures) {
    
    const mds = []; // monotonic decreasing stack
    const result = [0]; 
    mds.push([temperatures[temperatures.length - 1], temperatures.length - 1]);
    let i = temperatures.length - 2;

    while(i > -1) {
        while(mds.length && temperatures[i] >= mds[mds.length - 1][0]) mds.pop();
        if(!mds.length) {
            result.push(0);
            mds.push([temperatures[i], i]);
            i--;
            continue;
        }
        result.push(mds[mds.length-1][1] - i)
        mds.push([temperatures[i], i]);
        i--;
    }

    return result.reverse();
};

/**
 * Brute Force
 * Time O(n^2) | Space O(n)
 * https://leetcode.com/problems/daily-temperatures
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures1 = function(temperatures) {
    
    const result = [];
    for(let i = 0; i < temperatures.length; i++) {
        for(let j = i+1; j < temperatures.length; j++) {
            if(temperatures[i] < temperatures[j]) {
                result.push(j-i);
                break;
            }
        }
        if(result.length === i) result.push(0);
    }
    return result;
};