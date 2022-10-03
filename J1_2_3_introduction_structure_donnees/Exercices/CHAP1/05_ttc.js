const PRECISION = 100;

function ttc(price, tva = .2){
    price = parseFloat(price);
    tva = parseFloat(tva);
    // error first 
    if(isNaN(price) || isNaN(tva)){
        throw `price ${price} or tva ${tva}`;
    }

    // (1+tva)*price  = price + price*tva
    return Math.floor( (1+tva)*price * PRECISION ) / PRECISION;

}

try{
console.log(ttc(100));
console.log(ttc(100, .3));
console.log(ttc("100", ".3"));
console.log(ttc(ttc(100.50, 0.2)));
console.log(ttc("100.9", .3));

// erreur
console.log(ttc("hello", .3));

}catch(e){
    console.log(e)
}