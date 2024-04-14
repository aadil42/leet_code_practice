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
 * https://leetcode.com/problems/maximum-twin-sum-of-a-linked-list/
 * @param {ListNode} head
 * @return {number}
 */
var pairSum = function(head) {
    
    const getLen = (head) => {
        let i = 0;
        while(head) {
            head = head.next;
            i++;
        }
        return i;
    }

    const reverseLL = (head) => {
        let pre = null;
        while(head) {
            const temp = head.next;
            head.next = pre;
            pre = head;
            head = temp;
        }
        return pre;
    }
    
    const dummyNode = new ListNode(null, head);
    const len = getLen(head);
    let half = len/2;
    
    let curr = dummyNode;
    while(half) {
        curr = curr.next;
        half--;
    }

    let head2 = curr.next;
    head2 = reverseLL(head2);

    curr.next = null; // break the link

    let max = 0;
    while(head) {
        max = Math.max(head.val + head2.val, max);
        head = head.next;
        head2 = head2.next;
    }

    return max;
};
/////////////////////////////////////////////////////
/**
 * Linear Time 
 * 
 * Time O(n) | Space O(1)
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var pairSum0 = function(head) {
    
    //helper functions
    const llLength = (head) => {
    let count = 0;
    while(head) {
        head = head.next;
        count++;
    }
    return count;
    } 

    const reverseLL = (head, len) => {
        
        let count = 0;
        let temp = null;
        while(count < len) {
            const next = head.next;
            head.next = temp;
            temp = head;
            head = next;
            count++;
        }
        // console.log(temp);
        return temp;
    }
    ///////////////////////////////////////////////////////////////
    // code starts from here
    // get the len
    const mid = llLength(head)/2;
    // get the right starting pointer
    let count = 0;
    let rightPointer = head;
    while(count < mid) {
        rightPointer = rightPointer.next;
        count++;
    }

    // reverse the left portion of the array
    leftPointer = reverseLL(head, mid);

    let max = 0;
    // meat of the code
    while(leftPointer && rightPointer) {
        max = Math.max(leftPointer.val + rightPointer.val, max);
        console.log(leftPointer.val + rightPointer.val);
        leftPointer = leftPointer.next;
        rightPointer = rightPointer.next;
    }

    return max;
};