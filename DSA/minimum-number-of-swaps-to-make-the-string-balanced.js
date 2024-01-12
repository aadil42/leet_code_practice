var minSwaps = function(s) {

    let extraClosing = 0;
    let maxClosing = 0;
    for(let i = 0; i < s.length; i++) {
        s[i] === ']' ? extraClosing++ : extraClosing--;
        maxClosing = Math.max(maxClosing, extraClosing);
    }

    return Math.ceil(maxClosing/2);
};