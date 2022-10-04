const A = [8.3, 7.5];
const positions = [[1, 1], [2, 2], [3, 4.5], [0, 9]];
const distances = [];
const PRECISION = 100;

const distance = (a, b) => Math.floor(
  Math.sqrt((a[0] - b[0]) ** 2 + (a[1] - b[1]) ** 2) * PRECISION
) / PRECISION;

positions.map(point => {
  distances.push({point, d : distance(point, A)})
});

distances.sort((a, b) => b.d - a.d );
// max des distances
console.log(distances);

console.log(`Le point le plus éloigné est : ${distances[0].d}`)