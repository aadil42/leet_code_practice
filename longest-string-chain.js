/**
 * DP | memoization
 * Time O(n^2) | Space O(n^2)
 * https://leetcode.com/problems/longest-string-chain/
 * 
 * @param {string[]} words
 * @return {number}
 */
var longestStrChain = function(words) {
    
    const isPredecessor = (pre, str) => {
        if(pre === ''){
            return true;
        }
        if(str.length - pre.length !== 1){
            return false;
        }
        let preIdx = 0;
        for(let char of str){
            if(char === pre[preIdx]){
                preIdx++;
            }
        }
        return preIdx === pre.length;
    }

    words = words.sort((a,b) => a.length - b.length);
    const cache = new Map();

    const dfs = (pre,next) => {
        if(next === words.length) return 0;
        const hash = `${pre}-${next}`;

        if(cache.has(hash)) return cache.get(hash);
        
        let choose = 0;
        let notChoose = 0;
        if(pre === -1 || isPredecessor(words[pre], words[next])) {
            choose = 1+dfs(next, next+1);
        } 
        notChoose = dfs(pre, next+1);

        const result = Math.max(choose, notChoose);
        cache.set(hash, result);
        return result;
    }
    return dfs(-1, 0);
};
