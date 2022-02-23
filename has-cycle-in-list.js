// REMEMBER 
// you need legit linked list for input to test this solution, which you don't have but you have checked it on leet code
// it's workin fine. just push it on github as it is. it's legit solution and it's working.


var hasCycle = function(head) {
    
    const refSet = new Set();
    
    while(head) {
        if(refSet.has(head)) {
            return true;
        }
        refSet.add(head);
        head = head.next;
    }
    
    return false;
};