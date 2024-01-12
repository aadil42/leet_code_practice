var licenseKeyFormatting = function(s, k) {
    
    let upperCaseStringWithoutDash = s.replace(/\-/g, '');
    upperCaseStringWithoutDash = upperCaseStringWithoutDash.toUpperCase();
    const prefixLen = upperCaseStringWithoutDash.length % k;
    let prefix = upperCaseStringWithoutDash.substring(0, prefixLen);
    let suffix = upperCaseStringWithoutDash.substring(prefixLen);

    let formatingArr = [];
    if(prefix) {
        formatingArr.push(`${prefix}`);
    }
    for(let i = 0; i < suffix.length; i += k) {
        formatingArr.push(suffix.substring(i, i+k));
    }

    return formatingArr.join('-');
};

const license = "5F3Z-2e-9-w";
const k = 4;
console.log(licenseKeyFormatting(license, k));