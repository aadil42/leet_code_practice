/**
 * Reduce
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
    return function(x) {
        if(!functions.length) return x;
        firstFunc = functions.pop();
        return functions.reverse().reduce((acc, curr) => {
            return curr(acc);
        }, firstFunc(x));
    }
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */

/**
 * DFS
 * @param {Function[]} functions
 * @return {Function}
 */
var compose0 = function(functions) {
    return function(x) {
        const dfs = (i, fn) => {
            if(i === functions.length - 1) {
                return fn(x);
            }
            return fn(dfs(i+1, functions[i+1]));
        }
        if(!functions.length) return x;
        return dfs(0, functions[0]);
    }
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */


/**
 * Simple for-loop
 * @param {Function[]} functions
 * @return {Function}
 */
var compose1 = function(functions) {
   
    return function(x) {
        let result = x;
        for(let i = functions.length - 1; i > -1; i--) {
            result = functions[i](result);
        }
        return result;
    }
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */