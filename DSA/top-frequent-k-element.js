var topKFrequent = function(nums, k) {
    const myMap = new Map();
    nums.forEach((num) => {
        if(!myMap.has(num)) {
            myMap.set(num, 1);
        } else {
            myMap.set(num,myMap.get(num) + 1);
        }
    });
    const result = [];

    for(let [key, value] of myMap) {
        if(result[value] !== undefined) {
            if(Array.isArray(result[value])) {
                result[value] = [...result[value], key];
            } else {
                // console.log(result[value], 'fjf');
                result[value] = [result[value], key];
            }
        } else {
            result[value] = key;
        }
    }
    // console.log(result);
    // console.log(myMap);
    const myResult = [];
    for(let i = result.length - 1; i > 0; i--) {

        if(myResult.length == k) return myResult;

        if(Array.isArray(result[i])) {
           result[i].forEach((j) => {
               if(myResult.length == k) return myResult;
               myResult.push(j);
           });
        } else if(result[i] !== undefined) {
            myResult.push(result[i]);
        }
    }

    return myResult;
};



const nums = [1];
// const nums = [0,0,0,0,0,1,1,1,1,1];
const k = 1;
// console.log(topKFrequent(nums, k));

// solved second time for revision purpose.
var topKFrequentR = function(nums, k) {
    const numberFrequency = new Map();
     
     for(let i = 0; i < nums.length; i++) {
         if(numberFrequency.has(nums[i])) {
             numberFrequency.set(nums[i], numberFrequency.get(nums[i]) + 1);
         } else {
             numberFrequency.set(nums[i], 1);
         }
     }
     
     const frequencyArr = [];
     
     // O(n)
     for(let [key,value] of numberFrequency) {
         frequencyArr.push([key,value]);
     }
     
     // O(n)
     // clearing numberFrequency map
     numberFrequency.clear();
     
    
     // n*log(n)
     frequencyArr.sort((pre,next) => {   
         return next[1] - pre[1];
     });
     
     const result = [];
     
     // O(n)
     for(let i = 0; i < k; i++) {
         result.push(frequencyArr[i][0]);
     }
     
     return result;
 };

//  third attempt. // it is better than n*log(n) it's log(n)
var topKFrequentRR = function(nums, k) {
    const numberFrequency = new Map();
     
     for(let i = 0; i < nums.length; i++) {
         if(numberFrequency.has(nums[i])) {
             numberFrequency.set(nums[i], numberFrequency.get(nums[i]) + 1);
         } else {
             numberFrequency.set(nums[i], 1);
         }
     }
     
     const result = [];
     for(let [key, value] of numberFrequency) {
        if(result[value]) {
            result[value] =  [...result[value], key];
        } else {
            result[value] = [key];
        }
     }
     const result1 = [];

     for(let i = result.length - 1; i > 0; i--) {
        if(result1.length === k) return result1;

        result[i] && result[i].forEach((number) => {
            if(result1.length === k) return result1;
            result1.push(number);
        });
     }

     return result1;
};

 const nums1 = [1,1,1,2,2,2,3];
 const k1 = 2;
 console.log(topKFrequentRR(nums1, k1));



