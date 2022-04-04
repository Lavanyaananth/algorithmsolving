const chunkify = (arr, n) => {
  let chunked = [];
  while (arr.length > 0) {
    chunked.push(arr.splice(0, n));
    console.log("chunked" + chunked);
  }
  return chunked;
};

chunkify([2, 3, 4, 5], 2);

chunkify([2, 3, 4, 5, 6], 2);

chunkify([2, 3, 4, 5, 6, 7], 3);

chunkify([2, 3, 4, 5, 6, 7], 1);

chunkify([2, 3, 4, 5, 6, 7], 7);

const rev = (n) => {
  let num = Math.abs(n);
  console.log(num);
  n = num.toString().split("").reverse().join("");
  console.log("reversed" + " " + n);
  return n;
};
rev(5121);
rev(69);
rev(-122157);
