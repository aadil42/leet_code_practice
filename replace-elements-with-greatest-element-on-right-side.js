
// brute force O(n^2);
var replaceElementsBrute = function(arr) {
    
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


// O(n)
var replaceElements = function(arr) {

    let maxFromLastTillCurrent = arr[arr.length - 1];

    for(let i = arr.length - 2; i > -1; i--) {
        let temp = arr[i];
        arr[i] = maxFromLastTillCurrent;
        maxFromLastTillCurrent = Math.max(temp, maxFromLastTillCurrent);
    }

    arr[arr.length - 1] = -1;
    return arr;
}