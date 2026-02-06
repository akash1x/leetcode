/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    if(s.length!=t.length) return false;
    let mst={}
    let mts={}
    for(let i=0;i<s.length;i++){
        if(!mst[s[i]] && !mts[t[i]]){
            mst[s[i]]=t[i];
            mts[t[i]]=s[i]
        }else{
            if(mst[s[i]]!=t[i] || mts[t[i]!=s[i]]) return false
        }
    }
    return true
};