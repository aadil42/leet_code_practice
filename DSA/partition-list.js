
// REMEMBER 
// you need legit linked list for input to test this solution, which you don't have but you have checked it on leet code
// it's workin fine. just push it on github as it is. it's legit solution and it's working.

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
 * https://leetcode.com/problems/partition-list/
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    
    const dummyNode = new ListNode(null, head);

    let partitionLocation = null;
    let curr = dummyNode;

    while(curr && curr.next) {
        if(curr.next.val >= x && !partitionLocation) partitionLocation = curr;

        while(curr.next && curr.next.val < x && partitionLocation) {
            const temp = partitionLocation.next;
            const temp1 = curr.next.next;

            partitionLocation.next = curr.next;
            curr.next.next = temp;
            partitionLocation = partitionLocation.next;
            curr.next = temp1;
        }

        curr = curr.next;
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
 * List traversal.
 * https://leetcode.com/problems/partition-list/
 * 
 * Time O(n) | Space  O(n)
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */


var partition0 = function(head, x) {

    if(!head) return null;
       
    let lesserHead = new ListNode();
    let greaterHead = new ListNode();
    let lesserHeadRef = lesserHead;
    let greaterHeadRef = greaterHead;
       while(head) {
           if(head.val < x) {
               lesserHead.next = head;
               lesserHead = lesserHead.next;
           } else {
               greaterHead.next = head;
               greaterHead = greaterHead.next;
           }
           head = head.next;
       }
       greaterHead.next = null;
       lesserHead.next = greaterHeadRef.next;
       
       return lesserHeadRef.next;
       
   };