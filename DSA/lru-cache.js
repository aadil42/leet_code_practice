/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
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
LRUCache.prototype.get = function(key) {
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
LRUCache.prototype.put = function(key, value) {
    
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

var Node = function(pre = null, next = null, key, val) {
    
    this.key = key;
    this.val = val;
    this.pre = pre;
    this.next = next
}

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