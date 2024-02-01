/**
 * Sorting | Greedy
 * Time O(n*log(n)) | Space O(n)
 * https://leetcode.com/problems/divide-array-into-arrays-with-max-difference
 * 
 * @param {number[]} nums
 * @param {number} k
 * @return {number[][]}
 */
var divideArray = function(nums, k) {
    
    nums.sort((a,b) => a-b);

    const arrs = [];

    while(nums.length) {
        const arr = [];
        let i = 0;

        while(i < 3) {
            arr.push(nums.pop());
            i++;
        };
        arr.reverse();
        arrs.push(arr);
    }

    arrs.reverse();

    let i = 0;
    while(i < arrs.length) {
        if(arrs[i][2] - arrs[i][0] > k) return [];
        i++;
    }

    return arrs;
};