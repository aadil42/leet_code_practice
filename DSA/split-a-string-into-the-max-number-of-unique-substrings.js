/**
 * 
 * Brute Force | Backtracking | Set
 * https://leetcode.com/problems/split-a-string-into-the-max-number-of-unique-substrings/
 * @param {string} s
 * @return {number}
 */
var maxUniqueSplit = function(s) {
    
    const set = new Set();

    let maxSubStr = 0;

    const dfs = (idx) => {
        if(idx === s.length) {
            maxSubStr = Math.max(maxSubStr, set.size);
            return;
        }

        let max = 0;

        for(let i = idx; i < s.length; i++) {
            const subStr = s.slice(idx, i+1);
            if(set.has(subStr)) continue;

            set.add(subStr);
            dfs(i+1);
            set.delete(subStr);
        }
    }

    dfs(0);
    return maxSubStr;
};