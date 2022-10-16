
var WordDictionary = function() {
    this.children = new Map();
    this.endOfWord = false;
};

WordDictionary.prototype.addWord = function(word) {
    let curr = this;
    let temp;

    for(let i = 0; i < word.length; i++) {
        curr = curr.children;
        temp = i;
        if(curr.get(word[i])) {
            curr = curr.get(word[i]);
        } else {
            curr.set(word[i], new WordDictionary());
            curr = curr.get(word[i]);
        }
    }
    
    curr.endOfWord = true;
};




/** 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function(word) {

    function dfs(j, root) {
        
        
        let curr = root;
       
        for(let i = j; i < word.length; i++) {
           
            const char = word[i];
            if(char == '.') {
                for(childe of curr.children.values()) {
                    if(dfs(i+1, childe)) return true;
                }
                return false;
            } else {    
                
                if(!curr.children.has(word[i])) return false;
                curr = curr.children.get(word[i]);
            }
        }
        return curr.endOfWord;
    }
    
    return dfs(0, this);
};

const  myDict = new WordDictionary();
myDict.addWord("bad");
myDict.addWord("dad");
myDict.addWord("mad");
console.log(myDict.search("pad")); // return False
console.log(myDict.search("bad")); // return True
console.log(myDict.search(".ad")); // return True
console.log(myDict.search("b.."));  // true
