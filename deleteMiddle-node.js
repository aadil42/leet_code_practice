// REMEMBER 
// you need legit linked list for input to test this solution, which you don't have but you have checked it on leet code
// it's workin fine. just push it on github as it is. it's legit solution and it's working.


var deleteMiddle = function(head) {
    if(!head || !head.next) return null;
    
    let slowPointer = head;
    let fastPointer = head.next.next;
    
    while(fastPointer && fastPointer.next) {
        slowPointer = slowPointer.next;
        fastPointer = fastPointer.next.next;
    }
    slowPointer.next = slowPointer.next.next;
    
    return head;
};