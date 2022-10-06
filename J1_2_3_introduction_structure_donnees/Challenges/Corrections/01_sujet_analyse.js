const populations = [
    { id: 0, name: "Alan", jobs: ['dev junior', 'dev fullstack'], password: "tyeedsa00" },
    { id: 1, name: "Albert", jobs: ['doctor'], password: "tyeidii00" },
    { id: 2, name: "Jhon", jobs: ['mathematician', 'doctor'], password: "xyuuuoi00" },
    { id: 3, name: "Brice", jobs: ['dev fullstack'], password: "xytoiab00" },
    { id: 4, name: "Alexendra", jobs: ['dentist'], password: "aaaoiab33" },
    { id: 5, name: "Brad" },
    { id: 6, name: "Carl", jobs: ['lead dev', 'dev fullstack'] },
    { id: 7, name: "Dallas", jobs: ['dev fullstack'] },
    { id: 8, name: "Dennis", jobs: ['integrator', 'dev fullstack'] },
    { id: 9, name: "Edgar", jobs: ['mathematician'] },
    { id: 10, name: "Erika", jobs: ['computer scientist', 'mathematician'] },
    { id: 11, name: "Isaac", jobs: ['doctor'], password: "Axgkj22Kl" },
    { id: 12, name: "Ian", password: "Axgkj00Kl" },
];

// 1. Compter tous les docteurs

const countDoc = populations.filter(({ jobs }) => jobs && jobs.includes('doctor')).length;

console.log(countDoc);

// 2. récupérez les noms des développeurs fullstack
console.log(
    populations
        .filter(({ jobs }) => jobs && jobs.includes('dev fullstack'))
        .map(({ name }) => name)
);

// 3.  Récupérez les gens qui n'ont jamais travaillés
console.log(populations.filter(({ jobs }) => typeof jobs === 'undefined'));

// 4. Etudiez les mots de passe de chaque personne

// mot de passe & nom

String.prototype.count = function(char){
    let count = 0;
    for(let i=0; i < this.length; i++){
        this[i] === char ? ++count : null;
    }

    return count;
}

function countLetter(password){
    const letters = new Set(password);
    const stat = {};
    for(const letter of letters){
        stat[letter] = password.count(letter);
    }

    return stat;
}

const personWithPassword = populations
    .filter(({ password }) => typeof password !== 'undefined')
    .map(({ name, password }) => ({ name, password, count: countLetter(password) }));

console.log(personWithPassword);

// Comptez l'occurence de chaque mot de passe