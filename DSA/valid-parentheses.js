var isValid = function(s) {
    
    paranthesesMap = new Map();
    paranthesesMap.set(')', '(');
    paranthesesMap.set('}', '{');
    paranthesesMap.set(']', '[');

    validationStack = [];
    validationStack[0] = s[0];
    
    for(let i = 1; i < s.length; i++) {
        if(validationStack[validationStack.length - 1] && validationStack[validationStack.length - 1] === paranthesesMap.get(s[i])) {
            validationStack.pop();
        } else {
            validationStack.push(s[i]);
        }
    }
    return validationStack.length > 0 ?  false: true;
};
// {
console.log(isValid("((())){[]}[()](())([])({}){()}"));

// solved it second time
var isValidR = function(s) {
    const paranthesisPair = {
        ")": "(",
        "}": "{",
        "]": "["
    }
    
    
    const validationStack = [];
    validationStack.push(s[0]);
    
    for(let i = 1; i < s.length; i++) {
        if(validationStack[validationStack.length - 1] && validationStack[validationStack.length - 1] === paranthesisPair[s[i]]) {
            validationStack.pop();
        }    else {
            validationStack.push(s[i]);
        }
    }
    
    if(validationStack.length) return false;
    return true;
};