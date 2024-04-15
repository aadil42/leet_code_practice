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
 * https://leetcode.com/problems/reverse-linked-list/
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  
    let pre = null;
    while(head) {
        const temp = head.next;
        head.next = pre;
        pre = head;
        head = temp
    }
    return pre;
};