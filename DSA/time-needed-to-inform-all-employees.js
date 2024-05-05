/**
 * DFS | Tree 
 * Time O(n) | Space O(n)
 * https://leetcode.com/problems/time-needed-to-inform-all-employees/
 * @param {number} n
 * @param {number} headID
 * @param {number[]} manager
 * @param {number[]} informTime
 * @return {number}
 */
var numOfMinutes = function(n, headID, manager, informTime) {
    
    const tree = {};
    for(let i = 0; i < manager.length; i++) {

        if(manager[i] === -1) continue;

        const senior = manager[i];
        const junior = i;

        if(!tree[senior]) {
            tree[senior] = [];
        }

        tree[senior].push(junior);
    }


    let time = 0;
    const dfs = (node, totalTime) => {
        if(tree[node] === undefined) {
            time = Math.max(time, totalTime);
            return;
        }

        const subordinates = tree[node];

        for(let i = 0; i < subordinates.length; i++)  {
            const subordinate = subordinates[i];
            dfs(subordinate, totalTime + informTime[node]);
        }
    }

    dfs(headID, 0);

    return time;
};

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
var numOfMinutes0 = function(n, headID, manager, informTime) {

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