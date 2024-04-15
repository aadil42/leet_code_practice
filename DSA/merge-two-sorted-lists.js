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
 * https://leetcode.com/problems/merge-two-sorted-lists/
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    
    const dummyNode = new ListNode();

    let curr = dummyNode;
    while(list1 && list2) {
        if(list1.val < list2.val) {
            curr.next = list1;
            list1 = list1.next;
        } else {
            curr.next = list2;
            list2 = list2.next;
        }
        curr = curr.next;
    }

    while(list1) {
        curr.next = list1
        curr = curr.next;
        list1 = list1.next;
    }

    while(list2) {
        curr.next = list2;
        curr = curr.next;
        list2 = list2.next;
    }
    
    return dummyNode.next;
};