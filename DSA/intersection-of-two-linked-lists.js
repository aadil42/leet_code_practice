/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * LinkedList | Hashing
 * Time O(n) | Space O(n)
 * https://leetcode.com/problems/intersection-of-two-linked-lists/
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    
    const uniqueNodes = new Set();
    let curr = headA;

    while(curr) {
        uniqueNodes.add(curr);
        curr = curr.next;
    }

    curr = headB;
    while(curr) {
        if(uniqueNodes.has(curr)) break;
        curr = curr.next;
    }
    
    return curr;
};