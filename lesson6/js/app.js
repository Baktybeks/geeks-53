console.log("hello lesson6");

// let color = prompt("цвет");

// let age1 = prompt("Введите возраст");
// console.log(age1);
// if (age1 >= 1000) {
//   console.log("ВЫ бессмертный");
// } else if (age1 > 18 || age1 == 18) {
//   console.log("ВЫ совешеннолетний");
// } else if (age1 >= 0) {
//   console.log("ВЫ  не совешеннолетний");
// } else {
//   console.log("ВЫ  не правильно ввели возраст");
// }

// switch (color) {
//   case "red":
//     console.log("red");
//     break;
//   case "yellow":
//     console.log("yellow");
//     break;
//   case "green":
//     console.log("green");
//     break;
//   default:
//     console.log("не правильный цвет");
// }

let array = [1, "Bakyt", true, 5, 345345345345];

console.log(array);
console.log(array[1]);
console.log(array[2]);

console.log(array.length);
console.log(array[0]);
console.log(array[array.length - 1]);
array[3] = "Kuban";
console.log(array);
console.log(typeof array);
let arr = [1, 2, 3, 4, 5, 6, 7];
console.log(arr);
arr.pop(); //удаляет с конца
arr.shift(); //удаляет с начала
arr.push(654); // добавляет с конца
arr.unshift(123); // добавляет с начала

console.log(arr);

console.log(array.indexOf("Baky"));
console.log(array[array.indexOf("Baky")]);

let age;
let customerAge = 18;

let price = null;
console.log(age ?? "0");
console.log(price ?? "-");
console.log(price);

let array2 = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 12, 31, 31, 51, 454, 584, 84, 61, 64,
];

console.log(array2);

console.log(array2.slice(0, 5));
console.log(array2.slice(7, 10));
console.log(array2.slice(1, 3));
console.log(array2.slice(4, 5));
console.log(array2.slice(-1));
console.log(array2.slice(-2));
console.log(array2.slice(-5));
console.log(array2.slice(-5, -3));

console.log(arr);
console.log(arr.join(", "));
console.log(array2.slice(0, 10).join(", "));
let array3 = "1,2,3,4,5";
console.log(array3.split(","));

let array4 = "1,22,11, 16, 14, 33, 3,4,5";
let array5 = [1, 22, 11, 16, 14, 33, 3, 4, 5];
let array6 = ["awef", "afwe", "safw", "aqweqwe"];

console.log(array5.sort((a, b) => a - b));
console.log(array6.sort());

let sort1 = "1;4;6;5;4;3;2;8;7;5;1;32;3;4;5;9;74;9";

console.log(sort1);

console.log(
  sort1
    .split(";")
    .sort((a, b) => a - b)
    .join(";")
);

let a1 = [1, 2, 3];
let a2 = [4, 5, 6];
console.log([a1, a2]);
console.log([...a1, ...a2]);

let a3 = [11, 21, 31, 41, 51, 61, 7, 8, 9, 7, 1, 1, 2, 2, 12, 1, 21];
let [a, _, c, d, ...rest] = a3;
let aaa1 = a3[0];
console.log(a, c, d);
console.log(rest);

// for (let i = 0; i < a3.length; i++) {
//   console.log(a3[i]);
// }
// for (let i = 0; i < a3.length; i++) {

//   console.log(a3[i] ** 2);
// }
console.log(a3, "a3");

for (let i = 0; i < a3.length; i++) {
  if (i % 2 === 0) {
    console.log(a3[i] ** 2);
  } else {
    console.log(a3[i] ** 3);
  }
}
