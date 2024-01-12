/**
 * DP 
 * Time O(n) | Space O(n) (Time and space are technically O(3*n) which is same as O(n))
 * https://leetcode.com/problems/number-of-ways-to-divide-a-long-corridor/submissions/1107927924/
 * @param {string} corridor
 * @return {number}
 */
var numberOfWays = function(corridor) {
    
    const mod = 10**9  + 7;
    const cache = new Map();

    const dfs = (i, seatCount)  => {
        
        const hash = `${i}-${seatCount}`;
        if(cache.has(hash)) return cache.get(hash);

        if(i === corridor.length && seatCount === 2) {
            // console.log(i, seatCount);
            return 1;
        }
        if(i === corridor.length) return 0;

        let result = 0;
        if(seatCount === 2) {
            if(corridor[i] === "S") {
                result = dfs(i+1, 1)%mod;
            }
            if(corridor[i] === "P") {
                result = (dfs(i+1, 0) + dfs(i+1, seatCount))%mod;
            }
        } else {
            if(corridor[i] === "S") {
                result = dfs(i+1, seatCount+1)%mod;
            } 
            if(corridor[i] === "P") {
                result = dfs(i+1, seatCount)%mod;
            }
        }
        
        cache.set(hash, result);
        // cache[hash] = result;
        return result;
    }

    return dfs(0, 0);
};

/**
 * Math | Combinotorics
 * Time O(n) | Space O(n)
 * @param {string} corridor
 * @return {number}
 */
var numberOfWays1 = function(corridor) {

    const sPositions = [];
    for(let i = 0; i < corridor.length; i++) {
        if(corridor[i] === "S") sPositions.push(i);
    }

    if(sPositions.length%2 || sPositions.length === 0) return 0;
    // console.log(sPositions);
    const mod = 10**9 + 7;
    let ways = 1;
    for(let i = 1; i < sPositions.length; i += 2)  {
        if(sPositions[i+1]) {
            ways = (ways * (sPositions[i+1] - sPositions[i])) % mod;
        }
    }
    return ways;
};