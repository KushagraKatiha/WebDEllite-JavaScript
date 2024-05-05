
// let lang = "Hindi"

// switch (lang) {
//     case "Hindi":
//         console.log("Namaste");
//         break;

//     case "English":
//         console.log("Hello");
//         break;
//     default:
//         console.log("Don't know this");
// }

// _______________Ternary Operator____________________

// (condition) ? /**Code 1 */ : /**Code 2 */

// let lang = "Hindi";

// (lang == "Hindi") ? console.log("Namaste") : console.log("Pta nhi ");


// __________________Loops___________________
// => For Loop

for(let i = 11; i <= 10; i = i + 1){
    console.log(i);
}

// => While Loop

let j = 11;

while( j <= 10){
    console.log(j);
    j++
}

let k = 11;

do{
    console.log(k);
    k++
}while( k <= 10)

// Count the number of digits in the given number

let num = 12345 // 12

// console.log(num % 1);

let digits = 0; // 3

while(num > 0){
    num = num / 10
    digits++
    num = num - (num % 1)
}

console.log(digits);


// Reverse a given number, study about Math library in js

let num2 = 12345



