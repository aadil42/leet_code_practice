/**
 * 
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * HashMap.
 * Time O(n) | Space O(n)
 * https://leetcode.com/problems/copy-list-with-random-pointer
 * 
 * @param {Node} head
 * @return {Node}
 */

var copyRandomList = function(head) {
    const randomPointerHash = new Map();

    randomPointerHash.set(null, null);

    let currentHead = head;

    while(currentHead) {
        randomPointerHash.set(currentHead, new Node(currentHead.val, null,null));
        currentHead = currentHead.next;
    }

    currentHead = head;
    while(currentHead) {
        const deepCopyNode = randomPointerHash.get(currentHead);
        deepCopyNode.next = randomPointerHash.get(currentHead.next);
        deepCopyNode.random = randomPointerHash.get(currentHead.random)
        currentHead = currentHead.next;
    }

    return randomPointerHash.get(head);
};


/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * LinkedList | Hash
 * Time O(n) | Space O(n)
 * https://leetcode.com/problems/copy-list-with-random-pointer/
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
    
    // add idx for each node for unique identification.
    let curr = head;
    let idx = 1;
    while(curr) {
        curr.idx = idx;
        curr = curr.next;
        idx++;
    }

    const dummyNode = new Node();
    let currDummy = dummyNode;
    curr = head;
    
    // copy list.
    const nodeHash = {};
    idx = 1;
    while(curr) {
        currDummy.next = new Node();
        currDummy.next.val = curr.val;
        currDummy = currDummy.next;
        nodeHash[idx] = currDummy;
        idx++;
        curr = curr.next;
    }
    
    // copy random pointers
    curr = head;
    currDummy = dummyNode.next;

    while(curr) {
        const randomTargetIdx = curr.random && curr.random.idx;
        const randomTargetNode = nodeHash[randomTargetIdx] || null;
        currDummy.random = randomTargetNode;

        curr = curr.next;
        currDummy = currDummy.next;
    }

    return dummyNode.next;
};