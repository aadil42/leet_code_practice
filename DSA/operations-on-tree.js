/**
 * @param {number[]} parent
 */
var LockingTree = function(parent) {
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
LockingTree.prototype.lock = function(num, user) {
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
LockingTree.prototype.unlock = function(num, user) {
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
LockingTree.prototype.upgrade = function(num, user) {
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

LockingTree.prototype.unlockDescendents = function(index) {

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

LockingTree.prototype.checkAnsectors = function(index) {
    let node = this.parent[index];
    while(node !== -1) {
        if(this.treeHash[node]) return false;
        node = this.parent[node];
    }

    return true;
}

LockingTree.prototype.checkDescendents = function(index) {
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