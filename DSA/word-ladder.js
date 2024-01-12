/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
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
var ladderLength = function(beginWord, endWord, wordList) {
    
    wordList.unshift(beginWord);
    const graph = {};
    const visited = new Set();
    // make graph
    // console.log(wordList);
    for(let i = 0; i < wordList.length; i++) {
        for(let j = i+1; j < wordList.length; j++) {
             if(DoesOneCharMatch(wordList[i], wordList[j])) {
                if(graph[wordList[i]]) {
                    graph[wordList[i]] = [...graph[wordList[i]], wordList[j]];              
                } else {
                    graph[wordList[i]] = [wordList[j]];              
                }
                // this is because graph is bidirectional.
                if(graph[wordList[j]]) {
                    graph[wordList[j]] = [...graph[wordList[j]], wordList[i]];              
                } else {
                    graph[wordList[j]] = [wordList[i]];              
                }
            }
        }
    }

    const q = new Dequeue();
    q.addBack([beginWord, 1]);
    visited.add(beginWord);
    while(!q.isEmpty()) {
        const node = q.removeFront();
        range = graph[node[0]];
        for(let i = 0; i < range.length; i++) {
            if(range[i] === endWord) return node[1] + 1;
            if(visited.has(range[i])) continue;
            visited.add(range[i]);
            q.addBack([range[i], node[1] + 1]);
        } 
    }

    function DoesOneCharMatch(str, str2) {
        let unMatch = 0;
        for(let i = 0; i < str.length; i++) {
            if(str[i] !== str2[i] && unMatch === 1) return false;
            if(str[i] !== str2[i]) unMatch++;
        }
        return true;
    }

    return 0;
};
