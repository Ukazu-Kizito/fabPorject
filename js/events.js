let container = document.getElementById('container');
let click = document.getElementById('click');

// click.addEventListener('mouseover', function(){
//     container.style.backgroundColor = "blue";
//     container.style.color = "white";
//     container.style.transition = "1s";
// })

// Function

// function changeBg(){
//     container.style.backgroundColor = "grey";
// }

click.addEventListener('click', function(){
    container.classList.toggle('active');
})









