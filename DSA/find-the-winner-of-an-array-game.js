class Node {
    constructor(val, next) {
        this.val = val;
        this.next = next;
    }
}

class Queue1 {
    constructor(size) {
        this.front = null;
        this.size = size;
        this.count = 0;
        this.back = null;
    }

    enqueue(data) {
        
        if(this.isFull()) return;
        
        if(this.back) {
            this.back.next = new Node(data);
            this.back = this.back.next;
        } else {
            this.back = new Node(data);
            this.front = this.back;
        }
        this.count++;
    }

    dequeue() {
       
        let toBeReturn;
        if(this.front && !this.front.next) {
            toBeReturn = this.front;
            this.front = this.front.next;
            this.back = this.front;
        } else {
            toBeReturn = this.front;
            if(this.front) {
                this.front = this.front.next;
            }
        }
        this.count--;

        return toBeReturn ? toBeReturn : null; 
    }
    reverseQueue() {
        const stack = [];
        while(this.front) {
            stack.push(this.front.val);
            this.front = this.front.next;
        }
        // setting everyting to 0 and null;
        this.front = null;
        this.back = null;
        this.count = 0;
        // pushing on to the queue in reverse
        while(stack.length) {
           
            this.enqueue(stack.pop());
        }
    }
    isFull() {
        if(this.count < this.size) {
            return false;  
        } else {
            return true;
        }
    }

    isEmpty() {

        if(this.count <= 0) {
            return true;
        } else {
            return false;
        }
    }

    count1() {
        return this.count;
    }

    peek() {
        return this.front ? this.front.val : null;
        // return this.front.val;
    }

    print() {
        let currunt = this.front;
        let linkedStr = '';
        while(currunt) {
            linkedStr += currunt.val + "->" ; 
            currunt = currunt.next;
        }
        return linkedStr + 'null';
    }
}

 // - Enqueue() – Add item to the queue from the REAR.
// - Dequeue() – Remove item from the queue from the FRONT.
// - isFull() – Check if queue is full or not.
// - isEmpty() – Check if queue empty or not.
// - count() – Get number of items in the queue.
// - peek() – return front elemenet in the queue(line).
// 1 2 3 4 5 6 7 8 9 10 

/**
 * Queue 
 * Time O(n) | Space O(n)
 * https://leetcode.com/problems/find-the-winner-of-an-array-game
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */

var getWinner = function(arr, k) {
    
    if(k >= arr.length - 1) return Math.max(...arr);
    
    const q = new Queue1(arr.length);

    for(let i = 0; i < arr.length; i++) {
        q.enqueue(arr[i]);
    }

    let currentConsequtiveWin = 0;
    let firstEl = q.dequeue().val;

    while(true) {     

        if(currentConsequtiveWin === k) return firstEl;

        while(firstEl > q.peek()) {
            console.log(firstEl);
            currentConsequtiveWin++;
            if(currentConsequtiveWin === k) return firstEl;
            q.dequeue();
        }
        currentConsequtiveWin = 1;
        firstEl = q.dequeue().val;
    }
};