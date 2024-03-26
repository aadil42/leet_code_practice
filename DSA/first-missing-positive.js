/**
 * Basically, we're going to store the numbers in the array index by converting
 * the number to negetive. negetive doesn't matter. that's why we can do it.
 * Time O(n) | Space O(1)
 * @param {number[]} nums
 * @return {number}
 */
  var firstMissingPositive = function(nums) {
    //-1 1 3 4
    const swap = (a,b) => {
        const temp = nums[a];
        nums[a] = nums[b];
        nums[b] = temp;
    }
    // swap positions
    for(let i = 0; i < nums.length; i++) {
        const el = nums[i];
        const chair = el - 1;
        if(el >= 1 &&  el <= nums.length + 1 && nums[chair] !== el) {
             swap(chair, i);
                i--; // this decrement is important // check this input [3,4,-1,1]
        }
    }

    for(let i = 0; i < nums.length; i++) {
        if(nums[i] !== i+1) return i+1;
    } 

    return nums.length + 1;
};


/**
 * Hashing
 * Time O(n) | Space O(n)
 * https://leetcode.com/problems/first-missing-positive
 * 
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive0 = function(nums) {
    const numberSet = new Set(nums);
    let i = 1;
    while(true) {
        if(!numberSet.has(i)) return i;
        i++;
    }
};

/**
 * https://leetcode.com/problems/first-missing-positive/
 * Time O(n) | Space O(n)
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive1 = function(nums) {

    const numberSet = new Set(nums);
      
      let i = 1;
      while(numberSet.has(i)) {
          i++;
      }
  
      return i;
};

/**
 * 
 * Time O(n) | Space O(n)
 * https://leetcode.com/problems/first-missing-positive/
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive2 = function(nums) {
    
    // convert every negative to 0;
    nums = nums.map((num) => {
        if(num < 0) return 0;
        return num;
    });

    // multipley every index corrosponding to the num nagative 1.
    nums.forEach((num) => {
        num = Math.abs(num);
        if(nums[num - 1] > 0) {
            nums[num - 1] *= -1;
        }         
        if(nums[num - 1] === 0) {
            nums[num - 1] = -1 * (nums.length + 1)
        }
    });

    // go from 1 to nums.length+1
    let i = 1;
    while(i < nums.length + 1) {
        if(nums[i-1] >= 0) return i;
        i++;
    }
    return nums.length + 1;
};
