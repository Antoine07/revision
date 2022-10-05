const students = [
    {
        name: "Alan",
        family: {
            mother: "Yvette",
            father: "Michel",
            sister: "Sylvie",
        },
        age: 35,
    },
    {
        name: "Bernard",
        family: {
            mother: "Alice",
            father: "Caroline",
            sister: "Sophie",
        },
        age: 55,
    },
];

function deepCopyStudents(state) {
    return state.map(student => ({ ...student, family: { ...student.family } }));
}

const newStudents = deepCopyStudents(students);

newStudents[0]['family'].mother = "Marie";

console.log(newStudents);
console.log(students);
