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