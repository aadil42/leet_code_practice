var productExceptSelf = function(nums) {
    
let currunt = 1;
const result = [];
nums.forEach((num) => {

result.push(currunt);
currunt *=  num;
});

currunt = 1;

for(let i = nums.length  -1; i >=0; i--) {
    result[i] *= currunt;
    currunt *= nums[i];
}

return result;
};


const nums = [2,3,4,5];
console.log(productExceptSelf(nums));