function   minMeetingRooms(intervals) {

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