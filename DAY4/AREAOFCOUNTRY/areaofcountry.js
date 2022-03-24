const areaOfCountry = (name, area) => {
  let totalarea = 148940000;
  let result = ((area / totalarea) * 100).toFixed(2);
  let final = ` ${name} is ${result}% of the total world's landmass"`;
  return final;
};
console.log(areaOfCountry("Russia", 17098242));
