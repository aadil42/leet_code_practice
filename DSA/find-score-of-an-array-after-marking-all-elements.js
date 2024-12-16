/**
 * Priority Queue
 * Time O(n*log(n)) | Space O(n)
 * https://leetcode.com/problems/find-score-of-an-array-after-marking-all-elements
 * @param {number[]} nums
 * @return {number}
 */
var findScore = function(nums) {
    
    const minQ = new MinPriorityQueue({
        compare: (a,b) => {
            if(a[0] !== b[0]) return a[0] - b[0];
            return a[1] - b[1];
        }
    });

    for(let i = 0; i < nums.length; i++) {
        minQ.enqueue([nums[i], i]);
    }

    let score = 0;
    let visited = new Set();

    while(!minQ.isEmpty()) {
        const [min, idx] = minQ.dequeue();
        if(visited.has(idx)) continue;

        score += min;
        visited.add(idx);
        visited.add(idx+1);
        visited.add(idx-1);
    }

    return score;
};