/**
 * Time O(n^2) | Space O(1)
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var insertionSortList = function(head) {
    
    let current = head;
    let dummy = new ListNode();

    while(current) {
        const temp = current;
        current = current.next;
        temp.next = null;
        insertNode(dummy, temp);
    }

    return dummy.next;
};

var insertNode = function(head, newNode) {

    let pre = head;
    let current = head.next;

    while(current && current.val < newNode.val) {
        pre = current;
        current = current.next;
    }

    newNode.next = current;
    pre.next = newNode;
}