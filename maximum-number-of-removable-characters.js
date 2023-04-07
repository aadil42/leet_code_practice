/**
 * Brute force
 * Time O(removable.length * s.length) | Space O(1)
 * @param {string} s
 * @param {string} p
 * @param {number[]} removable
 * @return {number}
 */
var maximumRemovals = function(s, p, removable) {

    let k = 0;
    // removable.reverse();
    s = s.split('');
    p = p.split('');
    for(let i = 0; i < removable.length; i++) {
        s[removable[i]] = -1;
        if(isSubSet()) {
            k++;
        } else {
            return k;
        }
    }

  function isSubSet() {
      let i = 0;
      let j = 0;

      while(i < s.length && j < p.length) {
          if(s[i] === p[j]) {
              i++;
              j++;
          } else {
              i++;
          }
      }
      return j === p.length
  }

  return k;  
};