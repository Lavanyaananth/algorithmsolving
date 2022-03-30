const findNemo = (str) => {
  let index = str.split(" ").findIndex((item) => item.indexOf("Nemo") > -1);
  console.log(index);
  return index > -1 ? `I found Nemo at ${index + 1}` : "cant find nemo";
};
console.log(findNemo("I am finding Nemo !"));
