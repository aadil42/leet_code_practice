var minWindow = function(s, t) {

const haveHash = new Map();
const needHash = new Map();
let i = 0;
let j = 0;
let min = Number.MAX_VALUE;
let have = 0;
let need = t.length;
let left = 0;
let right = 0;

t.split('').forEach((char) => {

    setHash(needHash, char);
    
    if(needHash.has(char)) {
        needHash.set(char, needHash.get(char) + 1);
    } else {
        needHash.set(char, 1);
    }
});

while(i < s.length) {



    if(have == need) {
        // slide i untill have !== need;
        if(j - i + 1 < min) {
            left = i;
            right = j;
        }
        min = Math.min(min, j - i + 1);


    }

    if(have !== need) {
        j++;
    }
}

return s.slice(left, right);
};

function setHash(needHash, value) {
    if(needHash.has(value)) {
        if(haveHash.has(value)) {
            haveHash.set(value, haveHash.get(value) + 1);
        } else {
            haveHash.set(value, 1);
        }

        // taking care of incementing the have count;
        if(haveHash.get(value) == needHash.get(value)) {
            have += 1;
        }
    }
}
const s = 'ADOBECODEBANC';
const t = 'ABC';

console.log(minWindow(s, t));