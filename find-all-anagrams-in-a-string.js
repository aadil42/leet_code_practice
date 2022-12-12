// brute force O(n^2)

var findAnagrams = function(s, p) {
  
    let pHash = Array(26).fill(0);

    p.split('').forEach((element) => {
         charCode = element.charCodeAt(0);
        if(pHash[charCode - 97] !== 0) {
            pHash[charCode - 97] += 1;
        } else {
            pHash[charCode - 97] = 1;
        }
    });

    pHash = pHash.join("");
    const res = [];
    for(let i = 0; i < s.length - p.length + 1; i++) {
        if(checkAna(i,p.length, pHash,s)) {
            res.push(i);
        }
    }

    return res;
};

function checkAna(i, plen, pHash, s) {

    hashArray = Array(26).fill(0);
       
    for(let j = i; j < i + plen;  j++) {
            const charCode = s[j].charCodeAt(0);
        if(hashArray[charCode - 97] !== 0) {
            hashArray[charCode - 97] += 1;
        } else {
            hashArray[charCode - 97] = 1;
        }
    } 

    return hashArray.join("") === pHash;
}