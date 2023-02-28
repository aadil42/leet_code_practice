/**
 * Recursion.
 * Time O(n) | Space O(n).
 * @param {number[]} prices
 * @return {number}
 */

// when var buying is true  it means we can buy the stock if it's false it means we can sell the stock.
// this is a really cool problem.
 
var maxProfit = function(prices) {
    const cache = {};

    function dfs(index, buying) {
        if(index >= prices.length) return 0;
        if(cache[buying + index.toString()]) return cache[buying + index.toString()];

        let total;
        let total1;
        let max;
        if(buying) {
             total = dfs(index + 1, !buying) - prices[index];
             total1 = dfs(index + 1, buying);
             max = Math.max(total, total1);
             cache[buying + index.toString()] = max;
        } else {
            total = dfs(index + 2, !buying) + prices[index];
            total1 = dfs(index + 1, buying);
            max = Math.max(total, total1);
            cache[buying + index.toString()] = max;
        }
        return cache[buying + index.toString()];
    }

    return dfs(0, true);;
};