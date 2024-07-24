/**
 * Time O(n*log(n)) | Space O(n)
 * Sorting | Hashing | Math
 * https://leetcode.com/problems/sort-the-jumbled-numbers/
 * @param {number[]} mapping
 * @param {number[]} nums
 * @return {number[]}
 */
var sortJumbled = function(mapping, nums) {
    const mapped = {};
    for(let i = 0; i < mapping.length; i++) {
        mapped[i] = mapping[i];
    }

    for(let i = 0; i < nums.length; i++) {

        let newNum = 0;
        let num = nums[i];
        let factor = 1;
        let once = false; // for the edge case when num is 0 and points to non-zero number

        while(num || !once) {
            const digit = num%10;
            newNum += mapped[digit]*factor;
            factor *= 10;
            num = Math.floor(num/10);
            once=true;
        }
        
        nums[i] = [nums[i], newNum];
    }

    return nums.sort((a,b) => a[1]-b[1]).map((num) => num[0]);
};