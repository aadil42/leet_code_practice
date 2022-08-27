var eraseOverlapIntervals = function(intervals) {

    // sort the arrray
    intervals = intervals.sort((a,b) => {
        return a[0] -b[0];
    });
    
    let preEnd = intervals[0][1];
    let result = 0;
    for(let i = 1; i < intervals.length; i++) {
        if(intervals[i][0] >= preEnd) {
            // this is non overlapping so just update the preEndjj
            preEnd = intervals[i][1];
        } else {
            result += 1;
            // this is overlapping so now update the preEnd with the minimum value so we can get rid of the longer overlapping line// draw it out if you don't understand it.
            preEnd = Math.min(preEnd, intervals[i][1]);
        }
    }

    return result;
};


intervals = [[1,2],[1,2],[1,2]];
console.log(eraseOverlapIntervals(intervals));