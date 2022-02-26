// REMEMBER 
// you need legit linked list for input to test this solution, which you don't have but you have checked it on leet code
// it's workin fine. just push it on github as it is. it's legit solution and it's working.


var swapPairs = function(head) {
    
    if(!head) return null;
    const dummy = new ListNode(null, head);
    let pre = dummy;
    let current = head;
   
    while(current && current.next) {
        const temp = current.next.next;
        const temp1 = current.next;
        
        temp1.next = current;
        current.next = temp;
        pre.next = temp1; 
        
        pre = current;
        current = temp;
    }
    
    return dummy.next;
};