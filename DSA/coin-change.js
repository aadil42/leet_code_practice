/**
 * Better Readable Solution
 * 
 * Recursion | Memoization | DP
 * Time O(n) | Space O(n) where n === amount
 * https://leetcode.com/problems/coin-change/
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    
    const cache = new Map();

    const dfs = (leftAmount) => {

        if(cache.has(leftAmount)) return cache.get(leftAmount);

        if(leftAmount === 0) return 0;
        if(leftAmount < 0) return Infinity;

        let min = Infinity;
        for(let i = 0; i < coins.length; i++) {
            min = Math.min(min, 1 + dfs(leftAmount - coins[i]));
        }

        cache.set(leftAmount, min);
        return min;
    }


    const result = dfs(amount);
    if(result === Infinity) return -1;
    return result; 
};

var coinChange = function(coins, amount) {


    const coinMemo = new Map();
    coinMemo.set(0,0); 

    function dfs(amount) {

        if(coinMemo.has(amount)) {
            return coinMemo.get(amount);
        }
        if(amount < 0) {
            return Infinity;
        }

        let minValue = Infinity;
        for(let i = 0; i < coins.length; i++) {
            let currentValue = dfs(amount - coins[i]);
            minValue = Math.min(currentValue, minValue);
        }

        coinMemo.set(amount, minValue + 1);
        return minValue + 1;
    }


    let result = dfs(amount);

    result = result == Infinity ? -1 : result;

    return result; 
};

const coins = [1,2,5], amount = 11;
console.log(coinChange(coins, amount));


// solved it second time.
var coinChangeR = function(coins, amount) {

    const myHash = new Map();
    myHash.set(0,0);

    function dfs(remaining) {
      if(myHash.has(remaining)) return myHash.get(remaining);

        if(remaining < 0) return Infinity;

        let minVal = Infinity;
        for(let i = 0; i < coins.length; i++) {
            minVal = Math.min(dfs(remaining - coins[i]), minVal);
        }

         myHash.set(remaining, minVal + 1); 
         return minVal + 1;
    }
 
    const result = dfs(amount);
    return result === Infinity ? -1 : result;
};