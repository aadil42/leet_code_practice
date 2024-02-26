/**
 * Two Pointer
 * Time O(n) | Space O(1)
 * https://leetcode.com/problems/squares-of-a-sorted-array/
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    

    // all nums are positive
    if(nums[0] > -1) {
        return nums.map((num) => num*num);
    }

    // all nums are negetive
    if(nums[nums.length - 1] < 0) {
        return nums.map((num) => num*num).reverse();
    }

    const squares = [];
    let pivotIdx;

    for(let i = 0; i < nums.length; i++) {
        if(nums[i] > -1) {
            pivotIdx = i;
            break;
        }
    }

    let rightIdx = pivotIdx;
    let leftIdx = pivotIdx-1;

    while(rightIdx < nums.length && leftIdx > -1) {
        if(nums[rightIdx]**2 <= nums[leftIdx]**2) {
            squares.push(nums[rightIdx]**2);
            rightIdx++;
        } else {
            squares.push(nums[leftIdx]**2);
            leftIdx--;
        }
    }

    while(rightIdx < nums.length) {
        squares.push(nums[rightIdx]**2);
        rightIdx++;
    }

    while(leftIdx > -1) {
        squares.push(nums[leftIdx]**2);
        leftIdx--;
    }

    return squares;
};

/**
 * Time O(n*log(n)) | SpaceO(n);
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares1 = function(nums) {
    
    return nums.map((num) => Math.abs(num)).sort((a,b) => a-b).map((num) => num*num);
};

/**
 * Linear Time
 * Time O(n) | Space O(n)
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares2 = function(nums) {
    
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