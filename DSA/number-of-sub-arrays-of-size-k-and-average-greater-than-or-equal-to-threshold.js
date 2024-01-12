/**
 * Brute Force
 * 
 * Time O(n*k) | Space O(1)
 * @param {number[]} arr
 * @param {number} k
 * @param {number} threshold
 * @return {number}
 */
var numOfSubarraysBrute = function(arr, k, threshold) {
    
    let left = 0;
    let right = k - 1;

    let result = 0;

    const calcAvg = (arr) => {
        return arr.reduce((acc, curr) => {
            return acc+curr;
        }, 0)/arr.length;
    } 


    while(right < arr.length) {
        if(calcAvg(arr.slice(left, right + 1)) >= threshold) result++;
        right++;
        left++;
    }
    return result;
};

/**
 * Linear Time
 * 
 * Time O(n) | Space O(1)
 * @param {number[]} arr
 * @param {number} k
 * @param {number} threshold
 * @return {number}
 */
var numOfSubarrays = function(arr, k, threshold) {

    let left = 0;
    let right = k - 1;
    let currentTotal = arr.slice(left, right + 1).reduce((acc, curr) => acc + curr);
    let result = 0;
    while(right < arr.length) {
        if(currentTotal/k >= threshold) result++;
        currentTotal = currentTotal - arr[left]
        left++;
        right++;
        currentTotal = currentTotal + arr[right];
    }

    return result;
};