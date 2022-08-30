var missingNumber = function(nums) {

    let n = nums.length;
    let origanalTotal = (n) * ((n+1) / 2);

    let givenTotal = 0;
    for(let i = 0; i < nums.length; i++) {
        givenTotal += nums[i];
    }

    return origanalTotal - givenTotal;
};

const nums = [3,0,1];
console.log(missingNumber(nums));


