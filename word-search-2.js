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