
var NumberContainers = function() {
    this.numHash = {};
    this.idxToNum = {};
};

/** 
 * HashMap | PriorityQueue
 * Time O(1) | Space O(1)
 * @param {number} index 
 * @param {number} number
 * @return {void}
 */
NumberContainers.prototype.change = function(index, number) {
    if (this.numHash[number]) {
        this.numHash[number].enqueue(index);
    } else {
        this.numHash[number] = new MinPriorityQueue({
            compare: (a,b) => {
                return a-b;
            }
        });
        this.numHash[number].enqueue(index);
    }

    this.idxToNum[index] = number;
    return null;
};

/** 
 * HashMap | PriorityQueue
 * Time O(log(n)) | Space O(1)
 * @param {number} number
 * @return {number}
 */
NumberContainers.prototype.find = function(number) {
    
    if (!this.numHash[number]) return -1;

    while (!this.numHash[number].isEmpty() && this.idxToNum[this.numHash[number].front()] !== number) {
        this.numHash[number].dequeue();
    }

    if (this.numHash[number].isEmpty()) return -1;

    return this.numHash[number].front();
};

/** 
 * Your NumberContainers object will be instantiated and called as such:
 * var obj = new NumberContainers()
 * obj.change(index,number)
 * var param_2 = obj.find(number)
 */