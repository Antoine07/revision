const phrase = "Mississipi";

// Approche prototype ==> ajout de méthode à l'objet global Array ou String par exemple
Array.prototype.str = function(){
    for(let i = 0; i <this.length; i++){
        this[i] = this[i].toUpperCase();
    }
}

const phraseArray = [ ...phrase ];

phraseArray.str();

console.log(phraseArray);

String.prototype.count = function(char){
    let count = 0;
    for(let i=0; i < this.length; i++){
        this[i] === char ? ++count : null;
    }

    return count;
}

const stat = {};
for(const letter of (new Set(phrase))){
   stat[letter] = phrase.count(letter) ;
}

console.log(stat);
