/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    let balancedStringCount=0;
    let count =0;

    //Iterate over the string 
    for(let i=0;i<s.length;i++){
        // Count ++ if `R`
        if(s[i]==='R') count++;
         //Count -- if `L`
        else count--;
        // If count == 0 then it means it is balanced, balancedStringCount++
        if(count===0) balancedStringCount++;
    }

    return balancedStringCount

};