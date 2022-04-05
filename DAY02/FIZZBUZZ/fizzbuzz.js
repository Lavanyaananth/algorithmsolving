const fizzbuzz = () => {
  let arr = Array.from({ length: 100 }, (_, num) => num + 1);
  let resultingarr = arr.map((item) => {
    return item % 3 === 0 ? "fizz" : item % 5 === 0 ? "buzz" : item;
  });
  console.log(resultingarr);
};
fizzbuzz();
