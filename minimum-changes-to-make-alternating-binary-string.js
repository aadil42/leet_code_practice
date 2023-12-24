/**
 * 
 * Array
 * Time O(n) | Space O(n)
 * https://leetcode.com/problems/minimum-changes-to-make-alternating-binary-string/
 * @param {string} s
 * @return {number}
 */
var minOperations = function(s) {

    const expectedOutput1 = ["0"];
    const expectedOutput2 = ["1"];

    for(let i = 1; i < s.length;  i++) {
        if(expectedOutput1[i-1] === "0") {
            expectedOutput1[i] = "1";
            expectedOutput2[i] = "0";
        } else {
            expectedOutput1[i] = "0";
            expectedOutput2[i] = "1";
        }
    }
    
    let change1 = 0;
    let change2 = 0;
    let i = 0;
    while(i < s.length) {
        if(s[i] !== expectedOutput1[i]) change1++;
        if(s[i] !== expectedOutput2[i]) change2++;
        i++;
    }

    return Math.min(change1, change2);
};

/**
 * Recursion | DP | Backtracking
 * Time O(2^n) | Space O(n)
 * https://leetcode.com/problems/minimum-changes-to-make-alternating-binary-string
 * 
 * @param {string} s
 * @return {number}
 */
var minOperations1 = function(s) {

    s = s.split("").map((num) => {
        if(num === "1") return true;
        if(num === "0") return false;
    });

    const dfs = (pre, next, numOfChanges) => {
        if(s[pre] === s[next]) return Infinity;
        if(next === s.length) return numOfChanges;

        const choice1 = dfs(pre+1, next+1, numOfChanges);
        s[next+1] = !s[next+1];
        const choice2 = dfs(pre+1, next+1, numOfChanges+1);
        s[next+1] = !s[next+1];
        return Math.min(choice1, choice2);
    }

    const choice1 = dfs(-1, 0, 0);
    s[0] = !s[0];
    const choice2 = dfs(-1, 0, 0);
    s[0] = !s[0];

    return Math.min(choice1, choice2)
}