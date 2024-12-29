/**
 * DP | recursion
 * Time O(n*m)  | Space O(n*m)
 * https://leetcode.com/problems/number-of-ways-to-form-a-target-string-given-a-dictionary
 * Tip you might be tempted to think why no if statement to check weather the chareter we chose is the same as the target[i] we already stored everything in the freq2D so if it's not equal we'll get 0 and which will make the multiplition with it 0 as well so it's equivielnt to taking nothing. hence no if statement for that case.
 * @param {string[]} words
 * @param {string} target
 * @return {number}
 */
function numWays(words, target) {
    
    const mod = 10**9 + 7;

    const freq2D = {};

    for(let i = 0; i < 26; i++) {
        const char = String.fromCharCode(i+97);
        freq2D[char] = [];
    }

    for(let i = 0; i < words.length; i++) {
        for(let j = 0; j < words[0].length; j++) {
            const char = words[i][j];
            freq2D[char][j] = (freq2D[char][j]+1) || 1; 
        }
    }

    const cache = new Map();

    const dfs = (targetIdx, takenIdx) => {

        if(targetIdx === target.length) return 1;
        if(takenIdx === words[0].length) return 0;

        const hash = `${targetIdx}-${takenIdx}`;
        if(cache.has(hash)) return cache.get(hash);

        const char = target[targetIdx];
        const taken = (dfs(targetIdx+1, takenIdx+1) * (freq2D[char][takenIdx] || 0)) % mod;
        const notTaken = dfs(targetIdx, takenIdx+1);

        cache.set(hash, (taken+notTaken)%mod);
        return cache.get(hash);
    }
    
    return dfs(0,0);
}
