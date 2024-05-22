const body = document.querySelector('body');
const button = document.querySelector('button');
const div = document.querySelector('div');

// ___________Creating Element using JS_________________

const ul = document.createElement('ul')
ul.className = 'week'
ul.id = 'myWeek'
ul.setAttribute('name', 'weekList')
body.appendChild(ul)

let i = 0

button.addEventListener('click', addDays);

function addDays() {
    let daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    
    let li = document.createElement('li')
    li.style.color = '#ffffff'
    li.innerText = daysOfWeek[i]

    ul.appendChild(li)

    if( i == 6){
        i = 0
    }else {
        i++
    }

}
