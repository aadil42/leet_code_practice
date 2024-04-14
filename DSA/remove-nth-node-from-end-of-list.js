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
 * https://leetcode.com/problems/remove-nth-node-from-end-of-list/
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    
    // edge cases.
    if(!head) return null;

    const getLen = (head) => {
        let i = 0;
        while(head) {
            head = head.next;
            i++;
        }
        return i;
    }

    const len = getLen(head);
    let k = len - n;

    const dummyNode = new ListNode(null, head);

    let curr = dummyNode;
    while(k) {
        curr = curr.next;
        k--;
    }

    curr.next = curr.next.next;
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
 * LinkedList
 * Time O(n) | Space O(1)
 * https://leetcode.com/problems/remove-nth-node-from-end-of-list
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd0 = function(head, n) {
    
    let len = 0;
    let curr = head;
    
    while(curr) {
        len++;
        curr = curr.next;
    }

    if(n === len) return head.next;

    n = len - n;

    let i = 0;
    curr = head;

    while(curr) {
        if(i === n-1) {
            curr.next = curr.next.next;
            break;
        }
        curr = curr.next;
        i++;
    }

    return head;
};

var removeNthFromEnd1 = function(head, n) {
    
    if(!head) return null;
    // if the node is the only node in the list
    if(!head.next && n == 1) {
        head = null;
        return head;
    }
    
    const linkLen = findLen(head);
    const diff = linkLen - n;
    const firstHeadRef = head;
    

    
    if(diff >= 0) {
        let count = 1;
        
        // if n is equal to the  lenght of the linklist.
        if(diff === 0) {
            head = head.next;
            return head;
        }
        while(count < diff) {
            head = head.next;
            count++;
        }
        if(head.next && head.next.next) {
            head.next = head.next.next;            
        } else{
            head.next = null;            
        }
    } else {
        return null;
    }
    
    return firstHeadRef;
};

var findLen = function(node) {
    let count = 0;
    while(node) {
        node = node.next;
        count++;
    }
    
    return count;
}

// solving it again. 
var removeNthFromEndR = function(head, n) {
    
    const reverseList = reversLinkList(head);
    let reversehead = new ListNode(null, reverseList);
    let temp = reversehead;
    let i = 1;
    while(i !== n) {
        i++;
        temp = temp.next;
    }

    temp.next = temp.next.next;

    const unreverseList = reversLinkList(reversehead.next);

    return unreverseList;
};

var reversLinkList = function(head) {

    let prev = null;

    while(head) {
        let temp = head;
        head = head.next;
        temp.next = prev;
        prev = temp;
        temp = head;
    }

    return prev;    
}