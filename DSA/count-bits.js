var countBits = function(n) {
    
    const outputArr = [];
    outputArr.push(0);
    
    for(let i = 1; i <= n; i++) {
        outputArr.push(outputArr[i>>1] + i%2);
    }
    
    return outputArr;
};
