/**
 * Brute Force | Array
 * Time O(n^2) | Space O(1)
 * https://leetcode.com/problems/minimum-time-difference/
 * @param {string[]} timePoints
 * @return {number}
 */
var findMinDifference = function(timePoints) {
    const maxMinutes = 1440;
    const minMinutes = 0;

    const minutesTimePoint = timePoints.map((time) => {
        const [hour, minutes] = time.split(":").map((digit) => +digit);
        return hour*60 + minutes;
    }).sort((a,b) => a-b);

    console.log(minutesTimePoint);
    let min = Infinity;

    for(let i = 0; i < minutesTimePoint.length; i++) {
        for(let j = i+1; j < minutesTimePoint.length; j++) {
            const diff1 = minutesTimePoint[j] - minutesTimePoint[i];
            const diff2 = (minutesTimePoint[i] - minMinutes) + maxMinutes - minutesTimePoint[j];
            min = Math.min(min, diff1, diff2);

        }
    }
    return min;
};


