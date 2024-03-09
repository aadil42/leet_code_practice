/**
 * UnionFind | DFS/BFS
 * Time O(n) Space O(n)
 * https://leetcode.com/problems/accounts-merge/
 * It's not that hard You just need to grasp how graph and union graphs are created in the code. After that it's just plain BFS and DFS
 * @param {string[][]} accounts
 * @return {string[][]}
 */
var accountsMerge = function(accounts) {

  const graph = {};

  for(let i = 0; i < accounts.length; i++) {
      for(let j = 1; j < accounts[i].length; j++) {
          const email = accounts[i][j];
          
          if(!graph[email]) {
              graph[email] = [];
          }

          graph[email].push(i);
      }
  }

  const unionGraph = {};
  
  for(const key in graph) {
      const email = key;
      const samePersonArr = graph[key];

      const name = accounts[samePersonArr[0]][0];

      const samePersonMultipleEmailArr = [];
      for(let i = 0; i < samePersonArr.length;  i++) {
          const emails = accounts[samePersonArr[i]];
          for(let j = 1; j < emails.length; j++) {
              samePersonMultipleEmailArr.push(emails[j]);
          }
      }

      const uniqueEmails = new Set(samePersonMultipleEmailArr);
      uniqueEmails.delete(email);

      unionGraph[email] = [];

      unionGraph[email].push(name);
      unionGraph[email].push([...uniqueEmails]);
  }


  const visited  = new Set();
  const getAllEmails = (sourceNode) => {

      const result = [];
      const dfs = (node) => {
          if(visited.has(node)) return;
          visited.add(node);

          result.push(node);
          const neighbors = unionGraph[node] && unionGraph[node][1];
          if(!neighbors) return;
          for(let i = 0; i < neighbors.length; i++) {
              const nextNode = neighbors[i];
              dfs(nextNode);
          }
      }

      dfs(sourceNode);
      return result;
  }

  const mergedAccounts = [];
  for(const email in unionGraph) {

      const emails = getAllEmails(email);
      const name = unionGraph[email][0];

      if(emails.length) {
          emails.sort();
          mergedAccounts.push([name, ...emails]);
      }
  }

  return mergedAccounts;
};

/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */
var accountsMerge1 = function(accounts) {
  // make a graph
  // traverse that graph 

  const helperGraph = {};
  for(let i = 0; i < accounts.length; i++) {
      for(let j = 1;  j < accounts[i].length; j++) {
          if(helperGraph[accounts[i][j]]) {
              helperGraph[accounts[i][j]].push(i);
          } else {
              helperGraph[accounts[i][j]] = [i];
          }
      }
  }  

  const graph = {};

  for(const key in helperGraph) {
      graph[key] = [];
      const name = accounts[helperGraph[key][0]][0];
      for(let i = 0; i < helperGraph[key].length; i++) {
          graph[key] = [...graph[key], ...accounts[helperGraph[key][i]].slice(1)];
      }

      const uniqueEmails = new Set(graph[key]);
      uniqueEmails.delete(key);
      graph[key][0] = name;
      graph[key][1] = uniqueEmails; 
  }


  const visited = new Set();
  // traverse the graph
      const bfs = (node) => {
      if(visited.has(node)) return [];
      visited.add(node);

      const stack = [];
      stack.push(node);

      const result = [node];
      while(stack.length) {
          const popped = stack.pop();
        //   console.log(graph[popped]);
          const neighbor = graph[popped] && [...graph[popped][1]];
        //   console.log(neighbor);
          if(!neighbor) break;
          for(let i = 0; i < neighbor.length; i++) {
              if(visited.has(neighbor[i])) continue;
              visited.add(neighbor[i]);
              result.push(neighbor[i]);
              stack.push(neighbor[i]);
          }
      }
    //   console.log(result,'hehe');
      return result;
  }

  const result = [];
  for(const key in graph) {
      const name = graph[key][0]; 
    //   const currentVisited = new Set();
    const ans = bfs(key);
    if(ans.length > 0) {
        result.push([name, ans]);
    }
    //   result[name] = bfs(key);   
  }

  // sort the emails
  for(let i = 0; i < result.length; i++) {
      result[i][1] = result[i][1].sort();
      result[i] = [result[i][0] ,...result[i][1]];
  }

//   console.log(result);
  return result;
};