

console.log( [...(new Set([1, 1, 1, 1, 2, 3, 4, 5]))] ) ;

const students = {
    name : "Alan",
    email : "alan@alan.fr",
    address : [
        "Paris", "London"
    ]
}

// le spread operator fait une copy peu profonde
const StudentShallowCopy = { ... students }

/**
 * Exercice
 * 
 * démontrer à partir de l'exemple ci-dessus que le spread operator ne fait pas de deep copy
 */

// La copie peu profonde ne copie pas les références de référence ...
// le spread operator copie uniquement les premières références.

StudentShallowCopy['address'][0] = "PARIS";
StudentShallowCopy['name'] = "Antoine";

console.log(StudentShallowCopy);
console.log(students);