/**
 * @param {number} n
 * @return {boolean}
 */
var isUgly = function(n) {
    
    if(n <= 0) return false;
    
    const primeA = [2,3,5];

    primeA.forEach((p) =>  {
        while(n%p === 0) {
            n = n/p;
        }
    });

    return n === 1;
};