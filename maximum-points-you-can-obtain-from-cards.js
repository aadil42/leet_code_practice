/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */

// brute force with recursion O(n^2)
var maxScore = function(cardPoints, k) {
    
    function dfs(start, end, level) {
        if(level === k) return 0;
        
        return  Math.max(dfs(start + 1, end, level+1) + cardPoints[start], 
                        dfs(start, end - 1, level+1) + cardPoints[end]);             
    }

    return dfs(0, cardPoints.length - 1, 0);
};