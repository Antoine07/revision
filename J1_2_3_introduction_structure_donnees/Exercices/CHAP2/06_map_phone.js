const phones = [
    { name: "iphone XX", priceHT: 900 },
    { name: "iphone X", priceHT: 700 },
    { name: "iphone B", priceHT: 200 },
  ];

const TVA = .2 ;

phones.map(phone => {
    phone['priceTTC'] = phone.priceHT * (1 + TVA);

    return phone;
});


console.log(phones);