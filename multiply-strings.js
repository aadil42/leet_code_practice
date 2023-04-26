/**
 * 
 * Time O(m*n) | Space O(m+n)
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    
    if(num1 === '0' || num2 === '0') return '0';

    // const result = new Array(num1.length + num2.length).fill(0);

    const result = [];
    for(let i = 0; i < num1.length + num2.length; i++) {
        result.push(0);
    }

    num1 = num1.split('').reverse();
    num2 = num2.split('').reverse();
    for(let i = 0;  i < num1.length; i++) {
        for(let  j = 0; j < num2.length; j++) {
            const digit = +num1[i] * +num2[j];
            result[i+j] +=  digit;
            result[i+j+1] += Math.floor(result[i+j] / 10);
            result[i+j] = result[i+j] % 10; 
        }
    }

    result.reverse();
    let i = 0;
    while(!result[i] && i < result.length) {
        i++;
    }
    return result.slice(i).join('');
};