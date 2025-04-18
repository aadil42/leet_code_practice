/**
 * Recursion
 * Time O(n) | Space O(n)
 * https://leetcode.com/problems/count-and-say/
 * @param {number} n
 * @return {string}
 */
var countAndSayRecursive = function(n) {

    const dfs = (n) => {
        console.log(n)
        if (n === 1) return "1";
        return runLenEncode(dfs(n-1));
    }

    return dfs(n);
};

/**
 * Iteration
 * Time O(n) | Space O(n)
 * https://leetcode.com/problems/count-and-say/
 * @param {number} n
 * @return {string}
 */
var countAndSayIterative = function(n) {

    let ans = "1";

    for (let i = 0; i < n-1; i++) {
        ans = runLenEncode(ans);
    }

    return ans;
};

const runLenEncode = (num) => {

    let ans = "";

    let i = 0;
    while (i < num.length) {
        let count = 1;

        while (i+1 < num.length && num[i] === num[i+1]) {
            count++;
            i++;
        }

        ans += count.toString() + num[i];
        i++;
    }

    return ans;
}