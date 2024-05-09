//  n = 5

//  i = 5, 0, 5
//  i = 4, 1, 4
//  i = 3, 2, 3
//  i = 2, 3, 2
//  i = 1, 4, 1

// 12345
// * * * * *   i = 5
// _ * * * *   i = 4
// _ _* * *    i = 3
// _ _ _* *    i = 2
// _ _ _ _*    i = 1

//  for n = 5

let n = 5;

for(let i = n; i >= 1; i--){
    
    for(let k = 1; k <= n-i; k++){
        process.stdout.write("_")
    }
    
    for(let j = i; j >= 1; j--){
        process.stdout.write("*")
    }

    console.log();
}

// n-1 = 4
//  i = 1
//  k = 4
//  j = 1

// *****
// _****
// __***
// ___**
// ____*




// for(let i = n; i > 1; i--){
//     let str = "*";
//     let space = " ";
//     console.log(str.repeat(n-i) + str.repeat(i));
// }


// 