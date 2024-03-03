/**
 * DFS | BruteForce
 * Time O(n^4) | Space O(n^2)
 * https://leetcode.com/problems/evaluate-division/description/
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function(equations, values, queries) {
    
    const hashMap = {};

    for(let i = 0; i < equations.length; i++) {
        const equation = equations[i];
        const numirator = equation[0];
        const denominator = equation[1];
        const value = values[i];

        if(!hashMap[numirator]) {
            hashMap[numirator] = [[1, numirator]];
        }
        hashMap[numirator].push([value, denominator]);

        if(!hashMap[denominator]) {
            hashMap[denominator] = [[1, denominator]];
        }
        hashMap[denominator].push([1/value, numirator]);
    }

    const dfs = (source, target, visited) => {

        if(source === target) return 1;
        if(visited.has(source)) return -1;
        visited.add(source);

        for(let i = 0; i < hashMap[source].length; i++) {
            const constant = hashMap[source][i][0];
            const nextNode = hashMap[source][i][1];

            const result = constant * dfs(nextNode, target, visited);
            if(result > 0) return result;
        }

        return -1;
    }
    
    const bruteForce = (query) => {
        const numirator = query[0];
        const denominator = query[1];
        
        const numiratorArr = hashMap[numirator];
        const denominatorArr = hashMap[denominator];
        
        if(!numiratorArr || !denominatorArr) return -1;

        for(let i = 0; i < numiratorArr.length; i++) {
            for(let j = 0; j < denominatorArr.length; j++) {
                const source = numiratorArr[i][1];
                const target = denominatorArr[j][1];
                const visited = new Set();
                const result = dfs(source, target, visited);
                if(result !== -1) return result;    
            }
        }

        return -1;
    }

    const result = [];

    for(let i = 0; i < queries.length; i++) {
        result.push(bruteForce(queries[i]));
    }

    return result;
};