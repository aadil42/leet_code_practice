/**
 * this keyword.
 * Hashing
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function(fn) {
    
    const grouped = {};
    for(let i = 0; i < this.length; i++) {
        const key = fn(this[i]);
        if(!grouped[key]) {
            grouped[key] = [];
        }
        grouped[key].push(this[i]);
    }

    return grouped;
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */