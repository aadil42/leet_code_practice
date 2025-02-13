/**
 * Priority Queue
 * Time O(n*log(n)) | Space O(n)
 * https://leetcode.com/problems/minimum-operations-to-exceed-threshold-value-ii/
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function(nums, k) {
    
    const minQ = new MinPriorityQueue({
        compare: (a, b) => Number(a - b) // Convert BigInt to Number for comparison
    });

    for (let i = 0; i < nums.length; i++) {
        minQ.enqueue(BigInt(nums[i])); // Convert to BigInt
    }
    
    let minOperation = 0;
    k = BigInt(k); // Convert k to BigInt

    while (minQ.size() > 1) {
        
        const min = minQ.dequeue();
        const min1 = minQ.dequeue();

        if (min >= k && min1 >= k) break;
        
        const newVal = min * 2n + min1; // Use BigInt multiplication
        minQ.enqueue(newVal); // Fix: Enqueue instead of dequeue
        minOperation++;
    }

    return minOperation;
};
