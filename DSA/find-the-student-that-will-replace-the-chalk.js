/**
 * Array
 * Time O(n) | Space O(1)
 * https://leetcode.com/problems/find-the-student-that-will-replace-the-chalk
 * @param {number[]} chalk
 * @param {number} k
 * @return {number}
 */
var chalkReplacer = function(chalk, k) {
    let i = 0;
    k = k % chalk.reduce((acc, curr) => acc+curr, 0);
    while(true) {
        i = i%chalk.length;
        if(k < chalk[i]) return i;
        k -= chalk[i];
        i++;
    }
};