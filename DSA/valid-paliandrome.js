var isPalindrome = function(s) {
    
    s  = s.replace(/[^a-z0-9]/gi, '');
    s = s.toLowerCase();

    let front = 0;
    let back = s.length - 1;
    while(front < back) {
        // console.log(s[front], s[back]);
        if(s[front] !==  s[back]) return false;
        front++;
        back--;
    }

    return true;
};



const s = ' ';
console.log(isPalindrome(s));


// solved it second time
var isPalindromeR = function(s) {
    s  = s.replace(/[^a-z0-9]/gi, '');
    s = s.toLowerCase();

    let front = 0;
    let back = s.length - 1;

    while(front < back) {
        if(s[front] !== s[back]) return false;

        front++;
        back--;
    }

    return true;
};