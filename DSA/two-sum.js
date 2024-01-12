var twoSum = function(nums, target) {
    
    const myHash = new Map();

    for(let i = 0; i < nums.length; i++) {
        if(myHash.has(target - nums[i])) {
            return [myHash.get(target - nums[i]), i];
        } else {
            myHash.set(nums[i], i);
        }
    }

    return 'returning from the end';
};


const nums = [2,7,11,15];
const target = 9;

console.log(twoSum(nums, target));