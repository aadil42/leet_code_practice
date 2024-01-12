/**
 * Graph
 * https://leetcode.com/problems/maximal-network-rank/
 * 
 * Time O(n^3) | Space O(n^2).
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
var maximalNetworkRank = function(n, roads) {
    
    const graph = {};
    for(let i = 0; i < roads.length; i++) {
        const cityA = roads[i][0];
        const cityB = roads[i][1];

        const cityANeighbors = graph[cityA] || []; 
        const cityBNeighbors = graph[cityB] || [];

        graph[cityA] = [...cityANeighbors, cityB];
        graph[cityB] = [...cityBNeighbors, cityA];
    }

    const countRoads = (key, key1) => {
        let rankCount = 0;
        const visited = new Set();
        const neighbors = graph[key];

        neighbors.forEach((neighbor) =>  {
            const hash1 = `${key}-${neighbor}`;
            const hash2 = `${neighbor}-${key}`;
            if(!visited.has(hash1) && !visited.has(hash2)) {
                visited.add(hash1);
                visited.add(hash2);
                rankCount++;
            }
        });

        const neighbors1 = graph[key1];

        neighbors1.forEach((neighbor) =>  {
            const hash1 = `${key1}-${neighbor}`;
            const hash2 = `${neighbor}-${key1}`;
            if(!visited.has(hash1) && !visited.has(hash2)) {
                visited.add(hash1);
                visited.add(hash2);
                rankCount++;
            }
        });
        
        console.log(rankCount);
        return rankCount;
    }

    let maxRank = 0;
    Object.keys(graph).forEach((key) => {
        Object.keys(graph).forEach((key1) => {
            if(key !== key1) {
               maxRank = Math.max(countRoads(key, key1), maxRank);
            }
        })
    });

    return maxRank;
};