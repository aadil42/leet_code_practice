var hasAllCodes = function(s, k) {
    
    const bitSet = new Set();

    for(let i = 0; i < s.length; i++) {
        if(s.substring(i,i+k).length === k) {
            bitSet.add(s.substring(i,i + k));
        }
    }

    return bitSet.size === 1<<k;
};

