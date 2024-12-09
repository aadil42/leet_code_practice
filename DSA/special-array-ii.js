/**
 * Hashing | Logic | prefix-sub-array
 * Time O(n) | Space O(n)
 * https://leetcode.com/problems/special-array-ii
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {boolean[]}
 */
var isArraySpecial = function(nums, queries) {
    
    const alternatingSubArrays = [];

    const getAlternateSubArrayFrom = (start) => {
        
        while (start < nums.length) {
            if (nums[start]%2 === nums[start+1]%2) return start;
            start++;
        }

        return start-1;
    }
    
    let start = 0;

    while (start < nums.length) {
        const end = getAlternateSubArrayFrom(start);
        alternatingSubArrays.push([start, end]);
        start = end+1;
    }

    const alternateSubArrayMap = {};
    
    for (let i = 0; i < alternatingSubArrays.length; i++) {
        let [start, end] = alternatingSubArrays[i];
        while (start <= end) {
            alternateSubArrayMap[start] = end;
            start = start+1;
        }
    }

    const ans = [];
    for (let i = 0; i < queries.length; i++) {
        const [start, end] = queries[i];

        const maxEnd = alternateSubArrayMap[start];
        if (end <= maxEnd) {
            ans.push(true);
        } else {
            ans.push(false);
        }
    }

    return ans;
};