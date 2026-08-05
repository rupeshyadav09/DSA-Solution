/**
 * @param {string} s
 * @return {number}
 */
var maxFreqSum = function(s) {
    let map = {};

    for(let i=0; i<s.length; i++){

      map[s[i]] = !map[s[i]] ? 1 : ++map[s[i]];  
        // if(!map[s[i]]){
        //     map[s[i]]=1;
        // }else{
        //     map[s[i]]++;
        // }
    }

    let vowel = ['a','e','i','o','u'];
    let maxVowel = 0;
    let maxConsonent = 0;

    for(let i=0; i<s.length; i++){

        if(vowel.includes(s[i])){

            maxVowel = Math.max(maxVowel,map[s[i]]);
      }else{
            maxConsonent = Math.max(maxConsonent,map[s[i]]);
      } 
    }
      return maxVowel+maxConsonent;
};