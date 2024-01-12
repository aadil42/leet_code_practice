var findMaxConsecutiveOnes = function(nums) {
    let currunt_count = 0;
    let largest_1 = 0;
    
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] === 1) {
            currunt_count += 1;
            largest_1 = Math.max(currunt_count, largest_1);
        } else {
            currunt_count = 0;
        }
    }
    
    return largest_1;
};