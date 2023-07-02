/**
 * https://leetcode.com/problems/find-k-pairs-with-smallest-sums/
 * Pirority Queue
 * 
 * Time (n*log(n)) | Space O(1)
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
var kSmallestPairs = function(nums1, nums2, k) {

    const pq = new MinPriorityQueue({
        compare: (e1, e2) => {
            // if(e1[1] === e2[1]) return e1[2] - e2[2];
            return e1[0] - e2[0];
        }
    });

    const visited = new Set();

    pq.enqueue([nums1[0] + nums2[0], 0, 0]);
    visited.add('0-0');
    const ans = [];
    while(k > 0 && !pq.isEmpty()) {

        const popped = pq.dequeue();
        const i = popped[1];
        const j = popped[2];
        ans.push([nums1[i], nums2[j]]);
        
        if(!visited.has(`${i}-${j+1}`) && j+1 < nums2.length) pq.enqueue([nums1[i] + nums2[j+1], i, j+1]);
        visited.add(`${i}-${j+1}`);
        if(!visited.has(`${i+1}-${j}`) && i+1 < nums1.length) pq.enqueue([nums1[i+1] + nums2[j], i+1, j]);
        visited.add(`${i+1}-${j}`);
        k--;
    }

    return ans;
};


/**
 * 
 * Brute force
 * 
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
var kSmallestPairs1 = function(nums1, nums2, k) {
    
    const pairs = [];

    for(let i = 0; i < nums1.length; i++) {
        for(let j = 0; j < nums2.length; j++) {
            pairs.push([nums1[i], nums2[j]]);
        }
    }

    pairs.sort((a,b) => {
        return (a[0] + a[1]) - (b[0] + b[1]);
    });

    return pairs.splice(0, k);
};