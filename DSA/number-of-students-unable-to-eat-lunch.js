/**
 * Array
 * Time O(n^2) | Space O(n^2)
 * https://leetcode.com/problems/number-of-students-unable-to-eat-lunch
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function(students, sandwiches) {
    
    let added = 0;
    let studentIdx = 0;
    let sandwichesIdx = 0;
    let preSandwichesIdx = 0;
    let currLen = students.length;

    while(studentIdx < currLen) {

        // if sandwich matchs the preference
        if(students[studentIdx] === sandwiches[sandwichesIdx]) {
            studentIdx++;
            sandwichesIdx++;
        } else {
        // if sandwich doesn't matches the preference
            students.push(students[studentIdx]);
            added++;
            studentIdx++;
        }
        
        // check for cycle completion and update variables
        if(studentIdx === currLen && students.length > currLen) {
            if(preSandwichesIdx === sandwichesIdx) return sandwiches.length - sandwichesIdx;
            currLen += added;
            preSandwichesIdx = sandwichesIdx;
            added = 0;
        }
    }

    return 0;
};