/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    
    
    const canEatInTime = (speed) => {
        
        let timeTaken = 0;
        let i = 0;

        while(i < piles.length) {
            timeTaken += Math.ceil(piles[i]/speed);
            i++;
        }

        return timeTaken <= h;
    }

    let minSpeed = 1;
    let maxSpeed = Math.max(...piles);

    let slowestSpeedK;

    while(minSpeed <= maxSpeed) {

        const mid = minSpeed + Math.floor((maxSpeed-minSpeed)/2);
        
        if(canEatInTime(mid)) {
            slowestSpeedK = mid;
            maxSpeed = mid - 1;
        } else {
            minSpeed = mid + 1;
        }
    }

    return slowestSpeedK;
};

/**
 * Binary Search
 * Time O(log(n)*n) | Space O(1)
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed1 = function(piles, h) {
    
    let minSpeed = Math.max(...piles);
    let left = 1;
    let right = minSpeed;

    while(left <= right) {
        const mid = Math.floor((left+right)/2);
        if(canFinishPiles(mid)) {
            right = mid - 1;
            minSpeed = Math.min(minSpeed, mid);
        } else {
            left = mid + 1;
        }
    }

    function canFinishPiles(s) {
        let hoursTook = 0;
        for(let i = 0; i < piles.length; i++) {
            hoursTook += Math.ceil(piles[i]/s);
            if(hoursTook > h) return false;
        }
        return true;
    }  

    return minSpeed;
};