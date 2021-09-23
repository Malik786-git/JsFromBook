//DataStructure: Array and Object

const { SIGUSR1 } = require("constants");

// arrays example
// let listOfNumbers = [2, 3, 5, 7, 11];
// console.log(listOfNumbers[2]);
// // → 5
// console.log(listOfNumbers[0]);
// // → 2
// console.log(listOfNumbers[2 - 1]);
// // → 3


// object and properties and functions

// d1.getroll()

// console.log(Math.max(3,5));

//////////////////////////////////////////////
// Properties
// var str = "abcdefghijklmnopqrstuvwxyz";
// console.log(str.length)
// console.log(str["length"])


///////////////////////////////////////////


// Methods
// Both string and array values contain, in addition to the length property, a
// number of properties that hold function values.
// let doh = "Doh";
// console.log(typeof doh.toUpperCase);
// // → function
// console.log(doh.toUpperCase());
// // → DOH



//////////////////////////////////////////////


let arr = [];
arr.push(12);
arr.push(13);
arr.push(14,15,16);

for (let i = 0; i < arr.length; i++)
       console.log(arr[i])     

arr.pop();
arr.pop();

console.log("----------")     
for (let i = 0; i < arr.length; i++)
       console.log(arr[i])     



///////////////////////////////////////////////////////////////////////////////////////////////////////////
//    except book  ////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////
// for in and for of in ES-6
    //    let myFriend = ["hamza", "owais", "ashar", "umer", "talha","areeb"];

       // for (let elements in myFriend) 
       // {
       //    console.log(elements); 
// }
       
// for of loop ES-6....
// // but is not support this argument, this argument support only tradisional function
// let myFriend = ["hamza", "owais", "ashar", "umer", "talha","areeb"];
       
// for (let elements of myFriend) 
// {
//     console.log(elements);  
// }
    //    for Each
// let myFriend = ["hamza", "owais", "ashar", "umer", "talha","areeb"];

// myFriend.forEach((elem, index, array)=>{
//     console.log(array);
// });



//////////////////////////////////////////////////////////////////////////////////////////////////////////////


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////// ARRAYS  /////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// * Traversal 
// * Search and Filter 
// * How to Sort and Compare 
// * Insert, Add, Replace and Delete Element
// * Map(), Reduce(), Filter()

// var myFriend = ["hamza", "owais", "ashar", "umer", "talha","areeb"];

// in Js, we have array class and arrays are the prototype of this class

// var arr = new Array;  //optional
// var arr =  ["hamza", "owais", "ashar", "umer", "talha","areeb"];

// var myFriend = ["hamza", "owais", "ashar", "umer","areeb"];
// console.log(myFriend[1]); 

// for last element get

// console.log(myFriend.length);
// console.log(myFriend[myFriend.length-1]);

// simple for loop
// var myFriend = ["hamza", "owais", "yusra owais", "ashar", "umer","areeb"];

// for (let i = 0; i < myFriend.length; i++) 
// {
//     console.log(myFriend[i]);  
// }

// for in loop ES-6

// let myFriend = ["hamza", "owais", "ashar", "umer", "talha","areeb"];

// for (let elements in myFriend) 
// {
//    console.log(elements); 
// }

// for of loop ES-6

// let myFriend = ["hamza", "owais", "ashar", "umer", "talha","areeb"];

// for (let elements of myFriend) 
// {
//     console.log(elements);  
// }

// For Each Loop (Combination of for each and for in loop)
// we dont use break and contunue statement in for Each
// Array.prototype.forEach()
// calls a function for each element in array

// let myFriend = ["hamza", "owais", "ashar", "umer", "talha","areeb"];

// myFriend.forEach((elem, index, array)=>{
//     console.log(array);
// });


// myFriend.forEach(function(element, index, array){
// //    console.log(element); 
//    console.log(element+" index: "+index +" arrays" +array); 

// });
/////////////////////////////////////////////////////////////////
// practice to check more
// no. of run depend on size of array
// let myFriend = ["hamza", "owais", "ashar", "umer", "talha","areeb"];

// myFriend.forEach(function(element, index, array){
//        console.log(array);
//        console.log(element);
//        console.log(index);
//     });
////////////////////////////////////////////////////////////////////
// through fat arrow function
// let myFriend = ["hamza", "owais", "ashar", "umer", "talha","areeb"];


// // but is not support this argument, this argument support only tradisional function
// myFriend.forEach((element, index, array) => {
//        console.log(element);
// });

///////////////////////////////////////////
// Methods In Arrays
///////////////////////////////////////////
// Search and filter
///////////////////////////////////////////
// 1.  Array.prototype.indexOf() and LastIndexOf()
// return -1 if it is not found

// let Friend = ["hamza", "owais", "ashar", "umer", "talha","areeb"];
//  search first element se hugi

// console.log(Friend.indexOf('areeb'));
// console.log(Friend.indexOf('owais',1)); //searching of owais from index 2
// console.log(Friend.indexOf('talha',2)); //searching of talha from index 2


//  search last element se hugi
// console.log(Friend.lastIndexOf('areeb'));

/////////////////////////////////////////////
// 1.  Array.prototype.includes()
// let Friend = ["hamza", "owais", "ashar", "umer", "talha","areeb"];

// console.log(Friend.includes('owais')); //return true / false
// console.log(Friend.includes('Owais')); //return true / false caseSencitive

// console.log(Friend.includes('owais',2)); //search from index 1


/////////////////////////////////////////////
// 1.  Array.prototype.find() and findIndex


// const prices = [22,50,9,21,14,45,55];
// // prices > 50

// const x = prices.find(val => val>40);
// console.log(x);
// const f = prices.find((currVal)=>{
//     return currVal > 50;
// });

// console.log(f); // return only one 

// console.log(prices.find((c) =>c > 150)); //return undefine if not found
//////////////////////////////////////
// find Index (we get element index)
// const prices = [22,50,9,21,14,45,55];
// prices > 50
// console.log(prices.findIndex((c) =>c > 50));  // return -1 if not found
// console.log(prices.findIndex((c) =>c < 50));

/////////////////////////////////////////////
// 1.  Array.prototype.filter()
// return new array after filter any element or condition
// return empty array if its not found
// const prices = [22,50,9,21,14,45,55];
// price <50

// console.log(prices.filter((ele)=> ele<50));

/////////////////////////////////////////////
// 1.  Array.prototype.sort()
// alphabetic sort here
// const month = ["mar", "jan", "dec","april", "may"];
// console.log(month.sort());

// const prices = [22,50,9,21,14,45,55];
// console.log(prices.sort()); //it work only string


///////////////////////////////////////////
// Methods In Arrays
///////////////////////////////////////////
// CRUD (create, read, update, delete)
///////////////////////////////////////////

// let Friend = ["owais", "ashar", "umer", "talha"];
// //push 

// Friend.push('hamza');
// console.log(Friend)
// // // return array length
// const c = Friend.push('shah','zubair','kuch bh');
// console.log(Friend)

// console.log(c)

//////////////////////////////////////////////////////
// let Friend = ["owais", "ashar", "umer", "talha"];
// // //unshift // add element starting 

// Friend.unshift('hamza');
// console.log(Friend)
// // return array length
// const c = Friend.unshift('shah','zubair','kuch bh');
// console.log(Friend)

// console.log(c)

// 2ns example

// const arr = [1,2,3,5];
// arr.unshift(4,6);
// console.log(arr);

//////////////////////////////////////////////
// POP
// const city = ["karachi", "hyderabad", "multan", "lahore"];
// console.log(city);
// city.pop();  //remove last element and return it
// console.log(city);

// var whatReturnPop = city.pop()
// console.log(city);
// console.log(whatReturnPop);

//////////////////////////////////////////////
// shift
// const city = ["karachi", "hyderabad", "multan", "lahore"];
// console.log(city);
// city.shift();  //remove first element and return it
// console.log(city);

// var whatReturnShift = city.shift()
// console.log(city);
// console.log(whatReturnShift);

/////////////////////////////////////////////
// Update 
// splice //add and remove element

// const month = ["jan", "feb", "mar","april", "jun"]
// // first pass index number, second delete elemt, third what to be add
// // const newMonth = month.splice(2,1,"May");
// // console.log(month);
// const newMonthss = month.splice(2,2,"Dec");
// console.log(month);

// // // what return
// console.log(newMonthss); // return how many element delete is return

//////////////////////////////////////////////
// Update

// const month = ["jan", "feb", "mar","april", "jun"]
// Update Feb
// add element index 1, delete index 1, insert Febuary in index one
// const upM = month.splice(1,1,"Febuary")
// const upM = month.splice(1,month.length,"Febuary")  // delete all from index 1

// console.log(month) 
// console.log(upM) // return delete element

// // delete only
// const month = ["jan", "feb", "mar","april", "jun"]
// const upM = month.splice(1,Infinity)  //infinity delete all from index 1
// console.log(month);
///////////////////////////////////////////////////////////////////////////////////////////////////////////
//    except book  ////////////////////////////////////////////////////////////////////////////////////////





