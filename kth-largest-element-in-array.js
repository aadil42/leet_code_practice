/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// naive approache using array and sorting
var findKthLargestN = function(nums, k) {
   nums.sort((x, y) => {
        return x - y;
    });
    console.log(nums);
    return nums[nums.length - k];
};

/**
 * Pirority Queue.
 * https://leetcode.com/problems/kth-largest-element-in-an-array
 * 
 * Time O(n*log(n)) | Space(n);
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    
    const pq = new MaxPriorityQueue(); // this only exist in leetcode environment.

    nums.forEach((num) => {
        pq.enqueue(num);
    });

    let kthLargest = 0;
    while(k) {
        kthLargest = pq.dequeue().element;
        k--;
    }

    return kthLargest;
};

/**
 * Quick Select 
 * 
 * Time O(n^2) worst, O(n) average | Space O(1)
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest2 = function(nums, k) {
    k = nums.length - k;
    const quickSelect = (l,r) => {
        const pivot = nums[r];
        let p = l;
        for(let i = l; i < r; i++) {
            if(nums[i] <= pivot) {
                [nums[p], nums[i]] = [nums[i], nums[p]];
                p+=1;
            }
        }
        [nums[p], nums[r]] = [nums[r], nums[p]];
        if(k > p) return quickSelect(p+1,r);
        if(k < p) return quickSelect(l, p-1);
        return nums[p];
    }
    return quickSelect(0, nums.length - 1);
};


// custom built heap data structure
class PriorityQueue {
    constructor() {
        this.queue = [];
        this.size = 0;
    }

    push(data) {
        this.queue.push(data);
        let currunt_index = this.queue.length -1;
        while(this.queue[currunt_index] < this.queue[this.getParent(currunt_index)]) {
            const parentIn = this.getParent(currunt_index);
            this.swap(parentIn, currunt_index);
            currunt_index = parentIn;
        }
        this.size++;
    }

    pop() {
        this.swap(0, this.queue.length -1);
        this.queue.pop();

        let currunt_index = 0;
        while(this.queue[currunt_index] > this.queue[this.getLeftChild(currunt_index)] || this.queue[currunt_index] > this.queue[this.getRightChild(currunt_index)]) {
            if(this.queue[currunt_index] > this.queue[this.getLeftChild(currunt_index)] && this.queue[this.getLeftChild(currunt_index)] >= this.queue[this.getRightChild(currunt_index)]) {
                // swap the right child with parent
                this.swap(currunt_index, this.getRightChild(currunt_index));
                currunt_index = this.getRightChild(currunt_index);
            } else if(this.queue[currunt_index] > this.queue[this.getRightChild(currunt_index)] && this.queue[this.getRightChild(currunt_index)] >= this.queue[this.getLeftChild(currunt_index)]) {
                // swap the left child with parent
                this.swap(currunt_index, this.getLeftChild(currunt_index));
                currunt_index = this.getLeftChild(currunt_index);
            } else if(this.queue[currunt_index] > this.queue[this.getLeftChild(currunt_index)]) {
                this.swap(currunt_index, this.getLeftChild(currunt_index));
                currunt_index = this.getLeftChild(currunt_index);
            } else if(this.queue[currunt_index] > this.queue[this.getRightChild(currunt_index)]) {
                this.swap(currunt_index, this.getRightChild(currunt_index)) 
                currunt_index = this.getRightChild(currunt_index);
            } else {
                break;
            }
        }
    }
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


// using heap
var findKthLargest1 = function(nums, k) {
    // push every element in the queue
    let myqueue = new PriorityQueue();
    nums.forEach((element) => {
        myqueue.push(element);
    });

    // popping from the queue
    for(let i = 0; i  < nums.length - k; i++) {
        myqueue.pop();
    }
    return myqueue.peek();
 };

 console.log(findKthLargest1([1,3,2,5,6], 2));
 
