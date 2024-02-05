/**
 * DP | Meomization  | Recursion
 * Time O(n) | Space O(n) | Withoug Memoization the time complexity is 2^n
 * https://leetcode.com/problems/solving-questions-with-brainpower/
 * @param {number[][]} questions
 * @return {number}
 */
var mostPoints = function(questions) {
    
    const cache = new Map();
    
    const dfs = (i) => {
        if(cache.has(i)) return cache.get(i);
        if(i >= questions.length) return 0;
        const currentMaxScore = Math.max(questions[i][0] + dfs(i+questions[i][1]+1), dfs(i+1)); 
        cache.set(i, currentMaxScore);
        return currentMaxScore;
    }

    return dfs(0);
};