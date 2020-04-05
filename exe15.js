function groupAnimals(animals) {
  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  const collectionData = {};

  for (let i = 0; i < alphabet.length; i++) {
    collectionData[alphabet[i]] = [];
  }

  for (let i = 0; i < animals.length; i++) {
    collectionData[animals[i][0]].push(animals[i]);
  }

  let result = [];

  for (let i = 0; i < alphabet.length; i++) {
    if (collectionData[alphabet[i]].length > 0) {
      result.push(collectionData[alphabet[i]]);
    }
  }

  return result;
}

// TEST CASES
console.log(groupAnimals(["cacing", "ayam", "kuda", "anoa", "kancil"]));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(
  groupAnimals(["cacing", "ayam", "kuda", "anoa", "kancil", "unta", "cicak"])
);
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]
