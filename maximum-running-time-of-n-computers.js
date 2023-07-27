/**
 * Binary Search 
 * 
 * Time O(n*log(n)) | Space O(1)
 * @param {number} n
 * @param {number[]} batteries
 * @return {number}
 */
var maxRunTime = function(n, batteries) {
    
    let right = Math.floor(batteries.reduce((acc,bat) => acc+bat, 0)/n); 
    let left = Math.min(...batteries);
    let ans = 0;
    const runningPossible = (time) => {
        const target = time*n;
        let totalRunTime = 0;
        for(let i = 0; i < batteries.length;  i++) {
            totalRunTime += Math.min(time, batteries[i]);
        }
        return totalRunTime >= target;
    }

    while(left <= right) {
        const mid = left + Math.floor((right - left)/2);
        if(runningPossible(mid)) {
            left = mid + 1;
            ans = mid;
        } else {
            right = mid - 1;
        }
    }
    return ans;
};
