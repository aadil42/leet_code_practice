/**
 * Array
 * Time O(n) |  Space O(1)
 * https://leetcode.com/problems/number-of-senior-citizens
 * @param {string[]} details
 * @return {number}
 */
var countSeniors = function(details) {
    return  details.filter((citizen) => +citizen.slice(11,13) > 60).length;
};