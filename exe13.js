function targetTerdekat(arr) {
  let oIndexFound = null;
  let xFound = [];
  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case "o":
        oIndexFound = i;
        break;

      case "x":
        xFound.push(i);
        break;
    }
  }

  if (xFound.length === 0) {
    return 0;
  }

  let kumpulanTerdekat = [];
  for (let i = 0; i < xFound.length; i++) {
    kumpulanTerdekat.push(xFound[i] - oIndexFound);
  }

  let hasil = Math.min(...kumpulanTerdekat);

  if (hasil < 0) {
    hasil = hasil + oIndexFound + 1;
  } else {
    hasil = Math.min(...kumpulanTerdekat);
  }

  return hasil;
}

// TEST CASES
console.log(targetTerdekat([" ", " ", "o", " ", " ", "x", " ", "x"])); // 3
console.log(targetTerdekat(["o", " ", " ", " ", "x", "x", "x"])); // 4
console.log(targetTerdekat(["x", " ", " ", " ", "x", "x", "o", " "])); // 1
console.log(targetTerdekat([" ", " ", "o", " "])); // 0
console.log(targetTerdekat([" ", "o", " ", "x", "x", " ", " ", "x"])); // 2
