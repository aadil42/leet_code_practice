// REMEMBER 
// you need legit linked list for input to test this solution, which you don't have but you have checked it on leet code
// it's workin fine. just push it on github as it is. it's legit solution and it's working.

var reorderList = function(head) {
  
    if(!head || !head.next) return head;
    let slowPointer = head;
    let fastPointer = head;
    
    while(fastPointer && fastPointer.next) {
        slowPointer = slowPointer.next;
        fastPointer = fastPointer.next.next;
    }
    reverseHead  = reverseLinkList(slowPointer);
    ref = head;
    console.log(head);
    while(reverseHead && reverseHead.next) {
        const reverseNext  = reverseHead.next;
        const headNext  = head.next;
        
        head.next = reverseHead;
        reverseHead.next = headNext;
        
        head = headNext;
        reverseHead = reverseNext;
    }
    return ref;
};

function reverseLinkList(head) {
    let pre = null;
    while(head) {
        const temp = head.next;
        head.next = pre;
        pre = head;
        head = temp;        
    } 
    
    return pre;
}


// solving reorder-list second time.

var reorderListR = function(head) {

    let slowPointer = head;
    let fastPointer = head;
    const ref = head;
    while(fastPointer && fastPointer.next) {
        slowPointer = slowPointer.next;
        fastPointer = fastPointer.next.next;
    }


    let reverseHead = reverseLinkList(slowPointer);

    while(reverseHead && reverseHead.next) {

        let reverseHeadNext = reverseHead.next;
        let headNext = head.next;

        head.next = reverseHead;
        reverseHead.next = headNext;

        head = headNext;
        reverseHead = reverseHeadNext;
    }

    return ref;

};