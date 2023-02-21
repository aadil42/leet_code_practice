/**
 * Recursion
 * Time O(n*38) | Space O(n) 
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 */
var mincostTickets = function(days, costs) {
    const dp = {};
    costs[0] = [costs[0], 1];
    costs[1] = [costs[1], 7];
    costs[2] = [costs[2], 30];

    function dfs(index) {
        if(dp[index]) return dp[index];
        if(index === days.length) return 0;

        dp[index] = Infinity;
        for(let i = 0; i < costs.length; i++) {
            let j = index;
            while(j < days.length && days[j] < days[index] + costs[i][1]) {
                j++;
            }
           dp[index] = Math.min(dp[index], costs[i][0] + dfs(j));
        }
        return dp[index];
    }
    return dfs(0);
};