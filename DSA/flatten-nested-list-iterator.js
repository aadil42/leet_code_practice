/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * function NestedInteger() {
 *
 *     Return true if this NestedInteger holds a single integer, rather than a nested list.
 *     @return {boolean}
 *     this.isInteger = function() {
 *         ...
 *     };
 *
 *     Return the single integer that this NestedInteger holds, if it holds a single integer
 *     Return null if this NestedInteger holds a nested list
 *     @return {integer}
 *     this.getInteger = function() {
 *         ...
 *     };
 *
 *     Return the nested list that this NestedInteger holds, if it holds a nested list
 *     Return null if this NestedInteger holds a single integer
 *     @return {NestedInteger[]}
 *     this.getList = function() {
 *         ...
 *     };
 * };
 */
/**
 * Recursion
 * Time O(n) | Space O(n)
 * https://leetcode.com/problems/flatten-nested-list-iterator/
 * @constructor
 * @param {NestedInteger[]} nestedList
 */

const dfs = (nested, flat) => {

    for(let i = 0; i < nested.length;  i++) {
      if(!Number.isInteger(nested[i])) { // this line is behaving weirdly. It should give false when it's a number but it's giving true for integer and also for the array.
        dfs(nested[i], flat);            // The same code works in python. it gets submitted. The logic is right.
        continue;
      }
      flat.push(nested[i]);
    }
    return flat;
}
var NestedIterator = function(nestedList) {

  this.nestedList = dfs(nestedList, []);
  // console.log(this.nestedList);
  this.index = 0;

};


/**
 * @this NestedIterator
 * @returns {boolean}
 */
NestedIterator.prototype.hasNext = function() {
    if(this.nestedList[this.index] !== undefined) return true;
    return false;
};

/**
 * @this NestedIterator
 * @returns {integer}
 */
NestedIterator.prototype.next = function() {
    const next = this.nestedList[this.index];
    this.index++;
    return next;
};


/**
 * Your NestedIterator will be called like this:
 * var i = new NestedIterator(nestedList), a = [];
 * while (i.hasNext()) a.push(i.next());
*/
