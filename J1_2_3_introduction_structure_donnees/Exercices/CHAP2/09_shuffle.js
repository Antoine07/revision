

const numbers = [1, 11, 9, 0, 18, 2, 4];

numbers.sort( _ => Math.random() - .5  );

console.log(numbers)

/*
 [1, 11, 9, 0, 18, 2, 4]
plusGrand = 1 
  1 > 11  // test de comparaison
plusGrand = 11
11 - 9 >  0
11 - 0 > 0
11 - 18 > 0
plusGrand = 18
18 > 2
18 > 4

[0, 1,2,4, 9,11,18]
*/