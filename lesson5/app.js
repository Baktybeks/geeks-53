console.log("Hello app.js");
// var
// let
// const

let customer = "John";
console.log(customer);
let Customer = "Customer John";
console.log(Customer);
let customerName = "Bakyt";
// let customername = "Bakyt";
let customer_name = "Kuba";
let $ = 12;
let $name = "Altyn";
let num12 = "12";
// let 45
// let 45fsefsef
// let const
// let false
let age = 18;

console.log("имя=", customerName, "возраст=", age);
console.log("имя=" + customerName + ", " + "возраст=" + age);
console.log(`имя=${customerName}, возраст=${age}`);
console.log(customerName, "customerName");

// console.log("" + ОАО + " Северэлектро");
// console.log("\"ОАО\" Северэлектро");

let number = 42;
console.log(number, "number");
number = 90;
console.log(number, "number");

// const number2 = 15;
// number2 = 20;

console.log(typeof customerName, "typeof customerName ");
console.log(typeof number, "typeof number");

let pi = 3.14;

console.log(pi, "pi");
console.log(typeof pi, "typeof number");

let a = 10;
let b = "10";

console.log(a + b, "a+b"); //15
console.log(a - b, "a-b"); //5
console.log(a * b, "a*b"); //50
console.log(a / b, "a/b"); //2
console.log(a % b, "a%b"); // 0 11/5 =1 14/5=4
console.log(a ** b, "a**b"); // 10*10*10*10*10

console.log(16 % 2, "четное");
console.log(27 % 2, "не четное");

console.log("2" * 5);
console.log(2 * "5");
console.log(2 * "asdasd");
console.log("10" * "500сом");
console.log("15" + 200);
console.log(15 + "200");
console.log(45 / 0);
console.log(45 / 0 + 4564654654654654654654654);
console.log(0 / 45);

console.log("a=", a, "b=", b);
console.log(a > b, "a>b");
console.log(a < b, "a<b");
console.log(a >= b, "a>=b");
console.log(a <= b, "a<=b");
console.log(a == b, "a==b");
console.log(a != b, "a!=b");
console.log(a === b, "a===b");
console.log(a !== b, "a!==b");
console.log(true, " true");
console.log(false, " false");
console.log(!false, " !false =true");

console.log(true && true);
console.log(true && true && true && true && true && true && false);

console.log(false || false || true);

console.log((true || false) && true);
console.log((false || false) && true);

// let isAdmin = false;
// let isSuperAdmin = false;
// let isStudent = true;
// let isEdit = true;
// console.log(!isStudent && isEdit);

let isAdmin = true;
let isSuperAdmin = false;
let isStudent = false;
let isEdit = true;

console.log((isAdmin || isSuperAdmin) && isEdit);
console.log(!isStudent && isEdit);
let c = 4;
let d = 10;

if (c > d) {
  console.log(">");
} else if (c > 5) {
  console.log("c > 5");
} else {
  console.log("false");
}

let age1 = prompt("Введите возраст");
console.log(age1);
if (age1 >= 1000) {
  console.log("ВЫ бессмертный");
} else if (age1 > 18 || age1 == 18) {
  console.log("ВЫ совешеннолетний");
} else if (age1 >= 0) {
  console.log("ВЫ  не совешеннолетний");
} else {
  console.log("ВЫ  не правильно ввели возраст");
}
