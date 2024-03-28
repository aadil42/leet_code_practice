var alienOrder = function(words) { 


    const graph = makeGraph(words);

    const visited = new Map();
    let result = [];  
    function dfs(node) {

       if(visited.has(node)) {
            return visited.get(node);
       }      

       visited.set(node, true);
       const iteratebleNodes = graph[node];
       for(const iteratebleNode of iteratebleNodes) {
         if(dfs(iteratebleNode)) return true;
       }

       result.push(node);
       visited.set(node, false);
    }

    for(node in graph) {
        if(dfs(node)) return ''; 
    }

    return result.reverse().join('');
}


function makeGraph(words) {
    const directedGraph = {};

    words.forEach((word) => {
        word.split('').forEach((char) => {
            directedGraph[char] = new Set();
        });
    });
    for(let i = 0; i < words.length - 1; i++) {
        const word1 = words[i];
        const word2 = words[i + 1];

       
        const minLen = Math.min(word1.length, word2.length);

        if(word1.length > word2.length && word1.slice(0, minLen) === word2.slice(0, minLen)) return false;

        for(let j = 0; j < minLen; j++) {
            if(word1[j] !== word2[j]) {
                directedGraph[word1[j]].add(word2[j]);
            }
        }
    }

    return directedGraph;
}

const words = ['wrt','wrf','er','ett','rftt'];
console.log(alienOrder(words));

export class Solution {
    /**
     * @param words: a list of words
     * @return: a string which is correct order
     */
    alienOrder(words) {
      // Write your code here
  
      let edges = new Set();
  
      for(let i = 0; i < words.length - 1; i++) {
          // iterete over chars
          for(let j = 0; j < Math.min(words[i].length, words[i+1].length); j++) {
            if(words[i][j] !== words[i+1][j]) {
              // const edge = [words[i][j], words[i+1][j]];
              // edges.push(edge);
              edges.add(`${words[i][j]}-${words[i+1][j]}`);
            }
          }
      }
  
      edges = [...edges].map((edge) => edge.split('-'));
  
      // const graph = {};
  
      // for(let i = 0; i < edges.length; i++) {
        
      //   const from = edges[i][0];
      //   const to = edges[i][1];
  
      //   if(!graph[from]) {
      //     graph[from] = [];
      //   }
  
      //   graph[from].push(to);
      // }
  
      const makeGraph = (words) => {
        const directedGraph = {};
  
        words.forEach((word) => {
            word.split('').forEach((char) => {
                directedGraph[char] = [];
            });
        });
        for(let i = 0; i < words.length - 1; i++) {
            const word1 = words[i];
            const word2 = words[i + 1];
  
          
            const minLen = Math.min(word1.length, word2.length);
  
            if(word1.length > word2.length && word1.slice(0, minLen) === word2.slice(0, minLen)) return false;
  
            for(let j = 0; j < minLen; j++) {
                if(word1[j] !== word2[j]) {
                    directedGraph[word1[j]].push(word2[j]);
                }
            }
        }
  
        return directedGraph;
      }
  
      const graph = makeGraph(words);
      console.log(graph);
      const globleVisited = new Set();
  
      const dfs = (node, visited, order) => {
        
        // this means we have a cycle.
        if(visited.has(node)) return false;
        visited.add(node);
  
        // this means the node is already visited. But, it's not a cycle.
        if(globleVisited.has(node)) return order;
        globleVisited.add(node);
  
        const neighbors = graph[node] || [];
  
        for(let i = 0; i < neighbors.length; i++) {
  
          const nextNode = neighbors[i];
          if(!dfs(nextNode, visited, order)) return false;
  
        }
  
        visited.delete(node);
        order.push(node);
        return order;
      }
  
      let alianOrderedDict = [];
  
      for(const node in graph) {
        const order = dfs(node, new Set(), []);
        if(order) {
          alianOrderedDict = [...alianOrderedDict, ...order];
        }
        if(!order) return "";
      }
  
      return alianOrderedDict.reverse().join("");
    }
  }