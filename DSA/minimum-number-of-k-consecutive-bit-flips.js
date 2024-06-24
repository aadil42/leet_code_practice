/**
 * Queue 
 * Time O(n) | Space O(k)
 * https://leetcode.com/problems/minimum-number-of-k-consecutive-bit-flips/
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minKBitFlips = function(nums, k) {
    
    const queue = new Queue();

    // to find out methods name.
    // console.log(Object.getOwnPropertyNames(Object.getPrototypeOf(queue)));

    let flips = 0;
    for(let i = 0; i < nums.length; i++) {
        while(!queue.isEmpty() && i > queue.front() + k - 1) queue.dequeue();

        if((queue.size() + nums[i]) % 2 === 0) {
            if(i + k > nums.length) return -1; // bit tricky to understand.
            flips += 1;
            queue.enqueue(i);
        }
    }

    return flips;
};