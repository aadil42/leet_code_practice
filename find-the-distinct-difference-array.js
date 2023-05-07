/**
 * Brute force 
 * 
 * Time O(n^2) | Space O(n);
 * @param {number[]} nums
 * @return {number[]}
 */
var distinctDifferenceArray = function(nums) {
    
        
    const distinctCount = (start, end) => {
        let count = 0;
        const unique = new Set();
        for(let i = start; i < end; i++) {
            if(unique.has(nums[i])) continue;
            unique.add(nums[i]);
            count++;
        }
        return count;
    }
    
    
    const diff = [];
    
    for(let i = 0; i < nums.length; i++) {
    const leftCount = distinctCount(0, i+1);
    const rightCount = distinctCount(i+1, nums.length);
    // console.log(leftCount, rightCount);
    diff.push(leftCount - rightCount);
    }
    
    return diff;
};