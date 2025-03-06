/**
 * Sliding Window 
 * Time O(n) | Space O(1)
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    
    let i = 0;
    let maxProfit = 0;
    let boughtAt = prices[0];

    while (i < prices.length) {

        if (prices[i] < boughtAt) {
            boughtAt = prices[i];
        }
        maxProfit = Math.max(maxProfit, prices[i] - boughtAt);
        i++;
    }

    return maxProfit;
};