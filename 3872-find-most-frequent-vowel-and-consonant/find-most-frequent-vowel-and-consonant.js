/**
 * @param {string} s
 * @return {number}
 */
var maxFreqSum = function(s) {
    let maxVowelFreq=0;
    let maxConstFreq=0;
    let vowelFreqMap={};
    let constFreqMap={};
    const vowels =['a','e','i','o','u'];
    //Iterate over the string 
    for(let i=0;i<s.length;i++){
        //Check if it is a vowel then update vowelFreqMap
        if(vowels.includes(s[i])){
            if(vowelFreqMap[s[i]]) vowelFreqMap[s[i]]++;
            else vowelFreqMap[s[i]]=1;
        }
        //update the constFreqMap
        else{
            if(constFreqMap[s[i]]) constFreqMap[s[i]]++;
            else constFreqMap[s[i]]=1;
        }
    }
   
    // Find max vowel freq
    Object.entries(vowelFreqMap).forEach(([key, value]) => {
        if(value>maxVowelFreq){
            maxVowelFreq=value
        }
    });

    // Find max const freq
    Object.entries(constFreqMap).forEach(([key, value]) => {
        if(value>maxConstFreq){
            maxConstFreq=value
        }
    });
 
    return maxConstFreq+maxVowelFreq
};