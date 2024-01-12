// REMEMBER 
// you need legit linked list for input to test this solution, which you don't have but you have checked it on leet code
// it's workin fine. just push it on github as it is. it's legit solution and it's working.

const reverseList = (head) => {
    
    if(head == null) return null;
    
    let pre = null;
    while(head !== null) {
        const temp = head.next;
        head.next = pre;
        pre = head;
        head = temp;
    }
    
    return pre;
}

// solving reverse linked list again.
var reverseListR = function(head) {
    
    let pre = null;
    let temp = null;
    while(head) {

        temp = head;
        head = head.next;
        temp.next = pre;
        pre = temp;  
    }

    // you can also return temp;
    return pre;
};

