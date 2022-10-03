const PRECISION = 100;

function sumTTC(x, y, z, tva = .2) {
    // assignation par décomposition des variables du tableau de gauche  respectivement x, y, z et tva avec les valeurs du tableau de droite. Assignation propre à JS
    [x, y, z, tva] = [parseFloat(x), parseFloat(y), parseFloat(z), parseFloat(tva)];

    // // error first bonne pratique 
    if (isNaN(x) || isNaN(y) || isNaN(z) || isNaN(tva)) {
        throw `error type`;
    }

    let sum = (x + y + y) * (1 + tva);

    return Math.floor( sum * PRECISION ) / PRECISION;

}

try {
    console.log(sumTTC(1, 2, 3));
    console.log(sumTTC(100, 100, 200, .3));
    console.log(sumTTC("100", "13", "67", ".3"));

    // // erreur
    console.log(sumTTC("hello", 3, 67));

} catch (e) {
    console.log(e)
}