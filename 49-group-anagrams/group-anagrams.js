/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    // Create a map where key will be sorted word and values will be actual words

let map ={}

for(let i=0;i<strs.length;i++){
    let word = strs[i];
    let sortedWord = word.split('').sort().join('');
    if(map[sortedWord]) map[sortedWord].push(word);
    else map[sortedWord] = [word];
}
return Object.values(map)
};