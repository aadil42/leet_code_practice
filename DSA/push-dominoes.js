/**
 * Two Pointers (more  intuitive and natrual approch than queue)
 * Time O(N) | Space O(1)
 * https://leetcode.com/problems/push-dominoes/
 * @param {string} dominoes
 * @return {string}
 */

var pushDominoes = function(dominoes) {

    let left = 0;
    let right = 1;
    dominoes = "L" + dominoes + "R"; // for the edge case like ...L...R...
    dominoes = dominoes.split('');

    while(right < dominoes.length) {
        if(dominoes[right] === ".") {
            right++;
            continue;
        };

        if(dominoes[left] === "R" && dominoes[right] === "L") {
            let i = left + 1;
            let j = right - 1;
            while(i < j) {
                dominoes[i] = "R";
                dominoes[j] = "L";
                i++;
                j--;
            }
        }

        if(dominoes[left] === dominoes[right]) {
            let i = left + 1;
            while(i < right) {
                dominoes[i] = dominoes[left]; 
                i++;
            }
        }

        left = right;
        right++;
    };
    return dominoes.slice(1, dominoes.length - 1).join('');
};


class Node {
    constructor(val, next) {
        this.val = val;
        this.next = next;
    }
}

class Queue {
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

var pushDominoes1 = function(dominoes) {
    const queue = new Queue(Number.MAX_SAFE_INTEGER);
    dominoes.split('').forEach((dominoe,index) => {
        if(dominoe !== '.') {
             queue.enqueue([dominoe,index]);
        }
    });
    
    dominoes = dominoes.split('');
    while(!queue.isEmpty()) {

        const poped = queue.dequeue().val;
        const index = poped[1];
        const direction = poped[0];   

        // console.log(index,direction);
        if(direction === 'L' && dominoes[index - 1] === '.') {
            dominoes[index - 1] = direction;
            queue.enqueue([direction, index - 1]);
        } else if (direction === 'R' && dominoes[index + 1] === '.') {
            if(dominoes[index + 2] === 'L') {
                queue.dequeue();
            } else {
                dominoes[index + 1] = direction;
                queue.enqueue([direction,index + 1]);    
            }
        }
    }
    return dominoes.join('');
 }

 const dominoes = ".L.R...LR..L..";
//   "LL.RR.LLRRLL.."
 console.log(pushDominoes(dominoes));


