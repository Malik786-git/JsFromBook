
// const sum = function (a, b) {
//     return a+b;
// }

// console.log(sum(10,2));


// const sub = function(a, b) {
//     return a-b;
// }

// console.log(sub(10,2));
// const power = function(base, exponent) {
//     let result = 1;
//     for (let count = 0; count < exponent; count++) {
//     result *= base;
//     }
//     return result;
//     };
//     console.log(power(2,3));

// ..............................................................

// var is function scope and let & const is block scope

// function fun() {
//   var a = 10;
//   if (true) {
//       var b = 20;
//       console.log(a)
//       console.log(b)
//   }
//   console.log(a);
//   console.log(b);

// }

// console.log(a);

// fun();
// for let
// function fun1() {
//     let a = 10;
//     if (true) {
//         let b = 20;
//         console.log(a)
//         console.log(b)
//     }
//     console.log(a);
//     console.log(b);
  
//   }
  
//   fun1();
//   for const
// function fun2() {
//     const a = 10;
//     if (true) {
//         const b = 20;
//         console.log(a)
//         console.log(b)
//     }
//     console.log(a);
//     console.log(b);
  
//   }
  
//   fun2();
  

// =======================================
// let x = 10;   // global scope
// if (true) 
// {
//   let y = 20;
//   var z = 30;
//   console.log(x + y + z); // 60
// }
// // y is not visible here
// console.log(x + z); // 40


// Nested Scope Behavior
// const hummus = function(factor) {
//     const ingredient = function(amount, unit, name) {
//     let ingredientAmount = amount * factor;
//     if (ingredientAmount > 1) {
//     unit += "s";
//     }
//     console.log(`${ingredientAmount} ${unit} ${name}`);
//     };
//     ingredient(1, "can", "chickpeas");
//     ingredient(0.25, "cup", "tahini");
//     ingredient(0.25, "cup", "lemon juice");
//     ingredient(1, "clove", "garlic");
//     ingredient(2, "tablespoon", "olive oil");
//     ingredient(0.5, "teaspoon", "cumin");
//     };
    // ///////////////////////////////
//     const fun1 = function(x) {
//         const fun2 = function(y) {
//             console.log(x);
//             console.log(y);
//         };
//         fun2(20)

//         console.log(x);
//         console.log(y);
//     };
    
// fun1(10);
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// let launchMissiles = function() {
//     console.log('Run Function')
//     };
// launchMissiles();
//     launchMissiles = function() {
//          console.log('Run Not Function')
//     };
// launchMissiles();

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// console.log("The future says:", future());
// function future() {
// return "You'll never have flying cars";
// }

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// old way
// function name(params) {   
// }
// const nam = function (params) {  
// }


// const arrowFun = (x)=> {
//    return x;
// }

// console.log(arrowFun(5));


// const arrowFun = (x)=> { return x };
// const arrowFun = (x,y) => x+y ;
// console.log(arrowFun(5));


//  call stack
// function chicken() {
//     return egg();
//     }
//     function egg() {
//     return chicken();
//     }
//     console.log(chicken() + " came first.");


// optional arguments
// function power(base, exponent = 2) {
//     let result = 1;
//     for (let count = 0; count < exponent; count++) {
//     result *= base;
//     }
//     return result;
//     }
//     // console.log(power(4));
//     console.log(power(2, 6));
    
// function multi(a,b=5){
//     return a*b;
// }
// console.log(multi(2)); // alway pass value get by first parameter in function here get a



// ///////////////////////////////////////////////////////////////////////////

// const power = x => x*x ;

// var a = power(8);
// var b = power(4);
// console.log(`a= ${a} and b = ${b}`)
// console.log(b)


// closer
// function wrapValue(n) {
//     let local = n;
//     return () => local;
//     }

//     let a = wrapValue(1);  // a = ()=> local;
//     let b = wrapValue(2);
//     console.log (a());
//     console.log (b());
// //////////////////////////////////////////
// function multiplier(factor) {
//     return number => number * factor;
//     }
    
//     let twice = multiplier(2); // twice = number => 5 * 2
//     console.log(twice(5));
    


// recursion
// function power(base, exponent) {
//     if (exponent == 0) {
//     return 1;
//     } else {
//     return base * power(base, exponent - 1);
//     }
//     }
//     console.log(power(2, 3));


// dry run
// power (2, 3) = 8;


// base 2 , ex = 3  => 2 * power(2, 2) 2*4 = 8

// base 2, ex = 2 =>   2* power(2, 1) = 2*2 = 4

// base 2, ex = 1 =>  2* power(2,0) => 2*1 = 2

// base 2, ex = 0 => 1

////////////////////////////////////////////////////////////////////////
// Task  
// function findSolution(target) {
//     function find(current, history) {
//     if (current == target) {
//     return history;
//     } else if (current > target) {
//     return null;
//     } else {
//     return find(current + 5, `(${history} + 5)`) ||
//     find(current * 3, `(${history} * 3)`);
//     }
//     }
//     return find(1, "1");
//     }
//     console.log(findSolution(24));
//     // → (((1 * 3) + 5) * 3)
    

// Growing functions
function printFarmInventory(cows, chickens) {
    let cowString = String(cows);
    while (cowString.length < 3) {
    cowString = "0" + cowString;
    }
    console.log(`${cowString} Cows`);
    let chickenString = String(chickens);
    while (chickenString.length < 3) {
    chickenString = "0" + chickenString;
    }
    console.log(`${chickenString} Chickens`);
    }
    printFarmInventory(7, 11);
    




















