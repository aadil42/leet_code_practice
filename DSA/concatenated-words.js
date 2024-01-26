/**
 * 
 * DFS | Recursion | DP | Caching
 * Time O(n * l^3) | Space O(n)
 * https://leetcode.com/problems/concatenated-words/
 * 
 * @param {string[]} words
 * @return {string[]}
 */
var findAllConcatenatedWordsInADict = function(words) {
    
    const wordSet = new Set(words);
    const cache = new Map();

    const dfs = (word) => {
        if(cache.has(word)) return cache.get(word);

        for(let i = 1; i < word.length + 1; i++) {
            const prefix = word.slice(0,i);
            const suffix = word.slice(i);

            if( (wordSet.has(prefix) && wordSet.has(suffix)) || 
                (wordSet.has(prefix) && dfs(suffix)) ) {
                    cache.set(word, true);
                    return true;
                }
        }

        cache.set(word, false);
        return false;
    }

    const result = [];

    for(let i = 0; i < words.length; i++) {
        if(dfs(words[i])) result.push(words[i]);
    }

    return result;
};

/**
 * DFS | Recursion
 * Time O(n*n[i]^2) | Space O(n)
 * https://leetcode.com/problems/concatenated-words/
 * 
 * @param {string[]} words
 * @return {string[]}
 */

// Good solution but TLE is happning. Same code as above but without caching.
var findAllConcatenatedWordsInADict1 = function(words) {
    
    const wordSet = new Set(words);

    const dfs = (word, wc) => {
        if(wordSet.has(word) && wc > 0) return true;
        if(!word) return false;

        for(let i = 1; i < word.length + 1; i++) {
            if(wordSet.has(word.slice(0,i)) && dfs(word.slice(i), wc+1)) return true;
        }
        return false;
    }

    const result = [];

    for(let i = 0; i < words.length; i++) {
        if(dfs(words[i],0)) result.push(words[i]);
    }

    return result;
};


/** Trying to solve using Trie
 * @param {string[]} words
 * @return {string[]}
 */
var findAllConcatenatedWordsInADict2 = function(words) {
    
    function Trie() {
        this.trie = {
            end: false
        }
    }

    Trie.prototype.add = function (word) {

        let pointer = this.trie;
        
        let i = 0;
        while(i < word.length) {
            if(pointer[word[i]]) {
                pointer = pointer[word[i]];
                i++;
                continue;
            }

            pointer[word[i]] = {};

            pointer = pointer[word[i]];
            i++;
        }
        
        // it works. But, I don't understand this.
        pointer.end = true;
    }

    Trie.prototype.has = function(word) {

        let pointer = this.trie;
        
        let i = 0;

        while(pointer && i < word.length) {
            pointer = pointer[word[i]];
            i++;
        }

        return pointer && pointer.end;
    }


    const myTrie = new Trie();

    for(let i = 0; i < words.length; i++) {
        myTrie.add(words[i]);
    }

    const result = [];

    const dfs = (i, word) => {
        
    }

    for(let i = 0; i < words.length; i++) {
        let left = 0;
        let right = 1;
        let match = 0;

        while(right < words[i].length + 1) {
            const currentWord = words[i].slice(left, right);
            if(i === 0) {
                console.log(currentWord);
            }
            if(myTrie.has(currentWord)) {
                match++;
                left = right;
            }
            right++;
        }

        (match > 1) && result.push(words[i]); 
    }
    return result;
};