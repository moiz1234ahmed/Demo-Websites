let a = prompt("Enter a first number=");
let c = prompt("enter the operator=");
let b = prompt("Enter a second number=");
console.log("🚀 ~ a:", typeof a);
console.log("🚀 ~ b:", typeof b);
console.log("🚀 ~ c:", c);

let random = Math.random();
console.log(random);
switch (key) {
  case key == "+":
    console.log(JSON.parse(a) + JSON.parse(b));
    break;
  case key == "-":
    console.log(JSON.parse(a) - JSON.parse(b));
    break;
  case key == "/":
    console.log(JSON.parse(a) / JSON.parse(b));
    break;
  case key == "*":
    console.log(JSON.parse(a) * JSON.parse(b));
    break;
  default:
    break;
}
// if (random > 0.1) {
//   if (c == "+") {
//     console.log(JSON.parse(a) + JSON.parse(b));
//   } else if (c == "-") {
//     console.log(a - b);
//   } else if (c == "*") {
//     console.log(a * b);
//   } else if (c == "/") {
//     console.log(a / b);
//   }
// }
// if (random < 0.1) {
//   if (c == "+") {
//     console.log(a - b);
//   } else if (c == "-") {
//     console.log(a + b);
//   } else if (c == "*") {
//     console.log(a / b);
//   } else if (c == "/") {
//     console.log(a * b);
//   }
// }
