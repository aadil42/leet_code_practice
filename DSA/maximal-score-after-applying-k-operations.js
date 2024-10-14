/**
 * Priority Queue
 * Time O(k*log(n)) | Space O(n)
 * https://leetcode.com/problems/maximal-score-after-applying-k-operations
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxKelements = function(nums, k) {
    
    const maxQ  = new MaxPriorityQueue({
        compare: (a,b) => {
            return b-a;
        }
    });

    // fill the priorityQueue
    nums.forEach((num) => maxQ.enqueue(num));

    let score = 0;

    while(k) {
        const currScore = maxQ.dequeue();
        score += currScore;
        maxQ.enqueue(Math.ceil(currScore/3));
        k--;
    }

    return score;
};