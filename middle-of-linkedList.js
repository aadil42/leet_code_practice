// REMEMBER 
// you need legit linked list for input to test this solution, which you don't have but you have checked it on leet code
// it's workin fine. just push it on github as it is. it's legit solution and it's working.


var middleNode = function(head) {
    
    if (!head) return null;
    
    let fasterNode = head;
    while(fasterNode && fasterNode.next) {
        head = head.next;
        fasterNode = fasterNode.next.next
    }
    
    return head;
};