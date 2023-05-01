/**
 * Brute force
 * Time O(n^2) | Space O(1) 
 * @param {number[][]} intervals
 * @return {number}
 */
var removeCoveredIntervalsBF = function(intervals) {
    

    let removables = 0;
    for(let i = 0; i < intervals.length; i++) {
        for(let j = 0; j < intervals.length; j++) {
            if(j === i) continue;
            if(intervals[i][0] >= intervals[j][0] && intervals[i][1] <= intervals[j][1]) {
                // console.log(intervals[i], intervals[j]);
                removables++;
                break;
            }
        }
    }

    return intervals.length - removables;
};

// optimized
/**
 * Time O(n*log(n)) | Space O(1)
 * @param {number[][]} intervals
 * @return {number}
 */
var removeCoveredIntervals = function(intervals) {
      
    // the main thig // just know how we're sorting it and you'll get it
  intervals.sort((a,b) => {
      if(a[0] === b[0]) {
          return b[1] - a[1];
      } 
      return a[0] - b[0];
  });

  let removables = 0;

  for(let i = 0; i < intervals.length; i++) {
      let j = i+1;
      // console.log(intervals[i], intervals[j]);
      while(j < intervals.length && intervals[j][0] >= intervals[i][0] && intervals[j][1] <= intervals[i][1]) {
          removables++;
          j++;
      }

      i = j - 1;
  }

  return intervals.length - removables;
};