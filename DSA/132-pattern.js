/**
 * 
 * Brute force
 * 
 * Time O(n^3) | Space O(1)
 * @param {number[]} nums
 * @return {boolean}
 */
var find132pattern = function(nums) {
    
    for(let i = 0; i < nums.length;  i++) {
        for(let j = i+1; j < nums.length; j++) {
            for(let k = j+1; k < nums.length; k++) {
                if(check(i,j,k)) return true;
            }
        }
    }
    
    function check(i,j,k) {
        if(nums[k] > nums[i] && nums[j] > nums[k]) return true;
        return false;
    }

    return false;
};

// efficient 
/**
 * 
 * Monotonically decreasing / it's not intutive at all
 * Time O(n) | Space O(n)
 * @param {number[]} nums
 * @return {boolean}
 */
var find132pattern = function(nums) {

    const stack = []; // monotonically decreasing 
    let max2 = -Infinity;

    for(let i = nums.length - 1; i >= 0; i--) {
        if(nums[i] < max2) {
            return true;
        }
        while(stack.length && nums[i] > stack[stack.length - 1]) {
            max2 = stack.pop();
        }
        stack.push(nums[i]);
    }

    return false;
};