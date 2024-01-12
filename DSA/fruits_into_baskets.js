
// the only tricky part about this problem was how to keep track of this start_fruit_count. otherwise you solve the chunk of the problem 
// by yourself.
var totalFruit = function(fruits) {

let start_fruit_count = 0;
let fruit1 = -1;
let fruit2 = -1;

let curruntTotal = 0;
let finalTotal = 0;
for(let i = 0; i < fruits.length; i++) {
    if(fruits[i] === fruit1 || fruits[i] === fruit2) {
        curruntTotal++;
    } else {
        curruntTotal = start_fruit_count + 1; 
    }

    if(fruits[i] === fruit2) {
        start_fruit_count++;
    } else { 
        start_fruit_count = 1;
    }

    if(fruits[i] !== fruit2) {
        fruit1 = fruit2;
        fruit2 = fruits[i];
    }

    finalTotal = Math.max(curruntTotal, finalTotal);
}

return finalTotal;
};

const fruits = [1, 1, 1, 2, 2, 3, 4, 5];
console.log(totalFruit(fruits));

// [1, 1, 1, 2, 2, 3, 4, 5]