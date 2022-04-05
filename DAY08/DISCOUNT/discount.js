const dis = (price, discount) => {
  return price - price * (discount / 100);
};
console.log(dis(1500, 50));
console.log(dis(89, 20));
console.log(dis(100, 75));
