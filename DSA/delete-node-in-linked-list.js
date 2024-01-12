// REMEMBER 
// you need legit linked list for input to test this solution, which you don't have but you have checked it on leet code
// it's workin fine. just push it on github as it is. it's legit solution and it's working.
// remember you don't have to return the head node at the end you just need to delete the given node, and that's it.
// don't pay attention to their example output where they return list from head.


var deleteNode = function(node) {
    
    node.val = node.next.val;
    node.next = node.next.next;  
      
  };