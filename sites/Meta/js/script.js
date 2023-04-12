

function openNav(){
    var navBox = document.getElementById('nav');
    var body = document.getElementById('body');

    // body.style.overflow = 'hidden'

    navBox.style.left = '0';
    navBox.style.transition = 'all 0.4s';
}

function closeNav(){
    var navBox = document.getElementById('nav');
    var body = document.getElementById('body');

    // body.style.overflow = 'auto'

    navBox.style.left = '-320px';
    navBox.style.transition = 'all 0.4s';

}