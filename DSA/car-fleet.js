/**
 * Monotonic Stack | Sorting
 * Time O(n*log(n)) | Space O(n)
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
var carFleet = (target, position, speed) => {

    const stack = [];

    const sp = position.map((pos, idx) => {
        return [pos, speed[idx]]
    });

    sp.sort((sp1, sp2) => sp1[0] - sp2[0]);

    for(let i = 0; i < sp.length; i++) {
        const [pos, speed] = sp[i];
        const time = (target-pos)/speed;
        while(stack.length && time >= stack[stack.length - 1]) {
            stack.pop();
        }
        stack.push(time);
    }

    return stack.length;
}

/**
 * Sorting
 * 
 * Time O(n*log(n)) | Space O(n)
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
var carFleet1 = function(target, position, speed) {
    
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
var carFleet0 = function(target, position, speed) {
    
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

