
/**
 * Topological Sort | DFS
 * Time O(n*m) | Space O(n)
 * https://leetcode.com/problems/find-eventual-safe-states
 * @param {number[][]} graph
 * @return {number[]}
 */
var eventualSafeNodes = function(graph) {
    
    const visited = new Set();
    const safeNodes = new Set();

    const dfs = (node) => {
        
        if (safeNodes.has(node)) return true;
        if (visited.has(node)) return false;
        
        visited.add(node);

        const neighbors = graph[node];
        for (let i = 0; i < neighbors.length; i++) {
            const neighborNode = neighbors[i];
            if(!dfs(neighborNode)) return false;
        }

        visited.delete(node);
        safeNodes.add(node);
        return true;
    }

    for (let i = 0; i < graph.length; i++) {
        const node = i;
        dfs(node);
    }

    return [...safeNodes].sort((a,b) => a-b);
};

/**
 * DFS
 * Time O(n) | space O(n)
 * @param {number[][]} graph
 * @return {number[]}
 */
var eventualSafeNodes3 = function(graph) {
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
