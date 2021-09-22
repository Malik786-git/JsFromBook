// what type of name of variable allow 
// A binding name may include dollar signs ($) or underscores (_) but no other
// punctuation or special characters.
// let $name = "ashar ahmed";
// console.log($name);

// // Camel case
// var studentNameRoll = "malik jahangir";
// // Pascal case
// var StudentNameRoll = "ashar ahmed";


// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// if (true) {
//     console.log("malik");
// }else{
//     console.log("ashar");
// }

// console.log(false ? "malik" : "ashar");

// console.log(true ? 1 : 2);
// // → 1
// console.log(false ? 1 : 2);
// // → 2



// />>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// loop
// let fact = 1;
// let i = 1;
// while (i<=5) {
//     fact = fact*i;
//     i++;
// }
// console.log(fact);


// let fact = 1;
// let i = 1;
// do{
//     fact = fact*i;
//     i++;
// }while(i<=5)
// console.log(fact);

// let fact = 1;
// for (let i = 1; i <=5; i++) {
//     fact = fact*i;
// }
// console.log(fact);

// />>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// for (let current = 20; ; current = current + 1) {
//     console.log(current);
   
//     if (current % 7 == 0) {
//     console.log(current);
//     break;
//     }
//     }

// var weather = "cloudy"
// switch (weather) {
//     case "rainy":
//     console.log("Remember to bring an umbrella.");
//     break;
//     case "sunny":
//     console.log("Dress lightly.");
//     break;
//     case "cloudy":
//     console.log("Go outside.");
//     // break;
//     default:
//     console.log("Unknown weather type!");
//     break;
//     }
    

// />>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// />>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// single line comments
/*
mulity
line comments
*/ 

// />>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// task 

// for (let i = 0; i < 7; i++) {
   
//     for (let j = 0; j <= i ; j++) {
//             console.log("#");
//     }
//     console.log("\n");
// }
// solution
// for (let line = "#"; line.length < 8; line += "#")
//       console.log(line);

// for (let i = 1; i <= 8; i++) {
//     for (let str = "" ; str.length < 8; str+=" #" ) {
//         console.log(str)
//     }
// }
// solution
let size = 8;

let board = "";

for (let y = 0; y < size; y++) {
  for (let x = 0; x < size; x++) {
    if ((x + y) % 2 == 0) {
      board += " ";
    } else {
      board += "*";
    }
  }
  board += "\n";
}

console.log(board);


