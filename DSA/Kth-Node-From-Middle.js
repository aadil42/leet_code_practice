// this problem is not from leet code 
// here's the link to the problem 
// https://www.interviewbit.com/problems/kth-node-from-middle/
// and make sure you in their code editor as there are not data sturcutre for linked list
// it will give you A and B are undefined.


module.exports = { 
       solve : function(A, B){
           const Alength = getLength(A);
           const middle = Math.floor(Alength / 2);
           const target = middle - B;
           let i = 0;
           while(i < target) {
               i++;
               A = A.next;
           }
           if( target < 0) {
               return -1;
           }
           return A.data;
       }
   };
   
   function getLength(node) {
   let count = 0;
   while(node){
       count++;
       node = node.next
   }
   return count;
   }