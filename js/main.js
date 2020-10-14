AOS.init();

window.onscroll = function() {scrollFunction()};

const nav = document.getElementById('navigation');
function scrollFunction() {
    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
        nav.style.backgroundColor = '#0E7BAE';
        nav.style.transition = '0.5s';
    } else {
        nav.style.transition = '0.5s';
        nav.style.backgroundColor = 'transparent';
    }
}