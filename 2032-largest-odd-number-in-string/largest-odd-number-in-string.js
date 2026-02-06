/**
 * @param {string} num
 * @return {string}
 */
var largestOddNumber = function(num) {
    // Start from end 
    for(let i=num.length-1;i>=0;i--){
        // Check if num is odd 
        if(Number(num[i]%2)!=0){
            //yes --> return everything before this
            return num.substring(0,i+1)
        }
    }
    return ''
};