// Selecting html element

let container = document.getElementById('container')
container.style.backgroundColor = "black";
container.style.color = "white";

// querySelector

// let container2 = document.querySelector('.container2')
// container2.style.fontSize = "50px";

let h2 = document.querySelector('h2')
h2.style.color = "blue";

// querySelectorAll

let paragraph = document.querySelectorAll('.paragraph');
// let para = document.getElementsByClassName('')

// for(let i = 0; paragraph.length; i++){
//     paragraph[i].style.color = "blue";
// }

let display = document.getElementById('display');
display.style.display = "flex";
display.style.fontFamily = "Sans-serif";

// Manipulating html content using Javascript

// textContent
// innerText
// innerHTML

// h2.textContent = "Javascript is very interesting";
// h2.innerText = "Javascript is cool";
// h2.innerHTML = "<h1>Javascript is cool</h1>";

// CREATING ELEMENT USING JAVASCRIPT

let ul = document.querySelector('ul');
let li = document.createElement('li');
li.innerText = "Services";
ul.appendChild(li);

// Adding attribute using javascript

h2.setAttribute('id', 'heading')
h2.setAttribute('class', 'heading')


// classList

h2.classList.add('active')

