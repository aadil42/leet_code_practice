/**
 * setTimeout 
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */
var cancellable = function(fn, args, t) {

    let tid = setTimeout(() => {
        tid = null;
        fn(...args);
    }, t);

    return () => {
        // the fn is not invoked yet.
        if(tid) {
            clearTimeout(tid);
        }
    }
};

/**
 *  const result = [];
 *
 *  const fn = (x) => x * 5;
 *  const t = 20 args = [2],, cancelTimeMs = 50;
 *
 *  const start = performance.now();
 *
 *  const log = (...argsArr) => {
 *      const diff = Math.floor(performance.now() - start);
 *      result.push({"time": diff, "returned": fn(...argsArr)});
 *  }
 *       
 *  const cancel = cancellable(log, args, t);
 *
 *  const maxT = Math.max(t, cancelTimeMs);
 *           
 *  setTimeout(cancel, cancelTimeMs);
 *
 *  setTimeout(() => {
 *      console.log(result); // [{"time":20,"returned":10}]
 *  }, maxT + 15)
 */