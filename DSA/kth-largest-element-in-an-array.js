/**
 * MaxPriorityQueue
 * Time O(n*log(n)) | Space O(n)
 * https://leetcode.com/problems/kth-largest-element-in-an-array/
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    
    const maxQ = new MaxPriorityQueue({
        compare: (a,b) => {
            return b-a;
        }
    });
    
    for(let i = 0; i < nums.length; i++) {
        maxQ.enqueue(nums[i]);
    }

    while(k-1) {
        maxQ.dequeue();
        k--;
    }
    return maxQ.dequeue();
};

/**
 * Sorting
 * Time O(n*log(n)) | Space O(1)
 * https://leetcode.com/problems/kth-largest-element-in-an-array
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest0 = function(nums, k) {
    nums.sort((a,b) => b-a);
    return nums[k-1];
};