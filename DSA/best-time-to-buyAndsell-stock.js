var maxProfit = function(prices) {
  
    
    let left = 0;
    let right = 1;
    let max = 0;

    while(right < prices.length) {

        const profit = prices[right] - prices[left];

        if(profit > max) {
            max = profit;
        }
        // if we find the value that is lower than the previous then we buy at that time. meaning we increment the left pointer
        if(profit < 0) {
            left = right;
        }
        right++;
    }

    return max;
};

const prices = [7,1,5,3,6,4];
console.log(maxProfit(prices));


// solved second time
var maxProfitR = function(prices) {
    
    
    let left = 0;
    let right = 1;
    let max = 0;
    
    
    while(right < prices.length) {
        
        const profit = prices[right] - prices[left];
        
        max = Math.max(profit, max);
        
        if(prices[right] < prices[left]) {
            left = right;
        }
        right++;
    }
    
    return max;
};

// brute force;
var maxProfitBrute = function(prices) {
    
    
    let maxProfit = 0;
    for(let i = 0; i < prices.length; i++) {
        for(let j = i + 1; j < prices.length; j++) {
            maxProfit = Math.max(prices[j] - prices[i], maxProfit);
        }
    }
    
    return maxProfit;
};