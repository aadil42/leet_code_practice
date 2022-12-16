// brute force O(n^2)
var checkSubarraySum = function(nums, k) {
    
    for(let i = 0; i < nums.length; i++) {
        if(multipleOf(i,nums,k)) return true;
    }

    return false;
};

function multipleOf(i,nums,k) {

    let result = nums[i];
    for(let j = i + 1; j < nums.length; j++) {
       result *= nums[j];
       console.log(result);
       if(!(result%k)) return true;
    }
    return false;
}


// efficient algorithm O(n)
var checkSubarraySum = function(arr, k) {
    let sum = 0;
    const remainderMap = new Map();
    remainderMap.set(0,-1);
  
    for(let i = 0; i < arr.length;  i++) {
        sum += arr[i];
        if(remainderMap.has(sum%k)) {
            if(i - remainderMap.get(sum%k) > 1) {
                return true;
            } 
        } else {
                remainderMap.set(sum%k,i);
          }
    }
  
    console.log(remainderMap);
  
    return false;
  };