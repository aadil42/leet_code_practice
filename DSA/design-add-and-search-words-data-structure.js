var WordDictionary = function() {
    this.root = {};
    this.root['isEnd'] = false;

};

/** 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
    
    let current = this.root;
    for(let i = 0; i < word.length; i++) {
        if(current[word[i]]) {
            current = current[word[i]];
        } else {
            const charNode = {};
            charNode['isEnd'] = false;
            current[word[i]] = charNode;
            current = current[word[i]];
        }
    }
    current['isEnd'] = true;
};

/** 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function(word) {

     let current = this.root;
    
    const dfs = (cr, w) =>  {
        for(let i = 0; i < w.length; i++) {
            if(!cr[w[i]] && w[i] !== '.') return false;
            if(w[i] === '.') {
                for(const key in cr) {
                    if(dfs(cr[key],w.substring(i+1))) return true;
                }
                return false;
            }
            cr = cr[w[i]];
        }
        return cr['isEnd'];
    }

    return  dfs(current,word);
};

/** 
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */

////////////////////////////////////////////////////////////////////////////////


var WordDictionary0 = function() {
    this.root = {
        isEnd: false
    };
};

/** 
 * @param {string} word
 * @return {void}
 */
WordDictionary0.prototype.addWord = function(word) {

    let curr = this;
    for (let i = 0; i < word.length; i++) {

        const letter = word[i];
        if (curr[letter]) {
            curr = curr[letter];
        } else {
            curr[letter] = {
                isEnd: false
            };
            curr = curr[letter];
        }
    }

    curr.isEnd = true;
};

/** 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary0.prototype.search = function(word) {
    
    const dfs = (node, idx) => {
        
        
        for (let i= idx; i < word.length; i++) {
            const letter = word[i];

    
            if (!node[letter] && letter !== ".") return false;

            if (letter === ".") {

                for (const key in node) {
                    if (dfs(node[key], i+1)) return true;
                }

                return false;
            }

            node = node[letter];
        }

        return node.isEnd;
    }

    return dfs(this, 0);
};

/** 
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */