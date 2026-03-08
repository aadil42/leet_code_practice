var Trie = function() {
    this.children = new Map();
    this.endOfWord = false;
    this.ref = 0;
};

Trie.prototype.addWord = function(word) {

    let curr = this;
    curr.ref += 1;
    for(let i = 0; i < word.length; i++) {
        curr = curr.children;
        if(curr.get(word[i])) {
            curr = curr.get(word[i]);
            curr.ref += 1;
        } else {
            curr.set(word[i], new Trie());
            curr = curr.get(word[i]);
            curr.ref += 1;
        }
    }
    curr.endOfWord = true;
};

Trie.prototype.removeWord = function(word) {

    let curr = this;
    curr.ref -= 1;
    for(let i = 0; i < word.length;  i++)  {
        curr = curr.children;
        if(curr.get(word[i])) {
            curr = curr.get(word[i]);
            curr.ref -= 1;
        }
    }
}


function MakeString(r,c) {
    return r.toString() + c.toString();
}

var findWords = function(board, words) {

    const root = new Trie();
    for(let i = 0; i < words.length; i++) {
        root.addWord(words[i]);
    }

    const result = [];
    const visited = new Set();
    const ROW = board.length;
    const COLUMN = board[0].length;

    function dfs(r,c,node, word) {
        // if(r < 0 ||
        //    c < 0 ||
        //    r == ROW ||
        //    c == COLUMN ||
        //    visited.has(MakeString(r,c)) ||
        //    !node.children.has(board[r][c]) ||
        //    node.ref < 1
        // )  return;

        if(r < 0) return;
        if(c < 0) return;
        if(r >= ROW) return;
        if(c >= COLUMN) return;
        if(visited.has(MakeString(r,c))) return;
        if(!node.children.has(board[r][c])) return;
        if(node.ref < 1) return;

        visited.add(MakeString(r,c));
        node = node.children.get(board[r][c]);
        word += board[r][c];

        if(node.endOfWord) {
            node.endOfWord = false;
            root.removeWord(word);
            console.log(word);
            result.push(word);
            // return;
        }

        dfs(r+1, c, node, word);
        dfs(r-1, c, node, word);
        dfs(r, c+1, node, word);
        dfs(r, c-1, node, word);
        visited.delete(MakeString(r,c));
    }

    for(let i = 0; i < ROW; i++) {
        for(let j = 0; j < COLUMN; j++) {
            dfs(i,j,root, '');
        }
    }

    return result;
};

//////////////////////////////////////////

/**
 * brute force
 * DFS | Recursive search
 * https://leetcode.com/problems/word-search-ii/submissions/1940014132/
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
// helper function
const outOfBound = (r, c, row, col) => {

    if (r === row) return true;
    if (c === col) return true;
    if (r < 0) return true;
    if (c < 0) return true;
    return false;
}

// helper funciton
const findWord = (r, c, word, idx, board, ROW, COL, visited, directions) => {

    const hash = `${r}-${c}`;
    if (visited.has(hash)) return false;
    if (idx === word.length) return true;
    if (outOfBound(r,c,ROW,COL)) return false;
    if (board[r][c] !== word[idx]) return false;

    visited.add(hash);
    for (let i = 0; i < directions.length; i++) {
        const [rowStep, colStep] = directions[i];
        if (findWord(r+rowStep, c+colStep, word, idx+1, board, ROW, COL, visited, directions)) return true;
    }
    visited.delete(hash);
    return false;
}
// helper function
const search = (board, word) => {

    const ROW = board.length;
    const COL = board[0].length;
    const directions = [
        [1,0],
        [-1,0],
        [0,1],
        [0,-1]
    ];

    for (let r = 0; r < ROW; r++) {
        for (let c = 0; c < COL; c++) {
            if (findWord(r,c,word,0,board, ROW, COL, new Set(), directions)) return true;
        }
    }
}

var findWords2 = function(board, words) {

    return words.filter((word) => {
        if (search(board, word)) return true;
        return false;
    });
};


////////////////////////////////////////////////////////////////////////////////////////////////////////////////


class Trie1 {
    
    constructor () {

        this.root = {
            count: 0,
            endOfTheWord: false
        };
    }

    add (word) {
        let curr = this;
        for (let i = 0; i < word.length; i++) {
            const letter = word[i];
            if (curr[letter]) {
                curr[letter].count += 1;
                curr = curr[letter];
            } else {
                curr[letter] = {
                    count: 1,
                    endOfTheWord: false
                };
                curr = curr[letter];
            }
        }
        curr.endOfTheWord = true;
    }

    remove (word) {
        let curr = this;
        for (let i = 0; i < word.length; i++) {  
            const letter = word[i];
            curr[letter].count -= 1;
            curr = curr[letter];
        }

        curr.endOfTheWord = false;
    }
}

const outOfBound1 = (r, c, board) => {

    const ROW = board.length;
    const COL = board[0].length;

    if (r < 0) return true;
    if (c < 0) return true;
    if (r === ROW) return true;
    if (c === COL) return true;

    return false;
}

/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords3 = function(board, words) {
    
    const root = new Trie1();
    const result = [];

    words.forEach((word) => {
        root.add(word);
    });

    const dfs = (r, c, node, word, visited) => {


        if (outOfBound1(r, c, board)) return;
        if (node.count < 1) return;

        const hash = `${r}-${c}`;
        const letter = board[r][c];
        if (visited.has(hash)) return;
        if (!node[letter]) return;

        visited.add(hash);

        word += letter;

        if (node[letter].endOfTheWord) {
            console.log('haha', word)
            result.push(word);
            root.remove(word);
        }

        dfs(r+1, c, node[letter], word, visited);
        dfs(r-1, c, node[letter], word, visited);
        dfs(r, c+1, node[letter], word, visited);
        dfs(r, c-1, node[letter], word, visited);
        visited.delete(hash);
    }

    for (let r = 0; r < board.length; r++) {
        for (let c = 0; c < board[0].length; c++) {
            dfs(r,c,root,'',new Set());
        }
    }

    return result;
};