/**
 * MaxHeap
 * Time O(n*log(n)) | Space O(n)
 * @param {string} s
 * @return {string}
 */
var reorganizeString = function(s) {
    
    const charFrequency = new MaxPriorityQueue({
        compare: (e1, e2) => {
            // if(e1[0] === e2[0]) return e1[1] - e2[1];
            return e2[1] - e1[1];
        }
    });

    const charFrequencyHash = {};
    
    s.split('').forEach((c) => {
        if(charFrequencyHash[c]) {
            charFrequencyHash[c] += 1;
        } else {
            charFrequencyHash[c] = 1;
        }
    });

    for(const key in charFrequencyHash) {
        charFrequency.enqueue([key, charFrequencyHash[key]]);
    }

    let prev = -1;
    let result = '';
    let i = 0;
    while(charFrequency.size()) {

        // this is to take care if the string is impossible to obtain and avoid the infinite loop
        if(i === s.length) return '';
        const mostFrequent = charFrequency.dequeue();
        if(mostFrequent[0] === prev) {
            const secondMostFrequent =  charFrequency.dequeue();
            if(secondMostFrequent) {
                result += secondMostFrequent[0];
                prev = secondMostFrequent[0];
                secondMostFrequent[1] -= 1;
            if(secondMostFrequent[1] > 0) charFrequency.enqueue(secondMostFrequent);
            }
        } else {
            result += mostFrequent[0];
            prev = mostFrequent[0];
            mostFrequent[1] -= 1;
        }
        if(mostFrequent[1] > 0) charFrequency.enqueue(mostFrequent);
        i++;
    }

    return result;
};