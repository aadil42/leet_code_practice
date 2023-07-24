/**
 * 
 * Time O(n) | Space O(n)
 * @param {number[]} nums
 * @return {number}
 */
var maxArrayValue = function(nums) {
    
    const findLargest = (index) => {
        let ans = nums[index];
        for(let i = index; i < nums.length -1;  i++) {
            if(nums[i] <= nums[i+1]) {
                ans += nums[i+1];
                continue;
            };
            const rightSideAns = findLargest(i+1);
            if(rightSideAns >= nums[i]) {
                ans += rightSideAns;
            };
            break;
        }
        return ans;
    }

    return findLargest(0);
};