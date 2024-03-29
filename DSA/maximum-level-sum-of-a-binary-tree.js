/**
 * 
 * BFS
 * https://leetcode.com/problems/maximum-level-sum-of-a-binary-tree/
 * 
 * Time O(n) | Space O(n)
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxLevelSum = function(root) {
    const q = new Queue();
    let max = -Infinity;
    let resultLevel = 1;
    q.enqueue([root, resultLevel]);
    while(!q.isEmpty()) {
      let currentMax = 0;
      let preLevel;
      let numberOfChildren = q.size();
      let i = 0;
      while(i < numberOfChildren) {
          const element = q.dequeue();
          const node = element[0];
          preLevel = element[1];
          currentMax += node.val;
          node.left && q.enqueue([node.left, preLevel + 1]);
          node.right && q.enqueue([node.right, preLevel + 1]);
          i++;
      }
      if(currentMax > max) {
        resultLevel = preLevel;
      }
      max = Math.max(max, currentMax);
    }

    return resultLevel;
};

/**
 * 
 * DFS
 * Time O(n) | Space O(n)
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxLevelSum1 = function(root) {

  const dfs = (node, level, levelSumArr) => {

      if(!node) return;
      if(level === levelSumArr.length) levelSumArr.push(node.val);
      else levelSumArr[level] += node.val

      dfs(node.left, level+1, levelSumArr);
      dfs(node.right, level+1, levelSumArr);
  }

  const levelSumArr = [];
  dfs(root, 0, levelSumArr);
  let max = -Infinity;
  let level = 0;
  for(let i = 0; i < levelSumArr.length; i++) {
      if(levelSumArr[i] > max) {
          level = i + 1;
      } 
      max = Math.max(levelSumArr[i], max);
  } 

  return level;
};