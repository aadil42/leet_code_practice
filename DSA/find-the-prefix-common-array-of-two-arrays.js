/**
 * HashSet
 * Time O(n) | Space O(n)
 * https://leetcode.com/problems/find-the-prefix-common-array-of-two-arrays
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var findThePrefixCommonArray = function(A, B) {
    
    const set = new Set();
    let count = 0;

    const arrC = [];
    for (let i = 0; i < A.length; i++) {
        if (set.has(A[i])) count++;
        if (set.has(B[i])) count++;
        if (A[i] === B[i]) count++;

        arrC.push(count);

        set.add(A[i]);
        set.add(B[i]);
    }

    return arrC;
};


/**
 * Brute Force | HashSet
 * Time O(n^2) | Space O(n)
 * https://leetcode.com/problems/find-the-prefix-common-array-of-two-arrays
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var findThePrefixCommonArrayBF = function(A, B) {
    
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

