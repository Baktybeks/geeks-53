console.log("Hello, World!");

let name = "John Doe";
let age = 30;
let city = "New York";

let person = {
  name: "John Doe",
  age: 30,

  city: "New York",
  passport: {
    inn: 321321351351351,
    series: 1234,
    number: 123456,
    issueDate: "2020-01-01",
    expirationDate: "2030-01-01",
  },
  bankAccount: {
    accountNumber: "1234567890",
    "bank name": "Bank of America",
    balance: 1000.5,
  },
  cars: ["Toyota", "Honda", "Ford"],
  isAdmin: false,
  price: 6541654654,
};

let accountNumber123 = "accountNumber";

console.log(person.name, "name");
console.log(person.age, "age");
console.log(person.city, "city");
console.log(person.passport.inn, "passport inn");
console.log(person.passport.innPassport, "passport inn");
console.log(person.bankAccount["bank name"], "bank name");
console.log(person.bankAccount[accountNumber123], "accountNumber");
console.log(person.bankAccount.accountNumber123, "accountNumber");
console.log(person.cars.join(", "), "cars");

let phone = new Object();
phone.brand = "Apple";
phone.model = "iPhone 13";
phone.price = 999.99;

let customer = {
  ...phone,
  name: "Alice Smith",
  age: 28,
};

console.log(customer, "customer");

console.log(phone, "phone");

let property = "brand";
let value = "Samsung Galaxy S21";

let phone2 = {
  brand: "Apple",
  [property]: value,
  [`${property}Model`]: "Galaxy S21 Ultra",
  price: 799.99,
};

console.log(phone2, "phone2");

for (let key in person) {
  console.log(`${key}: ${person[key]}`);
}

for (let key in person) {
  if (typeof person[key] === "number") {
    console.log(`${key}: ${person[key]}`);
  }
}

console.log(typeof person, "typeof person");
console.log(typeof [1, 2, 3, 3, 2, 2, , 2], "typeof array");

const product = {
  name: "Laptop",
  price: 1200,
  inStock: true,
  details: {
    brand: "Dell",
    model: "XPS 13",
    year: 2021,
  },
};

console.log(product, "product");

delete product.inStock;
console.log(product, "product after delete inStock");

console.log("pricewe" in product, "price in product");

const students = [
  {
    id: 1,
    name: "Alice",
    age: 22,
    osenka: 85,
    isActive: true,
  },
  {
    id: 2,
    name: "Kuban",
    age: 16,
    osenka: 85,
    isActive: true,
  },
  {
    id: 3,
    name: "Bakyt",
    age: 18,
    osenka: 85,
    isActive: true,
  },
  {
    id: 4,
    name: "Altyn",
    age: 19,
    osenka: 85,
    isActive: false,
  },
  {
    id: 5,
    name: "Misha",
    age: 22,
    osenka: 85,
    isActive: true,
  },
];

for (let student of students) {
  if (student.age >= 18) {
    console.log(
      `Имя: ${student.name}, Возраст: ${student.age}, Оценка: ${student.osenka}`
    );
  }
}

for (let student of students) {
  if (!student.isActive) {
    console.log(
      `Имя: ${student.name}, Возраст: ${student.age}, Оценка: ${student.osenka}`
    );
  }
}

for (let student of students) {
  !student.isActive
    ? console.log(
        `Имя: ${student.name}, Возраст: ${student.age}, Оценка: ${student.osenka}`
      )
    : console.log(
        `Имя: ${student.name}, Возраст: ${student.age}, Оценка: ${student.osenka} - активен`
      );
}

for (let student of students) {
  !student.isActive &&
    console.log(
      `Имя: ${student.name}, Возраст: ${student.age}, Оценка: ${student.osenka}`
    );
}

// if (false) {
//   console.log("This is true");
// } else {
//   console.log("This is false");
// }

// console.log(15 > 10 ? "15 больше 10" : "15 меньше или равно 10");

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

// let color = prompt("цвет");

// const colors = {
//   red: "Красный цвет",
//   yellow: "Желтый цвет",
//   green: "Зеленый цвет",
// };
// console.log(colors[color] || "Неизвестный цвет");

let str = "кыргызстан";
let str2 = "КыргызстаН";

console.log(str.toUpperCase());
console.log(str2.toLowerCase());
console.log(str[0]);
console.log(str2[0].toUpperCase() + str2.slice(1).toLowerCase());

let arr = [1, 2, 3, 4, 5, 45, 654, 654, 654, 654, 654, 654, 654, 654];

let sum = 0;
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
  sum += arr[i];
  console.log(`Сумма до индекса ${i}: ${sum}`);
  // sum = sum + arr[i];
}

console.log(`Общая сумма: ${sum / arr.length}`);

let fac = 1;
for (let i = 1; i <= 5; i++) {
  fac *= i;
  console.log(`Факториал до ${i}: ${fac}`);
}
