var reverseBits = function(n) {
    
    let result = 0;
    
    for(let i = 0; i < 32; i++) {
        let bit = (n >> i) & 1;
        result =  result | (bit << (31 - i));
        }

    return result
};

console.log(reverseBits(4));
