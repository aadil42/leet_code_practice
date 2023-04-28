/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    
    const nums = new Set();

    while(true) {
        n = n.toString().split('');
        // console.log(n);
        const temp = n.reduce((acc, digit) => {
            return acc + ((+digit)**2);
        },0);

        if(temp === 1) return true;
        if(nums.has(temp)) return false;
        nums.add(temp);
        n = temp;
    }


};