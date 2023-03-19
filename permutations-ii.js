/**
 * Recursion/backtracking
 * 
 * Time O(n!) | Space O(!n)
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    
    nums.sort((a,b) => a-b);
    function dfs(nums) {
        if(nums.length === 1) {
            return [nums.slice(0)];
        }

        const result = [];
        for(let i = 0; i < nums.length; i++) {
            while(nums[i] === nums[i+1]) {
                i++;
            }
            const numToBeAdded = nums[i];
            nums.splice(i,1);
            const permutations = dfs(nums);
            // console.log(permutations);
            for(let j = 0; j < permutations.length; j++) {
                result.push([...permutations[j], numToBeAdded]);
            }
            // permutations.forEaach((permutation) => {
            //     result.push([...permutation, numToBeAdded]);
            // });
            nums.splice(i, 0, numToBeAdded);
        }

        return result;
    }

    return dfs(nums);
};