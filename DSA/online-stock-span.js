// MonotonicStack
var StockSpanner = function() {
  this.stack = [[Infinity, -1]];
  this.count = 0;
};

/** 
* Time O(n) |  Space O(1)
* @param {number} price
* @return {number}
*/
StockSpanner.prototype.next = function(price) {
  while(this.stack && this.stack[this.stack.length - 1][0] <= price) {
      this.stack.pop();
  }
  this.stack.push([price, this.count]);
  this.count++;
  return this.stack[this.stack.length-1][1] - this.stack[this.stack.length-2][1];
};

/** 
* Your StockSpanner object will be instantiated and called as such:
* var obj = new StockSpanner()
* var param_1 = obj.next(price)
*/

////////////////////////////////////////////////////////////////////////

var StockSpanner0 = function() {
    this.stack  = [];
};


StockSpanner0.prototype.isEmpty = function() {
    return this.stack.length === 0 ? true : false;
}
StockSpanner0.prototype.peek = function() {
    return this.stack[this.stack.length - 1];
}
StockSpanner0.prototype.push = function(val) {
    return this.stack.push(val);
}
StockSpanner0.prototype. pop = function() {
    return this.stack.pop();
}

StockSpanner0.prototype.next = function(price) {
    let currunt = 1;
    while(this.peek() && this.peek()[0] <= price) {
        currunt += this.pop()[1];
    }
    this.push([price, currunt]);
    return this.peek()[1];
};

// class based code.
//https://leetcode.com/problems/online-stock-span/description/
class StockSpanner1 {
    constructor() {
      this.stack = [];
    }
    
    // Time O(1) | Space O(1)
    isEmpty() {
      return this.stack.length === 0;
    }
    
    // Time O(1) | Space O(1)
    peek() {
      return this.stack[this.stack.length - 1];
    }
    
    // Time O(1) | Space O(1)
    push(val) {
      return this.stack.push(val);
    }
  
    // Time O(1) | Space O(1)
    pop() {
      return this.stack.pop();
    }
  
    // Time O(n) | Space O(1)
    next(price) {
      let currunt = 1;
      while (this.peek() && this.peek()[0] <= price) {
        currunt += this.pop()[1];
      }
      this.push([price, currunt]);
      return this.peek()[1];
    }
  }
  

const stock = new StockSpanner();
console.log(stock.next(28));
console.log(stock.next(14));
console.log(stock.next(28));
console.log(stock.next(35));
console.log(stock.next(46));
console.log(stock.next(53));
console.log(stock.next(66));
console.log(stock.next(80));
console.log(stock.next(87));
console.log(stock.next(88));
