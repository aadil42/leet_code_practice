/**
 * Array | Greedy
 * Time O(n) | Space O(1)
 * https://leetcode.com/problems/separate-black-and-white-balls
 * @param {string} s
 * @return {number}
 */
var minimumSteps = function(s) {
    
    let lastOneIdx = (s[s.length - 1] === "1" && s.length - 1) || s.length;

    let i = s.length - 2;
    let minSteps = 0;

    while(i > -1) {
        if(s[i] === "1") {
            minSteps += lastOneIdx - i - 1;
            lastOneIdx = i + (lastOneIdx - i - 1);
        }
        i--;
    }
    return minSteps;
};