/**
 * Brute force
 * Time O(n^n) | Space O(n)
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeightII = function(stones) {
    
    const visited = new Set();
    const dfs = (remain) => {
        if(visited.size === stones.length) return remain;

        let min = Infinity;
        for(let i = 0; i < stones.length; i++) {
            if(!visited.has(i)) {
                visited.add(i);
                min = Math.min(min, dfs(Math.abs(remain - stones[i])));
                visited.delete(i);
            }
        }

        return min;
    }

    return dfs(0);
};


/**
 * t = total of the input array. In the worst case we might be given an array with a bunch of one 
 * Time O(n*t) | Space O(n*t)
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeightII = function(stones) {
    
    const cache = {};
    const stonesTotal = stones.reduce((acc, curr) => {
        return acc + curr;
    },0);

    const target = Math.ceil(stonesTotal / 2);
    // console.log(target);

    const dfs = (i, total) => {
        const hash = `${i}#${total}`;
        // console.log(hash);
        // don't check cach[hash] because if the value is 0 then it won't run and keep calling recursively. And It will exeed time limit.
        if(cache[hash] !== undefined) return cache[hash];

        if(total  >= target || i === stones.length) return Math.abs(total - (stonesTotal - total));

        cache[hash] = Math.min(dfs(i+1, total), dfs(i+1, total+stones[i]));
        return cache[hash];
    }

    return dfs(0, 0);
};