/**
 * Time O(n^3) | Space O(n^2).
 * @param {number[]} nums
 * @return {number}
 */


//  brute force without caching.
// var maxCoins = function(nums) {
 
//  function dfs(numsCopy) {
//     //  console.log(numsCopy);
//      if(numsCopy.length === 1) {
//          return numsCopy[0];
//      };

//      let maxVal = 0;
//      for(let i =  0; i < numsCopy.length; i++) {
//          const pre = numsCopy[i-1] ? numsCopy[i-1] : 1;
//          const post = numsCopy[i+1] ? numsCopy[i+1] : 1;
//          console.log(pre, post);
//          const currentMultiplication = pre * post * numsCopy[i];

//          const recursiveAns = dfs([...numsCopy.slice(0, i),...numsCopy.slice(i+1)]);
//          maxVal = Math.max(currentMultiplication + recursiveAns, maxVal); 
//      }
//      return maxVal;
//  }

//  return dfs(nums);
// };


// with caching. 
var maxCoins = function(nums) {
 
    const cache  = {};

    function dfs(i,j) {
        if(i > j) return 0;
        const key = i+'-'+j;
        if(cache[key]) return cache[key];
        let max = 0;
        for(let k = i; k <= j; k++) {
            let CurrentVal = nums[k];
            if(i - 1 >= 0) CurrentVal *= nums[i-1];
            if(j + 1 < nums.length) CurrentVal *= nums[j+1];

            max = Math.max(max, dfs(i, k - 1) + CurrentVal + dfs(k + 1, j));
        }

        cache[key] = max;
        return cache[key];
    }

    return dfs(0, nums.length - 1);
};

