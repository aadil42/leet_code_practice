class EventEmitter {
    
    constructor() {
        this.events = {};
    }

    /**
     * Hashing 
     * @param {string} eventName
     * @param {Function} callback
     * @return {Object}
     */
    subscribe(eventName, callback) {
        
        if(!this.events[eventName]) {
            this.events[eventName] = new Set();
        }

        this.events[eventName].add(callback);
        const that = this;

        return {
            unsubscribe: () => {
                that.events[eventName].delete(callback);
                return;
            }
        };
    }
    
    /**
     * Hashing
     * @param {string} eventName
     * @param {Array} args
     * @return {Array}
     */
    emit(eventName, args = []) {
        
        if(!this.events[eventName]) return [];
        const callbacks = this.events[eventName];
        const result = [];
        let i = 0;
        for(const cb of callbacks) {
            result.push(cb(...args));
            i++;
        }

        return result;
    }
}

/**
 * const emitter = new EventEmitter();
 *
 * // Subscribe to the onClick event with onClickCallback
 * function onClickCallback() { return 99 }
 * const sub = emitter.subscribe('onClick', onClickCallback);
 *
 * emitter.emit('onClick'); // [99]
 * sub.unsubscribe(); // undefined
 * emitter.emit('onClick'); // []
 */