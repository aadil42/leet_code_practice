// problem is premium on leetcode. try it here https://www.lintcode.com/problem/515/

function minCost(costs) {
    if(!costs.length) return 0;
    const colorDP = [];
     for(let i = 0; i < costs.length;  i++) {
       const temp = [];
       for(let j = 0; j < 2; j++) {
         temp.push(0);
       }
      colorDP.push(temp);
     }
      colorDP[0][0] = costs[0][0];
      colorDP[0][1] = costs[0][1];
      colorDP[0][2] = costs[0][2];

      // console.log(colorDP);
      for(let i = 1; i < costs.length; i++) {
          for(let j = 0; j < 3; j++) {
              const one = colorDP[i - 1].slice(0,j);
              const two = colorDP[i - 1].slice(j+1);
              const preElement = [...one, ...two];
              colorDP[i][j] = costs[i][j] + Math.min(preElement[0], preElement[1]);
          }
          // console.log('---');
      }
      return Math.min(...colorDP[colorDP.length - 1]);
}