// REMEMBER 
// you need legit linked list for input to test this solution, which you don't have but you have checked it on leet code
// it's workin fine. just push it on github as it is. it's legit solution and it's working.

var rotateRight = function(head, k) {
    
    if(!head) return null;   

    const listLen = getLength(head);
    let diff;

    const remainder = k % listLen;
    if(remainder == 0) {
        return head;
    } else {
        diff = listLen - remainder;
    } 
    
    let count = 1;
    let current = head;
    let firstNodeRef = head;
    while(count < diff) {
        current = current.next;
        count++;
    }
    
    const temp = current.next;
    current.next = null;
    head = temp;
    current = temp;
    
    while(current && current.next) {
        current = current.next;
    }
    
    if(current) {
    current.next = firstNodeRef;        
    }
    
    return head;
    
};

function getLength(node) {
    let count = 0;
    while(node) {
        node = node.next;
        count++;
    }
    
    return count;
}