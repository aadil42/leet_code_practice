var findRepeatedDnaSequences = function(s) {

    const sequanceStack = new Set();
    let resultStack = new Set();
  
    for(let i = 0; i < s.length; i++) {
        const subSequance = getSubSequance(s,i,10); 
        if(sequanceStack.has(subSequance)) {
            resultStack.add(subSequance);
        } else {
            sequanceStack.add(subSequance);
        }
    }  
  
  
    resultStack = [...resultStack];
    return resultStack;
  };
  
  function getSubSequance(s,i,len) {
      return s.slice(i, i + len);
  }
  