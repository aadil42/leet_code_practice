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