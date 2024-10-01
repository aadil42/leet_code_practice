/**
 * Hashing | Math
 * Time O(n) | Space O(n)
 * https://leetcode.com/problems/check-if-array-pairs-are-divisible-by-k
 * @param {number[]} arr
 * @param {number} k
 * @return {boolean}
 */
var canArrange = function(arr, k) {
    if(arr.reduce((pre, curr) => pre + curr, 0) % k) return false;

    const remainderFreq = {};

    for(let i = 0; i < arr.length; i++) {
        const remainder = ((arr[i] % k) + k) % k;
        remainderFreq[remainder] = (remainderFreq[remainder] && remainderFreq[remainder] + 1) || 1;
    }

    for(const key in remainderFreq) {
        const remainder = +key;
        const remainderComplement = (k - (+key)) % k;

        if(remainderFreq[remainder] !== remainderFreq[remainderComplement]) return false;

        remainderFreq[remainder] -= 1;
        remainderFreq[remainderComplement] -= 1;
    }

    return true;
};