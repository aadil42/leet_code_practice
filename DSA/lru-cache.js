

var Node = function(key, val, next, pre) {
    this.val = val || null;
    this.key = key || null;
    this.next = next || null;
    this.pre = pre || null;
}

/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {

    this.front = new Node();
    this.rear = new Node();
    // connect two nodes;
    this.front.next = this.rear;
    this.rear.pre = this.front;

    this.size = 0;
    this.capacity = capacity;
    this.nodeHash = {};
};

LRUCache.prototype.find = function(key) {
    return this.nodeHash[key] || false;
}

LRUCache.prototype.isMostRecent = function(node) {
    return node.pre === this.front; 
}

LRUCache.prototype.update = function(node) {
    const next = node.next;
    const pre = node.pre;

    node.pre = this.front;
    node.next = this.front.next;


    this.front.next.pre = node;
    this.front.next = node;

    pre.next = next;
    next.pre = pre;
}

LRUCache.prototype.add = function(key, val) {
    const newNode = new Node();
    newNode.key = key;
    newNode.val = val;

    const next = this.front.next;

    newNode.next = next;
    newNode.pre = this.front;

    this.front.next = newNode;
    next.pre = newNode;

    this.nodeHash[key] = newNode;

    this.size++;
}

LRUCache.prototype.getMostRecent = function() {
    return this.front.next.val;
}

LRUCache.prototype.remove = function() {
    
    const toDelete = this.rear.pre;
    this.rear.pre = this.rear.pre.pre;
    this.rear.pre.next = this.rear;
    
    delete this.nodeHash[toDelete.key];
    this.size--;
}

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    const node = this.find(key);
    if(node) {
        !(this.isMostRecent(node)) && this.update(node);// update the node to most recent
        return node.val;
    }
    return -1;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    // find if the key exist in the cache
    const node = this.find(key); 
    if(node) {
        !(this.isMostRecent(node)) && this.update(node);
        node.val = value;
        return null;
    }
    
    // if size exceeds
    if(this.size === this.capacity) {
        this.remove();
        this.add(key, value);
        return null;
    }

    this.add(key, value);
    return null;
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

/**
 * @param {number} capacity
 */
var LRUCache0 = function(capacity) {
    this.capacity = capacity;
    this.currentSize = 0;
    this.lruHash = new Map();
    this.left = new Node();
    this.right = new Node();

    this.left.next = this.right;
    this.right.pre = this.left;
};

/** 
 * Time O(1) | Space O(1)
 * @param {number} key
 * @return {number}
 */
LRUCache0.prototype.get = function(key) {
    if(this.lruHash.has(key)) {
        this.updateRecent(this.lruHash.get(key));
        return this.lruHash.get(key).val;
    } else {
        return -1;
    }
};

/** 
 * 
 * Time O(1) | Space O(1)
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache0.prototype.put = function(key, value) {
    
    if(this.lruHash.has(key)) {
        // just update it 
        let node = this.lruHash.get(key);
        node.val = value;
        this.updateRecent(node);
        // console.log(node);
    } else {
            // make a new node
            const node = new Node();
            node.key = key;
            node.val = value;
        if(this.currentSize < this.capacity) {
            this.add(node, key, value); 
        }  else {
            this.remove();
            this.add(node, key, value);
        }
    }
};

// Time O(1) | Space O(1)
LRUCache0.prototype.add = function(node,key,value) {
            node.next = this.right
            node.pre = this.right.pre;
            this.right.pre.next = node;
            this.right.pre = node;
            this.lruHash.set(key, node);
            this.currentSize++;
}

// Time O(1) | Space O(1)
LRUCache0.prototype.remove = function() {
        if(this.currentSize > 0) {
            const temp = this.left.next;
            this.left.next = this.left.next.next;
            this.left.next.pre = this.left;
            this.lruHash.delete(temp.key);
            this.currentSize--;
        }
}

// Time O(1) | Space O(1)
LRUCache0.prototype.updateRecent = function(node) {

    // updating recent node's neighbors pointer.
    const  temp = node;
    node.next.pre = node.pre;
    node.pre.next = node.next;

    // updating recent node's pointer
    node.next = this.right;
    node.pre = this.right.pre;

    // updating last and second last pointer
    node.pre.next = node;
    node.next.pre =  node;
}
/** 
 * Your LRUCache0 object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

/////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * @param {number} capacity
 */
var LRUCache1 = function(capacity) {
    this.queue = [];
    this.capacity = capacity;
};

/** 
 * Brute Force
 * Queue
 * Time O(n) | Space O(1)
 * @param {number} key
 * @return {number}
 */
LRUCache1.prototype.get = function(key) {
    let i = 0;
    while(i < this.queue.length) {
        if(this.queue[i][0] === key) {
            const value = this.queue[i][1];
            this.queue.splice(i,1);
            this.queue.unshift([key, value]);
            return value;
        }
        i++;
    }
    return -1;
};

/** 
 * Brute Force
 * Queue
 * Time O(n) | Space O(1)
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache1.prototype.put = function(key, value) {
    
    // check if value exists
    let i = 0;
    while(i < this.queue.length) {
        if(this.queue[i][0] === key) {
            this.queue.splice(i,1);
            this.queue.unshift([key, value]);
            return null;
        }
        i++;
    }

    if(this.queue.length === this.capacity) {
        this.queue.pop();
        this.queue.unshift([key, value]);
        return null;
    }

    this.queue.unshift([key, value]);
    return null;
};
