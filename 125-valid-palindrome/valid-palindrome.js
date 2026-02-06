/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s= s.toLowerCase()
    s=s.split('');

    let filteredString =''
    //Filter the string 
    for(let i=0;i<s.length;i++){
        if((s[i].charCodeAt()>='a'.charCodeAt() && s[i].charCodeAt()<='z'.charCodeAt()) || 
        (s[i].charCodeAt()>='0'.charCodeAt() && s[i].charCodeAt()<='9'.charCodeAt()))
        filteredString+=s[i]
    }
    
    //Perform palindrome check on filteredString
    const len = filteredString.length
    for(let i=0;i<Math.floor(len/2);i++){
        if(filteredString[i]!=filteredString[len-1-i]) return false;
    }
    return true;

};