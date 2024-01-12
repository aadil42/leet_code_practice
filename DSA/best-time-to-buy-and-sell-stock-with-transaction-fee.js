/**
 * DP | Recursion
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/
 * 
 * Time O(n) | Space O(n)
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function(prices, fee) {
    
    const cache = {};
    const dfs = (i, isBuying) => {
        if(i >= prices.length) return 0;
        if(cache[`${i}-${isBuying}`]) return cache[`${i}-${isBuying}`];

        if(isBuying) {
           cache[`${i}-${isBuying}`] = Math.max(-prices[i] + dfs(i+1, !isBuying), dfs(i+1, isBuying));
        } else {
          cache[`${i}-${isBuying}`] = Math.max(prices[i] - fee + dfs(i+1, !isBuying), dfs(i+1, isBuying))
        }
        
        return cache[`${i}-${isBuying}`];
    }

    return dfs(0,true);
};