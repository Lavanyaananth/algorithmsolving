const triangle = (num) => {
  let count = 0;
  for (let i = 1; i <= num; i++) {
    count = count + i;
  }
  return count;
};
console.log(triangle(1));
console.log(triangle(6));
console.log(triangle(215));
