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

/**
 * Recursion | DP | Memoization
 * Time o(n^2) | Space O(n^2)
 * https://leetcode.com/problems/minimum-cost-for-tickets/
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 */
var mincostTickets1 = function(days, costs) {
    
    days.sort((a,b) => a-b);

    costs[0] = [costs[0], 1];
    costs[1] = [costs[1], 7];
    costs[2] = [costs[2], 30];

    const cache = new Map();

    const dfs = (i, lastDay) => {

        const hash = `${i}-${lastDay}`;

        if(cache.has(hash)) return cache.get(hash);
        if(i === days.length) return 0;

        if(days[i] >= lastDay) {
            let min = Infinity;
            for(let j = 0; j < costs.length;  j++) {
                min = Math.min(min, costs[j][0] + dfs(i+1, days[i] + costs[j][1]));
            }
            cache.set(hash, min);
            return min;   
        }

        const result = dfs(i+1, lastDay);
        cache.set(hash, result);
        return result;
    }

    return dfs(0, days[0]);
};