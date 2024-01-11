/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * Tree | Graph | Recursion
 * Time O(n) | Space O(n)
 * https://leetcode.com/problems/amount-of-time-for-binary-tree-to-be-infected
 * 
 * @param {TreeNode} root
 * @param {number} start
 * @return {number}
 */
var amountOfTime = function(root, start) {
    // add pre pointer 
    // create queue
    // perform bfs. 

    // traverse with dfs and add pre pointers to parent.
    const dfs = (node, pre) => {
        if(!node) return;

        node.pre = pre;
        dfs(node.left, node);
        dfs(node.right, node);
        return;
    }

    dfs(root, null);

    const findNode = (node, target) => {
        if(!node) return false;

        if(node.val === target) return node;

        const result1 = findNode(node.left, target);
        if(result1) return result1;

        const result2 = findNode(node.right, target);
        if(result2) return result2;
        return false;
    }


    const bfsTime = (node) => {
        let totalTime = 0;

        const q = new Queue();
        q.enqueue(node);

        const visited = new Set();        
        while(!q.isEmpty()) {
            
            let size = q.size();
            while(size) {
                const nextNode = q.dequeue();
                visited.add(nextNode);
                if(nextNode.pre && !visited.has(nextNode.pre)) {
                    q.enqueue(nextNode.pre);
                }
                if(nextNode.left && !visited.has(nextNode.left)) {
                    q.enqueue(nextNode.left);
                }
                if(nextNode.right && !visited.has(nextNode.right)) {
                    q.enqueue(nextNode.right);
                }
                size--;
            }
            totalTime++;
        }

        return totalTime - 1;
    }

    const targetNode = findNode(root, start);
    return bfsTime(targetNode);
};