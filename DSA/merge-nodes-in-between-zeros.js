/** 
 * LinkedList
 * Time O(n) | Space O(n)
 * https://leetcode.com/problems/merge-nodes-in-between-zeros
 * 
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
var mergeNodes = function(head) {
    
    const dummyNode = new ListNode();

    let currNode = dummyNode;
    const makeNewNode = (sum) => {
        currNode.next = new ListNode(sum);
        currNode = currNode.next;
    }

    let curr = head.next;
    let currSum = 0;

    while(curr.next) {
        currSum += curr.val;
        if(curr.next.val === 0) {
            makeNewNode(currSum);
            currSum = 0;
        }
        curr = curr.next;
    }

    return dummyNode.next;
};