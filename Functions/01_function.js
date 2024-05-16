// // CSS => Sat, Sun
// // Array, Object, Conditionals, Loops, Variables, Data Types, Opratators

// // Function

// // Classic => 
// //     function fn_name(params){code}

// // Anonymus Function => 
// //     function(params){code}   // function with no name

// // Arrow Function/ Fat arrow function => 
    
// //     (params) => {code}

// // // IFI, Self invoking function

// //     ()()


// // function add(a, b){
// //     let result = a+b
// //     return result 
// // }
    
// // let ans1 = add(5, 10)
// // console.log(ans1);

// // let ans2 = add(7, 8)
// // console.log(ans2);

// // let ans3 = add(3, 9)
// // console.log(ans3);

// // // Operator Overloading
// // // let fullName = add("Amit", "Mishra")
// // // console.log(fullName);

// // let myAdd = function(a, b){
// //     return a+b
// // }

// // console.log(myAdd(3, 5))

// // let myNewAdd = (a, b) => {
// //     return a+b
// // }

// // console.log(myNewAdd(8, 9));

// function newFunc(a, b, c){
//     console.log(a, b, c);
//     let result = a*b*c;
//     return result;
// }

// function newFunc2(a, b, c){
//     console.log(a, b, c);
//     let result = a+b+c;
//     return result;
// }

// // Function declared latter will be called if it is having same name !!!

// console.log(newFunc(3, 5, 7));
// console.log(newFunc2(2, 4, 6));

// // ________________________________IIFE___________________________
// // Immediately Invoked Function Expression

// (function(){
//     console.log(`I am inside of an IIFE`);
// })()


// ;let result = ((a, b) => {
//     return a + b;
// })(5, 6)

// console.log(result);


// Write a function to check how many vowels are there in the given string


// console.log(myStr.length);


// ________________________________________Importance of Return_________________________________

// function coutVowels(str){
    // let count = 0;
    // for(let i = str.length-1 ; i>=0; i--){
        // console.log(j);
        // if(
            // str[i] === 'i' || 
            // str[i] === 'a' || 
            // str[i] === 'e' || 
            // str[i] === 'o' || 
            // str[i] === 'u') {
            // count++
        // }
    // }
    // console.log(count);
    // return count
// }
// 
// let newCount = coutVowels("Hello World")
// 
// 
// let twoTimes = (num) => {
    // console.log(num * 2);
// }
// 
// twoTimes(newCount)

// ____________________________________Types of Return______________________________________

// let times = (num) => {
//     return num * 2
// }

// let twoTimes = (num) => num * 2

// console.log(twoTimes(5));

// let numDetails = (name, age) => ({myName: name, myAge: age})

// console.log(numDetails("param", 22))


// _______________________________This Keyword________________________________

let myDetails = {
    firstName: "Amit", 
    lastName: "chauhan",

    fullName: function(){
        return this;
    }
}

console.log(myDetails.fullName())
// {
//     firstName: "Amit", 
//     lastName: "chauhan",

//     fullName: function(){
//         return this;
//     }
// }

myDetails.firstName = "Kushagra"

console.log(myDetails.fullName())

// no Change, 
// {
    //     firstName: "Kushagra", 
    //     lastName: "chauhan",

//     fullName: function(){
//         return this;
//     }
// }
// no change

function func(){
    console.log(this);
}

func()

let arrFunc = () => {
    console.log(this);
}

arrFunc()