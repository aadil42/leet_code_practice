// REMEMBER 
// you need legit linked list for input to test this solution, which you don't have but you have checked it on leet code
// it's workin fine. just push it on github as it is. it's legit solution and it's working.

var detectCycle = function(head) {
    
    const myMap = new Map();
    
    let count = 0;
    
    while(head) {
        if(myMap.has(head)) {
            return head;
        }
        myMap.set(head, count)
        count++;
        head = head.next;
    }
    return head;
};

// can be solved with set instead of hash
var hasCycle = function(head) {
   
    const linkHash = new Set();
    
    while(head) {
        if(linkHash.has(head)) {
            return true;
        }
        linkHash.add(head);
        head = head.next;
    }
    
    return false;
};