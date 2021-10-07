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
 

// let arr = ["ashar", "owais", "umer", "asad", "hamza"];
// console.log(arr.indexOf("hamza")); // if not found return -1
// console.log(arr.lastIndexOf("owas")); // same as indexof but search from last element
// console.log(arr.includes("hamza"))
// let arr1 = [65, 45, 60, 40, 55];
// console.log(arr1.find((a)=> a>10)); // if not found return undefine
// console.log(arr1.findIndex((a)=> a<45)); // if not found return undefine
// console.log(arr1.filter((a)=> a>45))

// console.log(arr.push("danial")); //return length of array
// console.log(arr); 

// console.log(arr.pop()); //return deleted value
// console.log(arr); 

// console.log(arr.unshift("bilal")); //return length of array
// console.log(arr); 

// console.log(arr.shift()); //return deleted value
// console.log(arr); 

// console.log(arr.splice(3, 1, "anas")) // return deleted value
// console.log(arr); 

// console.log(arr.sort()); // alphabetic sort
// console.log(arr) // change original array

// console.log(arr1.sort()); // not work on numeric data
// console.log(arr1)


/////////////////////////////////////
// filter function..... 

// The filter() method creates a new array with all elements that pass the test implemented by the provided function.
// filter // return an array // if not found return empty array '[]'


// const some = [2,4,6,8,10];
// let filterData = some.filter((e)=>{
//     return e>4;
// })
// console.log(filterData);

// another example...
// const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
// const result = words.filter(word => word.length > 6);
// console.log(result);

// for more practice link 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter'
/////////////////////////////////////
// Map function..... 
// The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.


// const some_2 = [2,4,6,8,10];

// let mappingData = some_2.map((e)=>{
//     return e>4;
// })
// console.log(mappingData);


// another example

// const some_2 = [2,4,6,8,10];

// let mappingData = some_2.map((e)=>{
//     return e*2;
// })
// console.log(mappingData);

// another example
// const array2 = [1,4,9,16,25];

// let newArr2 = array2.map((e , i , arr)=>{
//     return `${i} and the value is ${e} belong to arr ${arr}`;
// })
// console.log(newArr2);

// for more practice link 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map'

//////////////////////////////////////////
//   Challenge
/////////////////////////////////////////

// 1, Find the square root of each element in an array?

// let arr = [25, 36, 49, 64, 81];

// let sqRoot = arr.filter((e, i, arr)=>{
//     return Math.sqrt(e);
// });

// let qRoot = arr.map((e, i, arr)=>{
//     return Math.sqrt(e);
// });
// console.log(sqRoot);

// 2, Multiply each element by 2 and return only thosee element which are greater than 10?
// chaing effect
// let arr = [2, 3, 4, 6, 8];

// let sqRoot = arr.map((element) => element*2).filter((currElement)=> currElement>10);
// console.log(sqRoot);

////////////////////////////////
// reduce function....
// flatten an array means to convert the 3d or 2d array into a single dimensional array
// Also
// the reduce method execute ta reducer function (that you provide) 
// on each element of the array, resulting in a single output value

// Basically reduce method take four arguments:
// Accumulator  // argument 
// Current value  // argument
// Current index // argument
// Source Array // argument

const arr = [2,4,6,8];

const reduceData = arr.reduce((acc,e,i,arr)=> acc += e);
console.log(reduceData);

// // after accumulator calculation add 10
const reduceData_2 = arr.reduce((acc,e,i,arr)=> acc += e , 10);
console.log(reduceData_2);

// another example


// const array1 = [1, 2, 3, 4];

// 1 + 2 + 3 + 4
// console.log(array1.reduce((previousValue, currentValue) => previousValue + currentValue));
// console.log(array1.reduce((acc, e) => acc + e));

// expected output: 10

// 5 + 1 + 2 + 3 + 4
// console.log(array1.reduce((previousValue, currentValue) => previousValue + currentValue, 5));
// expected output: 15

//////////////////////////////////////////

// Chainable Method...(by using filter map reduce)
// const arrayNumbers = [2,4,6,8,10];
// let result = arrayNumbers.filter(e=>e>4).map(e=>e*2).reduce((a,e)=>a+e);
// console.log(result);

