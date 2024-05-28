/**
 * Async-programing | Promises | Setimeout
 * https://leetcode.com/problems/promise-time-limit/
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var timeLimit = function(fn, t) {

    return async function(...args) {
      const originalPromise = fn(...args);
      const tlePromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("Time Limit Exceeded");
        }, t);
      });
      return Promise.race([originalPromise, tlePromise]);
    }
    
};

/**
 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 * limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
 */