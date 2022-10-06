
const DataStudents =
    [
        [
            "s1",
            {
                "name": "Alice",
                "mention": "",
                "notes": [11, 12, 18],
                "average": null,
                "url": "http://lorempixel.com/100/100/cats/1"
            }
        ],
        [
            "s2",
            {
                "name": "Alan",
                "mention": "",
                "notes": [10, 14.5, 11],
                "average": null,
                "url": "http://lorempixel.com/100/100/cats/2"
            }
        ],
        [
            "s3",
            {
                "name": "Bernard",
                "mention": "",
                "notes": [11, 9, 9],
                "average": null,
                "url": "http://lorempixel.com/100/100/cats/2"
            }
        ],
        [
            "s4",
            {
                "name": "Naoudi",
                "mention": "",
                "notes": [14.5, 19, 18],
                "average": null,
                "url": "http://lorempixel.com/100/100/cats/3"
            }
        ],
        [
            "s5",
            {
                "name": "Fenley",
                "mention": "",
                "notes": [9, 7, 11],
                "average": null,
                "url": "http://lorempixel.com/100/100/cats/4"
            }
        ],
        [
            "s6",
            {
                "name": "Shere Khan",
                "mention": "",
                "notes": [],
                "average": null,
                "url": "http://lorempixel.com/100/100/cats/4"
            }
        ]
    ];

// création du Map
// new Map( [[k, v],  ...] )
const dataStMap = new Map(DataStudents);
const PRECISION = 100;

function average(data) {
    const len = data.length;

    if (
        Array.isArray(data) === false
        ||
        len === 0
    )
        return null;

    return Math.floor(
        (data.reduce((acc, curr) => acc + curr) / len) * PRECISION
    ) / PRECISION;
}

for (const [id, student] of dataStMap.entries()) {
    const { notes } = student;
    student.average = average(notes);
    switch (student.average) {
        case student.average >= 17:
            student.mention = 'TB';
            break;
        case student.average >= 14:
            student.mention = 'B';
            break;
        case student.average >= 12:
            student.mention = 'AB';
            break;
        case student.average >= 10:
            student.mention = 'P';
            break;
        default:
            student.mention = null;
    }
}

console.log(dataStMap);

// Ajoutez un étudiant

function addStudent(k, student, dataSet) {
    const re = new RegExp(/s\d{1,}/, 'g');

    if (
        re.test(k) === false
        ||
        dataSet.has(k)
    ) {
        throw "Syntax key error k student or key exists";
    }

    dataSet.set(k, student);
    return true;
}

const student =   {
    "name": "Alice",
    "mention": "",
    "notes": [9, 7, 11, 9, 18, 17],
    "average": null,
    "url": "http://lorempixel.com/100/100/cats/4"
}

addStudent("s677",student, dataStMap );

console.log(dataStMap);