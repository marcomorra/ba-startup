/* Slider in Team block */
let left = document.querySelector('#left');
let right = document.querySelector('#right');
var leftPosition = 0;

left.addEventListener('click', function(){
    let container = document.querySelector('#ba-slider');
    leftPosition -= 286;
    if(leftPosition < -4004) {
        leftPosition = 0;
    }
    container.style.left = leftPosition + 'px';
})

right.addEventListener('click', function(){
    let container = document.querySelector('#ba-slider');
    leftPosition += 286;
    if(leftPosition > 4004) {
        leftPosition = 0;
    }
    container.style.left = leftPosition + 'px';
})

new WOW().init();
/* Filter in Works block */
const works = document.querySelectorAll('.ba-holder');
const button = document.querySelectorAll('.ba-filter li a');

for(let i = 0; i < button.length; i++) {
    let name = button[i].id;
    button[i].addEventListener('click', function() {
        for(let i = 0; i < works.length; i++) {
            if(name === 'all') {
                works[i].style.display = "block";
            }
            else if(works[i].classList.contains(name)) {
                works[i].style.display = "block";
            }
            else {
                works[i].style.display = "none";
            }
        }
    })
}

var all = document.getElementById("all");
all.addEventListener('click', function() {
    for(let i = 0; i < works.length; i++) {
        works[i].style.display = "block";
    }
})

$(document).ready(function(){
    $("#menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 2000);
    });
});
