const numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// si pas de valeur initiale il prend le premier élément du tableau 
// pour vous rendre compte inverser 1 et 2 dans le tableau sans valeur initiale
const sumOdd = numbers.reduce((acc, curr) => curr % 2 ? acc + curr : acc, 0);

console.log(sumOdd);