function countLoneOnes(num) {
  let count = 0;
  num = num.toString().split("");
  console.log("length", num.length);

  for (let i = 1; i < num.length - 1; i++) {
    (num[i] === "1") & (num[i + 1] === "1") ? count : (count += 1);
  }
  console.log("count is", count);
  //   num = num.map((item) => {
  //     item.includes("1") && item ? (count += 1) : count;
  //   });

  return count % 2 === 0 ? 0 : 1;
}
console.log(countLoneOnes(101));
console.log(countLoneOnes(1191));
console.log(countLoneOnes(1111));
console.log(countLoneOnes(462));
