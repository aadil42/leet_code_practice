/**
 * LinkedList
 * Time O(n) | Space O(1)
 * https://leetcode.com/problems/palindrome-linked-list
 * 
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {

    let curr = head;
    let pre = null;
    while(curr) {
        curr.pre = pre;
        pre = curr;
        curr = curr.next;
    }
    
    curr = head;
    while(curr && pre && curr !== pre) {
        if(curr.val !== pre.val) return false;
        curr = curr.next;
        pre = pre.pre;
    }

    return true;
};

// this won't work as we don't have linked list data structure paste this code 
// in leetcode editor it will run jsut fine.

var isPalindrome1 = function(head) {
    const listLen = getLength(head);
    
        let listBPointer = head;  
    
        const middle = Math.floor(listLen / 2);
        let count = 0;
        while(count < middle) {
            count++;
            listBPointer = listBPointer.next;
        }
    
    // reverse the listBPointer
    listBPointer = reverseLink(listBPointer);
    while(listBPointer && head) {
        if(listBPointer.val !== head.val) {
            return false;
        }
        listBPointer = listBPointer.next;
        head = head.next;
    }
    
    return true;
};


function reverseLink(node) {
    let pre = null;
    while(node) {
    const temp = node.next;
    node.next = pre;
    pre = node;
    node = temp;
    }
    return pre;
}

function getLength(node) {
    i = 0;
    while(node) {
        i++;
        node = node.next;
    }
    
    return i;
}