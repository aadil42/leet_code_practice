/**
 * Sorting
 * 
 * Time O(n*log(n)) | Space O(n)
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
var carFleet = function(target, position, speed) {
    
    const combined = position.map((p, index) => {
        return [p,speed[index]];
    });

    combined.sort((a,b) => b[0] - a[0]);

    let fleet = 0;
    let preTime = 0;
    for(let i = 0; i < combined.length; i++) {
        const timeTaken = timeToReach(combined[i]) 
        if(timeTaken > preTime) {
            fleet++
            preTime = timeTaken;
        };
    }

    function timeToReach(car) {
        return (target - car[0])/car[1];
    }

    return fleet;
};

// using a stack
/**
 * 
 * Time O(n*log(n)) | Space O(n)
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
var carFleet = function(target, position, speed) {
    
    const combined = position.map((p, index) => {
        return [p,speed[index]];
    });

    combined.sort((a,b) => b[0] - a[0]);

    const miStack = []; 
    for(let i = 0; i < combined.length; i++) {
        const timeTaken = timeToReach(combined[i]);
        miStack.push(timeTaken);
        if(miStack.length > 1 && miStack[miStack.length - 2] >= miStack[miStack.length - 1]) miStack.pop();
    }

    function timeToReach(car) {
        return (target - car[0])/car[1];
    }

    return miStack.length;
};