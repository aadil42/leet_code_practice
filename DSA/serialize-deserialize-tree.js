
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


  // solved third time
  /**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serializeR1 = function(root) {
    
    const data = [];

    const preOrder = (node) => {

        if (!node) {
            data.push("n");
            return;
        }
        data.push(node.val);
        preOrder(node.left);
        preOrder(node.right);
    }

    preOrder(root);
    return data.join("#");
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserializeR2 = function(data) {
    
    data = data.split('#');
    data = data.map((n) => {
        if (n === 'n') return null;
        return +n;
    });

    let idx = 0;

    const constructBiTree = () => {

        if (idx >= data.length || data[idx] === null) return null;

        const node = new TreeNode(data[idx]);
        idx += 1;
        node.left = constructBiTree();
        idx += 1;
        node.right = constructBiTree();

        return node;
    }

    return constructBiTree()
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */