/**
 * Greedy
 * O(n*log(n)) | space O(n)
 * @param {number[]} hand
 * @param {number} groupSize
 * @return {boolean}
 */
var isNStraightHand = function(hand, groupSize) {
    
    if(hand.length % groupSize) {
        return false;
    } 

    const hash = new Map();
    for(let i = 0; i < hand.length; i++) {
        if(hash.has(hand[i])) {
            const currentVal = hash.get(hand[i]);
            hash.set(hand[i], currentVal + 1);
        } else {
            hash.set(hand[i], 1);
        }
    }

    hand.sort((a,b) => b-a);

    const unique = new Set();
    hand.forEach((h) => {
        unique.add(h);
    });

    hand = [...unique];
    console.log(hand);
    while(hand.length > 0) {
        const start = hand[hand.length - 1];
        let i = start;
        while(i < start + groupSize) {
            if(!hash.has(i))  {
                return false;
            }
            hash.set(i, hash.get(i) - 1);
            if(hash.get(i) === 0) {
                if(i !== hand[hand.length - 1]) return false;
                hand.pop();
            }
            i++;
        }
    }

    return true;
};