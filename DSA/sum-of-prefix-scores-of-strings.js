/**
 * Trie | Recursion
 * Time O(n^2) | Space O(n^2) 
 * https://leetcode.com/problems/sum-of-prefix-scores-of-strings
 * @param {string[]} words
 * @return {number[]}
 */
var sumPrefixScores = function(words) {
    
    const tree = makeTree(words);
    return words.map((word) => getPrefixs(word, tree));
};

const getPrefixs = (word, tree) => {

    const dfs = (word, i, tree) => {
        if(i === word.length) return 0;
        return dfs(word, i+1, tree[word[i]]) + tree[word[i]].count;
    }

    return dfs(word, 0, tree);
}

const makeTree = (words) => {
    const tree = {};

    const addToTree = (idx, word, tree) => {
        if(idx === word.length) return;

        if(!tree[word[idx]]) {
            tree[word[idx]] = {
                count: 1
            };
        } else {
            tree[word[idx]].count += 1;
        }

        addToTree(idx+1, word, tree[word[idx]]);
    }

    for(let i = 0; i < words.length; i++) {
        addToTree(0, words[i], tree);
    }

    return tree;
}