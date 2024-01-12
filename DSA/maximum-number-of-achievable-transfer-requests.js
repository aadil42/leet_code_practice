/**
 * Backtracking | Recursion
 * https://leetcode.com/problems/maximum-number-of-achievable-transfer-requests/
 * 
 * n = number of requests.
 * Time O(2^n) | Space O(n)
 * @param {number} n
 * @param {number[][]} requests
 * @return {number}
 */
var maximumRequests = function(n, requests) {
    
    const transfer = new Array(n).fill(0);
    
    const dfs = (index, count) => {
        if(index === requests.length) {
            // console.log(transfer, index);
            for(let i = 0; i < transfer.length;  i++) {
                if(transfer[i] !== 0) return 0;
            }
            return count;
        }

        transfer[requests[index][0]] -= 1;
        transfer[requests[index][1]] += 1;
        const req1 = dfs(index + 1, count+1);
        transfer[requests[index][0]] += 1;
        transfer[requests[index][1]] -= 1;
        const req2 = dfs(index + 1, count);

        return Math.max(req1, req2);
    }

    return dfs(0, 0);
};