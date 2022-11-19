var isIsomorphic = function(s, t) {
    
    return getCode(s) === getCode(t);
};

function getCode(string) {

    const strHash = new Map();
    let code = '';
    let id = 0;

    for(let i = 0; i < string.length; i++) {
        if(!strHash.has(string[i])) {
            code += code + id + '.';
            strHash.set(string[i], id);
            id++;
        } else {
            code += strHash.get(string[i]);
        }
    }
    return code;
}