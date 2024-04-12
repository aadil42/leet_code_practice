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
 * https://leetcode.com/problems/add-two-numbers/
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    
    const getLen = (head) => {
        let i = 0;
        while(head) {
            head = head.next;
            i++;
        }
        return i;
    }

    const getCarryAndDigit = (num) => {
        const carry = (num > 9 && 1) || 0;
        const digit = (num)%10;
        return [digit, carry];
    }

    const len1 = getLen(l1);
    const len2 = getLen(l2);

    let longer = l1;
    let shorter = l2;

    if(len1 !== len2) {
        longer = ((len1 > len2) && l1) || l2;
        shorter = ((len1 < len2) && l1) || l2;
    }

    const total = longer;
    let globalCarry = 0;

    while(longer && longer.next) {
        const [digit, carry] = getCarryAndDigit(longer.val + ((shorter && shorter.val) || 0) + globalCarry);
        longer.val = digit;
        globalCarry = carry;
        longer = longer.next;
        shorter = (shorter && shorter.next) || null;
    }

    if(longer) {
        const [digit, carry] = getCarryAndDigit(longer.val + ((shorter && shorter.val) || 0) + globalCarry);
        longer.val = digit;
        if(carry) {
            longer.next = new ListNode(carry);
        }
    }

    return total;
};