const memeSum = (x, y) => {
  let xarr = x.toString().split("");
  let yarr = y.toString().split("");

  xarr.length > yarr.length
    ? yarr.unshift(0)
    : yarr.length > xarr.length
    ? xarr.unshift(0)
    : "";
  console.log(xarr, yarr);
  let result = xarr.map((item, index) => {
    return parseInt(item) + parseInt(yarr[index]);
  });
  return parseInt(result.join(""));
};

console.log("memesum" + " " + memeSum(26, 39));
// 2+3 = 5, 6+9 = 15
// 26 + 39 = 515

console.log("memesum" + " " + memeSum(122, 81));
// 1+0 = 1, 2+8 = 10, 2+1 = 3
// 122 + 81 = 1103

console.log("memesum" + " " + memeSum(1222, 30277));
