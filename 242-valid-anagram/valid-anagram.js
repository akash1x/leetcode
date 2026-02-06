/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    //Approach 1 : Sort and match O(nlogn)
    //Approach 2: Hashmap constant space of 26 letters O(1)
    if(s.length!=t.length) return false;
    let map={}

    for(let i=0;i<s.length;i++){
        if(map[s[i]]) map[s[i]]++;
        else map[s[i]]=1;
    }

    for(let i=0;i<t.length;i++){
        // If anagram it should have entry in map
        if(map[t[i]]) map[t[i]]--;
        // It is a new char which means it is not present in s therefore false
        else return false;
    }

    // In map if anagram all values should be zero
    Object.entries(map).forEach(([key,val])=>{
        if(val!=0) return false;
    })

    return true
};