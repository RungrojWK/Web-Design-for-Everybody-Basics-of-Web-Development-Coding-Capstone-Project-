var booToggler = false;

document.getElementById('toggler').addEventListener('click', function() {

    var nav = document.querySelector('.nav');
    nav.classList.remove('nav-toggler-off');
    nav.classList.add('nav-toggler-on');

    var nav2 = document.querySelector('.nav-toggler');
    nav2.classList.add('hidden');
    nav2.classList.remove('show');

});

document.querySelector('.nav-close').addEventListener('click', function() {

    var nav = document.querySelector('.nav');    
    nav.classList.remove('nav-toggler-on');
    nav.classList.add('nav-toggler-off');

    var nav2 = document.querySelector('.nav-toggler');
    nav2.classList.add('show');
    nav2.classList.remove('hidden');

});


