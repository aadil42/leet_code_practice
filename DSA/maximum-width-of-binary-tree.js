/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * Time O(n) | Space O(n) | The time complexity is not O(n). 
 * We are assuming the array as a dequeue. 
 * the same code converted to python where we use dequeue instead of array has O(n) Time complexity.
 * https://leetcode.com/problems/maximum-width-of-binary-tree/
 * LevelOrder Traversal | BFS
 * @param {TreeNode} root
 * @return {number}
 */
var widthOfBinaryTree = function(root) {

    const trimNulls = (arr) => {
        
        while(arr.length && arr[arr.length - 1] === null) {
            arr.pop();
        }

        arr.reverse();

        while(arr.length && arr[arr.length - 1] === null) {
            arr.pop();
        }
        
        arr.reverse();

        return arr;
    }


    const bfs = (root) => {

        let maxWidth = 0;
        const q = [root];

        while(q.length) {
            trimNulls(q);
            
            let size = q.length;

            maxWidth = Math.max(maxWidth, size);

            while(size) {
                const node = q.shift();

                if(!node) {
                    q.push(null);
                    q.push(null);
                    size--;
                    continue;
                }

                if(node.left) q.push(node.left);
                if(!node.left) q.push(null);

                if(node.right) q.push(node.right);
                if(!node.right) q.push(null);

                size--;
            }

        }

        return maxWidth;
    }

    return bfs(root);
};