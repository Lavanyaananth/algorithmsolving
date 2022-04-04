const perimeter = (l, num) => {
  let square = "s";
  let circle = "c";
  let check = (l === square && 4 * num) || (l === circle && 6.28 * num);
  console.log(check);
  return check;
};
perimeter("s", 7);
perimeter("c", 4);
perimeter("c", 9);

const coneVolume = (h, r) => {
  const pi = 3.14159;
  let volume = (h * pi * r * r) / 3;
  console.log(volume);
  return volume;
};
coneVolume(3, 2);
coneVolume(15, 6);
coneVolume(18, 0);
