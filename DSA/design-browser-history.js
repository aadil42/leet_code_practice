/**
 *
 * @param {string} homepage
 */
var BrowserHistory = function(homepage) {
    this.homepage = new ListNode(homepage);
    this.currentPage = this.homepage;
    this.size = 0;
};


var ListNode = function(val, next = null, pre = null) {
    this.val  = val;
    this.next = next;
    this.pre = pre;
}

/** 
 * Time O(1) |  Space O(1)
 * @param {string} url
 * @return {void}
 */
BrowserHistory.prototype.visit = function(url) {
    this.currentPage.next = new ListNode(url,null,this.currentPage);
    this.currentPage = this.currentPage.next;
    this.size++;
};

/** 
 * Time O(n) | Space O(1)
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.back = function(steps) {
    
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
BrowserHistory.prototype.forward = function(steps) {
    
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