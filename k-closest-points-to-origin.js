
var kClosest = function(points, k) {
    const distanceArray = [];

    for(let i = 0; i < points.length; i++) {
        const distance = Math.sqrt( (points[i][0]) ** 2 + (points[i][1]) ** 2 );
        distanceArray.push([distance, i]);
    }

    const priorityDistance = new MinHeap();
    distanceArray.forEach((element) => {
        priorityDistance.push(element);
    });

    result = [];
    for(let i = 0; i < points - k; i++) {
        result.push(priorityDistance.pop());
    }

    return result;
};




// const points =  [[-2,10],[-4,-8],[10,7],[-4,-7]];
// const k = 3;
// console.log(kClosest(points, k));

// console.log(10 ** 2);


const temp = new minPriorityQueue();
temp.push([8.94, 0]);
temp.push([10.19,0]);
temp.push([12.20, 0]);
temp.push([8.06, 0]);

console.log(temp.queue);