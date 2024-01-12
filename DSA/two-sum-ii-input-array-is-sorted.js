/**
 * Two Pointers
 * https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/
 * It is guaranteed that there will be exactly one solution
 * 
 * Time O(n) | Space O(1)
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    
    let left = 0;
    let right = numbers.length - 1;

    while(left < right) {
        if(numbers[left] + numbers[right] === target) return [left+1, right+1];
        if(numbers[left] + numbers[right] < target) left++;
        if(numbers[left] + numbers[right] > target) right--;
    }
};