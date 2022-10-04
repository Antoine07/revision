// 1. inversez la chaîne de caractères sentence
const sentence = "Bonjour tout le monde, vous aimez JS ?";
const newSentence = [ ...sentence ];
let str = "";

while(newSentence.length > 0){
    str += newSentence.pop()
}
console.log(str);

// une deuxième approche
console.log([...sentence].reverse().join(''));

// 2. longueur de mot
const words = [ ...sentence]
    .join('')
    .replaceAll( /[?,\.]/g, "")
    .trim()
    .split(' ')
    .map( word => ({ word, count : word.length}))
console.log(words);

// 3. counter letter dans la phrase 
const sanitizeSentence = [ ...sentence]
.join('')
.replaceAll( /[?,\.\s]/g, "")
.trim();

const letters = new Set(sanitizeSentence);
const sentenceArray = [ ...sanitizeSentence ];
const stat = [];

for(const letter of letters){
    const count = sentenceArray.filter(l => l === letter ).length;

    stat.push({ count , letter });
}

console.log(stat) ;