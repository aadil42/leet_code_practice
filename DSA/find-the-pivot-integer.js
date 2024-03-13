/**
 * Math | Gauss Total
 * Time O(n) | Space O(1)
 * https://leetcode.com/problems/find-the-pivot-integer/
 * @param {number} n
 * @return {number}
 */
var pivotInteger = function(n) {
    const gaussTotal = (firstElement, lastElement) => {
        return (firstElement + lastElement) * (lastElement - firstElement + 1)/2;
    }
    for(let  i = 1; i < n+1; i++) {
        if(gaussTotal(1, i) === gaussTotal(i, n)) return i;   
    }
    return -1;
};