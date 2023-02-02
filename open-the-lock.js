/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
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


var openLock = function(deadends, target) {
    
    const visited = new Set(deadends);
    if(visited.has("0000")) return -1;
    const queue = new Dequeue();
    
    const childers = (combination) => {
        const result = [];
        for(let  i = 0; i < 4;  i++) {
            const turn1 = combination.slice(0,i) + (+combination[i] + 1) % 10 + combination.slice(i+1);
            const turn2 = combination.slice(0,i) + (combination[i] - 1 + 10) % 10 + combination.slice(i+1);
            result.push(turn1);
            result.push(turn2);
        }
        return result;
    }

    queue.addFront(['0000',0]); // [combination, turn];
    while(!queue.isEmpty()) {
        const [combination, turn] = queue.removeFront();
        if(combination === target) return turn;

        const childrens = childers(combination);
        for(let i = 0; i < childrens.length; i++) {
            if(!visited.has(childrens[i])) {
                visited.add(childrens[i]);
                queue.addBack([childrens[i],turn+1]);
            }
        }
    }

    return -1;
};

const deadends = ["0201","0101","0102","1212","2002"];
const target = "0202";
console.log(openLock(deadends, target));