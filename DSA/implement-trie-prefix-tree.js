
var Trie = function() {
    this.root = {
        isEnd: false
    }
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    
    let node = this;
    for (let i = 0; i < word.length; i++) {
        const letter = word[i];
        
        if (node[letter]) {
            node = node[letter];
        } else {
            node[letter] = {
                isEnd: false
            }
            node = node[letter];
        }
    }

    node.isEnd = true;
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {

  let node = this;
  for (let i = 0; i < word.length; i++) {
    
    const letter = word[i];
    if (!node[letter]) return false;
    node = node[letter];
  }  

  return node.isEnd;
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {

    let node = this;
    for (let i = 0; i < prefix.length; i++) {
        
        const letter = prefix[i];
        if (!node[letter]) return false;
        node = node[letter];
    }  

    return true;
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */