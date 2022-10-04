
const coffee = {
    count : 100,
    save: function () {
         'use strict';
        console.log(this.count);
        const that = this; // mettre le contexte de l'objet créé 
        console.log("that", this.that)
        function baz(){
            console.log(this); // undefined 
            console.log(that);
            console.log(coffee.count)
        }

        baz();
        // les fonctions flèchées ne re-definissent pas le context
        const a = () => {console.log("ici le count est accessible", this.count);}
        a();
    }
}

// en exécutant la fonction le context sera créé.
coffee.save()

// fonction construteur 
function Model(){
    console.log(this)
}

// on définit un context spécifique pour la fonction 
new Model();

const b = () => {
    console.log("b", this)
}

b();