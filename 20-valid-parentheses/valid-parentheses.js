/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let map={
        ')':'(',
        '}':'{',
        ']':'['
    }
    let stack=[]
    let openingBrackets=['{','(','[']
    for(let i=0;i<s.length;i++){
        if(openingBrackets.includes(s[i])){
            stack.push(s[i]);
        }else{
            //Closing bracket 
            if(stack.pop()!=map[s[i]]) return false;
        }
    }
    return stack.length===0
};