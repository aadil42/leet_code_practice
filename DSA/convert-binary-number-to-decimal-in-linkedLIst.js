// REMEMBER 
// you need legit linked list for input to test this solution, which you don't have but you have checked it on leet code
// it's workin fine. just push it on github as it is. it's legit solution and it's working.


var getDecimalValue = function(head) {
    
    let reverseHead = reverseList(head);
    
    let power = 0;
    let total = 0;
    while(reverseHead) {
        if(reverseHead.val == 1) {
            total += Math.pow(2, power);
        }
        power++;
        reverseHead = reverseHead.next;
    }
    return total;
};

function reverseList(node) {
    
    let pre = null;
    while(node) {
        const temp = node.next;
        node.next =  pre;
        pre = node;
        node = temp;
    }
    
    return pre;
}