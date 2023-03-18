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


const nums = [1,2,2];
subsetsWithDup(nums);
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