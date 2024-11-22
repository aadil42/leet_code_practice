/**
 * HashSet | Logic (There's a trick to solve this)
 * Time O(n) | space  O(n)
 * https://leetcode.com/problems/flip-columns-for-maximum-number-of-equal-rows
 * @param {number[][]} matrix
 * @return {number}
 */
var maxEqualRowsAfterFlips = function(matrix) {
    
    // make everything 0 favoured.
    matrix = matrix.map((row) => {
        if(row[0] === 1) {
            return row.map((bit) => {
                if(bit === 1) return 0;
                return 1;
            });
        }
        return row;
    }).map((row) => row.join(""));

    const map = {};

    for(let i = 0; i < matrix.length; i++) {
        map[matrix[i]] = (map[matrix[i]] && map[matrix[i]] + 1) || 1;
    }

    let max = 0;
    for(const key in map) {
        max = Math.max(max, map[key]);
    }
    return max;
};