const ascDesNone = (arr, str) => {
  let final =
    str === "Asc"
      ? [...arr].sort((a, b) => (a < b ? -1 : 0))
      : str === "Des"
      ? [...arr].sort((a, b) => (a > b ? -1 : 0))
      : arr;
  console.log(final);
  return final;
};
ascDesNone([4, 3, 2, 1], "Asc");
ascDesNone([7, 8, 11, 66], "Des");
ascDesNone([1, 2, 3, 4], "None");

// second
const jazzify = (jazzarr) => {
  let splitted = jazzarr.toString();
  let finalJazz =
    jazzarr.length > 0
      ? splitted.includes(7)
        ? jazzarr
        : jazzarr.map((item) => item + 7)
      : [];
  console.log(finalJazz);
  return finalJazz;
};
jazzify(["G", "F", "C"]);
jazzify(["Dm", "G", "E", "A"]);
jazzify(["F7", "E7", "A7", "Ab7", "Gm7", "C7"]);
jazzify([]);
