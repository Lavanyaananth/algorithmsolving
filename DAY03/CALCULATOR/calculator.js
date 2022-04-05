function calculator(num1, op, num2) {
  if ((op === "/") & (num2 === 0)) {
    return "can't divide";
  }
  if (op === "+") {
    return num1 + num2;
  }
  if (op === "-") {
    return num1 - num2;
  }
  if (op === "*") {
    return num1 * num2;
  }
  if (op === "/") {
    return num1 / num2;
  }
}
calculator(2, "+", 2);
calculator(2, "*", 4);
calculator(16, "/", 2);
calculator(20, "-", 2);
