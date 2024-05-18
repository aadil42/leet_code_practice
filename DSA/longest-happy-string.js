/**
 * PriorityQueue
 * Time O(n*log(n)) | Space O(n)
 * https://leetcode.com/problems/longest-happy-string/
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {string}
 */
var longestDiverseString = function(a, b, c) {
    
    const maxQ = new MaxPriorityQueue({
        compare: (a,b) => {
            return b[0]-a[0];
        }
    });

    a && maxQ.enqueue([a, "a"]);
    b && maxQ.enqueue([b, "b"]);
    c && maxQ.enqueue([c, "c"]);

    let happyStr = "";
    
    while(!maxQ.isEmpty()) {

        let [count, char] = maxQ.dequeue();   
        
        // you can consider this part as kind of a delimeter. 
        // use only one delimeter so you have more left to construct the further string.
        if(happyStr[happyStr.length - 1] === char &&
           happyStr[happyStr.length - 2] === char) {
            
            if(!maxQ.isEmpty()) {
                let [count1, char1] = maxQ.dequeue();

                happyStr += char1;
                count1--;

                count1 && maxQ.enqueue([count1, char1]);
                maxQ.enqueue([count, char]);
            }   
        } else {
            happyStr += char;
            count--;
            count && maxQ.enqueue([count, char]);

            // the below logic will also work in place of the above logic.
            // they both will achive the same thing because of the if check above it.
            // if(count >= 2) {
            //     happyStr += char.repeat(2);
            //     count -= 2;
            // } else {
            //     happyStr += char;
            //     count--;
            // }
        }
    }

    return happyStr;
};

/**
 * MaxHeap
 * 
 * Time O(n*log(n)) | Space O(n)
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {string}
 */
var longestDiverseString0 = function(a, b, c) {
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