// 1. inversez la chaîne de caractères sentence
const sentence = "Bonjour tout le monde, vous aimez JS ?";
const newSentence = [...sentence];
let str = "";

while (newSentence.length > 0) {
    str += newSentence.pop()
}
console.log(str);

// une deuxième approche
console.log([...sentence].reverse().join(''));

// 2. longueur de mot
// sanitize 
const sanitizeSentence = [...sentence]
    .join('')
    .replaceAll(/[^\w\s\u00C0-\u00FF]/gi, "")
    .trim();

console.log(sanitizeSentence)

const words = sanitizeSentence.split(' ').map(word => ({ word, count: word.length }))
console.log(words);

// 3. counter letter dans la phrase 
const stat = {};
const sentenceArray = [...sanitizeSentence] ;
for (const letter of (new Set(sanitizeSentence))) {
    if(letter === ' ') continue;
    const count = sentenceArray.filter( l => l === letter).length;
    stat[letter] = count ;
}

console.log(stat);