/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */


// proper solution
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    
    candidates.sort((a,b) => a - b);
    const result = [];
    function dfs(remaining, candidate, index) {
        if(remaining === 0) {
            result.push(candidate.slice(0));
            return;
        }
        if(remaining <= 0 || index === candidates.length) return;

        candidate.push(candidates[index]);
        dfs(remaining - candidates[index], candidate, index+1);
        while(candidates[index] === candidates[index + 1]) {
            index++;
        }
        candidate.pop();
        dfs(remaining, candidate, index+1);
    }

    dfs(target, [], 0);
    return result;
};

/// second time solved
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum20 = function(candidates, target) {
    
    candidates = candidates.sort((a,b) => a-b);
    const combinations = []

    const sum = (nums) => nums.reduce((acc, curr) => acc+curr, 0);

    const dfs = (currSum, idx, currComb) => {
        
        if(currSum === target) {
            console.log(currComb);
            combinations.push(currComb.slice(0));
            return;
        }

        if(currSum > target) return;
        if(idx === candidates.length) return;

        currComb.push(candidates[idx]);
        dfs(currSum+candidates[idx], idx+1, currComb);

        while(candidates[idx] === candidates[idx+1]) idx++;

        currComb.pop();
        dfs(currSum, idx+1, currComb);
    }

    dfs(0, 0,[]);
    return combinations;
};



/**
 * This solution will give time limit exceed. It's correct though.
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum21 = function(candidates, target) {
    
    candidates = candidates.sort((a,b) => a-b);
    const combinations = new Set();

    const sum = (nums) => nums.reduce((acc, curr) => acc+curr, 0);

    const dfs = (idx, currComb) => {
        if(sum(currComb) === target) {
            console.log(currComb);
            combinations.add(currComb.join("-"));
            return;
        }

        for(let i = idx; i < candidates.length; i++) {
            if(sum([...currComb, candidates[i]]) > target) return;
            currComb.push(candidates[i]);
            dfs(i+1, currComb);
            currComb.pop();
        }
    }

    dfs(0, []);
    return [...combinations].map((comb) => comb.split("-").map((num) => +num));
};