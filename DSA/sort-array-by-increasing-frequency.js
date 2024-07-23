/**
 * Sort | Hashing
 * Time O(n*log(n)) | Space O(n)
 * https://leetcode.com/problems/sort-array-by-increasing-frequency
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function(nums) {
    
    const frequency = {};

    for(let i = 0; i < nums.length; i++) {
        const num = nums[i];
        frequency[num] = (frequency[num] && frequency[num] + 1) || 1;
    }

    let mappedNums = [];
    for(const key in frequency) {
        mappedNums.push([frequency[key], parseInt(key)]);
    }

    mappedNums = mappedNums.sort((a,b) => {
        if(a[0] === b[0]) return b[1] - a[1];
        return a[0] - b[0];
    }).map((mNum) => {
        let freq = mNum[0];
        const temp = [];
        while(freq) {
            temp.push(mNum[1]);
            freq--;
        }
        return temp;
    });

    const ans = [];
    for(let i = 0; i < mappedNums.length; i++) {
        ans.push(...mappedNums[i]);
    }

    return ans;
};