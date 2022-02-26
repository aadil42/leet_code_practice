// REMEMBER 
// you need legit linked list for input to test this solution, which you don't have but you have checked it on leet code
// it's workin fine. just push it on github as it is. it's legit solution and it's working.


var partition = function(head, x) {

    if(!head) return null;
       
    let lesserHead = new ListNode();
    let greaterHead = new ListNode();
    let lesserHeadRef = lesserHead;
    let greaterHeadRef = greaterHead;
       while(head) {
           if(head.val < x) {
               lesserHead.next = head;
               lesserHead = lesserHead.next;
           } else {
               greaterHead.next = head;
               greaterHead = greaterHead.next;
           }
           head = head.next;
       }
       greaterHead.next = null;
       lesserHead.next = greaterHeadRef.next;
       
       return lesserHeadRef.next;
       
   };