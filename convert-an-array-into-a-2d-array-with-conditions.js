/**
 * Hashing 
 * Time O(n) | Space O(n)
 * https://leetcode.com/problems/convert-an-array-into-a-2d-array-with-conditions/
 * 
 * @param {number[]} nums
 * @return {number[][]}
 */
var findMatrix = function(nums) {
    
    const twoDArray = [];
    const numFrequency = new Map();

    for(let i = 0; i < nums.length; i++) {
        const num = nums[i];
        numFrequency.set(num, (numFrequency.get(num) && numFrequency.get(num) + 1) || 1);
    }

    while(numFrequency.size) {
        const currArr = [];
        for(const key of numFrequency.keys()) {
            currArr.push(key);
            numFrequency.set(key, numFrequency.get(key) - 1);
            if(!numFrequency.get(key)) {
                numFrequency.delete(key);
            }
        }
        twoDArray.push(currArr);
    }

    return twoDArray;
};

/**
 * Brute Force | Hash
 * Time O(n^2) | Space O(n)
 * https://leetcode.com/problems/convert-an-array-into-a-2d-array-with-conditions/
 * 
 * @param {number[]} nums
 * @return {number[][]}
 */
var findMatrix1 = function(nums) {
    
    const twoDArray = [];

    for(let i = 0; i < nums.length; i++) {
        const mySet = new Set();

        for(let  j = i; j < nums.length; j++) {
            if(nums[j] === "#") continue;
            if(!mySet.has(nums[j])) {
                mySet.add(nums[j]);
                nums[j] = "#";
            }
        }

        mySet.size && twoDArray.push([...mySet]);
    }

    return twoDArray;
};