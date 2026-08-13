/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s = s.toLowerCase();
    let filterString = "";

    for(let i=0; i<s.length; i++){
        if(s[i].match(/[a-z0-9]/i)){
            filterString += s[i];
        }
    }
    let rev = filterString.split("").reverse().join("");
    return filterString === rev;
};