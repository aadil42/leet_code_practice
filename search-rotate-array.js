var search = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    

    // this will give us the smallest elemetn in log(n) time
    while(left < right) {
        const mid = Math.floor((left + right)/2);
        
        if(nums[mid] > nums[right]) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }

 let start = left; // you can also set start to be right since they will be pointing to the smallest value in the array.
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



const nums = [10,11,12,13,14,15,0,1,2,3,4,5,6,7,8,9];
const target = 1;

// console.log(search(nums, target));
// solving again.
var searchR = function(nums, target) {
    
    let left = 0;
    let right =  nums.length - 1;

    // find the smallest element
    while(left < right) {

        const mid = Math.floor((right + left) / 2);

        if(nums[mid] > nums[right]) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }

    // finding the part in which we'll be performing binary search
    if(target > nums[nums.length - 1]) {
        left = 0;
        right = right  - 1;
    } else {
        right = nums.length - 1;
    }

    // doing the binary search on the proper portion of the array.
    while(left <= right) {
        const mid = Math.floor((left + right) /2);
        if(target === nums[mid]) {
            return mid;
        } else if(target > nums[mid])  {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return -1;
};

console.log(searchR(nums, target));