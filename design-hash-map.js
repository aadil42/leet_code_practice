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
