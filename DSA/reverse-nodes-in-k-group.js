/**
 * 
 * LinkedList
 * Time O(n) | Space O(n)
 * https://leetcode.com/problems/reverse-nodes-in-k-group/
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    // helper methods
    const getLength = (curr) => {
        let len = 0;
        while(curr) {
            len++;
            curr = curr.next;
        }
        return len;
    }

    const makeDoubly = (curr) => {
        let pre = null;
        while(curr) {
            curr.pre = pre;
            pre = curr;
            curr = curr.next;
        }
        return pre;
    }

    const add = (node, k) => {
        const dummyNode = new ListNode();
        let curr = dummyNode;
        while(k) {
            curr.next = new ListNode(node.val);
            node = node.pre;
            curr = curr.next;
            k--;
        }

        return dummyNode.next;
    }

    // get len of list
    const len = getLength(head);
    let remainder = len%k;
    let rear = makeDoubly(head);
    let currHead = head;
    let remainingNodes = null;

    if(remainder) {
        while(remainder) {
            rear = rear.pre;
            remainder--;
        }
        remainingNodes = rear.next;
    }

    const dummyNode = new ListNode();
    let currDummyNode = dummyNode;

    let count = 1;
    while(currHead) {
        if(!(count%k)) {
            currDummyNode.next = add(currHead, k);
            // go to the last node;
            while(currDummyNode.next) {
                currDummyNode = currDummyNode.next;
            }
        }
        currHead = currHead.next;
        count++;
    }

    currDummyNode.next = remainingNodes;

    return dummyNode.next;
};

/**
 * LinkedList
 * Time O(n) | Space O(n)
 * https://leetcode.com/problems/reverse-nodes-in-k-group/
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup1 = function(head, k) {
    
    let dummy = new ListNode();
    let current = head;
    let portion = k;
    const kSortedNode = dummy;
    while(current) {
        portion--;
       
        if(portion === 0) {
          const temp = current;
          current = current.next;
          temp.next = null;
          const [begining, end] = reverseList(head);
          head = current;
          dummy.next = begining;
          dummy = end;
          portion = k;
        } else {
             current = current.next;
        }
    }

    dummy.next = head;
    return kSortedNode.next;
};

var reverseList = function(head) {
let pre = null;
let end = head;
while(head) {
    console.log(head.val)
    const temp = head.next;
    head.next = pre;
    pre = head;
    head = temp;
}
let begining = pre;
return [begining, end];
}