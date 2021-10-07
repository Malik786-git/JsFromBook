//DataStructure: Array and Object


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


// let arr = [];
// arr.push(12);
// arr.push(13);
// arr.push(14,15,16);

// for (let i = 0; i < arr.length; i++)
//        console.log(arr[i])     

// arr.pop();
// arr.pop();

// console.log("----------")     
// for (let i = 0; i < arr.length; i++)
//        console.log(arr[i])     


// ///////////////////////////////////////////////////////////
// Object 
/////////////////////////////////////////////////////////////
// Objects are in javascript is the biggest building block.
// var comapny = { name: ‘panacloud’, employee: 100 }
// Undefined vs null
// const person = {
//   age: 1,
//   name: 'daniyal',
//   sports: 'cricket',
//   events: ["work", "touched tree", "pizza", "running", ["tomato", "banana"]]
// }

// person.age = 23 
// console.log(person.age);

// console.log(person.events[4][0]);


// ///////////////////////////////////////////////////
// const person = {
//        age: 1,
//        name: 'daniyal',
//        sports: 'cricket'
//      }
//      person = {} 
//      console.log(person);
     
//      Uncaught TypeError: Assignment to constant variable.
     
// const obj = {
//        prop: 42
//      };
     
//      Object.freeze(obj);
     
//      obj.prop = 33;
//      // Throws an error in strict mode
     
//      console.log(obj.prop);
//      // expected output: 42
     
//////////////////////////////////////////
// let objectA = {a: 1, b: 2};
// Object.assign(objectA, {b: 3, c: 4});
// objectA.d = 6;
// console.log(objectA);


// ///////////////////////////////////////////


// let xyz = ["ashar", 20, {programming:"C++", uni:"dawood"}];
// console.log(xyz[2].uni);



// Mutability

// let object1 = {value: 10};
// let object2 = object1;
// let object3 = {value: 10};
// console.log(object1);
// console.log(object2);
// console.log(object3);

// console.log(object1 == object2);
// console.log(object1 == object3);



///////////////////////////////////////////
// var name1 = "daniyal";
// var name2 = "tariq";

// if(name1 === name2){
//  console.log(name1);
// }
// var name1 = "daniyal";
// var name2 = "daniyal";

// if(name1 === name2){
//  console.log(name1);
// }
// var obj = {name: 'dani',age : 21}
// var obj1 = {name: 'dani',age : 21}
// if(obj1 === obj){
//   console.log('12221');
// }



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

////////////////////////////////////////////////////////

// MAP() (it is not distrub original array, while forEach() change original array)
// return new array which you want in form of F/T...

// const array1 = [1,4,9,16,25];
// // num > 9

// let newAtt = array1.map((e , i , arr)=>{
//     return e > 9
// })

// console.log(newAtt);
// console.log(array1);

/////////////////////////////////
// const array2 = [1,4,9,16,25];

// let newArr2 = array2.map((e , i , arr)=>{
//     return `${i} and the value is ${e} belong to arr ${arr}`;
// })
// console.log(newArr2);
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

////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
// Reduce Method
//////////////////////////////////////////////////////////////////


// flatten an array means to convert the 3d or 2d array into a single dimensional array
// Also
// the reduce method execute ta reducer function (that you provide) 
// on each element of the array, resulting in a single output value

// Basically reduce method take four arguments:
// Accumulator  // argument 
// Current value  // argument
// Current index // argument
// Source Array // argument

// // i want sum of array
// let arr = [5,6,2];
// // // accumulator mean what operation here sum is operation
// let sum = arr.reduce((accumulator, e, i, arr) => {
//     return accumulator+=e;
// })

// console.log(sum); //sum of array is 13

////////////////////////////////////////////////////////////



// let arr = [5,6,2];
// // // accumulator mean what operation here sum is operation
// let sum = arr.reduce((accumulator, e, i, arr) => {
//     return accumulator+=e;
// },10) // add 150 and sum of array, accumulator add array in to 150


// console.log(sum); //sum of array is 163



//////////////////////////////
// apply reduce above code
// chainable Method 

// let arr = [2, 3, 4, 6, 8];

// let sqRoot = arr.map((element) => element*2).filter((currElement)=> currElement>10).reduce((acc, e)=> acc+=e);
// console.log(sqRoot);


/////////////////////////////////


// // Convert 2d, 3d into 1d array using reduce 

// const arr = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ];

// let flatArray = arr.reduce((acc,e)=> acc.concat(e));
// console.log(flatArray);

// this condition above logic not work! solve ES-2020 see soon
// const arr = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9,[10,11,12]]
// ];
// let flatArray = arr.reduce((acc,e)=> acc.concat(e));
// console.log(flatArray);


// indexOf, lastIndexOf, include, find, findIndex, push, pop, unshift, shift, splice, filter, map, reduce...
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////// Object Oriented in Js ////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//  let bioData = {
//      name         : "malik" ,
//      age          :  18 ,
//      getData      : function(){ console.log(bioData.name)}
//  }

// console.log(bioData.age);
// bioData.getData();


// another way After ES-6


// let bioData = {
//     name         : "malik" ,
//     age          :  18 ,
//     getData(){ console.log(bioData.name)}
// }

// console.log(bioData.age);
// bioData.getData()

// Object inside the Object


// let bioData = {
//     name         : "malik" ,
//     age          :  18 ,
//     edu: {
//         subject:"programmingC++",
//         semester:3
//     }
// }

// console.log(bioData.edu.subject);




// THIS

// console.log(this) // run on browser
// console.log(this.alert('hellow')) // run on browser




// run on browser, current contex of this is also window
// function x (){
// console.log(this) 
// }
// x();



// let names = "kuchBH"

// function x (){
//     console.log(this.names) 
//     }
//     x();
    
// important part
 // here contex of this is Obj, so we access any obj property like bio.name etc
// let bioData = {
//     name         : "malik" ,
//     age          :  18 ,
//     getData(){ 
//         console.log(this);
//         console.log(this.age);
//     }
// }

// bioData.getData()


// what the output of this only change fun type use fat arrow func..
// let bioData = {
//     name         : "malik" ,
//     age          :  18 ,
//     getData: ()=>{ 
//         console.log(this); // here contex is windows not Object, because we not use this in fat arrow fun
//         console.log(this.age);
//     }
// }

// bioData.getData() 


// ES - 6 PART

// Array DESTRUCTURING

// const myData = ["malik", 18, "C++"]
// let [name, age, subject] = myData;

// // console.log(age);

// const student = ["ashar", 20, "js"];

// let [name, age, subject, gender="male"] = student;

// console.log(name, age, subject, gender)
 


// const myData = ["malik", 18, "C++"]
// let [name, age, subject, uni="Dawood"] = myData;

// console.log(uni);


// Object Destructuring



// let bioData = {
//     name         : "malik" ,
//     age          :  18 ,
//     uni : "dawood" 
// }

// let {name, age, uni, sub="Cpp"} = bioData;
// console.log(name);
// console.log(sub);



// Object Properties

// we use now use Dynamic Properties

// let myName = "name";


// let bioData = {
//     [myName]         : "malik" ,
//     age          :  18 ,
//     uni : "dawood" 
// }

// console.log(bioData);





// let myName = "malik"
// let age = 18

// let bioData = {
//     myName:myName,  //automatically detect the value
//     age:age
// }

// console.log(bioData);

// let x = 20;
// let y = 30;

// const numbers = {
//     x,
//     y
// }
// console.log(numbers)


// let myName = "name"
// let age = 18

// let bioData = {  myName, age  }

// console.log(bioData);


//////////////////////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////////////////////////////////////////////////
//    except book  end ////////////////////////////////////////////////////////////////////////////////////////





