class Circle {
  constructor(Radius) {
    this.radius = Radius;
  }
  getArea() {
    return Math.PI * (this.radius * this.radius);
  }
  getPerimeter() {
    return 2 * (Math.PI * this.radius);
  }
}
const area = new Circle(11);
const perimeter = new Circle(4.44);
console.log(area.getArea());
console.log(perimeter.getPerimeter());

const clone = (arr) => {
  arr.push([...arr]);
  console.log("array" + " " + arr);
  return arr;
};
clone([1, 1]);
clone([1, 2, 3]);
clone(["x", "y"]);
