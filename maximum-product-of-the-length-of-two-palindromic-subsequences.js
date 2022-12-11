

var maxProduct = function(s) {
    const bitMaskHash = new Map();
    const strlen = s.length;
    for(let i = 1; i < (1 << strlen); i++) {
        let paliString = '';
        for(j = 0; j < strlen; j++) {
            if(i & (1 << j)) {
                paliString += s[strlen - 1 - j];
            }
        }
        if(paliString === paliString.split('').reverse().join('')) {
            bitMaskHash.set(i, paliString.length);
        }
    }

    let result = 0;
    for(const [key, value] of bitMaskHash) {
        for(const [key1, value1] of bitMaskHash) {
            if((key & key1)  === 0) {
                result = Math.max(result, value * value1);
            }
        }
    }
    return result;
};

const s = 'leetcodecom';
console.log(maxProduct(s));