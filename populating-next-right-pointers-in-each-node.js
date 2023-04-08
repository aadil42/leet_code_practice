/**
 * 
 * Not a clean code but it does pass on leetcode.
 *  Time O(n) | Space O(n)
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */
/**
 * @param {Node} root
 * @return {Node}
 */
class Dequeue {
    constructor() {
        this.items = {};
        this.count = 0;
        this.lowestCount = 0;
    }

    addFront(element) {
        if (this.isEmpty()) {
            this.addBack(element);
        } else if (this.lowestCount  > 0) {
            this.lowestCount --;
            this.items[this.lowestCount] = element;
        } else {
            for (let index = this.count; index > 0; index--) {
                this.items[index] =  this.items[index -1];
            }
            this.count ++;
            this.items[0] = element;
        }
    }
    addBack(element) {
        this.items[this.count] = element;
        this.count++;
    }
    removeFront() {
        if (this.isEmpty()) {
            return undefined;
        }

        let result = this.items[this.lowestCount];
        delete this.items[this.lowestCount];
        this.lowestCount++;
        return result;

    }
    removeBack() {
        if (this.isEmpty()) {
            return undefined;
        }
        let result = this.items[this.count - 1];
        delete this.items[this.count - 1];
        this.count--;
        return result;
    }

    peekFront(){
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items[this.lowestCount];
    }

    peekBack(){
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items[this.count -1];
    }



    isEmpty() {
        return this.count - this.lowestCount == 0;
    }

    size() {
        return this.count - this.lowestCount;
    }

    clear() {
        this.items = {};
        this.count = 0;
        this.lowestCount = 0;
    }

    toString() {
        if (this.isEmpty()) {
            return "";
        }
        let string = `${this.items[this.lowestCount]}`;
        for (let index = this.lowestCount + 1; index < this.count; index++) {
            string = `${string},${this.items[index]}`;
        }
        return string;
    }

}

var connectExtraMemory = function(root) {
    
    const ListArr = [];

    const q = new Dequeue();
    q.addBack(root);

    while(!q.isEmpty()) {
        const node = q.removeFront();
        if(node) {
            q.addBack(node.left);
            q.addBack(node.right);
            ListArr.push(node);
        }
    }
        
     let listStart = new Node(null);   
     let head = listStart;
    // making a linked list 
    for(let i = 0; i < ListArr.length; i++) {
        listStart.next = ListArr[i];
        listStart = listStart.next;
    }

    let pointer1 = head.next;
    let pointer2 = pointer1;

    let level = 0;
    while(pointer2) {
        for(let i = 0; i < Math.pow(2,level) - 1; i++) {
            pointer1 = pointer1.next;
        }
        pointer2 = pointer1.next;
        pointer1.next = null;
        pointer1 = pointer2;
        level++;
    }

    return root;
};



/**
 * BFS
 * Time O(n) | Space O(1)
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */
/**
 * @param {Node} root
 * @return {Node}
 */


// very neat code.
var connect = function(root) {

    let currentNode = root;
    let nextLevelNode = root && root.left;

    while(currentNode && nextLevelNode) {
        currentNode.left.next = currentNode.right;
        if(currentNode.next) {
            currentNode.right.next = currentNode.next.left;
        }
        currentNode = currentNode.next;
        if(!currentNode) {
            currentNode = nextLevelNode;
            nextLevelNode = currentNode.left;
        }
    }

    return root;
};