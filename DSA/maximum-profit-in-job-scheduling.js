/**
 * DP | Recursion | Sorting | Binary Search
 * Time O(n) | Space O(n)
 * https://leetcode.com/problems/maximum-profit-in-job-scheduling
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number[]} profit
 * @return {number}
 */
var jobScheduling = function(startTime, endTime, profit) {
    

    let allParams = startTime.map((time, i) => {
        return [time, endTime[i], profit[i]];
    });
    
    allParams = allParams.sort((a,b) => {
        return a[0] - b[0];
    });
    
    for(let i = 0; i < allParams.length; i++) {
        startTime[i] = allParams[i][0];
        endTime[i] = allParams[i][1];
        profit[i] = allParams[i][2];
    }

    const search = (startIndex, target) => {
        let left = startIndex;
        let right = startTime.length - 1;
        let index;

        while(left <= right) {
            const mid = left + Math.floor((right-left)/2);

            if(startTime[mid] >= target) {
                index = mid;
                right = mid - 1;
            }  else {
                left = mid + 1;
            }
        }
        return index;
    }

    const cache = new Map();
    const dfs = (index) => {
        if(cache.has(index)) return cache.get(index);
        if(index === startTime.length) return 0;

        const nextIndex =  search(index+1, endTime[index]);

        let max = 0;
        max = (nextIndex && (profit[index] + dfs(nextIndex))) || profit[index];
        max = Math.max(max, dfs(index+1));
        cache.set(index, max);
        return max;
    }

    return dfs(0);
};