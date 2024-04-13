var Node = function(val, next, pre) {
    this.val = val || null;
    this.next = next || null;
    this.pre = pre || null;
}

/**
 * @param {string} homepage
 */
var BrowserHistory = function(homepage) {
        this.homepage = new Node(homepage);
        this.curr = this.homepage;
};

/** 
 * @param {string} url
 * @return {void}
 */
BrowserHistory.prototype.visit = function(url) {
    this.curr.next = new Node(url, null, this.curr);
    this.curr = this.curr.next;
    return null;
};

/** 
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.back = function(steps) {
    while(steps && this.curr.pre) {
        this.curr = this.curr.pre;
        steps--;
    }
    return this.curr.val;
};

/** 
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.forward = function(steps) {
    while(steps && this.curr.next) {
        this.curr = this.curr.next;
        steps--;
    }
    return this.curr.val;
};
////////////////////////////////////////////////////////////////////////////////////////////////////

/** 
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */

/**
 *
 * @param {string} homepage
 */
var BrowserHistory0 = function(homepage) {
    this.homepage = new Node(homepage);
    this.currentPage = this.homepage;
    this.size = 0;
};
/** 
 * Time O(1) |  Space O(1)
 * @param {string} url
 * @return {void}
 */
BrowserHistory0.prototype.visit = function(url) {
    this.currentPage.next = new Node(url,null,this.currentPage);
    this.currentPage = this.currentPage.next;
    this.size++;
};

/** 
 * Time O(n) | Space O(1)
 * @param {number} steps
 * @return {string}
 */
BrowserHistory0.prototype.back = function(steps) {
    
    while(steps && this.currentPage.pre) {
        this.currentPage = this.currentPage.pre;
        steps--;
    }
    return this.currentPage.val;
};

/** 
 * Time O(n) | Space O(1)
 * @param {number} steps
 * @return {string}
 */
BrowserHistory0.prototype.forward = function(steps) {
    
    while(steps && this.currentPage.next) {
        this.currentPage = this.currentPage.next;
        steps--;
    }
    return this.currentPage.val;
};

/** 
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */