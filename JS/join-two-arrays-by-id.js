/**
 * Hashing
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function(arr1, arr2) {
    
    const merge = (obj1, obj2) => {
        
        for(const key in obj1) {
            if(obj2[key] === undefined) {
                obj2[key] = obj1[key];
            }
        }

        return obj2;
    }


    const arr1Obj = {};
    const arr2Obj = {};

    for(let i = 0; i < arr1.length; i++) {
        const {id} = arr1[i];
        arr1Obj[id] = arr1[i];
    }

    for(let i = 0; i < arr2.length; i++) {
        const {id} = arr2[i];
        arr2Obj[id] = arr2[i];
    }

    // iterete over objs
    const mergedArr = [];
    for(const key in arr1Obj) {
        if(arr2Obj[key] !== undefined) {
            mergedArr.push(merge(arr1Obj[key], arr2Obj[key]));
            continue;
        }
        mergedArr.push(arr1Obj[key]);
    }

    for(const key in arr2Obj) {
        if(arr1Obj[key] === undefined) {
            mergedArr.push(arr2Obj[key]);
        }
    }

    return mergedArr.sort((a,b) => a.id-b.id);
};