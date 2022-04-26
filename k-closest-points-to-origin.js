
// push  done
// pop done
// getParent done
// getLeftChild done
// getRightChild done
// swap done
// peek  done
// print done
// this is a max heap
class MinHeap {
    constructor() {
        this.queue = [];
        this.size = 0;
    }

    // this is for the min heap
    push(data) {
    this.queue.push(data);
    let currunt_index = this.queue.length - 1;
    
    while(currunt_index !== 0 && this.queue[currunt_index][0] < this.queue[this.getParent(currunt_index)][0]) {
        this.swap(currunt_index, this.getParent(currunt_index));
        currunt_index = this.getParent(currunt_index);
    }
    this.size++;
    }
    // this is for the min heap
    pop() {
        this.swap(0, this.queue.length - 1);
        const popData = this.queue.pop();
        let i = 0;
        let root;
        let left;
        let right;
        while(i < this.queue.length - 1) {
            root = i;
            left = this.getLeftChild(i);
            right = this.getRightChild(i);

            
            if(!this.queue[left] || !this.queue[right]) {
                break;
            }
            if(this.queue[root][0] <= this.queue[left][0] && this.queue[root][0] <= this.queue[right][0]) {
                break;
            }
            if(this.queue[left] && this.queue[root][0] >= this.queue[left][0]) {
                this.swap(root, this.getLeftChild(root));
                i = left;
            }
            if(this.queue[right] && this.queue[root][0] >= this.queue[right][0]) {
                this.swap(root, this.getRightChild(root));
                i = right;
            }
        }

        return popData;
    }

    // this is for the max heap
    // push(data) {
    //     this.queue.push(data);
    //     let currunt_index = this.queue.length - 1;
    //     while(currunt_index !== 0 && this.queue[currunt_index] > this.queue[this.getParent(currunt_index)]) {
    //         this.swap(currunt_index, this.getParent(currunt_index));
    //         currunt_index = this.getParent(currunt_index);
    //     }
    //     this.size++;
    // }

    // // this is for the max heap
    // pop() {
    //     this.swap(0, this.queue.length - 1);
    //     const popData = this.queue.pop();
    //     let i = 0;
    //     while(i < this.queue.length - 1) {
    //         let root = i;
    //         let left = this.getLeftChild(i);
    //         let right = this.getRightChild(i);
    //         if(this.queue[root] < this.queue[left]) {
    //             this.swap(root, this.getLeftChild(root));
    //             i = left;
    //         }

    //         // now the root will have the value of left child.
    //         if(this.queue[root] < this.queue[right]) {
    //             this.swap(root, this.getRightChild(root));
    //             i = right;
    //         }
    //         if(this.queue[root] > this.queue[left] && this.queue[root] > this.queue[right]) {
    //             break;
    //         }
    //         if(!this.queue[left] || !this.queue[right]) {
    //             break;
    //         }
    //     }

    //     return popData;
    // }

    getLeftChild(index) {
        return (index * 2) + 1;
    }
    getRightChild(index) {
        return (index * 2) + 2;
    }
    swap(parentIn, currunt_index) {
        const temp = this.queue[currunt_index];
        this.queue[currunt_index] = this.queue[parentIn];
        this.queue[parentIn] = temp;
    }
    getParent(index) {
        return Math.ceil((index - 2)/2);
    }
    peek() {
        return this.queue[0];
    }
    print() {
        return this.queue;
    }
}



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
    console.log(priorityDistance);
    result = [];
    for(let i = 0; i < k; i++) {
        let indexPoint = priorityDistance.pop()[1];
        indexPoint = points[indexPoint]; 
        console.log(indexPoint);
        result.push(indexPoint);
    }

    return result;
};




// const points =  [[68,97],[34,-84],[60,100],[2,31],[-27,-38],[-73,-74],[-55,-39],[62,91],[62,92],[-57,-67]];
// const k = 5;
// console.log(kClosest(points, k));

// console.log(10 ** 2);

const temp = new MinHeap();
points = [
    [ 31.064449134018133, 3 ],
    [ 46.61544808322666, 4 ],
    [ 67.42403132415029, 6 ],
    [ 110.11357772772621, 7 ],
    [ 87.96590248499699, 9 ],
    [ 116.61903789690601, 2 ],
    [ 103.9471019317037, 5 ],
    [ 118.46096403457132, 0 ],
    [ 110.9414259868693, 8 ],
    [ 90.62008607367353, 1 ]
  ];

for(let i = 0; i < points.length ; i++) {
    temp.push(points[i]);
}
console.log(temp.queue);

for(let i = 0; i < 5; i++) {
    console.log(temp.pop());
}

// console.log(temp.queue);