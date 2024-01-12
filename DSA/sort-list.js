/**
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
var sortList = function(head) {
    
    if(!head || !head.next) {
        return head;
    }
    const left = head;
    const mid = getHalf(head);
    const right = mid.next;
    mid.next = null;
    console.log(left,right);
    
    const leftList = sortList(left);
    const rightList = sortList(right);

    return mergeTwoLists(leftList, rightList);
};

var mergeTwoLists = function(list1, list2) {
//    let head, dummy = new ListNode();
    let head = new ListNode();
    let dummy = head;
   while(list1 && list2) {
       if(list1.val < list2.val) {
           head.next = list1;
           head = head.next;
           list1 = list1.next;
       } else {
           head.next = list2;
           head = head.next;
           list2 = list2.next;
       }
   }

   if(list1) {
       head.next = list1;
   }
   if(list2) {
       head.next = list2;
   }

   return dummy.next;
};

var swapNodes = function(list1, list2) {
    const tmep = list1.next;
    list1.next = list2;
    return temp;
}

var getHalf = function(head) {

    let slow = head;
    let fast = head.next;
    while(fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
}