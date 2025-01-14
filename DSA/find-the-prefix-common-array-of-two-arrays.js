/**
 * Brute Force | HashSet
 * Time O(n^2) | Space O(n)
 * https://leetcode.com/problems/find-the-prefix-common-array-of-two-arrays
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var findThePrefixCommonArray = function(A, B) {
    
    if (A.length === 1) return [1];

    const setA = new Set();
    const setB = new Set();
    const arrC = [];
    for (let i = 0; i < A.length; i++) {
        setA.add(A[i]);
        setB.add(B[i]);
        
        arrC.push(getCount(setA, setB));
    }

    return arrC;
};

const getCount = (setA, setB) => {

    let count = 0;

    setA.forEach((el) => {
        if (setB.has(el)) count++;
    });

    return count;
}