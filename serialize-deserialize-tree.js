
//  you need a valid tree to run this funcitons. They'll not run because we don't have a valid tree.
// just paste this code in the leetcode editor and they'll submit.

 var serialize = function(root) {
    let preOrder = [];
  
     function makepreOrder(root) {
  
      if(!root) {
         preOrder.push('N');
         return;
      } 
 
      preOrder.push(root.val);
      makepreOrder(root.left);
      makepreOrder(root.right);
     }
  
     makepreOrder(root);
  
     preOrder = preOrder.join("#");    
     return preOrder;
 };
 


 var deserialize = function(data) {
     preOrderArr = data.split('#');
     if(preOrderArr[0] === 'N') return null;
     let i = 0;
     let root;
     function dfs() {
 
         if(preOrderArr[i] === 'N') {
             i++;
             return null;
         }
         const singleRoot = new TreeNode(preOrderArr[i]);
         if(i === 0) {
             root = singleRoot;
         }
         i++;
         singleRoot.left = dfs();
         singleRoot.right = dfs();
 
         return singleRoot;
     }
 
     dfs();
     return root;
 };
 