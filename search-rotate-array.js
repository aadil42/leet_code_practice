var search = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    
    if(!nums || !nums.length) return -1;
    // this will give us the smallest elemetn in log(n) time
    while(left < right) {
        const mid = Math.floor((left + right)/2);
        
        if(nums[mid] > nums[right]) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }

 let start = left;
 left = 0;
 right = nums.length - 1;
    
    if(nums[start] === target) return start;
    if(target >= nums[start] && target <= nums[right]) {
        left = start;
    } else {
        right = start;
    }
    
    while(left <= right) {
        const mid = Math.floor((left + right)/2);
        
        if(nums[mid] === target) {
            return mid;
        } else if(nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    if(nums[left] == target) return left;
    if(nums[right] == target) return right;
    
    return -1;
};



const nums = [1,3,5];
const target = 5;
console.log(search(nums, target));