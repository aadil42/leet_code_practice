/**
 * Brute Force
 * Time O(n*n) | Space O(n)
 * @param {number[][]} flowers
 * @param {number[]} people
 * @return {number[]}
 */
var fullBloomFlowers = function(flowers, people) {
    const hash = {};
    for(let i = 0; i < flowers.length; i++) {
        const interval = flowers[i];
        for(let i = interval[0]; i < interval[1] + 1; i++) {
            const count = hash[i] || 0;
            hash[i] = count+1;
        }
    }

    const answer = [];
    for(let i = 0; i < people.length;  i++) {
        const time = people[i];

        answer.push(hash[time] || 0);
    }
    return answer;
};