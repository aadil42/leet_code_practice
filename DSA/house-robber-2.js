    
var rob = function(nums) {
    
    if(nums.length === 1) return nums[0];
    
    let includeFirst = preRob(nums.slice(1));
    let notIncludeFirst = preRob(nums.slice(0, nums.length - 1));
    return Math.max(includeFirst, notIncludeFirst);
    
};

var preRob = function(nums) {
    
    let rob1 = 0;
    let rob2 = 0;
    
    let temp = 0;
    for(let i = 0; i < nums.length; i++) {
        temp = Math.max(rob1 + nums[i], rob2);
        rob1 = rob2;
        rob2 = temp;
    }
    
    
    return rob2;
}

const nums =  [1,2,3];
console.log(rob(nums));


// second time.
var robR = function(nums) {
    
    if(nums.length === 1) return nums[0];
    const preSum = subSrob(nums.slice(0, nums.length - 1));
    const postSum = subSrob(nums.slice(1));
  
    return Math.max(preSum, postSum);
  };
  
  function subSrob(nums) {
      console.log(nums);
     
      if(nums.length === 1) return nums[0];
      if(nums.length === 2) return Math.max(nums[0], nums[1]);
      nums[1] = Math.max(nums[0], nums[1]);
      for(let i = 2; i < nums.length; i++) {
       nums[i] = Math.max(nums[i - 1], nums[i] + nums[i - 2]);
      }
  
      return nums[nums.length - 1];
  }