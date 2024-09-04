/**
 * Hashing 
 * Time O(n) | Space O(m)
 * https://leetcode.com/problems/walking-robot-simulation/
 * @param {number[]} commands
 * @param {number[][]} obstacles
 * @return {number}
 */
var robotSim = function(commands, obstacles) {
    
    let x = 0;
    let y = 0;
    const directions = [[0,1],[1,0],[0,-1],[-1,0]];
    let directionIndex = 0;
    const obstaclesHash = new Set();
    let res = 0;
    
    for(let i = 0; i < obstacles.length; i++) {
        const [ox,oy] = obstacles[i]; 
        obstaclesHash.add(`${ox}-${oy}`);
    }

    for(const c of commands) {
        if(c === -1) {
            directionIndex = (directionIndex + 1)%4;
        } else if(c === -2) {
            if(directionIndex === 0) {
                directionIndex = 3;
                continue;
            }
            directionIndex = (directionIndex - 1)%4;
        } else {
            console.log(directionIndex);
            const [dx, dy] = directions[directionIndex];
            for(let k = 0; k < c; k++) { // because it can't be more than 9.
                const nextX = x + dx;
                const nextY = y + dy;
                if(obstaclesHash.has(`${nextX}-${nextY}`)) break;
                x = nextX;
                y = nextY;
            }
            res = Math.max(res, x**2+y**2);
        }
    }

    return res;
};