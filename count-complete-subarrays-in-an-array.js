/**
 * 
 * Sliding Window
 * https://leetcode.com/problems/count-complete-subarrays-in-an-array/
 * 
 * Time O(n^2) | Space O(n)
 * @param {number[]} nums
 * @return {number}
 */
var countCompleteSubarrays = function(nums) {

    const numHash = new Map();
    nums.forEach((num) => {
        const current = numHash.get(num);
        if(numHash.has(num)) numHash.set(num, current+1);
        else numHash.set(num, 1);
    });
    
    const isValid = (start, end) => {
        const unique = numHash.size;
        let uniqueFound = new Set();
        for(let i = start; i < end + 1; i++) {
            if(numHash.get(nums[i]) > 0) uniqueFound.add(nums[i]);
        }
        return uniqueFound.size >= unique;
    }
    
    let left = 0;
    let right = 0;
    let completeArr = 0;
    
    while(right < nums.length) {
        if(isValid(left, right)) {
            completeArr += 1 + (nums.length - (right + 1));
            const current = numHash.get(nums[left]);
            numHash.set(nums[left], current-1);
            left += 1;
            if(left > right) right = left;
        } else {
            right += 1;
        }
    }
    
    return completeArr;
};