// #dYQNrBV
// Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123,
// 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log
let a = 'hello';
console.log(a);
let b = 'owu';
console.log(b);
let c = 'com';
console.log(c);
let d = 'ua';
console.log(d);
let e = 1;
console.log(e);
let f = 10;
console.log(f);
let a1 = -999;
console.log(a1);
let b1 = 123;
console.log(b1);
let c1 = 3.14;
console.log(c1);
let d1 = 2.7;
console.log(d1);
let e1 = 16;
console.log(e1);
let f1 = true;
console.log(f1);
let a2 = false;
console.log(a2);

// #6Qb97gsv
// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ.
// З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)
let name = 'Alexey';
let middle = 'Alexandrovich';
let last = 'Korotkov';
let msg = `${name} ${middle} ${last}`;
console.log(msg);

// #4N0y5tufA
// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//     let a = 100; let b = '100'; let c = true;
let a3 = 100;
console.log(typeof a3);
let b3 = '100';
console.log(typeof b3);
let c3 = true;
console.log(typeof c3);

// #ruUtWDUI
// Додаткове для тих хто цікавився prompt`oм
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль
let fName = prompt('Enter your name');
let mName = prompt('Enter your middleName');
let age = +prompt('Enter your age');
console.log(fName, mName, age);