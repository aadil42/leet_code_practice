/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Time O(n) | Space O(1)
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    
    // edge case. it is not neccecery the code will work out to be fine even without it.
    if(!head.next) return head;
    
    // helper function.
    const reverse = (head) => {

        let curr = head;
        let pre = null;

        while(curr) {
            const temp = curr.next;
            curr.next = pre;
            pre = curr;
            curr = temp;    
        }

        return pre;
    }

    let slow = head;
    let fast = head;

    while(fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    let remainingHalf = slow.next;
    slow.next = null;

    // reverse remainingHalf;
    let remainingHalfReverse = reverse(remainingHalf);
    let curr = head;
    
    while(remainingHalfReverse) {
        const temp1 = curr;
        const temp2 = remainingHalfReverse;
        curr = curr.next;
        remainingHalfReverse = remainingHalfReverse.next;

        temp1.next = temp2;
        temp2.next = curr;
    }
};

// REMEMBER 
// you need legit linked list for input to test this solution, which you don't have but you have checked it on leet code
// it's workin fine. just push it on github as it is. it's legit solution and it's working.

var reorderList1 = function(head) {
  
    if(!head || !head.next) return head;
    let slowPointer = head;
    let fastPointer = head;
    
    while(fastPointer && fastPointer.next) {
        slowPointer = slowPointer.next;
        fastPointer = fastPointer.next.next;
    }
    reverseHead  = reverseLinkList(slowPointer);
    ref = head;
    console.log(head);
    while(reverseHead && reverseHead.next) {
        const reverseNext  = reverseHead.next;
        const headNext  = head.next;
        
        head.next = reverseHead;
        reverseHead.next = headNext;
        
        head = headNext;
        reverseHead = reverseNext;
    }
    return ref;
};

function reverseLinkList(head) {
    let pre = null;
    while(head) {
        const temp = head.next;
        head.next = pre;
        pre = head;
        head = temp;        
    } 
    
    return pre;
}


// solving reorder-list second time.

var reorderListR2 = function(head) {

    let slowPointer = head;
    let fastPointer = head;
    const ref = head;
    while(fastPointer && fastPointer.next) {
        slowPointer = slowPointer.next;
        fastPointer = fastPointer.next.next;
    }


    let reverseHead = reverseLinkList(slowPointer);

    while(reverseHead && reverseHead.next) {

        let reverseHeadNext = reverseHead.next;
        let headNext = head.next;

        head.next = reverseHead;
        reverseHead.next = headNext;

        head = headNext;
        reverseHead = reverseHeadNext;
    }

    return ref;

};