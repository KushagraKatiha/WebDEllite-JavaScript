// Write a code to count the number of loops in the given number.

// Example 1: 1234567890
// Output: 6
// Explanation: There are 6 loops in the given number.
// 0, 4, 6, 9 have 1 loop
// 8 has 2 loops

// Example 2: 1234
// Output: 1
// Explanation: There is 1 loop in the given number.
// 4 has 1 loop

// Example 3: 8888
// Output: 8 

// Example 4: 543
// Output: 1

// Example 5: 5
// Output: 0

// Assignment 1: How to handle big numbers in JS
// Assignment 2: Do the same question, the other way (do not change number into string !!)

let num = 88899999934343499111111111111 // 2

let noOfLoops = 0;

let numStr = String(num)

let strLen = numStr.length

for(let i = 0; i < strLen; i++){
    if(numStr[i] == '0'){
        noOfLoops++
    }else if(numStr[i] == '4'){
        noOfLoops++
    }else if(numStr[i] == '6'){
        noOfLoops++
    }else if(numStr[i] == '8'){
        noOfLoops += 2
    }else if(numStr[i] == '9'){
        noOfLoops++
    }
}

console.log(`Total number of loops: ${noOfLoops}`);
