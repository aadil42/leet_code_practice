/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * Tortoise & Hare algorith
 * https://leetcode.com/problems/linked-list-cycle/
 * 
 * Time O(n) | Space O(1)
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    
    // tortoise & hare algorithm.
    let slow = head && head.next;
    let fast = head && head.next && head.next.next;

    while(fast) {
        if(slow === fast) return true;
        slow = slow.next;
        fast = fast.next && fast.next.next;
    }
    return false;
};

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * Hashing
 * https://leetcode.com/problems/linked-list-cycle
 * Time O(n) | Space O(n)
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle1 = function(head) {
    
    const hash = new Set();

    while(head) {
        if(hash.has(head)) return true;
        hash.add(head);
        head = head.next;
    }
    
    return false;
};