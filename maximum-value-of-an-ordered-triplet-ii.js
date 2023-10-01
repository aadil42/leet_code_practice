/**
 * 
 * Prefix | Array
 * Time O(n) | Space O(n)
 * https://leetcode.com/problems/maximum-value-of-an-ordered-triplet-ii
 * 
 * @param {number[]} nums
 * @return {number}
 */
var maximumTripletValue = function(nums) {

    const preFix = [];
    let max = 0;

    for(let i = 0; i  < nums.length;  i++) {
        max = Math.max(max, nums[i]);
        preFix.push(max - nums[i]);
    }

    let postFix = []; 
    for(let i = nums.length - 1; i > -1; i--) {
        postFix.length ? postFix.push(Math.max(postFix[postFix.length - 1], nums[i])) : postFix.push(nums[i]);
    }
    postFix = postFix.reverse();  

    let maxVal = 0;
    for(let  i = 1; i < preFix.length; i++) {
        maxVal = Math.max(preFix[i] * (postFix[i+1] ? postFix[i+1]: 0), maxVal);
    }
    return maxVal;
};

/**
 * DP | Backtracking
 * Time O(2^n) | Space O(n)
 * 
 * @param {number[]} nums
 * @return {number}
 */
var maximumTripletValue1 = function(nums) {
    
    const calcVal = (arr) => {
        if((arr[0] - arr[1]) * arr[2] < 0) return 0;
        return (arr[0] - arr[1]) * arr[2];
    }
    
    
    const dfs = (arr, index) => {
        
        if(arr.length === 3) return calcVal(arr);
        if(index >= nums.length) return 0;
        
        arr.push(nums[index]);
        const choice1 = dfs(arr, index+1);
        arr.pop(); // backtrack
        const choice2 = dfs(arr, index+1);
        return Math.max(choice1, choice2);
    }
    
    return dfs([], 0);
    
};