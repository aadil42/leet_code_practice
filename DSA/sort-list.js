/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * LinkedList | Merge-sort
 * Time O(n*log(n)) | Space O(1)
 * https://leetcode.com/problems/sort-list/
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function(head) {
    
    const merge = (h1, h2) => {
        const dummyNode = new ListNode();
        let curr = dummyNode;

        while(h1 && h2) {
            if(h1.val < h2.val) {
                curr.next = h1;
                h1 = h1.next;
                curr = curr.next;
            } else {
                curr.next = h2;
                h2 = h2.next;
                curr = curr.next;
            }
        }


        while(h1) {
            curr.next = h1;
            curr = curr.next;
            h1 = h1.next;
        }

        while(h2) {
            curr.next = h2;
            curr = curr.next;
            h2 = h2.next;
        }

        return dummyNode.next;
    }
    
    const getLen = (head) => {
        let i = 0;
        while(head) {
            head = head.next;
            i++;
        }  
        return i;
    };

    const getHalf = (head) => {
        const len = getLen(head);
        const half = Math.floor(len/2);

        let first = head;
        let second = null;
        let curr = head;
        let i = 1;

        while(true) {
            if(i === half) {
                second = curr.next;
                curr.next = null; // break the link.
                break;
            }
            curr = curr.next;
            i++;
        }

        return [first, second];
    }

    const mergeSort = (head) => {
        if(!head.next) return head;

        const [firstHalf, secondHalf] = getHalf(head);
        const firstSorted = mergeSort(firstHalf);
        const secondSorted = mergeSort(secondHalf);
        
        return merge(firstSorted, secondSorted);
    } 

    // this condition is because head can be null (0 lengthed linked list).
    return (head && mergeSort(head)) || head; 
};

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
var sortList0 = function(head) {
    
    if(!head || !head.next) {
        return head;
    }
    const left = head;
    const mid = getHalf(head);
    const right = mid.next;
    mid.next = null;
    console.log(left,right);
    
    const leftList = sortList0(left);
    const rightList = sortList0(right);

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