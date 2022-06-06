var findMin = function(nums) {
  
    if(!nums || !nums.length) return -1;
    let left = 0;
    let right = nums.length - 1;

    while(left < right) {
        const mid = Math.floor((left + right)/2);
        if(nums[mid] < nums[right]) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }

    return nums[left];
};

const nums = [11,13,15,17];
console.log(findMin(nums));
