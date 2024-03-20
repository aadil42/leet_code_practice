/**
 * Linked list traversal
 * Time O(n) | Space O(1);
 * https://leetcode.com/problems/merge-in-between-linked-lists/
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {number} a
 * @param {number} b
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeInBetween = function(list1, a, b, list2) {
    
    const dummy = new ListNode(0, list1);

    let list1LeftEnd = dummy;
    let list1RightStart = dummy;

    let aCount = 0;
    let bCount = 0;

    while(bCount < b+2) {
        if(aCount < a) {
            list1LeftEnd = list1LeftEnd.next;
        } 
        if(bCount < b+2) {
            list1RightStart = list1RightStart.next;
        }
        aCount++;
        bCount++;
    }

    list1LeftEnd.next = list2;

    let list2End = list2;
    while(list2End.next) {
        list2End = list2End.next;
    }

    list2End.next = list1RightStart;

    return dummy.next;
};