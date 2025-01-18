/**
 * Sorting | Two Pointers
 * Time O(n*log(n)) | Space O(1)
 * https://neetcode.io/problems/meeting-schedule-ii (This is premium problem on leetcode)
 * @param {Interval[]} intervals
 * @returns {number}
 */
const minMeetingRooms = (intervals) => {

    const starts = intervals.map((interval) => interval.start).sort((a,b) => a-b);
    const ends = intervals.map((interval) => interval.end).sort((a,b) => a-b);

    let s = 0;
    let e = 0;
    let count = 0;
    let maxCount = 0;

    while (s < starts.length) {

        if (starts[s] >= ends[e]) {
            count--;
            e++;
        }
        if (starts[s] < ends[e]) {
            count = count+1;
        };
        maxCount = Math.max(maxCount, count);
        s++;
    }

    return maxCount;
}

function   minMeetingRooms1(intervals) {

    if(intervals.length == 1) return 1;

    intervals = intervals.sort((a,b) => {
        return a - b;
    });

    let confernceRoom = 0;
    let preEnd = intervals[0][1];
    for(let i = 1; i < intervals.length; i++) {
        if(intervals[i][0] < preEnd) {
            confernceRoom += 1;
        }
    }
    return confernceRoom;
}

const intervals = [[0,30],[5,10],[15,20]];
console.log(minMeetingRooms(intervals));