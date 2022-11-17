var isSubsequence = function(s, t) {
    
    let i = 0;
    let j = 0;

    const len = t.length; 
    while(i < len) {
        if(t[i] === s[j]) {
            j++;
        }
        i++;
    }

    return j === s.length;
};

