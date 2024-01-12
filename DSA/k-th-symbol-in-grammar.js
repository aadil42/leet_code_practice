/**
 * Binary Search
 * Time O(n) | Space O(1)
 * https://leetcode.com/problems/k-th-symbol-in-grammar
 * 
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var kthGrammar = function(n, k) {
    
    let left = 0;
    let right = 2**(n-1);

    let curr = 0;

    let i = 0;
    while(i < n - 1) {
        const mid = left + Math.floor((right-left)/2);
        if(k <= mid) {
            right = mid;
        } else {
            left = mid+1;
            curr = curr ? 0 : 1;
        }
        i++;
    }

    return curr;
};