var countBits = function(n) {
    
    if(!n) return [0];
    
    const result = [];
    result.push(0);
    
    for(let i = 1; i <= n; i++) {
        result.push(countBit(i));
    }
    
    return result;
};

function countBit(number) {
    
    let count = 0;
    while(number > 0) {
        if(number % 2) {
            count++
        }
        number = Math.floor(number/2);
    }
    return count;
}