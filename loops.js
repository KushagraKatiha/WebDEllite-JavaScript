



// for (let i = 100 ; i <= 10; i++){
//     console.log(i)
// }


// let i = 100;

// while(i <= 10){
    
//     console.log(i);

// }

// let j = 100;

// do{
//     console.log(j);
//     j++;
// }while(j <= 10)

    // Print table of given number upto 10
    // 5 x 1 = 5
    // 5 x 2 = 10

    // let num = 4;

    // for(let i = 1; i <= 10; i++){
    //     console.log(`${num} x ${i} = ${num*i}`);
    // }


    // Write a code to count the number of digits in the given number

    let num = 999565656555556;
    // console.log(num % 1);  

    let digits = 0;
    
    // while(num > 0){
        
    //     num = num / 10  // 99.9, 9.9, 0.9
    //     digits ++ // digits = 1, 2, 3
    //     num = num - (num % 1)   // 0.9 = 0.9 - 0.9 => 0
    // }

    while(num > 0){
        num = num / 10
        digits++
        num = num % 10
    }

    console.log(digits);

    console.log(digits);

