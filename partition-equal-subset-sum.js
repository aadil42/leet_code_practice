/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
    
    if(sum(nums) % 2) return false;
    const target = sum(nums) / 2;

    let dp = new Set();
    dp.add(0);
    for(let i = 0; i < nums.length; i++) {
        const nextDp = new Set();
        for(let data of dp) {
            nextDp.add(data + nums[i]);
            nextDp.add(data);
        }
        dp = nextDp;
    }

    function sum(arr) {
        return arr.reduce((acc, curr) => {
            return acc + curr;
        },0);
    }
    return dp.has(target) ?  true : false;
};