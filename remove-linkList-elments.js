// REMEMBER 
// you need legit linked list for input to test this solution, which you don't have but you have checked it on leet code
// it's workin fine. just push it on github as it is. it's legit solution and it's working.

var removeElements = function(head, val) {
    // let currunt = head;
    let pre = new ListNode(null, head);
    let dummy = pre;
    while(head) {
        if(head.val == val) {
            while(head && head.val == val) {
                head = head.next;
            }            
            pre.next = head;
            pre = head;
            if(head) {
            temp = head;    
            head = head.next;
            temp = null;
            }
            continue;
        }
        pre = pre.next;
        head = head.next;
    }
    
    return dummy.next;
};