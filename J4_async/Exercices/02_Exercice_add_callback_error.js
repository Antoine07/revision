const TIMER = 500;

function Add(number, callback, error) {
  if (isNaN(parseFloat(number))) {
    error(number);
  } else {
    setTimeout(() => {
      callback(number);
    }, TIMER);
  }
};

// throw new Error("ceci n'est pas un nombre")
function error(err) { console.error(`Ceci n'est pas un nombre ${err}`) };

Add(1, (number) => {
  // variable définie au niveau du bloc
  let sum = parseFloat(number);

  Add("2", (number) => {
    sum += parseFloat(number); // on récupère la somme précédente

    Add("3", (number) => {
      sum += parseFloat(number);

      console.log(sum);
    }, error);
  }, error);
}, error);
