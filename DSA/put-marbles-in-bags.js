/**
 * https://leetcode.com/problems/put-marbles-in-bags/
 * Time O(n) | Space O(n)
 * @param {number[]} weights
 * @param {number} k
 * @return {number}
 */
var putMarbles = function(weights, k) {
    if(weights.length === k) return 0;

    const pairCount = [];
    for(let i = 0; i < weights.length - 1; i++) {
        pairCount.push(weights[i] + weights[i+1]);
    }    

    pairCount.sort((a,b) => a-b);
    let maxScore = weights[0] + weights[weights.length - 1];
    let minScore = weights[0] + weights[weights.length - 1];

    for(let i = 0; i < k-1; i++) {
        minScore += pairCount[i];
        maxScore += pairCount[pairCount.length - i - 1]; 
    } 

    return maxScore - minScore;
};