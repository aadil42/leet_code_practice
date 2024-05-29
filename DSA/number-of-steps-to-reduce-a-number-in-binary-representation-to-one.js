/**
 * number is a number that you get from the binary-str if you convert it to decimel number.
 * Time O(n*log(number)) | Space O(n)
 * https://leetcode.com/problems/number-of-steps-to-reduce-a-number-in-binary-representation-to-one
 * @param {string} s
 * @return {number}
 */
var numSteps = function(s) {
    
    const binary = s.split("").map((bit) => +bit);
    binary.unshift(0); // if all the bits are set to one then it's an odd number
    // to make it even we will add one but we'll run out of bit-spots. So adding 0 bit in the begining just for the edge case.
    // return;
    const addOneToBinary = (binary) => {
        let carry = 1;

        for(let i = binary.length - 1; i > -1; i--) {
            const bitResult = carry^binary[i];
            carry = carry && binary[i];
            binary[i] = bitResult;
        }
    }

    const devideBinary = (binary) => {
        binary.pop();
        binary.unshift(0);
    }

    const checkIfOne = (binary) => {
        for(let i = 0; i < binary.length - 1; i++) {
            if(binary[i]) return false;
        }
        return binary[binary.length-1] === 1;
    }

    let steps = 0;
    while(!checkIfOne(binary)) {
        // it's an odd number add one to it.
        if(binary[binary.length - 1]) {
            addOneToBinary(binary);
        }else {
            // it's an even number devide it by two.
            devideBinary(binary);
        }   
        steps++;     
    } 

    return steps;
};