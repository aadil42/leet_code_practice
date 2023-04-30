/**
 * 
 * Time O(n) | Space O(1)
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    
    let carry = 0;
    let result = '';

    a = a.split('').reverse();
    b = b.split('').reverse();

    const maxLen = Math.max(a.length, b.length);

    if(a.length < maxLen) {
        for(let i = a.length;  i < maxLen; i++) {
            a.push('0');
        }
    }

    if(b.length < maxLen) {
        for(let i = b.length;  i < maxLen; i++) {
            b.push('0');
        }
    }


    for(let i = 0; i < maxLen; i++) {
        let digitA = a[i];
        let digitB = b[i];
        
        const total = carry + (+digitA) + (+digitB);
        result += (total % 2).toString();
        carry = Math.floor(total/2);
    }

    if(carry) {
        result += "1";
    }

    return result.split('').reverse().join('');
};