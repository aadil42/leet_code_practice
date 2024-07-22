/**
 * Sorting
 * Time O(n*log(n)) | Space O(n)
 * https://leetcode.com/problems/sort-the-people/
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function(names, heights) {
    return names.map((name, idx) => [heights[idx], name])
    .sort((a,b) => b[0]-a[0])
    .map((nameHeight) => nameHeight[1]);
};