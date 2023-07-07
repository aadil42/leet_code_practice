/**
 * Sliding Window
 * 
 * Time O(n) | Space O(n) // we can do it with Space of O(1) also you just need to do it without creating and array on line 41
 * @param {string} answerKey
 * @param {number} k
 * @return {number}
 */
const countTF = (answerKey, counfusingAns, remain) => {
    let right = 0;
    let left = 0;
  
    let max = 0;
    while(right < answerKey.length) {
        if(answerKey[right] === counfusingAns) {
          //   trueCount+= 1;
            max = Math.max(max, right - left + 1);
            right++;
            continue;
        }
        if(remain > 0) {
            remain-=1;
            max = Math.max(max, right - left + 1);
            right++;
            continue;
        }
  
        while(left < right && remain <= 0) {
            if(answerKey[left] === !counfusingAns) {
                remain += 1;
            }
            left++;
        }
    }
  
    return max;
  } 
  const maxConsecutiveAnswers = function(answerKey, k) {
  
      // making the array and switching to true/false instead of T/F
      answerKey = answerKey.split('').map((ans) => {
          if(ans === 'T') return true;
          else return false;
      });
      const trueCount = countTF(answerKey, true, k);
      const falseCount = countTF(answerKey, false, k);
      return Math.max(trueCount, falseCount);
  
  };
  
  