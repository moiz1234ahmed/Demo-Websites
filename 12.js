// console.log("hey moiz you are good")
// console.log("hey moiz you are brilliant")
// console.log("hey moiz you are nice")
// console.log("hey moiz you are  doing good")
function nice(name) {
  console.log("hey" + name + "you are good");
  console.log("hey" + name + "you are brilliant");
  console.log("hey" + name + "you are nice");
  console.log("hey" + name + "you are doing good");
}
nice("hassan");
nice("waleed");
nice("moiz");
function sum(a, b, c = 4) {
  console.log(a + b + c);
}
sum(1, 9);
sum(1, 2);
sum(1, 5);
sum(1, 1);
const func1 = (x) => {
  console.log("i am an arrow function", x);
};
func1(34);
func1(74);
func1(14);
