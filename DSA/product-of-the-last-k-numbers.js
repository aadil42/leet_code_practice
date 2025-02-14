
// Stack | Prefix Product
var ProductOfNumbers = function() {
    this.stack = [1];
};

/** 
 * Time O(1) | Space O(1)
 * @param {number} num
 * @return {void}
 */
ProductOfNumbers.prototype.add = function(num) {
    if (num === 0) {
        this.stack = [1];
        return null;
    }
    this.stack.push(num*this.stack[this.stack.length - 1]);
    return null;
};

/** 
 * Constant
 * Time O(1) | Space O(1)
 * @param {number} k
 * @return {number}
 */
ProductOfNumbers.prototype.getProduct = function(k) {
    if (this.stack.length - k - 1 < 0) return 0;
    return this.stack[this.stack.length - 1] / this.stack[this.stack.length - 1 - k];
};

/** 
 * Your ProductOfNumbers object will be instantiated and called as such:
 * var obj = new ProductOfNumbers()
 * obj.add(num)
 * var param_2 = obj.getProduct(k)
 */