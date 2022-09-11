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