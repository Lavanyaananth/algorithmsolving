const squareDigits = (num) => {
  num = num.toString().split("");
  num = num.map((item) => {
    return item * item;
  });

  console.log(num.join(""));
  return num;
};
squareDigits(9119);
squareDigits(2483);
squareDigits(3212);

const capToFront = (str) => {
  let splitted = str.split("");
  let caps = [];
  let small = [];
  for (let i = 0; i < splitted.length; i++) {
    if (str[i] === str[i].toUpperCase()) {
      caps.push(str[i]);
    }
    if (str[i] === str[i].toLowerCase()) {
      small.push(str[i]);
    }
  }
  let final = caps.join("").concat(small.join(""));
  console.log(final);
  return final;
};
capToFront("hApPy");

capToFront("moveMENT");

capToFront("shOrtCAKE");
