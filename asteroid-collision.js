/**
 * Stack
 * 
 * Time O(n) | Space O(n)
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
    
    const leftAsteroids = [];
    const rightAsteroids = [];

    for(let i = 0; i < asteroids.length; i++) {
        if(asteroids[i] > 0) {
            // go in positive
            rightAsteroids.push([asteroids[i], i]);
        }
        if(asteroids[i] < 0) {
            leftAsteroids.push([asteroids[i], i]);
        }
        while(leftAsteroids.length && rightAsteroids.length) {
            const left = leftAsteroids[leftAsteroids.length - 1];
            const right = rightAsteroids[rightAsteroids.length - 1];
            if(left[1] > right[1]) {
                if(Math.abs(left[0]) > Math.abs(right[0])) {
                    //left is greater
                    rightAsteroids.pop();
                } else if(Math.abs(right[0]) > Math.abs(left[0])) {
                    // right is greater
                    leftAsteroids.pop();
                } else {
                    // both are equal
                    leftAsteroids.pop();
                    rightAsteroids.pop();
                }
            } else {
                break;
            }
        }
    }
    const result = [...leftAsteroids, ...rightAsteroids];
    return result.map((ast) => ast[0]);
};