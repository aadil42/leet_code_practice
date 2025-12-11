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


/**
 * Sliding Window
 * Time O(n) | Space O(1)
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock/submissions/1852476715/
 * @param {number[]} prices
 * @return {number}
 */
//  for revesion purpose
var maxProfitR = function(prices) {
    
    let buyingPricePointer = 0;
    let sellingPricePointer = 1;
    let max = 0;

    while (sellingPricePointer < prices.length) {

        const buyPrice = prices[buyingPricePointer];
        const sellPrice = prices[sellingPricePointer];
        const profit = prices[sellingPricePointer] - prices[buyingPricePointer];

        if (sellPrice < buyPrice) {
            buyingPricePointer = sellingPricePointer
            sellingPricePointer++;
            continue;
        }

        max = Math.max(max, profit);
        sellingPricePointer++;
    }

    return max;
};