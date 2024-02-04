/**
 * 
 * DP | Recursion | DFS | Caching
 * Time O(n^2) | Space O(n^2)
 * https://leetcode.com/problems/best-team-with-no-conflicts/
 * @param {number[]} scores
 * @param {number[]} ages
 * @return {number}
 * 
 * Note: The testcase that is not passing and throwing TLE is passing when you copy paste this test and run it. But when you submit it, it doesn't pass. I don't know why...
 */
var bestTeamScore = function(scores, ages) {

    console.log(scores.length);
    
    const mergedArr = [];

    for(let i = 0; i < scores.length; i++) {
        mergedArr.push([scores[i], ages[i]]);
    }

    mergedArr.sort((a,b) => {
        if(a[0] !== b[0]) {
            return a[0] - b[0];
        } else {
            return a[1] - b[1];
        }
    });

    scores = mergedArr;

    const cache = new Map();

    const dfs = (i, pre) => {
        
        const hash = `${i}-${pre}`;

        if(cache.has(hash)) return cache.get(hash);
        if(i === scores.length) return 0;

        if(pre === -1 || scores[i][1] >= scores[pre][1]) {
            const result = Math.max(scores[i][0] + dfs(i+1, i), dfs(i+1, pre));
            cache.set(hash, result);
            return result;
        }

        const result = dfs(i+1, pre);
        cache.set(hash, result);

        return result;
    }

    return dfs(0, -1);
};