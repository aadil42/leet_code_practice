
var FrequencyTracker = function() {
    this.frequencyHash = {}
    this.numberHash = {}
};

/** 
 * Time O(1) | Space O(1)
 * @param {number} number
 * @return {void}
 */
FrequencyTracker.prototype.add = function(number) {
    
    // add the number in hash
    
    const oldFrequency = this.numberHash[number];
    if(oldFrequency) {
     this.frequencyHash[oldFrequency].delete(number);
    }
    
    if(this.numberHash[number]) {
        this.numberHash[number] += 1;
    } else {
        this.numberHash[number] = 1;
    }
    // update frequency
    const frequency = this.numberHash[number];
    
    if(this.frequencyHash[frequency]) {
        this.frequencyHash[frequency].add(number);
    } else {
        this.frequencyHash[frequency] = new Set([number]);
    }
};

/** 
 * Time O(1) | Space O(1)
 * @param {number} number
 * @return {void}
 */
FrequencyTracker.prototype.deleteOne = function(number) {
    if(!this.numberHash[number]) return;
    
    // updating number hash
    let frequency = this.numberHash[number];
    this.frequencyHash[frequency].delete(number);
    frequency -= 1;
    this.numberHash[number] = frequency;
    
    // updating the frequency hash
    if(this.frequencyHash[frequency]) {
        this.frequencyHash[frequency].add(number);
    } else {
        this.frequencyHash[frequency] = new Set([number]);
    }
};

/** 
 * Time O(1) | Space O(1)
 * @param {number} frequency
 * @return {boolean}
 */
FrequencyTracker.prototype.hasFrequency = function(frequency) {
    const myset = this.frequencyHash[frequency];
    // console.log(this.frequencyHash);
    // console.log(this.numberHash);
    if(!myset) return false;

    return myset.size > 0;
    // return this.frequencyHash[frequency] ? true : false;
    // return this.frequencyHash[frequency];
};

/** 
 * Your FrequencyTracker object will be instantiated and called as such:
 * var obj = new FrequencyTracker()
 * obj.add(number)
 * obj.deleteOne(number)
 * var param_3 = obj.hasFrequency(frequency)
 */