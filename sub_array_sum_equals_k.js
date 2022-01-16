
// here's the solution
// https://www.youtube.com/watch?v=fFVZt-6sgyo

var subarraySum = function(nums, k) {
    

const prefixMap = {};
let totalSubArray = 0;
let ongoingSum = 0;

prefixMap[0] = 1;
for(let i = 0; i < nums.length; i++) {
    ongoingSum += nums[i];
    if(prefixMap[ongoingSum - k]){
        totalSubArray += prefixMap[ongoingSum - k];
    }
    prefixMap[ongoingSum] = (prefixMap[ongoingSum] ? prefixMap[ongoingSum] + 1: 1);
}

return totalSubArray;
};

const nums = [-1, 1, 0];
const k = 0;
console.log(subarraySum(nums, k));