var RandomizedSet = function() {
    this.myMap = new Map();
    this.myArr = [];
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    if(!this.myMap.has(val)) {
        this.myArr.push(val);
        this.myMap.set(val, this.myArr.length - 1);
        return true;
    } else {
        return false;
    }
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    if(this.myMap.has(val)) {
        let i = this.myMap.get(val);
        let lastElement = this.myArr.length - 1;

        this.swap(i,lastElement,this.myArr);
        this.myMap.set(this.myArr[i],this.myMap.get(val));
        this.myArr.pop();
        this.myMap.delete(val);
        return true;
    } else {
        return false;
    }
};

RandomizedSet.prototype.swap = function(i,j,arr) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    return this.myArr[Math.floor(Math.random() * this.myArr.length)];
};

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */