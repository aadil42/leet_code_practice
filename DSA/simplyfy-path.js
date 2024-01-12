//  the conditions in this problems are such a bitch.

var simplifyPath = function(path) {
    let currunt = '';
    let myStack = [];
    path = '/' + path + '/';
    for(let i = 0; i < path.length; i++) {
        
        console.log(myStack);
        if(path[i] === '/') {
            if(currunt == '..') {
                if(myStack.length) {
                    myStack.pop();
                }
            } else if(currunt !== '' && currunt !== '.') {
                myStack.push(currunt);
            }
            currunt = '';
        } else {
            currunt += path[i];
        }
    }

    myStack = myStack.join('/');
    myStack = '/' + myStack;
    return myStack;
};

console.log(simplifyPath("//////////a//b////c/d//././/.."));