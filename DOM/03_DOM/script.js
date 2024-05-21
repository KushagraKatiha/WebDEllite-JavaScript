
// __________________________Parent to Child_________________________

let parent = document.querySelector('.week');   // Select the parent element
console.log(parent);

// let children = parent.children;         // Select the children of the parent element (HTMLCollection)
// console.log(children);

// let childrenArr = Array.from(children);         // Convert the HTMLCollection to an Array (Array)

// console.log(childrenArr);

// childrenArr.forEach(function(child){
//     console.log(child);
//     child.style.backgroundColor = 'blue';       // Change bgc to blue
// })

// let firstChild = parent.firstElementChild;       // Select the first child of the parent element
// console.log(firstChild);

// // Manuplate the styling of the first element

// let lastChild = parent.lastElementChild;         // Select the last child of the parent element
// console.log(lastChild);

// Manuplate the styling of the last element



// __________________________Child to Parent_________________________

// let child = document.querySelector('.days');        // Select the child element
// console.log(child);

// let parent = child.parentElement;        // Select the parent element of the child element
// console.log(parent);

// let sibling = child.nextElementSibling;      // Select the next sibling of the child element
// console.log(sibling);

// let previousSibling = child.previousElementSibling;      // Select the previous sibling of the child element
// console.log(previousSibling);


// __________________________Child Nodes_________________________

let nodes = parent.childNodes;      // Select all the nodes of the parent element
console.log(nodes);