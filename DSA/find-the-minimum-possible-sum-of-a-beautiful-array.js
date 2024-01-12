/**
 * https://leetcode.com/problems/find-the-minimum-possible-sum-of-a-beautiful-array/
 * 
 * Hashing
 * Time O(n) | Space O(n)
 * @param {number} n
 * @param {number} target
 * @return {number}
 */
var minimumPossibleSum = function(n, target) {
    
    const forbidden = new Set();
    
    // get all the pairs which makes the target. Only add the larger number of th pair.
    let i = 1;
    while(i < Math.ceil(target/2)) {
        forbidden.add(target-i);
        i++;
    }
    
    const beautifylArr = [];
    i = 1;
    let count = 0;
    while(count < n) {
        while(forbidden.has(i)) {
            i++;
        }
        beautifylArr.push(i);
        count++;
        i++;
    }
    // console.log(beautifylArr);
    return beautifylArr.reduce((acc, curr) => acc+curr, 0);
};