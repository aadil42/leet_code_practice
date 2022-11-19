var longestCommonPrefix = function(strs) {
    
    let finalPre = strs[0];
    let currentPre = finalPre;


    for(let i = 0; i < strs.length; i++) {
        finalPre = findPrefix(strs[i], currentPre);
        currentPre = finalPre;
    }

    return finalPre;
};

function findPrefix(currentPre, currentlyfinal) {

    let matchedPre = '';
    const len = Math.min(currentPre.length, currentlyfinal.length);

    for(let i = 0; i < len; i++) {
        if(currentPre[i] === currentlyfinal[i]) {
            matchedPre += currentPre[i];
        } else {
            break;
        }
    }

    return matchedPre;
}