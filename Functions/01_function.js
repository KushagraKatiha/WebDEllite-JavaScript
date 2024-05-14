// CSS => Sat, Sun
// Array, Object, Conditionals, Loops, Variables, Data Types, Opratators

// Function

// Classic => 
//     function fn_name(params){code}

// // Anonymus Function => 
//     function(params){code}   // function with no name

// // Arrow Function/ Fat arrow function => 
    
//     (params) => {code}

// // IFI, Self invoking function

//     ()()


function add(a, b){
        let result = a*b
        return result 
}
    
let ans1 = 5 + 10
console.log(ans1);

let ans2 = add(7, 8)
console.log(ans2);

let ans3 = add(3, 9)
console.log(ans3);

// Operator Overloading
// let fullName = add("Amit", "Mishra")
// console.log(fullName);

const myAdd = function(a, b){
    return a+b
}

console.log(myAdd(3, 5))

let myNewAdd = (a, b) => {
    return a+b
}

console.log(myNewAdd(8, 9));


// 15, 15, noOutput, noOutput, 15