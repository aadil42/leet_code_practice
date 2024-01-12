/** 40 out of 42 cases passes I don't know what's wrong. 
 * @param {number[]} nums
 * @return {number}
 */
var maxSumMinProduct = function(nums) { 
    // let max = 0;
    // let m = 10**9 + 7;
    // for(let i = 0; i < nums.length; i++) {
    //     let currentSum = 0;
    //     let currentSmallest = nums[i];
    //     for(let j = i; j < nums.length; j++) {
    //         currentSum += nums[j];
    //         currentSmallest = Math.min(currentSmallest, nums[j]);
    //         max = Math.max(currentSum * currentSmallest, max);
    //     }
    // }

    let max = 0;
    const stack = [];
    const prefix = [0];

    let accumlator = 0; 
    nums.forEach((num) => {
        accumlator += num;
        prefix.push(accumlator);
    });  
    
    for(let i = 0; i < nums.length; i++) {
        let start = i;
        while(stack.length && nums[i] < stack[stack.length - 1][1]) {
            const element = stack.pop();
            const total = prefix[i] - prefix[element[0]];
            max = Math.max(max, element[1] * total);
            start = element[0];
        }
        stack.push([start, nums[i]]);
    }

    for(let i = 0; i < stack.length; i++) {
        const element = stack[i];
        const total = prefix[nums.length] - prefix[element[0]];
        max = Math.max(max, total * element[1]);
    }

    return max % (10**9 + 7);
};


/**
 * brute force
 * 
 * Time O(n^2) | Space O(1);
 * @param {number[]} nums
 * @return {number}
 */
var maxSumMinProduct = function(nums) { 
    
    const getTotal = (start,end) => {
        let total = 0;
        for(let i = start; i < end;  i++) {
            total += nums[i];
        }
        return total;
    }

    let max = 0;
    for(let i = 0; i < nums.length; i++) {
        max = Math.max(max, nums[i] * nums[i]);
        for(let j = i + 1; j < nums.length; j++) {
            const min = Math.min(...nums.slice(i, j + 1));
            max = Math.max(max, min * getTotal(i,j + 1));
        }
    }

    return max;
};