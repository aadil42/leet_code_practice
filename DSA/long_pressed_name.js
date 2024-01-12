var isLongPressedName = function(name, typed) {
    
    let i = 0;
    let j = 0;
    while ( i < name.length || j < typed.length) {
        if(name[i] === typed[j]) {
            i++;
            j++;
        } else if(typed[j] === typed[j - 1]) {
            j++;
        } else {
            return false;
        }
    }

    return true;
};


const myName = 'aadil';
const typed = 'aaaaadddillll';
console.log(isLongPressedName(myName, typed));