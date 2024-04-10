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
 * https://leetcode.com/problems/rotate-list/
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    
    // edge cases.
    if(!head) return null;
    if(!head.next) return head;


    const getLength = (head) =>  {
        let i = 0;
        while(head) {
            head = head.next;
            i++;
        }
        return i;
    }

    const len = getLength(head);
    k = k%len;
    const targetLen = len - k;
    let idx = 1;
    let remainingHead = null;

    if(targetLen === len) return head;

    let curr = head;
    while(curr) {
        if(idx === targetLen) {
            remainingHead = curr.next;
            curr.next = null;
        }
        curr = curr.next;
        idx++;
    }

    const newHead = remainingHead;
    while(remainingHead.next) {
        remainingHead = remainingHead.next;
    }

    remainingHead.next = head;

    return newHead;
};


// REMEMBER 
// you need legit linked list for input to test this solution, which you don't have but you have checked it on leet code
// it's workin fine. just push it on github as it is. it's legit solution and it's working.

var rotateRight0 = function(head, k) {
    
    if(!head) return null;   

    const listLen = getLength(head);
    let diff;

    const remainder = k % listLen;
    if(remainder == 0) {
        return head;
    } else {
        diff = listLen - remainder;
    } 
    
    let count = 1;
    let current = head;
    let firstNodeRef = head;
    while(count < diff) {
        current = current.next;
        count++;
    }
    
    const temp = current.next;
    current.next = null;
    head = temp;
    current = temp;
    
    while(current && current.next) {
        current = current.next;
    }
    
    if(current) {
    current.next = firstNodeRef;        
    }
    
    return head;
    
};

function getLength(node) {
    let count = 0;
    while(node) {
        node = node.next;
        count++;
    }
    
    return count;
}