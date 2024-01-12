var rob = function(nums) {
    
    let rob2 = 0;
    let rob1 = 0;
    
    for(let i = 0; i < nums.length; i++) {
        let temp = Math.max(nums[i] + rob1, rob2);
        rob1 = rob2;
        rob2 = temp; 
    }
    
    return rob2;
};


/// second time
var robR = function(nums) {
    
   
    if(nums.length == 1) return nums[0];
    nums[1] = Math.max(nums[0], nums[1]);

    for(let i = 2; i < nums.length; i++) {
        console.log(nums[i - 1], nums[i] + nums[i-2]);

        nums[i] = Math.max(nums[i-1], nums[i] + nums[i-2]);
    }

    console.log(nums);
    return nums[nums.length - 1];
};