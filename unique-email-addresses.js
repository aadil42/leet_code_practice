var numUniqueEmails = function(emails) {
    
    const uniqueEmails = new Set();

    for(let i = 0; i < emails.length; i++) {
     
        uniqueEmails.add(decodeEmails(emails[i]));
    }

    return uniqueEmails.size;
};

function decodeEmails(email) {

// 1. seprate by @
email = email.split('@');
let localpart = email[0];
email = email[1];

//2. find first + and removing everything after it including that +;
for(let i = 0; i < localpart.length; i++) {
    if(localpart[i] === "+") {
        localpart = localpart.slice(0, i);
    }
}

//3. remove all the "."
localpart = localpart.split('.').join('');

// 4. concatinate localpart and domain and return
return localpart + "@" + email;
}