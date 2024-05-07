
let n = 5

for(let i = 1; i <= n; i++){

    for(let j = 1; j <= n; j++){
        process.stdout.write("*");
    }
    console.log();
}

// for n = 4

// *
// **
// ***
// ****
// let n2 = 5

// for(let i = 1; i < n2; i++){
//     for(let j = 1; j <= i; j++){
//         process.stdout.write(String(j))
//     }
//     console.log();
// }

// for(let i = 1; i <= n2; i++){
//     for(let j = 1; j <= n2; j++){
//         if( i == 1 || i == n2 || j == 1 || j == n2){
//             process.stdout.write("*")
//         }else{
//             process.stdout.write(" ")
//         }
//     }
//     console.log();
// }

// 54321
// 5432
// 543
// 54
// 5
// n2 - 3 + 1
//  i = 2
//  j = 5 4 3 2 1
//  j = 5 4 3 2
//  j = 5 4 3

// for(let i = 5; i >= 1; i-- ){
//     for(let j = 5; j >= n2-i+1; j--){
//         process.stdout.write(String(j))
//     }
//     console.log();
// }

// Assignment => 07-may-24

// 12345
// 1234
// 123
// 12
// 1

// for n = 6, m = 3
// 1 2 1 2 1 2
// 2 1 2 1 2 1
// 1 2 1 2 1 2
