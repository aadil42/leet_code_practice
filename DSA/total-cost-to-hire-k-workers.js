/**
 * Priority Queue
 * https://leetcode.com/problems/total-cost-to-hire-k-workers/
 * 
 * c = number of candidates 
 * Time O(k*log(c)) | Space O(2*c)
 * @param {number[]} costs
 * @param {number} k
 * @param {number} candidates
 * @return {number}
 */
var totalCost = function(costs, k, candidates) {
    if(costs.length === 1) return costs[0];
    const leftQueue = new MinPriorityQueue();
    const rightQueue = new  MinPriorityQueue();
// [1,2,4,1], k = 3

    const leftEnd = candidates;
    let left = 0;
    while(left < leftEnd) {
        leftQueue.enqueue(costs[left]);
        left++;
    }
    let right = costs.length - 1;
    while(right >= left && right > (costs.length - candidates - 1)) {
        rightQueue.enqueue(costs[right]);
        right--;
    }

    let total = 0;
    while(k > 0) {
        const leftSmall = (leftQueue.front() && leftQueue.front().element) || Infinity;
        const rightSmall = (rightQueue.front() && rightQueue.front().element) || Infinity;
        console.log(leftSmall, rightSmall);
        if(leftSmall <= rightSmall) {
            // console.log(leftQueue.front());
            if(leftSmall !== Infinity) {
                total += leftSmall;
            }
            leftQueue.dequeue();
            if(left <= right) {
                leftQueue.enqueue(costs[left]);
                left++;
            }
        } else {
            // console.log(rightQueue.front());
            if(rightSmall !== Infinity) {
                total += rightSmall;
            }
            rightQueue.dequeue();
            if(left <= right) {
                rightQueue.enqueue(costs[right]);
                right--;
            }
        } 
        k--;
    }
    return total;
};