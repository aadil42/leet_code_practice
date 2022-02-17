// REMEMBER
// you need legit linked list for input to test this solution, which you don't have but you have checked it on leet code
// it's workin fine. just push it on github as it is. it's legit solution and it's working.

var deleteDuplicates = function(head) {
    if(!head) return null;
    const firstPoint = head;
    
    while(head && head.next) {
        if(head.val === head.next.val) {
        let dummy = head.next; 
        head.next = dummy.next;   
        // clearing from the memory
        dummy = null;                
        }  else {
        head = head.next;
        }
    }
    
    return firstPoint;
};