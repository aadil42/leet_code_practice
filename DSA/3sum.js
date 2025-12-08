var threeSum = function(nums) {
    
sortedNums = nums.sort((a,b) => {
    return a - b;
});

let outputArr = [];
for(let i = 0; i < sortedNums.length - 2; i++) {
    if(sortedNums[i] !== sortedNums[i-1]) {
        let low = i + 1;
        let heigh = sortedNums.length - 1;
        // let targetSum = 0 - sortedNums[i];
        while(low < heigh) {
            if(sortedNums[low] + sortedNums[heigh] + sortedNums[i] === 0) {
                outputArr.push([sortedNums[i], sortedNums[low], sortedNums[heigh]]);
                 while(sortedNums[low] === sortedNums[low+1]) low++;
                low++;
            } else if(sortedNums[low] + sortedNums[heigh] + sortedNums[i] > 0) {
                heigh--;
            } else if(sortedNums[low] + sortedNums[heigh] + sortedNums[i] < 0) {    
                low++;
            }
        }
    }
}
return outputArr;

};

const nums = [-1,0,1,2,-1,-4];
// console.log(threeSum(nums));

// burte force
var threeSumR = function(nums) {
    nums.sort((a, b) => {
        return a - b;
    });

    const result = [];
    for(let i = 0; i < nums.length - 2; i++) {

        // this condition is pretry important it keeps the duplicate out of our result array.
        if(nums[i] !== nums[i - 1]) {

            let low = i + 1;
            let heigh = nums.length - 1;

            while(low < heigh) {

                if(nums[low] + nums[heigh] + nums[i] === 0) {

                    result.push([nums[i],nums[low],nums[heigh]]);
                    
                    // below while loop is pretty important it keeps the duplicate out of our result array.
                    while(nums[low] === nums[low+1]) low++;
                    low++;
                } else if(nums[low] + nums[heigh] + nums[i] > 0) {
                    heigh--;
                } else {
                    low++;
                }
            }
        }
    }

    return result;
};

console.log(threeSumR(nums));


/**
 * Two pointers | Sorting
 * Time O(n^2) | Space O(n)
 * https://leetcode.com/problems/3sum/submissions/1850153819/
 * @param {number[]} nums
 * @return {number[][]}
 */
//  for revision purposes.
const sortO1 = (arr) => {

    if (arr[0] > arr[1]) [arr[0], arr[1]] = [arr[1], arr[0]];
    if (arr[0] > arr[2]) [arr[0], arr[2]] = [arr[2], arr[0]];
    if (arr[1] > arr[2]) [arr[1], arr[2]] = [arr[2], arr[1]];

    return arr;
}
const getTwoSum = (start, end, arr, target, ans, num) => {


    while (start < end) {
        const total = arr[start] + arr[end] 
        if (total === target) {
            ans.push(sortO1([num, arr[start], arr[end]]));
            end--;
            start++;
        }
        
        if (total > target) end--;
        if (total < target) start++;
    }

    return ans;
}
var threeSum = function(nums) {
    
    nums = nums.sort((a,b) => a-b);

    // everything is 0 so no point executing further.
    if (nums[0] === 0 && nums[nums.length - 1] === 0) return [[0,0,0]];

    let result = [];
    for (let i = 0; i < nums.length; i++) {
        const target = nums[i] * -1;

        const threeSumPairs = getTwoSum(i+1, nums.length - 1, nums, target, [], nums[i]);
        threeSumPairs.forEach((pairs) => result.push(pairs));
    }

    const uniqueResults = new Set(
        result.map((r) => {
            return r.join(',');
        })
    );

    return [...uniqueResults].map((r) => {
        return r.split(',').map((r1) => {
            return Number(r1);
        });
    });

};
