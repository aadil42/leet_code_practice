// time coplexity O(n^2);

var leastBricks = function(wall) {
 
    const myHash = new Map();
   
    const width = wall[0].reduce((pre, brick) => {
        return brick + pre;
    }, 0);
   
    for(let i = 0; i < wall.length; i++) {
        let currentWidth = 0;
        for(let j = 0; j < wall[i].length; j++) {
            currentWidth += wall[i][j];
           myHash.has(currentWidth) ? myHash.set(currentWidth,myHash.get(currentWidth)+1) : myHash.set(currentWidth, 1);
        }
    }
   
   // deleteing total width as this will be the rightmost gap which will always give us false positive.
   myHash.delete(width);
   
   maxGap = 0;
    for([key, value] of myHash) {
        maxGap = Math.max(maxGap, value);
    }
   
    return wall.length - maxGap;
   };