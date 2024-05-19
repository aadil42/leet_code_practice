// Settimeout.
// get more insight of how this code works behind the scene.
// the logic is quite stright forward. 
var TimeLimitedCache = function() {
    this.limitCache = {};
    this.size = 0;
};

/** 
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function(key, value, duration) {

    const hasKey = this.limitCache[key];
    
    if(hasKey)  {
        // clear timeout
        clearTimeout(hasKey[1]);

        const timeOutId = setTimeout(() => {
            delete this.limitCache[key];
            this.size--;
        }, duration);

        this.limitCache[key] = [value, timeOutId];        
    } else {

        const timeOutId = setTimeout(() => {
            delete this.limitCache[key];
            this.size--;
        }, duration);
        this.limitCache[key] = [value, timeOutId];

        this.size++;
    }

    return (hasKey && true) || false;
};

/** 
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function(key) {
    return (this.limitCache[key] && this.limitCache[key][0]) || -1;
};

/** 
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function() {
    return this.size;
};

/**
 * const timeLimitedCache = new TimeLimitedCache()
 * timeLimitedCache.set(1, 42, 1000); // false
 * timeLimitedCache.get(1) // 42
 * timeLimitedCache.count() // 1
 */