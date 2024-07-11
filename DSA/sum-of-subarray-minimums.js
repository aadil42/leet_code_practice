/**
 * Monotonic Stack | Math
 * Time O(n) | Space O(n)
 * @param {number[]} arr
 * @return {number}
 */
var sumSubarrayMins = function(arr) {

    let stack = [];
    const leftSmallerIdx = [];
    const rightSmallerIdx = [];
    for(let i = 0; i < arr.length; i++) {
        
        while(stack.length && arr[stack[stack.length - 1]] >= arr[i]) {
            stack.pop();
        }

        if(!stack.length) {
            leftSmallerIdx.push(-1);
        } else {
            leftSmallerIdx.push(stack[stack.length - 1]);
        }
        stack.push(i);
    }

    stack = [];
    for(let i = arr.length - 1; i > -1; i--) {
        while(stack.length && arr[stack[stack.length - 1]] > arr[i]) {
            stack.pop();
        }

        if(!stack.length) {
            rightSmallerIdx.push(arr.length);
        } else {
            rightSmallerIdx.push(stack[stack.length - 1]);
        }
        stack.push(i);
    }
    rightSmallerIdx.reverse();

    const mod = 10**9 + 7;
    let totalMins = 0;    
    
    for(let i = 0; i < arr.length; i++) {
        const leftLimit = i-leftSmallerIdx[i];
        const rightLimit = rightSmallerIdx[i]-i;

        totalMins = (totalMins + leftLimit * rightLimit * arr[i]) % mod;
    }

    return totalMins;
};