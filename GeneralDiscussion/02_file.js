// let num1 = 5;

// let num2 = num1;

// num1 = num1*2;

// console.log(num1);
// console.log(num2);

// // let myArr = [1, 2, 3, 4, 5]

// // let myArr2 = myArr

// // myArr = [1, 2]

// // console.log(myArr);  // 1, 2, 3, 4, 5, 333
// // console.log(myArr2);  // 1, 2, 3 ,4, 5

// let studentsA = ["atul", "kaku", "wajid", "shadab"]
// let studentsB = ["amit", "amithesh", "pandey"]

// console.log(studentsA);
// console.log(studentsB);

// let students = studentsA.concat(studentsB)
// console.log(students);

// let newStudents = [studentsA, ...studentsB]
// console.log(newStudents);

// reduce, for in , for of, Array.from()

// Given an array we have to reverse it without using internal reverse function
//          0, 1,  2, 3,  4
let arr = [43, 56, 1, 2, 76];

let newArr = [] // [76, 2, 1, 56, 43]

for(let i = arr.length-1; i >= 0; i--){
    newArr.push(arr[i])
}

console.log(newArr);

// How can we create empty array in JS

// Check if given element is present in an array, if yes print its index else print "Flag not found"

let flag = 44

let myArr = [1, 33, 44, 2, 4]

// loop, conditional, printing

for(let i = 0; i <= myArr.length - 1; i++){
    if(myArr[i] === flag){
        console.log(i);
        break;
    }else{
        console.log(`Flag not found`);
    }
}

// 0

// 0
// Flag not found
// Flag not found
// Flag not found
// Flag not found



