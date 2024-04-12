
// REMEMBER 
// you need legit linked list for input to test this solution, which you don't have but you have checked it on leet code
// it's workin fine. just push it on github as it is. it's legit solution and it's working.
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
 * https://leetcode.com/problems/swap-nodes-in-pairs/
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    
    const dummyNode = new ListNode(null, head);
    let curr = dummyNode;

    while(curr.next && curr.next.next) {
        const temp = curr.next.next.next;
        const temp1 = curr.next.next;

        curr.next.next.next = curr.next;
        curr.next.next = temp;
        curr.next = temp1;

        curr = curr.next.next;
    }

    return dummyNode.next;
};


var swapPairs0 = function(head) {
    
    if(!head) return null;
    const dummy = new ListNode(null, head);
    let pre = dummy;
    let current = head;
   
    while(current && current.next) {
        const temp = current.next.next;
        const temp1 = current.next;
        
        temp1.next = current;
        current.next = temp;
        pre.next = temp1; 
        
        pre = current;
        current = temp;
    }
    
    return dummy.next;
};