/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * Time O(n) | Space(n)
 * @param {TreeNode} root
 * @param {TreeNode} target
 * @param {number} k
 * @return {number[]}
 */
var distanceK = function(root, target, k) {
    
    const graph = {};
    const queue = new Queue();

    queue.enqueue(root);

    while(!queue.isEmpty()) {
        const node = queue.dequeue();
        const val =  node.val;
        const left = node.left && node.left.val;
        const right = node.right && node.right.val;

        if(graph[val]) {
            graph[val] = [...graph[val], left, right];
        } else {
            graph[val] = [left,right];
        }
        
        // attech child to parent
        if(left !== null && graph[left]) {
            graph[left] = [...graph[left], val];
        } else if(left !== null) {
            graph[left] = [val];
        }
        if(right !== null && graph[right]) {
            graph[right] = [...graph[right], val];
        } else if(right !== null) {
            graph[right]  = [val];
        }

        if(left !== null) {
            queue.enqueue(node.left);
        }
        if(right !== null) {
            queue.enqueue(node.right);
        }
    }

    console.log(graph);
    const result = [];
    const visited = new Set();
    visited.add(target.val);
    queue.enqueue([target.val, 0]);
    while(!queue.isEmpty()) {
        const [node, steps] = queue.dequeue();
        // console.log(node, steps);
        if(steps === k) result.push(node);

        const neighbor = graph[node];
        neighbor && neighbor.forEach((n) => {
            if(n !== null && !visited.has(n)) {
                queue.enqueue([n, steps+1]);
                visited.add(n);
            }
        });
    } 

    return result;
};