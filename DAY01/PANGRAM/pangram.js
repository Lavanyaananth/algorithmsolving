function pangram(str) {
  let alphacheck = /([a-z])(?!.*\1)/gi;
  return str.match(alphacheck).length === 26;
}
console.log(pangram("abcd efg ijkl mnop qrst uvwx yz"));
console.log(pangram("Is 'How quickly daft jumping zebras vex.' a pangram ?"));
console.log(pangram("The quick brown fox jumps over the lazy dog"));
