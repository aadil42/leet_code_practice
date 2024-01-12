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


export class Solution {
  /**
   * @param rooms: m x n 2D grid
   * @return: nothing
   */
  wallsAndGates(rooms) {
   
      const ROW = rooms.length;
    const COL = rooms[0].length;
 
    const visited = new Set();
    const q = new Dequeue();
 
    const directions = [[1,0], [-1,0], [0,1], [0,-1]];
    rooms.forEach((room, row) => {
      room.forEach((singleRoom,col) =>  {
         if(singleRoom === 0) {
           q.addBack([row,col,0]);
         }
      });
    });
 
   function isValid(r,c) {
     const hash = r + "-" + c;
     if(r === ROW || c === COL ||
        r < 0 || c < 0 ||
        visited.has(hash) || rooms[r][c] === -1 || rooms[r][c] === 0){
            return false;
        } 
        return true;
   }
   
   while(!q.isEmpty()) {
     const len = q.size();
     
     for(let i = 0; i  < len; i++) {
       const node  = q.removeFront();
       
       const r = node[0];
       const c = node[1];
       const len = node[2];
       directions.forEach((direction) => {
         if(isValid(r + direction[0],c + direction[1])) {
           const hash = (r + direction[0]) +"-"+ (c + direction[1]);
           rooms[r + direction[0]][c + direction[1]] = len + 1;
           visited.add(hash);
           q.addBack([r+direction[0], c+direction[1], len + 1]);
         }
       });
     }
   }
 
     return rooms;
  }
}