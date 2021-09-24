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
// function countChar(string, ch) {
//     let counted = 0;
//     for (let i = 0; i < string.length; i++) {
//       if (string[i] == ch) {
//         counted += 1;
//       }
//     }
//     return counted;
//   }
  
//   function countBs(string) {
//     return countChar(string, "B");
//   }
  
// console.log(countBs("aBcdEB"))
///////////////////////////////////////////////////////////////////////////////////////////
// my practices...
// ...............
// arrays


let arr = ["ashar", "owais", "umer", "asad", "hamza"];
console.log(arr.indexOf("hamza")); // if not found return -1
console.log(arr.lastIndexOf("owas")); // same as indexof but search from last element
console.log(arr.includes("hamza"))
let arr1 = [65, 45, 60, 40, 55];
console.log(arr1.find((a)=> a>10)); // if not found return undefine
console.log(arr1.findIndex((a)=> a<45)); // if not found return undefine
console.log(arr1.filter((ele)=> ele>45))

console.log(arr.push("danial")); //return length of string
console.log(arr); 

console.log(arr.pop()); //return deleted value
console.log(arr); 

console.log(arr.unshift("bilal")); //return length of string
console.log(arr); 

console.log(arr.shift()); //return deleted value
console.log(arr); 

console.log(arr.splice(3, 1, "anas")) // return deleted value
console.log(arr); 

console.log(arr.sort()); // alphabetic sort
console.log(arr) // change original array

console.log(arr1.sort()); // not work on numeric data
console.log(arr1)


