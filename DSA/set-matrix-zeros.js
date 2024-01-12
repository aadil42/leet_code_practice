var setZeroes = function(matrix) {
    
const rowDone = new Set();
const columnDone = new Set();
const original0s = new Set();


// get original zeros;
for(let i = 0; i < matrix.length; i++) {
    for(let j = 0; j < matrix[0].length; j++) {
        if(matrix[i][j] === 0) {
            let temp1 = i.toString();
            let temp2 = j.toString();
            let temp3 = temp1 + '-' +  temp2;
            original0s.add(temp3);
        }
    }
}

console.log(original0s);
// meat of the function
for(let i = 0; i < matrix.length; i++) {
    for(let j = 0; j < matrix[0].length; j++) {
            let temp1 = i.toString();
            let temp2 = j.toString();
            let temp3 = temp1 + '-' +  temp2;
        if(matrix[i][j] === 0 && original0s.has(temp3)) {
            
            if(!columnDone.has(j)) {
                makeColumnZeros(j);
            }
            if(!rowDone.has(i)) {
                makerowZeros(i);
            }
        }
    }
}

function makeColumnZeros(j) {
    // make the column 0
    for(let row = 0;  row < matrix.length; row++) {
        matrix[row][j] = 0;
    }
    columnDone.add(j);
}

function makerowZeros(i) {
    // make the row 0
    for(let column = 0; column < matrix[0].length; column++) {
        matrix[i][column] = 0;
    }
    rowDone.add(i);
}

return matrix;
};

const matrix = [[9,8,5,1,8,0,7,3,4,1,2,0],
                [1,4,3,3,8,1,6,9,3,5,7,3],
                [2,5,0,9,5,9,6,4,8,4,7,6],
                [4,5,2,0,8,4,3,1,0,6,4,8],
                [9,0,9,5,7,7,0,9,2,2,0,9],
                [2,7,6,2,1,3,0,7,0,2,7,0],
                [6,0,2,8,9,6,6,0,9,6,7,6],
                [3,8,8,7,0,8,9,4,7,5,6,0],
                [0,9,7,3,1,7,3,0,9,7,8,8],
                [6,7,1,5,3,8,3,8,6,1,7,9],
                [2,6,3,9,1,2,2,4,1,9,7,4],
                [8,0,4,8,8,5,8,4,2,9,1,7]];
console.log(setZeroes(matrix));