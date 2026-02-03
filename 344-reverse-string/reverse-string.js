/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let ePointer = s.length-1;
    for(let sPointer=0;sPointer<Math.floor(s.length/2);sPointer++){
        let temp = s[sPointer];
        s[sPointer]= s[ePointer];
        s[ePointer]= temp;
        ePointer--;
    }
    return s
};