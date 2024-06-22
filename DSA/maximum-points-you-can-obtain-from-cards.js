/**
 * Greedy | Sliding Window | PrefixSum 
 * Time O(n) | Space O(1)
 * https://leetcode.com/problems/maximum-points-you-can-obtain-from-cards/
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
var maxScore = function(cardPoints, k) {
    
    const total = cardPoints.reduce((acc, curr) => acc+curr, 0);
    let currTotal = cardPoints.slice(0, cardPoints.length - k).reduce((acc, curr) => acc+curr, 0);
    let max = total - currTotal;
    
    let left = 0;
    let right = cardPoints.length - k - 1; // -1 because the array is 0 indexed.

    while(right < cardPoints.length) {
        currTotal -= cardPoints[left];
        left++;
        right++;
        if(right < cardPoints.length) {
            currTotal += cardPoints[right];
            max = Math.max(max, total - currTotal);
        }
    }

    return max;
};

/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */

// brute force with recursion O(n^2)
var maxScore1 = function(cardPoints, k) {
    
    function dfs(start, end, level) {
        if(level === k) return 0;
        
        return  Math.max(dfs(start + 1, end, level+1) + cardPoints[start], 
                        dfs(start, end - 1, level+1) + cardPoints[end]);             
    }

    return dfs(0, cardPoints.length - 1, 0);
};


/**
 * Greedy
 * Time O(n) | Space O(1);
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
var maxScore0 = function(cardPoints, k) {
    
    let currentSum = 0;
    let maxSum = 0;
  
    windowStart = 0;
    windowEnd = cardPoints.length - k - 1;
  
    // calculating initial sum
    for(let i = windowEnd + 1; i < cardPoints.length; i++) {
        currentSum += cardPoints[i];
    }
  
  
    while(windowEnd < cardPoints.length) {     
        maxSum = Math.max(maxSum, currentSum);
        currentSum = currentSum + cardPoints[windowStart] - cardPoints[windowEnd + 1];
        windowStart++;
        windowEnd++;
    }
  
    return maxSum;
  };