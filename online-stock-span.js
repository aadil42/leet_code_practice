var StockSpanner = function() {
    this.stack  = [];
};


StockSpanner.prototype.isEmpty = function() {
    return this.stack.length === 0 ? true : false;
}
StockSpanner.prototype.peek = function() {
    return this.stack[this.stack.length - 1];
}
StockSpanner.prototype.push = function(val) {
    return this.stack.push(val);
}
StockSpanner.prototype. pop = function() {
    return this.stack.pop();
}

StockSpanner.prototype.next = function(price) {
    let currunt = 1;
    while(this.peek() && this.peek()[0] <= price) {
        currunt += this.pop()[1];
    }
    this.push([price, currunt]);
    return this.peek()[1];
};

// class based code.
//https://leetcode.com/problems/online-stock-span/description/
class StockSpanner {
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
