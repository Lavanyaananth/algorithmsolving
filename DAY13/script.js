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

const capToFront = (str) => {};
capToFront("hApPy");

capToFront("moveMENT");

capToFront("shOrtCAKE");
