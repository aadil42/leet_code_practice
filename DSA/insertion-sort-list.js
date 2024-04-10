/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Time O(n^2) | Space O(1)
 * @param {ListNode} head
 * @return {ListNode}
 */
var insertionSortList = function(head) {
    
    const dummyNode = new ListNode(-Infinity, head);
    head = dummyNode;

    const insert = (node) => {
        let head = dummyNode;

        while(head.next.val < node.val) {
            head = head.next;
        }

        const temp = head.next;
        head.next = node;
        node.next = temp;
    }

    while(head) {

        if(head.next && (head.next.val < head.val)) {
            temp = head.next.next;
            insert(head.next);
            head.next = temp;
            continue;
        }

        head = head.next;
    }

    return dummyNode.next;
};

/**
 * Time O(n^2) | Space O(1)
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
var insertionSortList0 = function(head) {
    
    let current = head;
    let dummy = new ListNode();

    while(current) {
        const temp = current;
        current = current.next;
        temp.next = null;
        insertNode(dummy, temp);
    }

    return dummy.next;
};

var insertNode = function(head, newNode) {

    let pre = head;
    let current = head.next;

    while(current && current.val < newNode.val) {
        pre = current;
        current = current.next;
    }

    newNode.next = current;
    pre.next = newNode;
}