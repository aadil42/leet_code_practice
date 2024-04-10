/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * LinkedList
 * Time O(n*(n/k)) | Space O(k)
 * https://leetcode.com/problems/split-linked-list-in-parts/
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode[]}
 */
var splitListToParts = function(head, k) {
    // helper methods

    const getLLlength = (head) => {
        let len = 0;
        while(head) {
            head = head.next;
            len++;
        }
        return len;
    }
    
    const splitArr = (head, k) => {

        const llArr = [];

        while(k) {
            if(!head) {
                llArr.push(null);
                k--;
                continue;
            }
            llArr.push(head);
            const temp = head.next;
            head.next = null;
            head = temp;
            k--;
        }

        return llArr;
    }

    const splitLL = (head, portion) => {
        const dummyNode = head;

        while(portion > 1) {
            head = head.next;
            portion--;
        }

        const nextHead = head.next;
        head.next = null;
        return [dummyNode, nextHead];
    }

    const len = getLLlength(head);

    // edge case.
    if(len < k) {
        return splitArr(head, k);
    }

    let remainder = len%k;
    const equalPartsLen = Math.floor(len/k);
    const result = [];
    let counter = 1;

    while(k) {

        if(remainder && counter%equalPartsLen === 0) {
            const [firstNode, nextHead] = splitLL(head, equalPartsLen + 1);
            result.push(firstNode);
            remainder--;
            k--;
            head = nextHead;
            counter++;
            continue;
        }

        if(counter%equalPartsLen === 0) {
            const [firstNode, nextHead] = splitLL(head, equalPartsLen);
            result.push(firstNode);
            k--;
            head = nextHead;
            counter++;
            continue;
        }

        counter++;
    }

    return result;
};
/////////////////////////////////////////////////////////////////////////
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * Linked List Traversal
 * Time O(n*(n/k)) | Space O(k)
 * https://leetcode.com/problems/split-linked-list-in-parts
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode[]}
 */
var splitListToParts0 = function(head, k) {
    
    const llLen = (head) => {
        let current = head;

        let len = 0;
        while(current) {
            len++;
            current = current.next;
        }
        return len;
    }
    const splitLinkedList = (head, len) => {
        let count = 1;
        while(count < len) {
            head = head && head.next;
            count++;
        };
        nextNode = head && head.next;
        if(head) head.next = null;
        return nextNode;
    }

    const linkedListLen = llLen(head);
    let partsLen = Math.ceil(linkedListLen/k);
    let remainder = linkedListLen%k;
    const result = [];
    
    // we are using k variable in if statment in while loop. That's why we're making
    // new variable for k.
    let count = k;
    while(count) {
        result.push(head);
        if(head) {
            head = splitLinkedList(head, partsLen);
        }
        if(remainder) remainder--;
        if(linkedListLen%k  && !remainder && Math.ceil(linkedListLen/k) == partsLen) partsLen--;
        count--;
    }
    return result;
};