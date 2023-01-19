/**
 * Time O(n) | Space O(1)
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    
    let slow = 0, fast = 0;

    do {
        slow = nums[slow];
        fast = nums[nums[fast]];
    }while(slow !== fast);

    let slow1 = 0;

    while(slow !== slow1) {
        slow1 = nums[slow1];
        slow = nums[slow];
    }

    return slow;
};