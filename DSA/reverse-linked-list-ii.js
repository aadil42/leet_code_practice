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
 * https://leetcode.com/problems/reverse-linked-list-ii/
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {

    // edge case if the list only has one node.
    if(!head.next) return head;

    // if left and right are same then the reverse portion would be the same.
    if(left === right) return head;

    const reverseLL = (head) => {

        const end = head;
        let pre = null;

        while(head) {
            const temp = head.next;
            head.next = pre;
            pre = head;
            head = temp;
        }

        return [pre, end];
    }

    let i = 1;
    let pre = null;
    let post = null;

    let curr = head;

    if(left === 1) {
        pre = new ListNode(null, head);
    }

    while(curr) {
        if(i === left-1) {
            pre = curr;
        }
        if(i === right) {
            post = curr.next;
            curr.next = null;
        }
        curr = curr.next;
        i++;
    }

    // console.log(pre.next, 'this is from pre');
    const [start, end] = reverseLL(pre.next);
    // console.log(start, 'after reversing pre');
    pre.next = start;
    end.next = post;

    // edge case.
    if(left === 1) return pre.next;
    return head;
};


// REMEMBER 
// you need legit linked list for input to test this solution, which you don't have but you have checked it on leet code
// it's workin fine. just push it on github as it is. it's legit solution and it's working.


var reverseBetween0 = function(head, left, right) {
    
    let dummy = new ListNode(null, head);
    let preNode = dummy;
    let current = head;
      let count = 0;
      while(count < left - 1) {
          current = current.next;
          preNode = preNode.next;
          count++;
      }
      
      count = 0;
      let pre = null;
      while(count < right - left + 1) {
          const temp = current.next;
          current.next = pre;
          pre = current;
          current = temp;
          count++;
      }
      
      preNode.next.next = current;
      preNode.next = pre;
      return dummy.next;
  };
  