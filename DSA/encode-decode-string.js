
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


const Input =  ["we23##", "##435say", "#$%:", "25yes"];
// console.log(encode_decode_string(Input));

// solving the problem second time
var encode_decode_stringR = function (input) {

    // encoding
    let encode = '';
    input.forEach((word) => {
        encode += word.length + '#' + word;
    });
   
    // decoding
    const decode = [];

    let i = 0;
    while(i < encode.length) {
        const wordLen = +encode[i];
        let j = i + 2;
        let currentWord = '';
        while(j < i + 2 + wordLen) {
            currentWord += encode[j];
            j++;
        }
        decode.push(currentWord);
        i = j;
    }

    return decode;
}


console.log(encode_decode_stringR(Input));