const phrase = '8790:bonjour le monde:8987:7777:Hello World:9007';
const pattern = ":";
const statistic =  phrase.split(pattern).filter(Number) ;
console.log(statistic);

const phrase2 = '8790 bonjour le monde8987 7777Hello World 9007';
console.log( phrase2.match(/\d+/g) )
console.log( phrase.match(/\d+/g) )