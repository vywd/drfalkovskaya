const burgerButton = document.querySelector('#burgerButton');
const header = document.querySelector('.header');
const body = document.querySelector('body');
const fadeElems = document.querySelectorAll('.has-fade');
const mobMenuClick = document.querySelector('#mobMenuClick');

burgerButton.addEventListener('click', function(){
    if (header.classList.contains('open')){
        header.classList.remove('open')
        body.classList.remove('noscroll')
        fadeElems.forEach(function(element){
            element.classList.remove('fade-in');
            element.classList.add('fade-out'); 
        });

    } else {
        header.classList.add('open')
        body.classList.add('noscroll')
        fadeElems.forEach(function(element){
            element.classList.remove('fade-out');                      //Open HM
            element.classList.add('fade-in');
        });
    }
})


mobMenuClick.addEventListener('click', () => {
    header.classList.remove('open')
    body.classList.remove('noscroll')
    fadeElems.forEach(function(element){
        element.classList.remove('fade-in');
        element.classList.add('fade-out'); 
    });
})
