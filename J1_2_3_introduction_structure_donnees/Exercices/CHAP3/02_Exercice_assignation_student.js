const student = {
    name: "Alan",
    notes: [10, 16, 17, "18"],
    average: null,
};

const PRECISION = 100;

// prototype sur les tableau pour vérifier si toutes les valeurs sont des float true/false
Array.prototype.isnumeric = function () {

    for (let i = 0; i < this.length; i++) {
        if (isNaN(parseFloat(this[i]))) return false;
    }

    return true;
}

// fonction qui vérifie si on a un tableau de float et si le tableau est non vide : error first
// dans la fonction average on utilise l'assignation par décomposition.
function average({ notes }) {
    const len = notes.length;
    if (
        len === 0
        || Array.isArray(notes) === false
        || notes.isnumeric() === false
    ) throw "Error no value";

    const sum = notes.map(parseFloat).reduce((acc, curr) => acc + curr);

    return Math.floor((sum / len) * PRECISION) / PRECISION;
}

try {
    student.average = average(student);
    console.log(student);
} catch (e) {
    console.log(e);
}