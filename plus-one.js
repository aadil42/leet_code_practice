var plusOne = function(digits) {
    
    let carry = 0;
    digits.unshift(0);
    for(let i = digits.length - 1; i >= 0; i--) {
        
      if(digits[i] !== 9) {
          digits[i] = parseInt(digits[i]);
          digits[i] = digits[i]+1;
          digits[i].toString();
          
          if(digits[0] == 0) {
              digits.shift();
          }
          return digits;
      } else {
          digits[i] = 0;
      }
    }
    
};