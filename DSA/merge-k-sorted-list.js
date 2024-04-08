/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * LinkedList
 * Time O(n^2) | Space O(1)
 * https://leetcode.com/problems/merge-k-sorted-lists/
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    
    if(lists.length === 0) return null;  
    if(lists.length === 1) return lists[0];

    const merge2Lists = (h1, h2) => {
        const dummyNode = new ListNode();
        let curr = dummyNode;
        while(h1 && h2) {
            if(h1.val < h2.val) {
                curr.next = h1;
                h1 = h1.next;
            } else {
                curr.next = h2;
                h2 = h2.next;
            }
            curr = curr.next;
        }
        
        if(h1) curr.next = h1;
        if(h2) curr.next = h2;

        while(curr.next) curr = curr.next;
        return dummyNode.next;
    }

    let sorted = null;
    for(let i = 0; i < lists.length ; i++) {
        sorted = merge2Lists(sorted, lists[i]);
    }
    return sorted;
};

var mergeTwoLists0 = function(list1, list2) {
    let head = tail = new ListNode(0);

    while (list1 && list2) {
        const l1 = list1.val <= list2.val;
        if (l1) {
            tail.next = list1;
            list1 = list1.next;
        } else {
            tail.next = list2;
            list2 = list2.next;
        }

        tail = tail.next;
    }

    tail.next = list1 || list2;

    return head.next;
};
var mergeKLists = function(lists) {

   let mergeLists = null;

    for(let i = 0; i < lists.length; i++) {
        mergeLists =  mergeTwoLists(mergeLists, lists[i]); 
    }
    
    return mergeLists;
};