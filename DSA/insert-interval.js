/**
 * Array | Intervals | Sorting
 * Time O(n) | Space O(1)
 * https://leetcode.com/problems/insert-interval/
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert2nd = function(intervals, newInterval) {
    
    let i = 0;

    if (!intervals.length) {
        intervals.push(newInterval);
        return intervals;
    }
    if (newInterval[1] < intervals[0][0]) {
        intervals.unshift(newInterval);
        return intervals;
    }

    const isOverLapping = (rightInt) => {
        const [left, right] = rightInt;
        
        if (newInterval[0] >= left && newInterval[0] <= right) return true;
        if (newInterval[1] >= left && newInterval[1] <= right) return true;
        if (newInterval[0] <= left && newInterval[1] >= right) return true;
        return false;
    }

    const isInMiddle = (leftInt, rightInt) => {

        if (newInterval[0] > leftInt[1] && newInterval[1] < rightInt[0]) return true;
        return false;
    }

    let didOverLap = false;

    while (i < intervals.length) {
        
        while (i < intervals.length && isOverLapping(intervals[i])) {
            
            if (!didOverLap) {
                startMergeIdx = i;
            }
            didOverLap = true;
            i++;
        }

        if (didOverLap) break;

        if (i+1 < intervals.length && isInMiddle(intervals[i], intervals[i+1])) {

            intervals.splice(i+1, 0, newInterval);

            // console.log(intervals, "return middle");
            return intervals;
        }

        i++;
    }

    if (didOverLap) {
        const left = Math.min(intervals[startMergeIdx][0], newInterval[0]);
        const right = Math.max(intervals[i-1][1], newInterval[1]);

        // console.log(left, right, i, startMergeIdx);
        intervals.splice(startMergeIdx, i-startMergeIdx, [left, right]);
        // console.log(intervals, "return merge")
        return intervals;
    }
    
    intervals.push(newInterval);
    // console.log(intervals, "return end");
    return intervals;
};

var insert1st = function(intervals, newInterval) {
    
    const result = [];

    for(let i = 0; i < intervals.length; i++) {
        if(newInterval[1] < intervals[i][0]) {
            result.push(newInterval);
            result.push(...intervals.slice(i));
            return result;
        } else if(newInterval[0] > intervals[i][1]) {
            result.push(intervals[i]);
        } else {
            newInterval = [
                Math.min(newInterval[0], intervals[i][0]),
                Math.max(newInterval[1], intervals[i][1])
            ];
        }
    }
    result.push(newInterval);
    return result;
};

const intervals = [[1,5]], newInterval = [2,3];
console.log(insert(intervals, newInterval));