/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    
    const dp = new Array(triangle[triangle.length - 1].length + 1).fill(0);
    
    for(let i = triangle.length - 1; i > -1; i--) {
        for(let j = 0; j < triangle[i].length; j++) {
            dp[j] = triangle[i][j] + Math.min(dp[j], dp[j+1]);
        }
    }
    
    return dp[0];
    };