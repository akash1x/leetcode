/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
   
   let lastWordLength=0;

   // Start from last and find the first non empty character 
   for(let i=s.length-1;i>=0;i--){
    if(s[i]==' '){
        if(lastWordLength) break; // If some length is found it is last word length and now it has found space again so break and return 
        continue;
    }else{
        lastWordLength++;
    }
   } 

   return lastWordLength
};