/**
 * LinkedList
 * Time O(n) | Space O(n)
 * https://leetcode.com/problems/find-the-minimum-and-maximum-number-of-nodes-between-critical-points
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var nodesBetweenCriticalPoints = function(head) {

    const criticalPoints = [];
    const minMax = [-1,-1];

    let curr = head;

    let idx = 2;

    const isMinima = (node) => {
        if(node.next.val < node.val && node.next.val < node.next.next.val) return true;
        return false;
    }

    const isMaxima = (node) => {
        if(node.next.val > node.val && node.next.val > node.next.next.val) return true;
        return false;
    }
    
    while(curr.next && curr.next.next) {
        if(isMinima(curr) || isMaxima(curr)) criticalPoints.push(idx);
        curr = curr.next;
        idx++;
    }

    if(criticalPoints.length < 2) return minMax;
    minMax[1] = criticalPoints[criticalPoints.length - 1] - criticalPoints[0];
    minMax[0] = Infinity;

    for(let i = 1; i < criticalPoints.length; i++) {
        minMax[0] = Math.min(minMax[0], criticalPoints[i] - criticalPoints[i-1]);
    } 

    return minMax;
};