/**
 * Boyer-Moore Algorithm
 * Time O(n) | Space O(1)
 * https://leetcode.com/problems/majority-element-ii/
 * 
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
    
    let m1 = null;
    let m2 = null;
    let count1 = 0;
    let count2 = 0;

    let i = 0;
    while(i < nums.length) {
        if(m1 === null || m1 === nums[i]) {
            m1 = nums[i];
            count1++;
            i++;
            continue;
        }
        if(m2 === null || m2 === nums[i]) {
            m2 = nums[i];
            count2++;
            i++;
            continue;
        }
        if(!count1) {
            m1 = nums[i];
            count1++;
            i++;
            continue;
        }
        if(!count2) {
            m2 = nums[i];
            count2++;
            i++;
            continue;
        }
        count1--;
        count2--;
        i++;
    }

    count1 = 0, count2 = 0;
    i = 0;
    while(i < nums.length) {
        if(nums[i] === m1) count1++;
        if(nums[i] === m2) count2++;
        i++; 
    }

    const result = [];
    console.log(count1, count2);
    if(count1 > Math.floor(nums.length/3)) result.push(m1);
    if(count2 > Math.floor(nums.length/3)) result.push(m2);

    return result;
};

/**
 * Hashing
 * Time O(n) | Space O(n)
 * https://leetcode.com/problems/majority-element-ii/
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement1 = function(nums) {
    
    const limit = nums.length/3;
    const numFrequency = {};
    const result = new Set();

    nums.forEach((num) => {
        const frequency = numFrequency[num] || 0;
        numFrequency[num] = frequency+1;
        if(numFrequency[num] > limit) result.add(num);
    });

    return [...result];
};