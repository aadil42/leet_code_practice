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
      if(asteroids[i] < 0) leftAsteroids.push([asteroids[i], i]);
      if(asteroids[i] > 0) rightAsteroids.push([asteroids[i], i]);
      // console.log(leftAsteroids, rightAsteroids);
      while(leftAsteroids.length && rightAsteroids.length) {
        const leftAst = leftAsteroids[leftAsteroids.length - 1];
        const rightAst = rightAsteroids[rightAsteroids.length - 1];

        if(leftAst[1] < rightAst[1]) break;
        if(Math.abs(leftAst[0]) > rightAst[0]) rightAsteroids.pop();
        if(Math.abs(leftAst[0]) < rightAst[0]) leftAsteroids.pop();
        if(Math.abs(leftAst[0]) === rightAst[0]) {
          rightAsteroids.pop();
          leftAsteroids.pop();
        }
      }
    }

    return [...leftAsteroids.map(ast => ast[0]), ...rightAsteroids.map(ast => ast[0])];
};

/**
 * Two Pointers
 * Time O(n) | Space O(1)
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision1 = function(asteroids) {
    let right = 0;
    let lastPositivePosition = -1;
  
    while(right < asteroids.length) {
      if(asteroids[right] > 0) {
        lastPositivePosition = right;
        right++;
        continue;
      }
      while((asteroids[right] < 0 && Math.abs(asteroids[right]) > Math.abs(asteroids[lastPositivePosition]) && asteroids[lastPositivePosition] > 0) || asteroids[lastPositivePosition] === '#') {
        asteroids[lastPositivePosition] = '#';
        lastPositivePosition--;
      }
      if(asteroids[lastPositivePosition] > Math.abs(asteroids[right])) {
        asteroids[right] = '#';
      }
      if(asteroids[lastPositivePosition] === Math.abs(asteroids[right])) {
        asteroids[right] = '#';
        asteroids[lastPositivePosition] = '#';
        lastPositivePosition--;
      }
      right++;
    }
  
    return asteroids.filter((ast) => ast !== '#');
  };