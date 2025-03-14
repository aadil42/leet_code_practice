/**
 * Sorting | Array
 * Time O(n*log(n)) | Space O(n)
 * https://leetcode.com/problems/merge-intervals/
 * This is simpler than 1st one.
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge2nd = function(intervals) {
    
    intervals.sort((a,b) => a[0]-b[0]);

    let i = 0; 
    const merged = [];

    while (i < intervals.length) {

        let [left, right] = intervals[i];

        while (i + 1 < intervals.length 
              && intervals[i+1][0] >= left
              && intervals[i+1][0] <= right) {

              right = Math.max(right, intervals[i+1][1]);
              i++;
        }

        merged.push([left, right]);
        i++;
    }

    return merged;
};

var merge1st = function(intervals) {
    const result = [];
    // sorting the intervals;
    intervals = intervals.sort((a,b) => {
        return a[0] - b[0];
    });
    let i = 0;
    let j = 1;
    console.log(intervals);
    while(j <= intervals.length) {
        // console.log(isOverLapping(intervals[i], intervals[j]));
        if(isOverLapping(intervals[i], intervals[j])) {
            // merge and push in result;
            const merged = mergeTwo(intervals[i], intervals[j]);
            result.push(merged);
            i += 2;
            j += 2;
        } else {
            // push the i in result;
            result.push(intervals[i]);
            i++;
            j++;
        }
    }

    function isOverLapping(first, second) {
        if(second) {
            if(first[1] >= second[0]) {
                return true;
            }
        } else {
            return false;
        }
    }

    function mergeTwo(first, second) {
        return [Math.min(first[0], second[0]), Math.max(first[1], second[1])];
    }


    function check(intervals) {
        let i = 0;
        let j = 1;
       while(j <= intervals.length) {
        if(intervals[j]) {
            if(intervals[i][1] >= intervals[j][0]) {
              intervals =  merge(intervals);
            };    
        }
        i++;
        j++;
       }
       return intervals;
    }

    return check(result);
};
const intervals = [[4,5],[1,4],[0,1]];
console.log(merge(intervals));


