// the input should look something like this.
// ["MyHashSet","add","add","contains","contains","add","contains","remove","contains"]
// [[],[1],[2],[1],[3],[2],[2],[2],[2]]
// output for the above input [null,null,null,true,false,null,true,null,false] 'see explanation on leetcode here https://leetcode.com/problems/design-hashset'
// I don't know how this is being done if the code doesn't work just paste it in leetcode editor. it will work.


var MyHashSet = function() {
    this.set = [];
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function(key) {
    this.set[key] = key;
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function(key) {
    this.set[key] = undefined;
};

/** 
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function(key) {
    return this.set[key] !== undefined;
};
