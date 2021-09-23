// chapter 3 (Qno.1)
// function isEven(n) {
//     if (n == 0) return true;
//     else if (n == 1) return false;
//     else if (n < 0) return isEven(-n);
//     else return isEven(n - 2);
//   }
  
// if (isEven(50)) {
//     console.log("number is even");
// }else{
//     console.log("number is odd");
// }


// chapter 3 (Qno.2)
function countChar(string, ch) {
    let counted = 0;
    for (let i = 0; i < string.length; i++) {
      if (string[i] == ch) {
        counted += 1;
      }
    }
    return counted;
  }
  
  function countBs(string) {
    return countChar(string, "B");
  }
  
console.log(countBs("aBcdEB"))
