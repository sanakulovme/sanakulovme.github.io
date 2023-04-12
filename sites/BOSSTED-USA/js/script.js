

function openNav(){
    var navbox = document.getElementById('nav');

    navbox.style.left = '-320px';
    navbox.style.transition = 'all 0.4s'

}

function closeNav(){
    var navbox = document.getElementById('nav');
    navbox.style.left = '0';
    navbox.style.transition = 'all 0.4s'

}