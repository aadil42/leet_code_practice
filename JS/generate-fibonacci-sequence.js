/**
 * iterative Generator.
 * @return {Generator<number>}
 */
var fibGenerator = function*() {

    const fib = [];
    const dfs = (i) => {

        if(fib[i] !== undefined) return fib[i];
        if(i  === 0) {
            fib[i] = 0;
            return fib[i];
        }
        if(i === 1) {
            fib[i] = 1;
            return fib[i];
        }
        
        fib[i] = dfs(i-1) + dfs(i-2); 
        return fib[i];
    }

    dfs(51);

    for(let i =  0; i < 52; i++) {
        yield fib[i];
    }
};

/**
 * const gen = fibGenerator();
 * gen.next().value; // 0
 * gen.next().value; // 1
 */