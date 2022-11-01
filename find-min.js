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

const nums = [3,4,5,1,2];
// console.log(findMin(nums));


var findMinR = function(nums) {
  
    let left = 0;
    let right = nums.length - 1;

    while(left < right) {
        const mid = Math.floor((left + right)/2);

        if(nums[mid] > nums[right]) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }

    // you can return nums[right] too.
    return nums[left]; 
};

console.log(findMinR(nums))