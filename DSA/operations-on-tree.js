
const TreeNode = function(val) {
    this.val = val;
    this.children;
    this.id;
    this.parent;
}

/**
 * Tree | DFS
 * @param {number[]} parent
 */
var LockingTree = function(parents) {
    
    this.nodeHash = {};
    
    // pre-create the nodes
    for(let i = 0; i < parents.length; i++) {
        this.nodeHash[i] = new TreeNode(i);
    }

    for(let i = 1; i < parents.length; i++) {
        const parent = parents[i];
        const node = this.nodeHash[i];

        const parentNode = this.nodeHash[parent];
        node.parent = parentNode;
        
        if(!parentNode.children) {
            parentNode.children = [];
        }

        parentNode.children.push(node);
    }

    this.root = this.nodeHash[0];

    const dfs = (node) => {
        if(!node) return;
        const children  = node.children || [];
        for(let i = 0; i < children.length; i++)  {
            dfs(children[i]);
        }
    }

};

/** 
 * @param {number} num 
 * @param {number} user
 * @return {boolean}
 */
LockingTree.prototype.lock = function(num, user) {
    const node = this.nodeHash[num];
    if(node.id !== undefined) return false;
    node.id = user;
    return true;
};

/** 
 * @param {number} num 
 * @param {number} user
 * @return {boolean}
 */
LockingTree.prototype.unlock = function(num, user) {
    const node = this.nodeHash[num];
    if(node.id !== user) return false;
    node.id = undefined;
    return true;
};

/** 
 * @param {number} num 
 * @param {number} user
 * @return {boolean}
 */
LockingTree.prototype.upgrade = function(num, user) {
    const node = this.nodeHash[num];

    if(node.id !== undefined) return false;
    if(!this.checkForLockDecenden(node)) return false;
    if(this.checkForLockAncestor(node)) return false;

    node.id = user;
    this.unlockDecendendts(node);

    return true;
};


/** 
 * @param {object} user
 * @return {boolean}
 */
LockingTree.prototype.checkForLockDecenden = function(node) {
   
   const dfs = (node) =>  {
        if(!node) return false;
        if(node.id) return true;

        const children = node.children || [];

        for(let i = 0; i < children.length; i++) {
            if(dfs(children[i])) return true;
        }

        return false;
   }

   return dfs(node);
};

/** 
 * @param {object} node
 * @return {boolean}
 */
LockingTree.prototype.checkForLockAncestor = function(node) {
   
   const reverseDFS = (node) => {
        if(!node) return false;
        if(node.id) return true;

        return reverseDFS(node.parent);
   }

   const result = reverseDFS(node);
   return result;
};

/** 
 * @param {object} node
 * @return null
 */
LockingTree.prototype.unlockDecendendts = function(node) {
   const dfs = (node) => {
        if(!node) return;
        node.id = undefined;
        const children = node.children || [];

        for(let i = 0; i < children.length; i++) {
            dfs(children[i]);
        }
   }

   const children = node.children || [];
   for(let i = 0; i < children.length; i++) {
        dfs(children[i]);
   }

};

/** 
 * Your LockingTree object will be instantiated and called as such:
 * var obj = new LockingTree(parent)
 * var param_1 = obj.lock(num,user)
 * var param_2 = obj.unlock(num,user)
 * var param_3 = obj.upgrade(num,user)
 */
////////////////////////////////////////////////////////////////////////////

/**
 * @param {number[]} parent
 */
var LockingTree0 = function(parent) {
    this.parent = parent;
    this.childHash = {};
    this.treeHash = {};
    for(let i = 0; i < parent.length; i++) {
        if(this.childHash[parent[i]]) {
            this.childHash[parent[i]].push(i);
        } else {
            this.childHash[parent[i]] = [i]
        }
    }
};

/** 
 * Time O(1) | Space O(1)
 * @param {number} num 
 * @param {number} user
 * @return {boolean}
 */
LockingTree0.prototype.lock = function(num, user) {
      // it will just lock a node for a given user if it's not already locked THAT'S IT!
    if(this.treeHash[num]) return false;
    this.treeHash[num] = user;
    return true;
};

/** 
 * Time O(1) | Space O(1)
 * @param {number} num 
 * @param {number} user
 * @return {boolean}
 */
LockingTree0.prototype.unlock = function(num, user) {
    // only unlock the node if it's locked by the same user 
    if(this.treeHash[num] === user) {
        // delete node
        delete this.treeHash[num];
        return true;
    };
    return false;
};

/** 
 * 
 * Time O(n) | Space O(n)
 * @param {number} num 
 * @param {number} user
 * @return {boolean}
 */
LockingTree0.prototype.upgrade = function(num, user) {
    // lock the node for a given user and unlock all of it's decendents no matter who locked it.
    // 1. the give node should be unlocked
    // 2. the given node should have at least one locked node descendant by anyone
    // 3. the given node shouldn't have any locked ancestors    
    if(this.treeHash[num]) return false;
    if(!this.checkDescendents(num)) return false;
    if(!this.checkAnsectors(num)) return false;

    // locking the given node
    this.treeHash[num] = user;
    this.unlockDescendents(num);
    return true;
};

LockingTree0.prototype.unlockDescendents = function(index) {

    const stack = [];
    stack.push(index);
    while(stack.length) {
        const node = stack.pop();
        const children = this.childHash[node];
        for(let i = 0; i < (children && children.length); i++) {
            delete this.treeHash[children[i]];
            stack.push(children[i]);
        }
    }
}

LockingTree0.prototype.checkAnsectors = function(index) {
    let node = this.parent[index];
    while(node !== -1) {
        if(this.treeHash[node]) return false;
        node = this.parent[node];
    }

    return true;
}

LockingTree0.prototype.checkDescendents = function(index) {
    const stack = [];
    stack.push(index);
    while(stack.length) {
        const node = stack.pop();
        const children = this.childHash[node];
        for(let i = 0; i < (children && children.length); i++) {
            if(this.treeHash[children[i]]) return true;
            stack.push(children[i]);
        }
    }
    return false;
}

/** 
 * Your LockingTree object will be instantiated and called as such:
 * var obj = new LockingTree(parent)
 * var param_1 = obj.lock(num,user)
 * var param_2 = obj.unlock(num,user)
 * var param_3 = obj.upgrade(num,user)
 */