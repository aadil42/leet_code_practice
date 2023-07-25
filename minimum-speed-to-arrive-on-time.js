/**
 * @param {number[]} dist
 * @param {number} hour
 * @return {number}
 */
var minSpeedOnTime = function(dist, hour) {
    
    let left = 1;
    let right  = 10**7; // right is 10^7 because the  answer won't exceed 10**7 power.
    let leastSpeedTaken = 0;
    while(left <= right) {
        const mid = (left + right) >> 1;
        const totalTimeTaken = getTotalTime(dist, mid);
        if(totalTimeTaken <= hour) {
            leastSpeedTaken = mid;
            right = mid - 1;
        }
        if(totalTimeTaken > hour) {
            left = mid + 1;
        }
    }

    return leastSpeedTaken || -1;
};

var  getTotalTime = (dist, speed) => {
    let totalTimeTaken = 0;
    for(let i = 0; i < dist.length; i++) {
        if(i === dist.length -1) {
            totalTimeTaken += dist[i]/speed;
            continue;
        };
        totalTimeTaken += Math.ceil(dist[i]/speed);
    }
    return totalTimeTaken;
}