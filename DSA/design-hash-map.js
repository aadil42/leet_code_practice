const ListNode = function(key, val) {
    this.key = key;
    this.val = val;
    this.next = null;
}

const LinkedList = function() {
    this.node = new ListNode();
}

LinkedList.prototype.add = function(key, val) {
    let curr = this.node;
    while(curr.next) {
        curr = curr.next;
    }
    curr.next = new ListNode(key, val);
}

LinkedList.prototype.update = function(key, value) {
    let curr = this.node;
    while(curr && curr.key !== key) {
        curr = curr.next;
    }
    curr.val = value;
}

LinkedList.prototype.find = function(key) {
    let curr = this.node;
    while(curr && curr.key !== key) {
        curr = curr.next;
    }

    return curr ? curr.val : -1;
}

LinkedList.prototype.remove = function(key) {
    let curr = this.node;
    while(curr.next && curr.next.key !== key) {
        curr = curr.next;
    }
    if(curr.next) {
        curr.next = curr.next.next;
    }
}

var MyHashMap = function() {
   this.hash = [];
};

/** 
 * Linked List
 * https://leetcode.com/problems/design-hashmap/
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */

// Time O(n) | Space O(n)
MyHashMap.prototype.put = function(key, value) {
    const index = key % 1000001;
    const ll = this.hash[index];
    if(ll && ll.find(key) === -1) {
        ll.add(key, value);
        return;
    }
    if(ll && ll.find(key) !== -1) {
        ll.update(key, value);
        return;
    }

    this.hash[index] = new LinkedList();
    this.hash[index].add(key, value);
};

/** 
 * Time O(n) | Space O(n)
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function(key) {
    const index = key % 1000001;
    if(!this.hash[index]) return -1;
    
    const ll = this.hash[index];
    return ll.find(key);
};

/** 
 * Time O(n) | Space O(n)
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function(key) {
    const index = key % 1000001;
    if(!this.hash[index]) return;
    const ll = this.hash[index];
    ll.remove(key);
};

/** 
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */

// don't run this code in your personal terminal it might not work 
// copy paste this code on leetcode editor it will work.
 

var MyHashMap = function() {
    this.myMap = [];
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function(key, value) {
    
    this.myMap[key] = [key, value];
};

/** 
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function(key) {
    
    if(this.myMap[key]) {
        return this.myMap[key][1];
    } else {
        return -1;
    }
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function(key) {
    this.myMap[key] = undefined;
};
