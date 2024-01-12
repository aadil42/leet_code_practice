// this problem is on lint code // and if you're rich unlike me then go ahead buy primum leetcode and solve it.

function canAttendMeetings(intervals) {
    
    intervals = intervals.sort((a,b) => {
        return a - b;
    });

    let preEnd = intervals[0][1];

    for(let i = 1; i < intervals.length; i++) {
        if(preEnd > intervals[i][0]) {
            return false;
        }
    }

    return true;
}

const intervals = [[0,30],[5,10],[15,20]];
console.log(canAttendMeetings(intervals));