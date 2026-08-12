/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
    s = s.split("");

    for(let x=0; x <s.length; x = x +(2*k)){

       let mid = Math.floor(k/2);
       for(let i=0; i<mid; i++){
        // swap [x+ i] to [x+ n-i-1]

        let temp = s[x+i];
          s[x+i] = s[x + k-i-1];
          s[x+ k-i-1] = temp;
       } 
    }
     return s.join("");
};