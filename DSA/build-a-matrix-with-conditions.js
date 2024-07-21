/**
 * Topological Sort | DFS | Matrix | Hashing
 * Time O(k) | Space O(k*K);
 * https://leetcode.com/problems/build-a-matrix-with-conditions/
 * @param {number} k
 * @param {number[][]} rowConditions
 * @param {number[][]} colConditions
 * @return {number[][]}
 */
var buildMatrix = function(k, rowConditions, colConditions) {

    // create directional graph for topological sort.
    const rowGraph = {};
    const colGraph = {};

    for(let i = 0; i < rowConditions.length; i++) {
        const fromNode = rowConditions[i][1];
        const toNode = rowConditions[i][0];
        if(!rowGraph[fromNode]) {
            rowGraph[fromNode] = new Set();
        } 
        rowGraph[fromNode].add(toNode);
    }

    for(let i = 0; i < colConditions.length; i++) {
        const fromNode = colConditions[i][1];
        const toNode = colConditions[i][0];
        if(!colGraph[fromNode]) {
            colGraph[fromNode] = new Set();
        }
        colGraph[fromNode].add(toNode);
    }

    const dfs = (node, GlobalVisited, graph, orderArr, localVisited) => {
        if(localVisited.has(node)) return false;
        if(GlobalVisited.has(node)) return [];
        GlobalVisited.add(node);
        localVisited.add(node);

        const neighbors = (graph[node] && [...graph[node]]) || [];
        for(let i = 0; i < neighbors.length; i++) {
            const neighborNode = neighbors[i];
            if(!dfs(neighborNode, GlobalVisited, graph, orderArr, localVisited)) return false;
        }
        
        localVisited.delete(node);
        orderArr.push(node);
        return orderArr;

    }

    const rowOrderArr = [];
    const rowSet = new Set();
    for(let i = 1; i < k+1; i++) {
        const orderedArr = dfs(i, rowSet, rowGraph, [], new Set());
        if(!orderedArr) return []; // there's a cycle.
        rowOrderArr.push(...orderedArr);
    }

    const colOrderArr = [];
    const colSet = new Set();
    for(let i = 1; i < k+1; i++) {
        const orderedArr = dfs(i, colSet, colGraph, [], new Set());
        if(!orderedArr) return []; // there's a cycle. 
        colOrderArr.push(...orderedArr);
    }

    const kMatrix = [];
    for(let i = 0; i < k; i++) {
        const kRow = [];
        for(let j = 0; j < k; j++) {
            kRow.push(0);
        }
        kMatrix.push(kRow);
    }

    const rowColHash = {};

    // add the row and colums of element.
    for(let i = 0; i < rowOrderArr.length; i++) {
        const num = rowOrderArr[i];
        const row = i;
        rowColHash[num] = [i];
    }

    for(let i = 0; i < colOrderArr.length; i++) {
        const num = colOrderArr[i];
        const col = i;
        rowColHash[num].push(i);
    }

    for(const key in rowColHash) {
        const [row, col] = rowColHash[key];
        kMatrix[row][col] = parseInt(key);
    }

    return kMatrix;
};