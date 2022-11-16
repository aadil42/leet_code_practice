
// brute force
var replaceElements = function(arr) {
    
    for(let i = 0; i < arr.length; i++) {
        arr[i] = biggestElement(i, arr);
    }

    arr[arr.length - 1] = -1;
    return arr;
};

function biggestElement(index, arr) {

    let biggest = 0;
    for(let i = index + 1; i < arr.length; i++) {
        biggest = Math.max(biggest, arr[i]);
    }

    return biggest;
}