const ROT13 = (str) => {
  console.log(str);
  const originalAlphabet =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const ciphered = "nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM";
  return str.replace(
    /[a-z]/gi,
    (alph) => ciphered[originalAlphabet.indexOf(alph)]
  );
};

ROT13("Grf/");
ROT13("123dE");
