// const nbMegots = Math.floor(Math.random() * 1000);
// const domNumber = document.getElementById('nbMegot');

// function updateNbMegot(){
//     while(domNumber != nbMegots){
//         domNumber.innerHTML = 
//     }
// }



function animateValue(id, start, end, duration) {
    if (start === end) return;
    var range = end - start;
    var current = start;
    var increment = end > start? 1 : -1;
    var stepTime = Math.abs(Math.floor(duration / range));
    console.log(stepTime);
    var obj = document.getElementById(id);
    var timer = setInterval(function() {
        current += increment;
        obj.innerHTML = current;
        if (current == end) {
            clearInterval(timer);
        }
    }, stepTime);
}

window.onload = function() {
    animateValue("nbMegots", 0, Math.floor(Math.random() * 501), 8000);
};