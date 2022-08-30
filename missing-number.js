var missingNumber = function(nums) {

    let n = nums.length;
    let origanalTotal = (n) * ((n+1) / 2);

    let givenTotal = 0;
    for(let i = 0; i < nums.length; i++) {
        givenTotal += nums[i];
    }

    return origanalTotal - givenTotal;
};

// xor method
var missingNumberXor = function(nums) {

    let result = 0;
    for(let i = 0; i <= nums.length; i++) {
        result = result ^ i;
    }
    for(let i = 0; i < nums.length; i++) {
        result = result ^ nums[i];
    }
    return result;
};

const nums = [9,6,4,2,3,5,7,0,1];
console.log(missingNumberXor(nums));


