/**
 * Brute force 
 * Time O(n^2) | Space O(n^2);
 * https://leetcode.com/problems/k-th-smallest-prime-fraction
 * 
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var kthSmallestPrimeFraction = function(arr, k) {
    
    const fractions = [];

    for(let i = 0; i < arr.length; i++) {
        for(let j = i+1; j < arr.length; j++) {
            const frac = arr[i]/arr[j];
            fractions.push([frac, arr[i], arr[j]]);
        }
    }

    fractions.sort((a,b) => a[0]-b[0]);
    return [fractions[k-1][1], fractions[k-1][2]];
};