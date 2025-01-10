/** 
 * Brute Force | Sorting | Set
 * https://leetcode.com/problems/data-stream-as-disjoint-intervals/
 */
var SummaryRanges = function() {
    this.numSet = new Set();
    this.outputArr = [];
};

/** 
 * Time O(1) | Space O(1)
 * @param {number} value
 * @return {void}
 */
SummaryRanges.prototype.addNum = function(value) {
    this.numSet.add(value);
    this.outputArr.push(value);
};

/**
 * Time O(n*log(n)) | Space O(n)
 * @return {number[][]}
 */
SummaryRanges.prototype.getIntervals = function() {
    
    const newOutputArr = [];

    this.outputArr = this.outputArr.sort((a,b) => a-b);

    for (let i = 0; i < this.outputArr.length; i++) {
        let left = this.outputArr[i];
        if (!this.numSet.has(left)) continue;

        let right = left;

        while (this.numSet.has(right)) {
            this.numSet.delete(right);
            right++;
        }

        newOutputArr.push([left, right-1]);
    }

    this.numSet = new Set(this.outputArr);

    return newOutputArr;
};

/** 
 * Your SummaryRanges object will be instantiated and called as such:
 * var obj = new SummaryRanges()
 * obj.addNum(value)
 * var param_2 = obj.getIntervals()
 */