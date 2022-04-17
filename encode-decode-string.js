
// this problem is not leetcode you have to purchage leetcode premium. You can solve it on here -> https://www.lintcode.com/problem/659/
// unfortunatly you can use js for the solution. 

var encode_decode_string = function (input) {

let encode = '';

input.forEach((word) => {
    encode += word.length + '#' + word;
});

let decode = [];

let i = 0;
while( i < encode.length) {
    const wordLen = +encode[i];
    j = i + 2
    let curruntWord = '';
    while(j < wordLen + 2 + i) {
        curruntWord += encode[j];
        j++;
    }
    decode.push(curruntWord);
    i = j;
}

return decode;
}


const Input =  ["we", "say", ":", "yes"];
console.log(encode_decode_string(Input));