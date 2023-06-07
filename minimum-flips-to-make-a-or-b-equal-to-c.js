/**
 * n === number of bits
 * Time O(n) | Space O(1)
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var minFlips = function(a, b, c) {
    a = a.toString(2).padStart(32,'0')
    b = b.toString(2).padStart(32,'0')
    c = c.toString(2).padStart(32,'0')

    let minFlip = 0;
    for(let i = 31; i > -1; i--) {
        if(a[i] === '0' && b[i] === '0' && c[i] === '1') {
            minFlip++;
            continue;
        };
        if(a[i] === '1' && b[i] === '1' && c[i] === '0') {
            minFlip += 2;
            continue;
        }
        if((a[i] === '1' && c[i] === '0') || (b[i] === '1' && c[i] === '0')) {
            minFlip++;
            continue;
        }
        
    }

    return minFlip;
};