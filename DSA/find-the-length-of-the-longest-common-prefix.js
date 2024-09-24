/**
 * Trie | DFS
 * Time O(1) | Space O(n) | Time won't go beyond 9*8 Space is also O(n) because 
 * we will store all nums which is n
 * https://leetcode.com/problems/find-the-length-of-the-longest-common-prefix
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number}
 */
var longestCommonPrefix = function(arr1, arr2) {
    
    const arr1Str = arr1.map((num) => num.toString());
    const arr2Str = arr2.map((num) => num.toString());

    const arr1Tree = makeTree(arr1Str);
    const arr2Tree = makeTree(arr2Str);
    
    let max = 0;
    for(let i = 1;  i < 10;  i++) {
        max = Math.max(max, getMaxPrefix(i.toString(), arr1Tree, arr2Tree));
    }
    
    return max;
};

const getMaxPrefix = (start, tree1, tree2) => {
    let max = 0;

    const dfs = (t1, t2, i) => {
        if(!t1) return;
        if(!t2) return;

        max = Math.max(max, i+1);

        for(let idx = 0; idx < 10; idx++) {
            dfs(t1[idx], t2[idx], i+1);
        }
    }

    dfs(tree1[start], tree2[start], 0);
    return max;
}

const makeTree = (arr) => {
    const tree = {};
    for(let i = 0; i < arr.length; i++) {
        addToTree(arr[i], 0, tree);
    }

    return tree;
}

const addToTree = (num, idx,  tree) => {
    if(idx === num.length) return;
    if(!tree[num[idx]]) {
        tree[num[idx]] = {};
    }
    addToTree(num, idx+1, tree[num[idx]]);
}


