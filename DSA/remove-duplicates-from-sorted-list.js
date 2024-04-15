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
 * https://leetcode.com/problems/remove-duplicates-from-sorted-list/
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    let curr = head;
    while(curr) {
        while(curr.next && curr.val === curr.next.val) {
            curr.next = curr.next.next;
        }
        curr = curr.next;
    }
    return head;
};