/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * LinkedList 
 * Time O(n) | Space O(1)
 * https://leetcode.com/problems/remove-linked-list-elements/
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    
    const dummyNode = new ListNode(null, head);
    let curr = dummyNode;

    while(curr) {
        while(curr.next && curr.next.val === val) {
            curr.next = curr.next.next;
        }
        curr = curr.next;
    }

    return dummyNode.next;
};