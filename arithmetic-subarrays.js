/**
 * Brute Force | Sorting
 * Time O(n*m*n*log(n)) | Space O(n)
 * https://leetcode.com/problems/arithmetic-subarrays
 * @param {number[]} nums
 * @param {number[]} l
 * @param {number[]} r
 * @return {boolean[]}
 */
var checkArithmeticSubarrays = function(nums, l, r) {
    
    
    const gaussTotal = (firstVal, lastVal, len) => {
        return (firstVal+lastVal) * len/2;
    }

    const isArethmeticSequance = (left, right) => {

        let total = 0;
        let min = Infinity;
        let max = -Infinity;
        
        const arr = nums.slice(left, right+1);
        arr.sort((a,b) => a-b);
        const diff = arr[1] - arr[0];
        for(let i = 0; i < arr.length - 1; i++) {
            if(arr[i+1]-arr[i] !== diff) return false;
        }
        return true;
        
        // let index = left;
        // while(index < right + 1) {
        //     min = Math.min(min, nums[index]);
        //     max = Math.max(max, nums[index]);
        //     total+= nums[index];
        //     index++;
        // }
        // // console.log(min, max, right-left+1,'-------',total)
        // console.log(gaussTotal(min, max, right-left+1), '------' ,total);
        // console.log(gaussTotal(min, max, right-left+1) === total);
        // return gaussTotal(min, max, right-left+1) === total;
    }

    let  index = 0;
    const result = [];
    while(index < l.length) {
        const left = l[index];
        const right = r[index];
        result.push(isArethmeticSequance(left, right));
        index++;
    }

    return result;
};