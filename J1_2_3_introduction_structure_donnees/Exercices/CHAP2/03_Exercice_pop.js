
const populations = [
    { "id": 0, "name": "Alan" },
    { "id": 1, "name": "Albert" },
    { "id": 2, "name": "Jhon" },
    { "id": 3, "name": "Brice" },
    { "id": 4, "name": "Alexendra" },
    { "id": 5, "name": "Brad" },
    { "id": 6, "name": "Carl" },
    { "id": 7, "name": "Dallas" },
    { "id": 8, "name": "Dennis" },
    { "id": 9, "name": "Edgar" },
    { "id": 10, "name": "Erika" },
    { "id": 11, "name": "Isaac" },
    { "id": 12, "name": "Ian" },
    { "id": 13, "name": "Laurent" },
];

for (const pop of populations) {
    pop['count'] = (pop.name.match(/l|a/ig) || []).length ;
}

console.log(populations);

// sort agit par référence sur le tableau
populations.sort((p1, p2) => p1.count - p2.count);

console.log(populations);
