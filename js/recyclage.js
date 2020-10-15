
const nbMegots = Math.floor(Math.random() * 1000);
const nbProduits = Math.floor(nbMegots / 8);
const listProduits = [
    'couvertures',
    'vestes',
    'manteaux'

];

function animateValue(id, start, end, duration) {
    if (start === end) return;
    var range = end - start;
    var current = start;
    var increment = end > start? 1 : -1;
    var stepTime = Math.abs(Math.floor(duration / range));
    var obj = document.getElementById(id);
    var timer = setInterval(function() {
        current += increment;
        obj.innerHTML = current;
        if (current == end) {
            clearInterval(timer);
            showProduct();

        }
    }, stepTime);
}


function showProduct(){
    document.getElementById('nbProduit').innerHTML = nbProduits;
    console.log(listProduits[Math.floor(Math.random() * 3)]);
    document.getElementById('produit').innerHTML = listProduits[Math.floor(Math.random() * 3)];
}

window.onload = function() {
    animateValue("nbMegots", 0, nbMegots, 8000);
};

