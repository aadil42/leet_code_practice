
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
 

 // solved second time
var serializeR = function(root) {
    const preArr = [];
   
       function dfs(root) {
           if(!root) {
               preArr.push('N');
               return;
           }
           preArr.push(root.val);
           dfs(root.left);
           dfs(root.right);
       }
   
       dfs(root);
       return preArr;
   };

 var deserializeR = function(data) {


    let i = 0;
    console.log(data);
  
    function makeTree() {
       
        if(data[i] === 'N') {
            i++;
            return null;
        }
      
        const root = new TreeNode(data[i]);
        i++;
        root.left = makeTree();
        root.right = makeTree();
  
       return root;
    }
  
    return  makeTree();
  };