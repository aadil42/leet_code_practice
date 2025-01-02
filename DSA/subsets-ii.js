/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var subsetsWithDup = function(nums) {
    
    const result = [];
      nums.sort((a,b) => a-b);
  
      function dfs(i, subSet) {
          if(i === nums.length) {
              result.push(subSet.slice(0));
              return;
          }
              subSet.push(nums[i]);
              dfs(i+1, subSet);
              subSet.pop();
              while(nums[i+1] && nums[i] === nums[i+1]) {
                  i++;
              }
              dfs(i+1, subSet);
      }
  
      dfs(0, []);
      // console.log(result);
      return result;
};

/**
 * BackTracking | Brute Force | HashSet
 * Time O(2^n) | Space O(2^n)
 * https://leetcode.com/problems/subsets-ii/
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup0 = function(nums) {
    
    let ans = [];

    const makeUnique = (ans) => {
    
        ans = ans.map((arr) => arr.sort((a,b) => a-b));
    
        ans = ans.map((subSet) => subSet.join("#"));
        unique = [...new Set(ans)];
    
        return unique
               .map((arr) => arr.split("#"))
               .map((arr) => arr.map((strA) => +strA));
    }
    
    const dfs = (idx, currSubSet) => {
        if (idx === nums.length) {
            if(currSubSet.length) {
                ans.push(currSubSet.slice(0));
            }
            return;
        }

        currSubSet.push(nums[idx]);
        dfs(idx+1, currSubSet);
        currSubSet.pop();
        dfs(idx+1, currSubSet);
    }

    dfs(0,[]);
    ans = makeUnique(ans);
    ans.push([]);
    return ans;
};

//  bad solution
var subsetsWithDup1 = function(nums) {
    
    nums = nums.sort((a,b) => a - b);
    nums = subsets(nums);
    nums.pop();
    const unique = new Set();
    console.log(nums);
    for(let i = 0; i < nums.length; i++) {
        let hash = '';
        for(let j = 0; j < nums[i].length; j++) {
            hash += nums[i][j] + '#';
        }
        hash = hash.split('#');
        hash.pop();
        hash = hash.join('#'); 
        unique.add(hash);
    }
    console.log(unique);
    const result = [];
    for(hash of unique) {
        const currentArr = [];
        hash.split('#').forEach((num) => {
            currentArr.push(+num);
        });
        result.push(currentArr);
    }
    result.push([]);
    return result;
};

var subsets = function(nums) {
    
    const result = [];
    function dfs(i, numArr) {
        if(i === nums.length) {
            result.push(numArr);
            return;
        }

        const leftArr = numArr.slice(0);
        leftArr.push(nums[i]);
        dfs(i+1, leftArr);
        dfs(i+1, numArr.slice(0));
    }

    dfs(0, []);
    return result;
};