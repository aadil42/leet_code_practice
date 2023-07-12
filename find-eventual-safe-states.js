/**
 * DFS
 * Time O(n) | space O(n)
 * @param {number[][]} graph
 * @return {number[]}
 */
var eventualSafeNodes = function(graph) {
    const checkIfValid = new Map();

    function dfs(node) {
        const neighbor = graph[node];

        if(checkIfValid.has(node)) {
            return checkIfValid.get(node);
        }

        checkIfValid.set(node,false);
        for(let i = 0; i< neighbor.length; i++) {
            if(!dfs(neighbor[i])) return false;
        }
        checkIfValid.set(node,true);
        return true;
    }

    const result = [];
    for(let i = 0; i < graph.length; i++) {
        if(dfs(i)) {
            // console.log(i);
            result.push(i);
        } 
    }
    // console.log(result);
    return result;
};  


/**
 * Updated code using object instead of Map. It's practically the same.
 * @param {number[][]} graph
 * @return {number[]}
 */
var eventualSafeNodes2 = function(graph) {

    const isSafe = {}; 
    const dfs = (node) => {
            if(isSafe[node] !== undefined) return isSafe[node];
             isSafe[node] = false;
             const neighbor = graph[node];
             for(let i = 0; i < neighbor.length; i++) {
                 if(!dfs(neighbor[i])) return false;
             }
             isSafe[node] = true;
             return true;
     }
    const result = [];
    for(let i = 0; i < graph.length; i++) {
        if(dfs(i)) {
            result.push(i);
        }
    }
 
    return result;
 };  

/**
 * 
 * DFS | Brute Force 
 * 
 * Time O(n^2) | Space O(n);
 * @param {number[][]} graph
 * @return {number[]}
 */
var eventualSafeNodes1 = function(graph) {
   
    const traverseNode = (startNode) => {
        const visited = new Set();
 
        const dfs = (node) => {
            if(!graph[node].length) return true;
            if(visited.has(node)) return false;
 
            let canReach = true;
            for(let i = 0; i < graph[node].length;  i++) {
                visited.add(node);
                canReach = dfs(graph[node][i]);
                if(!canReach) break;
                visited.delete(node);
            }
            return canReach;
        }
 
        return dfs(startNode);
    }
 
    const result = [];
    for(let i = 0; i < graph.length; i++) {
        if(traverseNode(i)) {
            result.push(i);
        }
    }
 
    return result;
 };  
