// brute force O(n^2);
function wiggle_sort_brute(arr) {
    
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


// bit efficiant with time coplexity of O(n*log(n));
function wiggle_sort_not_so_bad(arr) {
    
arr.sort((a,b) =>  {
    return a - b;
});

for(let i = 1; i < arr.length; i += 2) {
    if(arr[i+1]) {
        swap(i,i+1,arr);
    }
}

return arr;
}
// 123456
const myArr = [3, 5, 2, 1, 6, 4];
console.log(wiggle_sort(myArr));


// even more better solution
function wiggle_sort(arr) {
    let i = 1;
    while( i < arr.length) {
        if(i%2) {
            if(arr[i] < arr[i-1]) {
                swap(i, i-1, arr);
            }
        } else {
            if(arr[i] > arr[i-1]) {
                swap(i, i-1, arr);
            }
        }
        i++;
    }
    return arr;
}

// 0 1 2 3 4 5
// 3 5 2 1 6 4
// 3 5 1 6 2 4 

