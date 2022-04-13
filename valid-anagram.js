var isAnagram = function(s, t) {
    
    if(s.length !== t.length) return false;
    
    const myHash = new Map();
    
    [...s].forEach((e) => {
        
    if(!myHash.has(e)) {
        myHash.set(e, 1);
    } else {
        myHash.set(e, myHash.get(e) + 1);
    }
    });
    
    for(let i = 0; i < t.length; i++) {
        if(myHash.has(t[i]) && myHash.get(t[i]) > 0){
            myHash.set(t[i], myHash.get(t[i]) - 1);
        } else {
            return false;
        }
    }
    
    return true;
};