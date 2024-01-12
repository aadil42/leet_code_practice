var containsDuplicate = function(nums) {
    // 2,3,5,1,5,3
    nums.sort((a,b) => {
        return b - a;
    });
    
    for(let i = 0; i < nums.length; i++){
        if(nums[i] == nums[i+1]) {
            return true;
        }
    }
    
    return false;
};

// solved the same problam second time for revision purpose. 

var containsDuplicateR = function(nums) {
    
    const numberSet = new Set();
    
    
    for(let i = 0; i < nums.length; i++) {
        if(numberSet.has(nums[i])) return true;
        numberSet.add(nums[i]);
    }
    
    return false;
};