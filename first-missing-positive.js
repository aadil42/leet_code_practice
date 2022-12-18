var firstMissingPositive = function(nums) {

    const numberSet = new Set(nums);
      
      let i = 1;
      while(numberSet.has(i)) {
          i++;
      }
  
      return i;
  };