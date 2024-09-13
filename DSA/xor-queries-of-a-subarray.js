/**
 * Pre-fix | Post-fix Sum
 * Time O(n) | Space O(n)
 * https://leetcode.com/problems/xor-queries-of-a-subarray
 * @param {number[]} arr
 * @param {number[][]} queries
 * @return {number[]}
 */
var xorQueries = function(arr, queries) {
    
    const totalXor = arr.reduce((acc, num) => acc^num, 0);
    const leftSideXor = {};
    const rightSideXor = {};

    const getAnsToQuery = (start, end) => {
        return totalXor ^ leftSideXor[start-1] ^ rightSideXor[end+1];
    }

    for(let i = 0; i < arr.length; i++) {
        const leftEnd = i;
        const rightEnd = arr.length - i - 1;

        leftSideXor[leftEnd] = (leftSideXor[leftEnd-1] === undefined ? 0 : leftSideXor[leftEnd-1]) ^ arr[leftEnd];
        rightSideXor[rightEnd] = (rightSideXor[rightEnd+1] === undefined ? 0 : rightSideXor[rightEnd+1]) ^ arr[rightEnd];
    }

    return queries.map(([start, end]) => {
        return getAnsToQuery(start, end);
    });
};