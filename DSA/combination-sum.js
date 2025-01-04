var combinationSum = function(candidates, target) {
    
    const result = [];

    function dfs(i, curr, total) {

        if(total === target) {
            // making a copy of the current array and then pushing to the result in order to avoid referencing(pointers).
            result.push([...curr]);
            return;
        }

        if(total > target || i >= candidates.length) {
            return;
        }

        curr.push(candidates[i]);
        dfs(i, curr, total + candidates[i]);
        curr.pop();
        dfs(i + 1, curr, total);
    }

    dfs(0, [], 0);
    return result;
};
// it's kind of like getting the maximum some of a binary tree branch
// time coplexity is target^2

const candidates = [2,3,6,7], target = 7;
console.log(combinationSum(candidates, target));


/**
 * BruteForce | BackTarcking | Recursion
 * Time O(n^target) | Space (n^target) (Not sure about the space complexity)
 * https://leetcode.com/problems/combination-sum/
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum0 = function(candidates, target) {

    const dfs = (sum, combination, allCombinations) => {
        if (sum > target) return allCombinations;
        if (sum === target) {
            allCombinations.push(combination.slice(0));
            return allCombinations;
        }

        for (let i = 0; i < candidates.length; i++) {
            const candidate = candidates[i];
            combination.push(candidate);
            dfs(sum+candidate, combination, allCombinations);
            combination.pop();
        }

        return allCombinations;
    }

    const combinations = dfs(0,[],[]);
    return makeUnique(combinations);
};

const makeUnique = (combinations) => {
    combinations = combinations.map((combination) => combination.sort((a,b) => a-b));
    combinations = combinations.map((combination) => combination.join("#"));
    combinations = new Set(combinations);
    combinations = [...combinations].map((combination) => combination.split("#"));
    return combinations.map((combination) => combination.map((num) => +num));
}