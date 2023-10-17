/**
 * DFS
 * Time O(n) | Space O(n)
 * https://leetcode.com/problems/validate-binary-tree-nodes/
 * 
 * @param {number} n
 * @param {number[]} leftChild
 * @param {number[]} rightChild
 * @return {boolean}
 */
var validateBinaryTreeNodes = function(n, leftChild, rightChild) {
    
    const visited = new Set();

    const findRoot = () => {
      let root = 0;
      for(let i = 0; i < leftChild.length; i++) {
        const left = leftChild[i];
        const right = rightChild[i];
        if(left ===  root || right === root) root = i;
      }
      return root;
    }

    const dfs = (i) => {

      if(visited.has(i)) return false;
      visited.add(i);
      const left = leftChild[i];
      const right = rightChild[i];
      if(left !== -1 && !dfs(left)) return false;
      if(right !== -1 && !dfs(right)) return false;
      return true;
    }

    const root = findRoot();
    return dfs(root) && visited.size === n;
};