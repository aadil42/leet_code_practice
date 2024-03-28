/**
 * Graph | DFS | Backtracking (the trick in this problem to backtrack. that's it.)
 * Time O(n^2) | Space O(n^2)
 * https://leetcode.com/problems/reconstruct-itinerary/
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function(tickets) {

    const graph = {};
    for(let i = 0; i < tickets.length; i++) {

        const from = tickets[i][0];
        const to = tickets[i][1];

        if(!graph[from]) {
            graph[from] = [];
        }

        graph[from].push(to);
    }

    // sort the edges from nodes
    for(const node in graph) {
        graph[node].sort();
    }

    const result = ["JFK"];

    console.log(graph);
    const dfs = (node) => {

        // these two lines are making all the difference
        if(result.length === tickets.length + 1) return true;
        if(!graph[node]) return false;

        const neighrbos = graph[node];
        for(let i = 0; i < neighrbos.length; i++) {
            const [nextStop] = neighrbos.splice(i,1);
            result.push(nextStop);
            if(dfs(nextStop)) return true;
            result.pop();
            neighrbos.splice(i,0,nextStop);
        }

    }

    dfs("JFK");
    return result;
};

/**
 * Graph traversal | DFS | Backtracking
 * Time O(e^2) | Space O(e) | e = number of edges
 * https://leetcode.com/problems/reconstruct-itinerary
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary1 = function(tickets) {
    
    const map = {};
    for(let i = 0; i < tickets.length;  i++) {
        const [dep, des] = tickets[i];
        const list = map[dep] || [];
        map[dep] = [...list, des];
    }
    
    for(key in map) {
        map[key].sort();
    }

    const result = ['JFK'];
    const dfs = (airport) => {
        if(result.length === tickets.length + 1) return true;
        if(!map[airport]) return false;

        const list = map[airport] || [];
        
        for(let i = 0; i < list.length; i++) {
            const [node] = list.splice(i,1);
            result.push(node);
            if(dfs(node)) return true;
            result.pop(node);
            list.splice(i,0,node); 
        }
    }
    dfs('JFK');
    return result;
};

/**
 * Time O(n^2) | Space O(n^2)
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary1 = function(tickets) {
    
    // sorting strings [['JFK','SFO'],['JFK','ATL']] -> [['JFK','ATL],['JFK','SFO']];
    tickets.sort((a,b)=> {
        if(a[0].localeCompare(b[0])){
            return a[0].localeCompare(b[0]);
        } else {
            return a[1].localeCompare(b[1]);
        }
    });


    const graph = new Map();
    for(let i = 0; i < tickets.length; i++) {
        const currentNode = graph.get(tickets[i][0]);
       
        if(currentNode) {
            graph.set(tickets[i][0],[...currentNode, tickets[i][1]]);
        } else {
             graph.set(tickets[i][0],[tickets[i][1]]);
        }
    }
    // console.log(graph);
    const result = ['JFK'];
    function dfs(node) {
        
        if(result.length === tickets.length + 1) return true;
        if(!graph.has(node)) return false;

        const edges = graph.get(node);
        for(let i = 0; i < edges.length; i++) {
            const newNode = edges.splice(i,1);
            result.push(newNode[0]);
            // console.log(result,newNode[0]);
            if(dfs(newNode[0])) return true;
            result.pop();
            // console.log(result,'after');
            edges.splice(i,0,newNode[0]);
        }
    }

    dfs('JFK');
    return result;
};