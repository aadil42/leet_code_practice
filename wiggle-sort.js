// brute force O(n^2);
function wiggle_sort(arr) {
    
    for(let  i = 1; i < arr.length; i++) {
        // if odd index find large else find small

        if(i%2) {
            // console.log(i,'odd');
            // arr[i] = 
            findLarge(arr, i);
        } else {
            // console.log(i,'even');
            // arr[i] = 
            findSmall(arr,i);
        }
    }

    return arr;
}

function findSmall(arr,i) {

    for(let j = i + 1; j < arr.length; j++) {
        if(arr[j] < arr[i]) {
           swap(i,j,arr);
        }
    }
}

function findLarge(arr, i) {
    for(let j = i + 1; j < arr.length; j++) {
        if(arr[j] > arr[i]) {
            swap(i,j,arr);
        }
    }
}

function swap(i,j,arr) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

const myArr = [3, 5, 2, 1, 6, 4];
console.log(wiggle_sort(myArr));



