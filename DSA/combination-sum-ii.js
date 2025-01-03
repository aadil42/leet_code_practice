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

/**
 *  Same as the above one but the above one combinationSum21 will give time limit exceed because we're not skipping same values.
 * BruteForce | Recursion
 * Time O(n^n) |  Space O(n^n)
 * https://leetcode.com/problems/combination-sum-ii/
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum22 = function(candidates, target) {
    
    candidates.sort((a,b) => a-b);

    const dfs = (idx, currSum, currCombo, allCombo) => {
        if (currSum > target) return allCombo;
        if (currSum === target) {
            allCombo.add(currCombo.join("#"));
            return allCombo;
        }

        for (let i = idx; i < candidates.length; i++) {
            currCombo.push(candidates[i]);
            dfs(i+1, currSum+candidates[i], currCombo, allCombo);
            while(candidates[i+1] === candidates[i]) i++;
            currCombo.pop();
        }

        return allCombo;
    }   

    return [...dfs(0, 0, [], new Set())].map((combo) => combo.split("#").map((num) => +num)); // just mapping the returned set to appropriate return type.
};