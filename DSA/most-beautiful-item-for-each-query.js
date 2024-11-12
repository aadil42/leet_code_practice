/**
 * Binary Search | Hash Map | Sorting
 * Time O(n*log(n)) | Space O(n)
 * https://leetcode.com/problems/most-beautiful-item-for-each-query
 * @param {number[][]} items
 * @param {number[]} queries
 * @return {number[]}
 */
var maximumBeauty = function(items, queries) {

    let prices = items.map((el) => el[0]);
    prices = new Set(prices);
    prices = [...prices].sort((a,b) => a-b);

    const bs = (target) =>  {
        let left = 0;
        let right = prices.length - 1;
        let ans = 0;

        while(left <= right) {
            const mid = left + Math.floor((right-left)/2);
            if(prices[mid] <= target) {
                left = mid + 1;
                ans = prices[mid];
            } else {
                right = mid - 1;
            }
        }

        return ans;
    }   

    const maxBeautyOfPrice = {};
    for(let i = 0; i < items.length; i++) {
        const [price, beauty] = items[i];
        maxBeautyOfPrice[price] = 0;
    }

    for(let i = 0; i < items.length; i++) {
        const [price, beauty] = items[i];
        maxBeautyOfPrice[price] = Math.max(maxBeautyOfPrice[price], beauty);
    }

    const maxBeautyOfPriceArr = Object.entries(maxBeautyOfPrice);
    for(let i = 1; i < maxBeautyOfPriceArr.length; i++) {
        const preBeauty = maxBeautyOfPriceArr[i-1][1];
        const currBeauty = maxBeautyOfPriceArr[i][1];
        maxBeautyOfPriceArr[i][1] = Math.max(preBeauty, currBeauty);
    }

    const finalObj = {};
    for(let i = 0; i < maxBeautyOfPriceArr.length; i++) {
        const [key, value] = maxBeautyOfPriceArr[i];
        finalObj[key] = value;
    }

    console.log(finalObj);

    const ans = [];

    for(let i = 0; i < queries.length; i++) {
        const query = queries[i];
        if(finalObj[query]) {
            ans.push(finalObj[query]);
            continue;
        } 
        const beautyOfCheapPrice = bs(query);
        if(!beautyOfCheapPrice)  {
            ans.push(0);
            continue;
        }
        ans.push(finalObj[beautyOfCheapPrice]);
    }

    // console.log(ans);
    return ans;
};