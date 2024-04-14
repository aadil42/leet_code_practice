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
 * https://leetcode.com/problems/swapping-nodes-in-a-linked-list/
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var swapNodes = function(head, k) {

    if(!head.next) return head;

    const getLen = (head) => {

        let i = 0;
        while(head) {
            head = head.next;
            i++;
        }

        return i;
    }
    const dummyNode = new ListNode(null, head);
    
    const len = getLen(head);

    const fromEndCount = (len - k) || 1;
    let idx = 1;

    let curr = dummyNode.next;
    let left = null;
    let right = null;

    if(k === 1 || k === len) {
        left = dummyNode;
        let right = dummyNode;

        while(right.next && right.next.next) {
            right = right.next;
        }
        
            // swap the nodes here.

        const temp = left.next;
        const temp1 = right.next;
        const temp2 = right.next.next;

        left.next = temp1;
        left.next.next = temp.next;

        right.next = temp;
        right.next.next = temp2;

        // take care of cycles.
        if(right.next && (right.next === right.next.next)) {
            right.next.next = left;
        }
        // take care of cycles.
        if(left.next && (left.next === left.next.next)) {
            left.next.next = right;
        }

        return dummyNode.next;
    }

    while(curr) {
        // console.log(curr);
        if(idx === k-1) {
            left = curr;
        };
        if(idx === fromEndCount) {
            right = curr;
        };
        idx++;
        curr = curr.next;
    }

    // swap the nodes here.
    const temp = left.next;
    const temp1 = right.next;
    const temp2 = right.next.next;

    left.next = temp1;
    left.next.next = temp.next;

    right.next = temp;
    right.next.next = temp2;

    // take care of cycles.
    if(right.next === right.next.next) {
        right.next.next = left;
    }
    // take care of cycles.
    if(left.next === left.next.next) {
        left.next.next = right;
    }

    return dummyNode.next;
};