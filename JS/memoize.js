/**
 * Clousers | Hash-set.
 * 
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    const funcCach = new Map();
    return function(...args) {
        const argsArr = Array.from(arguments);
        const hash = argsArr.join("-");
        if(funcCach.has(fn) && funcCach.get(fn).has(hash)) return funcCach.get(fn).get(hash); 
        if(!funcCach.has(fn)) {
            funcCach.set(fn, new Map());
        }
        const fnHashMap = funcCach.get(fn);
        fnHashMap.set(hash, fn(...args));
        return fnHashMap.get(hash);
    }
}

/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */