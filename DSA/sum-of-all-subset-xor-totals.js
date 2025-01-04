/***
 * BackTracking | Recursion | DFS
 * Time O(2^n) | Space O(n)
 * https://leetcode.com/problems/sum-of-all-subset-xor-totals/
 * @param {number[]} nums
 * @return {number}
 */
var subsetXORSum = function(nums) {
    
    let resultXor = 0;

    const dfs = (arr, i) => {
        if(i === nums.length) return;
        arr.push(nums[i]);
        resultXor += arr.reduce((acc, num) => num^acc, 0);
        dfs(arr, i+1);
        arr.pop();
        dfs(arr, i+1);
    }

    dfs([], 0);

    return resultXor;
};

/**
 * BruteForce | BackTracking | Recursion
 * Time O(2^n) | Space O(2^n)
 * https://leetcode.com/problems/sum-of-all-subset-xor-totals/
 * @param {number[]} nums
 * @return {number}
 */
var subsetXORSum0 = function(nums) {
    
    const dfs = (idx, currSubSet, allSubSets) => {
        
        if (idx === nums.length) return allSubSets;

        currSubSet.push(nums[idx]);
        allSubSets.push([...currSubSet]);
        dfs(idx+1, currSubSet, allSubSets);
        currSubSet.pop();
        dfs(idx+1, currSubSet, allSubSets);

        return allSubSets;
    }

    const result = dfs(0,[],[]);
    return result.map((subSet) => getXor(subSet)).reduce((acc, num) => acc+num, 0);
};


const getXor = (arr) => {
    return arr.reduce((acc, num) => acc^num, 0);
}