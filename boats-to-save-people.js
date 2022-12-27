/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
 var numRescueBoats = function(people, limit) {
    people.sort((a,b) => a-b);

    let left = 0;
    let right = people.length - 1;
    let boat = 0;
    
    while(left<=right) {
        if(people[left] + people[right] <= limit) {
            left++;
            right--;
            boat++;
            // boat = boat + 1;
        } else {
            right--;
            boat++;
            // boat = boat + 1;
        }
    }
    
    return boat;
};