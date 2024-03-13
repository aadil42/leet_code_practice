/**
 * Hashing | LinkedList
 * Time O(n) | Space O(n)
 * https://leetcode.com/problems/remove-zero-sum-consecutive-nodes-from-linked-list
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
var removeZeroSumSublists = function(head) {

    const dummyNode = new ListNode(0, head);
    const preFixHash = {
        0: dummyNode
    };
    
    let current = head;
    let totalSoFar = 0;

    while(current) {
        totalSoFar += current.val;
        if(totalSoFar in preFixHash) {
            let toBeDeleted = preFixHash[totalSoFar].next;
            let tempSum = totalSoFar + toBeDeleted.val;
            while(toBeDeleted !== current) {
                delete preFixHash[tempSum];
                toBeDeleted = toBeDeleted.next;
                tempSum += toBeDeleted.val;
            }
            preFixHash[totalSoFar].next = current.next;
        } else {
            preFixHash[totalSoFar] = current;
        }
        current = current.next;
    }
    
    return dummyNode.next;
};

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Brute Force | Linked List
 * Time O(n^2) | Space O(n)
 * https://leetcode.com/problems/remove-zero-sum-consecutive-nodes-from-linked-list/ 
 * @param {ListNode} head
 * @return {ListNode}
 */
var removeZeroSumSublists1 = function(head) {
        
    const listArr = [];

    while(head) {
        listArr.push(head.val);
        head = head.next;
    }

    const deleteNums = (arr, start, end) => {
        for(let i = start; i < end; i++) {
            arr[i] = "#";
        }
    }
    
    for(let i = 0; i < listArr.length; i++) {
        for(let j = i; j < listArr.length; j++) {
            if(listArr[j] === "#") continue;
            const total = listArr.slice(i, j+1).reduce((acc, curr) => acc+curr, 0);
            if(!total) {
                deleteNums(listArr, i, j+1);
                break;
            }
        }
    }


    head = new ListNode();
    let curr = head;

    for(let i = 0; i < listArr.length; i++) {
        if(listArr[i] === "#") continue;
        curr.next = new ListNode(listArr[i]);
        curr = curr.next;
    }

    return head.next;
};