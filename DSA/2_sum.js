var twoSum = function(nums, target) {
    const myMap = new Map();

    for(let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if(myMap.get(complement) !== undefined) {
            return [myMap.get(complement), i];
        }
        myMap.set(nums[i], i);
    }
};

const inputArr = [3,2,4];
const targetNum = 6;

console.log(twoSum(inputArr, targetNum));