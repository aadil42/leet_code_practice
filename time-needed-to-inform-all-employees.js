/**
 * 
 * BFS
 * Time O(n) | Space O(n)
 * @param {number} n
 * @param {number} headID
 * @param {number[]} manager
 * @param {number[]} informTime
 * @return {number}
 */
var numOfMinutes = function(n, headID, manager, informTime) {

    const graph = {};
    // make graph;
  
    for(let i = 0; i < n; i++) {
        const currentHead = manager[i];
        const time = informTime[i]
        if(graph[currentHead]) {
            graph[currentHead] = [...graph[currentHead], i];
        } else {
            graph[currentHead] = [i];
        }
    }     
  
      console.log(graph);
      // we could have used a queue but stack would work fine too in this case.
      const stackQ = [[headID, 0]];
      let timeTaken = 0;
      while(stackQ.length) {
          const [employee, time] = stackQ.pop();
          const neighbor = graph[employee];
          if(!neighbor) continue;
          for(let i = 0; i < neighbor.length; i++) {
              // this is the meat of the code. 
              timeTaken = Math.max(timeTaken, time + informTime[employee]);
              stackQ.push([neighbor[i], time + informTime[employee]]);
          }
      }
  
      return timeTaken;
  };