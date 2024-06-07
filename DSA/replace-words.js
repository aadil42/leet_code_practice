/**
 * Trie
 * Time O(n*k) | O(n*k)
 * https://leetcode.com/problems/replace-words
 * 
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {string}
 */

var replaceWords = function(dictionary, sentence) {

    const root = {
        isEnd: false
    };

    const dfs = (root, word, i) => {
        if(i === word.length) {
            root.isEnd = true;
            return;
        }
        if(!root[word[i]]) {
            root[word[i]] = {};
        }

        dfs(root[word[i]], word, i+1);
    }

    const search = (root, word, i) => {

        if(root.isEnd) return i;
        if(i === word.length) return false;
        if(!root[word[i]]) return false;

        return search(root[word[i]], word, i+1);
    }
    

    for(let i = 0; i < dictionary.length; i++) {
        const word = dictionary[i];
        dfs(root, word, 0);
    }


    sentence = sentence.split(" ");

    for(let i = 0; i < sentence.length; i++) {
        word = sentence[i];
        const idx = search(root, word, 0);
        if(idx) {
            sentence[i] = word.slice(0, idx);
        }
    }

    return sentence.join(" ");

};