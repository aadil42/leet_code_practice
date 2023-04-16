/**
 * MaxHeap
 * 
 * Time O(n*log(n)) | Space O(n)
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {string}
 */
var longestDiverseString = function(a, b, c) {
    const charFrequency = new MaxPriorityQueue({
        compare: (e1, e2) => {
            // if(e1[0] === e2[0]) return e1[1] - e2[1];
            return e2[1] - e1[1];
        }
    });

    if(a > 0)  charFrequency.enqueue(['a', a]);
    if(b > 0)  charFrequency.enqueue(['b', b]);
    if(c > 0)  charFrequency.enqueue(['c', c]);

    let result = '';
    while(charFrequency.size()) {
        const lastIndex = result.length;
        const mostFrequent = charFrequency.dequeue();

        if(result.length > 1 && result[lastIndex - 1] === result[lastIndex - 2] && result[lastIndex - 1] === mostFrequent[0]) {
            const secondMostFrequent = charFrequency.dequeue();

            if(secondMostFrequent) {
                result += secondMostFrequent[0];
                secondMostFrequent[1] -= 1;
            } else {
                return result;
            }
            if(secondMostFrequent[1] > 0) charFrequency.enqueue(secondMostFrequent);
        } else {
            result += mostFrequent[0];
            mostFrequent[1] -= 1;
        }

         if(mostFrequent[1] > 0) charFrequency.enqueue(mostFrequent);
    }

    return result;
};  