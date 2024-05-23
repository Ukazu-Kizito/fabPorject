let navbar = document.getElementById('navbar');
let scrollValue = window.scrollY

function colorChange(){
    if(scrollValue > 100){
        navbar.classList.add('active')
    }
}


window.addEventListener('scroll', colorChange)