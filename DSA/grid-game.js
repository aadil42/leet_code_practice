/**
 * PrefixSum | Logic
 * Time O(n) | Space O(n)
 * https://leetcode.com/problems/grid-game/
 * @param {number[][]} grid
 * @return {number}
 */
var gridGame2nd = function(grid) {
    
  const getPrefixSum = (arr) => {
      const preFixArr = [0];
      for (let i = 0; i < arr.length; i++) {
          preFixArr.push(preFixArr[i] + arr[i]);
      }
      return preFixArr;
  }

  const getMaxScoreRobotB = (upArr, downArr) => {

      let robotScore = Infinity;
      
      for (let i = 1; i < upArr.length; i++) {
          const upScore = upArr[upArr.length-1] - upArr[i];
          const bottomScore = downArr[i - 1];
          score = Math.max(upScore, bottomScore);
          robotScore = Math.min(robotScore, score);
      }

      return robotScore;
  }

  return getMaxScoreRobotB(getPrefixSum(grid[0]), getPrefixSum(grid[1]));
};

/**
 * https://leetcode.com/problems/grid-game/description/
 * 
 * Linear
 * Time O(n) | Space O(n)
 * @param {number[][]} grid
 * @return {number}
 */
var gridGame1st = function(grid) {

    const preSum1 = [0];
    const preSum2 = [0];
    for(let i = 1; i <= grid[0].length; i++) {
        preSum1.push(preSum1[i - 1] + grid[0][i - 1]);
        preSum2.push(preSum2[i - 1] + grid[1][i - 1]);
    }
    // console.log(preSum1, preSum2);

    let res = Infinity;
    for(let i = 1; i < preSum1.length; i++) {
      const top = preSum1[preSum1.length - 1] - preSum1[i];
      const bottom = preSum2[i -1];
    //   console.log(preSum2, [i -1]);
      let secondRobot = Math.max(top, bottom);
      res = Math.min(res, secondRobot);
    }

    // console.log(res);
    return res;
};