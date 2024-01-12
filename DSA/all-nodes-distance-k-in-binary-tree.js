/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 
 * Time O(n) | Space O(n)
 * @param {TreeNode} root
 * @param {TreeNode} target
 * @param {number} k
 * @return {number[]}
 */
var distanceK = function(root, target, k) {
    
    const dfs = (node, preNode) => {
        if(!node) return;
        dfs(node.left, node);
        dfs(node.right, node);
        node.parent = preNode;     
    }
 
    dfs(root, null);
 
    const queue = new Queue();
    const visited = new Set();
    queue.enqueue([target, 0]);
    visited.add(target.val);
    const result = [];
    while(!queue.isEmpty()) {
        const [node, steps] = queue.dequeue();
        if(steps === k) result.push(node.val);
 
        if(node.left && !visited.has(node.left.val)) {
         queue.enqueue([node.left, steps+1]);
         visited.add(node.left.val);
        }
        if(node.right && !visited.has(node.right.val)) {
            queue.enqueue([node.right, steps+1]);
            visited.add(node.right.val);
        } 
        if(node.parent && !visited.has(node.parent.val)) {
            queue.enqueue([node.parent, steps+1]);
            visited.add(node.parent.val);
        }
    }
 
    return result;
 };


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
var distanceK1 = function(root, target, k) {
    
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