/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    // Since prefix should be available in all strings then it doe not matter start with any element;
    let len = strs[0].length;
    let currElement=0;
    let prefix=''
    while(len--){
        //check in string the current element is present or not
        for(let i=1;i<strs.length;i++){
            const str = strs[i]
            // If any str does not have the currElement then return the prefix so far
            if(strs[0][currElement] != str[currElement]){
                return prefix;
            }
        }
        // If all strs have the currElement then add it to prefix
        prefix+=strs[0][currElement]
        // Update the currElement 
        currElement++;
    }
    return prefix;
};