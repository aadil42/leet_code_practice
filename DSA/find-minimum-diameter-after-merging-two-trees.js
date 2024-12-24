/**
 * Tree | DFS | MaxWidth of Tree
 * Time O(n+m) | Space O(n+m)
 * https://leetcode.com/problems/find-minimum-diameter-after-merging-two-trees
 * @param {number[][]} edges1
 * @param {number[][]} edges2
 * @return {number}
 */
var minimumDiameterAfterMerge = function(edges1, edges2) {
    
    const tree1 = makeTree(edges1);
    const tree2 = makeTree(edges2);

    const tree1MaxWidth = getTreeWidth(tree1);
    const tree2MaxWidth = getTreeWidth(tree2);

    const connectedEdges =  Math.ceil(tree1MaxWidth/2) + 1 + Math.ceil(tree2MaxWidth/2);
    return Math.max(connectedEdges, tree1MaxWidth, tree2MaxWidth)
};

const makeTree  = (edges) => {
    const tree = {};

    for ( let i = 0; i < edges.length; i++) {
        const [from, to] = edges[i];

        if(tree[from]) {
            tree[from].push(to);
        } else {
            tree[from] = [to];
        }

        if(tree[to]) {
            tree[to].push(from);
        } else {
            tree[to] = [from];
        }
    }

    return tree;
}

const getTreeWidth = (tree) => {

    const visited = new Set();
    let globalMax = 0;

    const dfs = (node) => {
        visited.add(node);

        const children = tree[node] || [];

        let max1 = 0;
        let max2 = 0;

        for (let i = 0; i < children.length; i++) {
            const childNode = children[i];
            if(visited.has(childNode)) continue;

            const maxPath = 1 + dfs(childNode);
            if (maxPath > max1) {
                max2 = max1;
                max1 = maxPath;
            } else {
                if (maxPath > max2) {
                    max2 = maxPath;
                }
            }
        }

        globalMax = Math.max(globalMax, max1+max2);
        return max1;
    }

    dfs(0);
    return globalMax;
}