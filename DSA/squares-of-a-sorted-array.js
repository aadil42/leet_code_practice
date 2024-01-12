/**
 * Time O(n*log(n)) | SpaceO(n);
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    
    return nums.map((num) => Math.abs(num)).sort((a,b) => a-b).map((num) => num*num);
};

/**
 * Linear Time
 * Time O(n) | Space O(n)
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    
    let left = 0;
    let right = nums.length - 1;
    const squareArr = [];
    while(left <= right) {
        const leftS = nums[left] * nums[left];
        const rightS = nums[right] * nums[right];
        if(leftS > rightS) {
            squareArr.push(leftS);
            left++;
        } else {
            squareArr.push(rightS);
            right--;
        }
    }

    return squareArr.reverse();
};