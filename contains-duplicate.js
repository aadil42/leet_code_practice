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