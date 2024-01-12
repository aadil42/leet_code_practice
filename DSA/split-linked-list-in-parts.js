/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * Linked List Traversal
 * Time O(n) | Space O(n)
 * https://leetcode.com/problems/split-linked-list-in-parts
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode[]}
 */
var splitListToParts = function(head, k) {
    
    const llLen = (head) => {
        let current = head;

        let len = 0;
        while(current) {
            len++;
            current = current.next;
        }
        return len;
    }
    const splitLinkedList = (head, len) => {
        let count = 1;
        while(count < len) {
            head = head && head.next;
            count++;
        };
        nextNode = head && head.next;
        if(head) head.next = null;
        return nextNode;
    }

    const linkedListLen = llLen(head);
    let partsLen = Math.ceil(linkedListLen/k);
    let remainder = linkedListLen%k;
    const result = [];
    
    // we are using k variable in if statment in while loop. That's why we're making
    // new variable for k.
    let count = k;
    while(count) {
        result.push(head);
        if(head) {
            head = splitLinkedList(head, partsLen);
        }
        if(remainder) remainder--;
        if(linkedListLen%k  && !remainder && Math.ceil(linkedListLen/k) == partsLen) partsLen--;
        count--;
    }
    return result;
};