/**
 * HashMap.
 * Time O(n) | Space O(n)
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
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