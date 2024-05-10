
// let myArr = [1, 2, 3, 4, 5, 6, 7]

// // {0, 1}, {1, 2}, {2, 3}

// let gemBox = {
//     "eraser": "Doms",
//     "pencil": "Natraj",
//     "my_pen": "Win",
//     scale: "Doms"
// }


// console.log(myArr[3]);
// // console.log(gemBox["my pen"]);
// console.log(gemBox.my_pen);
// console.log(gemBox.scale);

// gemBox.compas = "Camel"
// console.log(gemBox);

// delete gemBox.eraser

// console.log(gemBox);

// console.log(Object.keys(gemBox));
// console.log(Object.values(gemBox));
// console.log(Object.entries(gemBox));

// Check if the given entry is present in the given object, if yes say yes else say no

// Print the number of students in the given obj => "Name": "Role"

let person = {
    Amit: "Student",
    Kaku: "Teacher",
    Vivek: "Expert", 
    Tripathi: "CR",
    Atul: "Student"
}

let Roles = Object.values(person)
console.log(Roles);

let numOfStudents = 0;

// for(let i = 0; i < Roles.length; i++){
//     if(Roles[i] === "Student"){
//         numOfStudents++
//     }
// }

Roles.forEach((item) => {
    if(item === "Student"){
        numOfStudents++
    }
})

// Roles.forEach((item)=>{
//     if(item === "Student"){
//         numOfStudents++
//     }
// })

console.log(numOfStudents);
