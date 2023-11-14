/**
 * Hashing with Array
 * Time O(n) | Space O(n)
 * https://leetcode.com/problems/top-k-frequent-elements/
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    
    const numFrequency = {};

    nums.forEach((num) => {
        const frequency = numFrequency[num] || 0;
        numFrequency[num] = frequency+1;
    });

    let frequencyArr = [];

    for(const key in numFrequency) {
        const frequency = numFrequency[key];
        const num = +key;
        if(frequencyArr[frequency]) {
            const numbers = frequencyArr[frequency];
            numbers.push(num);
        } else {
            frequencyArr[frequency] = [num];
        }
    }


    frequencyArr.reverse();
    let i = 0;
    const mostFrequent = [];

    while(k) {
        const numbers = frequencyArr[i];
        for(let index = 0; numbers && index < numbers.length && k; index++) {
            mostFrequent.push(numbers[index]);
            k--;
        }
        i++;
    }

    return mostFrequent;
};


/**
 * Sorting | Hashing
 * Time O(n*log(n)) | Space O(n)
 * https://leetcode.com/problems/top-k-frequent-elements
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent1 = function(nums, k) {
    
    const numFrequency = {};

    nums.forEach((num) => {
        const frequency = numFrequency[num] || 0;
        numFrequency[num] = frequency+1;
    });

    const frequencyArr = [];

    for(const key in numFrequency) {
        frequencyArr.push([numFrequency[key], key]);
    }

    frequencyArr.sort((a,b) => b[0]-a[0]);

    let i = 0;
    const result = [];
    while(k) {
        result.push(+(frequencyArr[i][1]))
        k--;
        i++;
    }
    
    return result;
};