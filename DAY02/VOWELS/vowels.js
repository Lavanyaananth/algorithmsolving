const vowels = (str) => {
  return str.match(/[aeiou]/gi).length;
};
console.log(vowels("Javascript Programmer"));
console.log(vowels("Aavascript Programmer"));
