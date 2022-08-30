// you understand this 80%
var getSum = function(a, b) {
   
    let tb = b;
    let result = a;

    while(tb) {
        let temp = (result & tb) << 1;
        result = tb ^ result;
        tb = temp
    }

    return result
};

const a = 2, b = 3;
console.log(getSum(a,b));