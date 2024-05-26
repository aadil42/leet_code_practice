/**
 * Brute Force | Backtracking | recursion
 * Time O(3^n) | Space O(n)
 * https://leetcode.com/problems/student-attendance-record-ii/
 * @param {number} n
 * @return {number}
 */
var checkRecord0 = function(n) {
    
    const mod = 10**9 + 7;

    const lateCritiria = (arr, i) => {
        if(arr[arr.length-3] === "L" && arr[arr.length-2] === "L" && arr[arr.length-1] === "L") return false;
        return true; 
    }

    let total = 0;
    const dfs = (i, arr, absCount) => {
        
        if(absCount > 1) return;
        if(!lateCritiria(arr, i)) return;

        if(i === n && absentCritiria(arr, i) && lateCritiria(arr, i)) {
            total = (total + 1) % mod;
        }
        if(i === n) return;
        
        arr.push("P")
        dfs(i+1, arr, absCount);
        arr.pop();

        arr.push("A")
        dfs(i+1, arr, absCount+1);
        arr.pop();

        arr.push("L")
        dfs(i+1, arr, absCount);
        arr.pop();
    }

    dfs(0, [], 0);
    return total;
};


// optimized O(n) solution. But for some stupid reason it doesn't get submitted.
/**
 * DP | Recursion | Memoization
 * Time O(n*2*3) | Space O(n*2*3)
 * https://leetcode.com/problems/student-attendance-record-ii
 * @param {number} n
 * @return {number}
 */
var checkRecord = function(n) {
    
    const mod = 10**9 + 7;

    const cache = new Map();

    const dfs = (i, lateCount, absCount) => {

        const hash = `${i}-${lateCount}-${absCount}`;
        if(cache.has(hash)) return cache.get(hash);

        if(lateCount > 2) return 0;
        if(absCount > 1) return 0;

        if(i === n) return 1;

        const A = dfs(i+1, 0, absCount+1);
        const L = dfs(i+1, lateCount+1, absCount);
        const P = dfs(i+1, 0, absCount);

        cache.set(hash, (A + L + P) % mod);
        return (A + L + P) % mod;
    }

    return dfs(0, 0, 0) % mod;
};

