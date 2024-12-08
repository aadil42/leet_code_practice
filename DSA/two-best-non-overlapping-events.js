/**
 * Binary Search
 * Time O(n*log(n)) | Space O(1)
 * https://leetcode.com/problems/two-best-non-overlapping-events
 * @param {number[][]} events
 * @return {number}
 */
var maxTwoEvents = function(events) {
      
    events = events.sort((a,b) => a[1] - b[1]);

    const prefixSum = [events[0][2]];
    for(let i = 1; i < events.length; i++) {
        prefixSum[i] = Math.max(prefixSum[i-1], events[i][2]); 
    }

    let max = 0;
    for(let i = 0; i < events.length; i++) {
        const idx = bs(events, i-1, events[i][0] - 1);
        if(idx !== -1) {
            max = Math.max(max, prefixSum[idx] + events[i][2]);
        }
    }

    for(let i = 0; i < events.length; i++) {
        max = Math.max(max, events[i][2]);
    }

    return max;
};

const bs = (events, right, targetEnd) => {

    let left = 0;
    let ans = -1;

    while(left <= right) {

        const mid = left + Math.floor(((right-left)/2));

        const endTime = events[mid][1];
        if(endTime <= targetEnd) {
            ans = mid;
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return ans;
}