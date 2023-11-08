/**
 * 
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    this.nums = nums;
    this.cache = {};
};

/** 
 * Time O(n) | Space O(1)
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function(left, right) {

    const hash = `${left}-${right}`;
    if(this.cache[hash]) return this.cache[hash];
    this.cache[hash] = this.nums.slice(left, right +1).reduce((acc, num) => {
        return acc + num;
    }, 0);
    return this.cache[hash];
};

/** 
 * We're caching the result so it's time coplexity is n. because we can store n left-right keys in our cache.
 * 
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */

/**
 * @param {number[]} nums
 */
var NumArray1 = function(nums) {
    this.arr = nums;
};

/** 
 * 
 * Time O(n) | Space O(1)
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray1.prototype.sumRange = function(left, right) {
    
    let total = 0;
    for(let i = left; i < right + 1; i++) {
        total += this.arr[i];
    }
    return total
};

/** 
 * In the worst case 10^4 or (n) calls will be made so the time complexity can be O(n^2).
 * because, each call will make it run for 10^4 or (n) 
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */