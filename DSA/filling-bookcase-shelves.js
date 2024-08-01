/**
 * DP | DFS | Caching
 * Time O(n) | Space O(n)
 * https://leetcode.com/problems/filling-bookcase-shelves
 * @param {number[][]} books
 * @param {number} shelfWidth
 * @return {number}
 */
var minHeightShelves = function(books, shelfWidth) {

    const cache = new Map();

    const dfs = (idx) => {

        if(cache.has(idx)) return cache.get(idx);
        if(idx === books.length) return 0;

        let widthLeft = shelfWidth;
        let res = Infinity;
        let maxHeight = 0;

        for(let i = idx; i < books.length; i++) {
            const [width, height] = books[i];
            widthLeft -= width;
            if(widthLeft < 0) break;
            maxHeight = Math.max(maxHeight, height);
            res = Math.min(res, dfs(i+1) + maxHeight);
        }
        
        cache.set(idx, res);
        return res;
    }

    return dfs(0);
};