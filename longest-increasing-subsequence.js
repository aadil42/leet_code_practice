var lengthOfLIS = function(nums) {
    
const dpArray = new Array(nums.length).fill(1);

for(let i = nums.length - 1; i > -1; i--) {
    for(let j = i + 1; j < nums.length; j++) {
        if(nums[i] < nums[j]) {
            dpArray[i] = Math.max(dpArray[i], 1 + dpArray[j]);
        }
    }
}

return Math.max(...dpArray);
};

const nums = [10,9,2,5,3,7,101,18];
console.log(lengthOfLIS(nums));