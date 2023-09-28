/**
 * Two Pointers
 * Time O(n) | Space O(1)
 * https://leetcode.com/problems/sort-array-by-parity
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
    
    let left = 0;
    let right = nums.length - 1;

    const swap = (a,b) => {
        const temp = nums[a];
        nums[a] = nums[b];
        nums[b] = temp;
    }

    // check if all are even
    const isOdd = nums.filter((num) => {
        return num%2 === 1;
    });
    if(isOdd.length === 0) return nums;
    const isEven = nums.filter((num) => {
        return num%2 === 0;
    });
    if(isEven.length === 0) return nums;

    while(left < right) {
        while(left < nums.length && !(nums[left]%2)) {
            left++;
        }
        while(right > -1 && nums[right]%2) {
            right--;
        }
        if(left < right) swap(left,right);
        left++;
        right--;
    }

    return nums;
};