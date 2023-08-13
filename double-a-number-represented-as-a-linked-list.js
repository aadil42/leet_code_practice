/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Reverse Linked list
 * 
 * https://leetcode.com/problems/double-a-number-represented-as-a-linked-list/
 * Time O(n) | Space O(1)
 * @param {ListNode} head
 * @return {ListNode}
 */
var doubleIt = function(head) {
    
    const reverseLL = (head) => {
        let pre = null;
        while(head) {
            const next = head.next;
            head.next = pre;
            pre = head;
            head = next;
        }
        return pre;
    }
    
    head = reverseLL(head);
    let carry = 0;
    
    let curr = head;
    let preForCarry = curr;
    while(curr) {
        const digit = (curr.val  * 2 + carry) % 10;
        carry = Math.floor((curr.val * 2 + carry )/10);
        curr.val = digit;
        if(!curr.next) {
            preForCarry = curr;
        }
        curr = curr.next;
    }
    
    // if there's a remaining carry then append it in the answer.
    if(carry) {
        const node = new ListNode(carry);   
        preForCarry.next = node;
    }
    
    return reverseLL(head);
};