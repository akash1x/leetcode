/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
//     // Create a map where key will be sorted word and values will be actual words

// let map ={}

// for(let i=0;i<strs.length;i++){
//     let word = strs[i];
//     let sortedWord = word.split('').sort().join('');
//     if(map[sortedWord]) map[sortedWord].push(word);
//     else map[sortedWord] = [word];
// }
// return Object.values(map)


// Instead of sorted we can generate a unique key by counting char of word
// eg: #1#4#1..

    let map={}
    //Iterate strs
    for(let i=0;i<strs.length;i++){
        // Create a freq array for characters 
        let freqArr = Array(26).fill(0);

        let word = strs[i];

        //Update count of char in freqArr
        for(let j=0;j<word.length;j++){
            let charIndex= word[j].charCodeAt()-'a'.charCodeAt();
            freqArr[charIndex]++;
        }

        //Key Generation 
        // format : #1#4#1..
        let key =''
        for(let k=0;k<freqArr.length;k++){
            
            key+='#'+freqArr[k];
        }

        if(map[key]) map[key].push(word);
        else map[key]=[word];

    }

    return Object.values(map)
};