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
       for(iteratebleNode of iteratebleNodes) {
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
