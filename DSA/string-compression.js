/**
 * Time O(n) | Space O(n) 
 * Array | String
 * https://leetcode.com/problems/string-compression/
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    
    let i = 0;
    const n = chars.length;

    while(i < n) {
        const char = chars[i];
        let occ = 1;
        while(i + 1 < n && chars[i] === chars[i+1]) {
            occ++;
            i++;
        }

        chars.push(char);

        if(occ > 1) {
            occ.toString().split("").map((digit) => {
                chars.push(digit);
            });
        }
        i++;
    }
    
    chars.splice(0,n);
};