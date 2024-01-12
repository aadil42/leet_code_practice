/**
 * Time O(n) | Space O(1)
 * Math | Permutations/Combination
 * https://leetcode.com/problems/count-all-valid-pickup-and-delivery-options
 * @param {number} n
 * @return {number}
 */

var countOrders = function(n) {
    let slots = 2*n;
    let result = 1;
    const mod = 10**9 + 7;

    while(slots > 0) {
        const ways = ((slots*(slots-1))/2);
        result = (ways*result) % mod;
        slots-=2;
    }

    return result % mod;
};