var checkPossibility = function(nums) {

    let changeCount = 0;
    for(let i = 1; i < nums.length; i++) {
        if(nums[i] < nums[i-1]) {
            changeCount++;
            if(changeCount === 2) return false;
            if(i < 2 || nums[i - 2] <= nums[i]) {
                nums[i-1] = nums[i]
            } else {
                nums[i] = nums[i-1];
            }
        }
    }
    
    return true;
    }