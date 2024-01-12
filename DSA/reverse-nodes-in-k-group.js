/**
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