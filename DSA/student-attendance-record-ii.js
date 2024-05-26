/**
 * Brute Force | Backtracking | recursion
 * Time O(3^n) | Space O(n)
 * https://leetcode.com/problems/student-attendance-record-ii/
 * @param {number} n
 * @return {number}
 */
var checkRecord = function(n) {
    
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