let body = document.querySelector('body');
let button = document.querySelector('button')


function changeColor() {
    // Make an Array of colours
    let myArr = ['green', 'blue', 'pink', 'yellow', 'orange']
    for(let i = 0; i < myArr.length; i++){
        console.log(myArr[i]);
        body.style.backgroundColor = myArr[i];
    }
}

button.addEventListener('click', changeColor)






