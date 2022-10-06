const populations = [
    { id: 0, name: "Alan" },
    { id: 1, name: "Albert" },
    { id: 2, name: "Jhon" },
    { id: 3, name: "Brice" },
    { id: 4, name: "Alexendra" },
    { id: 5, name: "Brad" },
    { id: 6, name: "Carl" },
    { id: 7, name: "Dallas" },
    { id: 8, name: "Dennis" },
    { id: 9, name: "Edgar" },
    { id: 10, name: "Erika" },
    { id: 11, name: "Isaac" },
    { id: 12, name: "Ian" },
];

// 1 Ordonnez par longueur des noms
populations.sort((p1, p2) => p1.name.length - p2.name.length);
console.log(populations);

for (const pop of populations) {
    pop.lenName = pop.name.length;
}

console.log(populations);

// Créez un tableau qui récupère chaque longueur de nom une seule fois

const lenNames = new Set(populations.map(({ lenName }) => lenName));

console.log(lenNames);


// 4 

const relations = [
    { id: 0, relation: [1, 2, 4] },
    { id: 3, relation: [7, 8] },
    { id: 4, relation: [2, 7, 8, 11] },
    { id: 5, relation: [1, 2, 4] },
    { id: 7, relation: [2, 3, 5, 9] },
    { id: 9, relation: [1, 2, 4, 8, 11] },
    { id: 11, relation: [1, 2, 9, 10,] },
];

for (const { id, relation } of relations) {
    const person = populations.find(p => p.id === id);
    if (person) {
        person.relation = populations.filter(
            p => relation.includes(p.id)
        ).map(p => p.name);
    }
}

console.log(populations);