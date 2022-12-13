// brute force O(s*p)

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

// optimal approche O(n * 26)
var findAnagrams = function(s, p) {

    const sCount = {};
    const pCount = {};

    p.split("").forEach((element, index) => {
        const count = pCount[element];
        count ? pCount[element] = count+ 1 : pCount[element] = 1;
        const count1 = sCount[s[index]];
        count1 ? sCount[s[index]] = count1+1 : sCount[s[index]] = 1;
    });

   let left = 0;
   let right = p.length - 1;

    const res = [];

   while(right < s.length) {
       if(checkAna(sCount, pCount)) {
           res.push(left);
       }
        sCount[s[left]] -= 1;
        left++;
        right++;
        const count = sCount[s[right]];
        count ? sCount[s[right]] = count + 1 : sCount[s[right]] = 1;
   }

   return res;
}

function checkAna(sCount, pCount) {
    
    for(const prop in pCount) {
        if(!sCount[prop] || sCount[prop] !== pCount[prop]) return false;
    }

    return true;
}