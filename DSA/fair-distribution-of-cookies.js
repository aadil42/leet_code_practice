 /**
 * Recursion | backtracking
 * 
 * https://leetcode.com/problems/fair-distribution-of-cookies/
 * 
 * Time O(n^k) | Space (n)
 * @param {number[]} cookies
 * @param {number} k
 * @return {number}
 */
var distributeCookies = function(cookies, k) {

    let  ans = Infinity;
    const children = new Array(k).fill(0);
  
    const dfs = (i) => {
        if(i === cookies.length) {
            ans = Math.min(ans, Math.max(...children));
            return;
        }
        for(let j = 0; j < k;  j++) {
            children[j] += cookies[i];
            dfs(i+1);
            children[j] -= cookies[i];
        }
    }  
  
      dfs(0);
      return ans;
  };