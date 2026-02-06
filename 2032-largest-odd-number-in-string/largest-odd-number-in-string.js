/**
 * @param {string} num
 * @return {string}
 */
var largestOddNumber = function(num) {
    // Start from end 
    // Check if num is odd 
    //yes --> return everything before this
    // no --> keep moving 

    for(let i=num.length-1;i>=0;i--){
        if(Number(num[i]%2)===0){
            continue;
        }else{
            return num.substring(0,i+1)
        }
    }
    return ''
};