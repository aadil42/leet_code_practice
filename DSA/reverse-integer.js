/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    
    let isNegetive = false;
    if(x < 0) {
        isNegetive = true;
    }
    x = Math.abs(x);
    const MAX = 2**31 - 1;
    const MIN = -1 * 2**31;

    let result = 0;
    while(x) {
        result = (result*10) + (x%10);
        x = Math.floor(x/10);
    }
    if(result > MAX || result < MIN) return 0;

    return isNegetive ? -1*result :  result;
};

