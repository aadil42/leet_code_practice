/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 *  Level Order Traversal | BFS | Tree
 *  Time O(n*log(n) * log(n)) | Space O(n) | (n is the max number of nodes on a level)
 *  https://leetcode.com/problems/minimum-number-of-operations-to-sort-a-binary-tree-by-level/
 * @param {TreeNode} root
 * @return {number}
 */
var minimumOperations = function(root) {
    
    const q = new Queue();
    q.enqueue(root);

    let minSwapCount = 0;
    while(!q.isEmpty()) {
        minSwapCount += helper(q);

        let size = q.size();

        while(size) {
            const node = q.dequeue();
            if(node.left) q.enqueue(node.left);
            if(node.right) q.enqueue(node.right);
            size--;
        }
    }

    return minSwapCount;
};

const helper = (q) => {
    const originalArr = q.toArray().map((a) => a.val);
    const OriginalValueToIdx = {};
    
    for(let i = 0; i < originalArr.length; i++) {
        const value = originalArr[i];
        OriginalValueToIdx[value] = i;
    }

    const sortedArr = [...originalArr].sort((a,b)  => a-b);

    let count = 0;

    for(let i = 0; i < sortedArr.length; i++) {
        const sortedVal = sortedArr[i];
        const originalVal = originalArr[i];

        if(sortedVal !== originalVal) {
            count++;
            swap(originalArr, i, OriginalValueToIdx[sortedVal], OriginalValueToIdx);
        }
    }
    return count;
}

const swap = (arr, a, b, OriginalValueToIdx) => {
    const temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;

    // has to reflect the swaped values in our original hashSet.
    OriginalValueToIdx[arr[a]] = a;
    OriginalValueToIdx[arr[b]] = b;
}