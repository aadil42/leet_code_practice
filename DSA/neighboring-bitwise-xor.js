/**
 * 
 * Very easy you need to grasp the intuition
 * @param {number[]} derived
 * @return {boolean}
 */
var doesValidArrayExist = function(derived) {
    let ones = 0;
    derived.forEach((bit) => {
        if(bit) ones++;
    });
    
    if(!(ones%2) && !(derived.length % 2)) return true;
    if((ones%2) && !(derived.length % 2)) return false;
    if(!(ones%2) && (derived.length%2)) return true;
    if((ones%2) && (derived.length%2)) return false;
};