/**
 * 
 * Time O(n) | Space O(1)
 * @param {string} instructions
 * @return {boolean}
 */
var isRobotBounded = function(instructions) {
    
    let currDir = "N";
    let x = 0;
    let y = 0;

    for(let i = 0; i < instructions.length; i++) {
        if(instructions[i] === 'G') {
            // go to a direction
            if(currDir === 'N') y++;
            if(currDir === 'S') y--;
            if(currDir === 'E') x++;
            if(currDir === 'W') x--;
        } else {
            if(instructions[i] === 'R') {
                if(currDir === 'N') {
                    currDir = 'E'; 
                } else if(currDir === 'E') {
                    currDir = 'S';
                } else if(currDir === 'W') {
                   currDir = 'N';
                } else  if(currDir === 'S') {
                    currDir = 'W';
                }
            } else {
                if(currDir === 'N') {
                    currDir = 'W'; 
                } else if(currDir === 'E') {
                    currDir = 'N';
                } else if(currDir === 'W') {
                    currDir = 'S';  
                } else  if(currDir === 'S') {
                     currDir = 'E';
                }
            }
        }
    }
    if((x === 0 && y === 0) || currDir !== 'N') return true;
    return false;
};