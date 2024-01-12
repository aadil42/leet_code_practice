// Don't quite understand the question yet. But I do understand the code and answer. check it out again after some time.
/**
 * @param {number} n
 * @return {number}
 */
var minDays = function(n) {
    
    const hash = new Map();
    hash.set(0,0);
    hash.set(1,1);
    function dfs(days) {
        if(hash.has(days)) return hash.get(days);
        const temp = 1 + (days%2) + dfs(Math.floor(days/2));
        const temp1 = 1 + (days%3) + dfs(Math.floor(days/3));
        hash.set(days,Math.min(temp, temp1));
        return hash.get(days); 
    }

    return dfs(n);
};