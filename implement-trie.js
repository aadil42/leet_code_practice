var Trie = function() {
    this.children = new Map();
    this.endOfWord = false;
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {

    let curr = this;
    for(let i = 0; i < word.length; i++) {
        curr = curr.children;
        if(curr.get(word[i])) {
            curr = curr.get(word[i]);
        } else {
            curr.set(word[i], new Trie());
            curr = curr.get(word[i]);
        }
        
    }
    curr.endOfWord = true;
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {


    let curr = this;
    for(let i = 0; i < word.length; i++) {
        curr = curr.children;
        if(!curr.get(word[i])) {
            return false;
        } else {
            curr = curr.get(word[i]);
        }
    }
    
    return curr.endOfWord;
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
  
    let curr = this;
    for(let i = 0; i < prefix.length; i++) {
        curr = curr.children;
        if(!curr.get(prefix[i])) {
            return false;
        } else {
            curr = curr.get(prefix[i]);
        }
    }
    
    return true;
};
