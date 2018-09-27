1. MINIMUM
function min(a, b) {
    if (a < b) {
      return a;
    }
    else if (b < a) {
       return b;
    }
   }

2. RECURSION
function isEven(N) {
    if (N === 0){
      return true
    }
   else if (N ===1){
     return false
   }
   else if (N < 0) {
     return isEven(N+2)
   }
   else {
     return isEven(N-2)
   }
 }

 3. BEAN COUNTING
 function countBs(str) {
    let numBs = 0
    for (var i = 0; i < str.length; i++) {
      if (str[i] === "B"){
        numBs++;
      }
    }
  return numBs
  }
  
  function countChar(str, x) {
    let numChar = 0
    for (var i = 0; i < str.length; i++) {
      if (str[i] === x){
        numChar++;
      }
    }
  return numChar
  }