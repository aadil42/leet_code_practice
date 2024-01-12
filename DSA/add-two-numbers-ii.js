/**
 * 
 * Reversing linked list.
 * https://leetcode.com/problems/add-two-numbers-ii/
 * 
 * Time O(n) | Space O(n)
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

const reverseLL = (node) => {

    let pre = null;
    let curr = node;

    while(curr) {
        const next = curr.next;
        curr.next = pre;
        pre = curr;
        curr = next;
    }

    return pre;
}

var addTwoNumbers = function(l1, l2) {
    l1 = reverseLL(l1); // O(n)
    l2 = reverseLL(l2); // O(n)
    let carry = 0;
    let total = new ListNode();
    const totalRef = total;

    while(l1 || l2) {
        const digit1 = (l1 && l1.val) || 0;
        const digit2 = (l2 && l2.val) || 0;
        total.val = (digit1 + digit2 + carry) % 10;
        total.next = new ListNode();
        total = total.next;
        carry = Math.floor((digit1+digit2 + carry)/10);
        l1 = l1 && l1.next
        l2 = l2 && l2.next;
    }

    if(carry) {
        total.val = carry
        total.next = new ListNode();
        total = total.next;
    }

    return reverseLL(totalRef).next;
};