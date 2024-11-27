// - Нам дано масив друзів let friends = ["Ivan", "Slavik", "Grisha", "Lera", "Ira"]; Потрібно зробити перевірку якщо
// кількість елементів у масиві більше або дорівнює 3, то виводиться повідомлення про те, що це великий масив, в якому  3 і більше елементи.
//     Інакше слід вивести на екран повідомлення про те, що це маленький масив, в якому менше 3-х елементів.
let friends = ["Ivan", "Slavik", "Grisha", "Lera", "Ira"];
if (friends.length >= 3) {
    console.log('Большой массив')
} else {
    console.log('Маленький массив')
}
//
// - Маємо 3 числа і між ним  нам потрібно знайти те що посередині.
//     Знайти, яке з них є середнім (більше одного, але менше за інше). Перевірити, чи знаходиться перше число між двома іншими.
let a1 = 3;
let b1 = 5;
let c1 = 7;

let middle = (a1 > b1 && a1 < c1) || (a1 < b1 && a1 > c1) ? a1 :
    (b1 < a1 && b1 > c1) || (b1 > a1 && b1 < c1) ? b1 : c1;
console.log(middle)

//
// - Перепишіть конструкцію if з використанням умовного оператора '?':
// let result;
// if (a + b < 4) {
//     result = 'Мало';
// } else {
//     result = 'Багато';
// }
let a = 1;
let b = 1;
let result = (a + b < 4) ? 'Мало' : 'Багато';
console.log(result)
//
// - Маємо будь яке число від -100 , 0 , +100 потрібно перевірити яким є число: позитивним, негативним або нулем
// напишіть це тернарним оператором
let number9 = 100;
let result9 = (number9 === 0) ? 'Zero' :
    (number9 >= 100) ? 'Positive' : 'Negative';
console.log(result9)
//
// - У нас є змінна test, якщо дорівнює true, виведіть 'Вірно', інакше виведіть 'Неправильно'.
//     Перевірте роботу скрипта при test, що дорівнює true, false. Напишіть два варіанти скрипта - з коротким записом(тернаркою)
let test = false;
let result10 = test ? 'Вірно' : 'Неправильно';
console.log(result10)
// - Використовуючи конструкцію if..else, напишіть код, який запитуватиме: „Яка «офіційна» назва JavaScript?“
// Якщо користувач вводить «ECMAScript», то показати: «Правильно!», інакше – відобразити: «Не знаєте? ECMAScript!
let name = prompt('Яка «офіційна» назва JavaScript?Яка «офіційна» назва JavaScript?')
if (name === 'ECMAScript') {
    console.log('Правильно!')
} else {
    console.log('Не знаєте? ECMAScript!')
}
//
//     - У першому під'їзді квартири з 1 до 20. У другому з 21 по 48. У третьому з 49 по 90.
// Користувач вводить номер квартири просто в змінні або через prompt('') .
//     Програма повинна зазначити, в якому під'їзді знаходиться дана квартира.
let entranceNumber = prompt('Enter your apartment')
let apartment = entranceNumber;
if (apartment >= 1 && apartment <= 20) {
    console.log('First entrance')
} else if (apartment >= 21 && apartment <= 48) {
    console.log('Second entrance')
} else if (apartment >= 49 && apartment <= 90) {
    console.log('Third entrance')
} else {
    console.log('ERROR')
}
//
// - Ми маємо змінну number в яку користувач задає числове значення,  якщо змінна рівна 10 вивести повідомлення ВІРНО, якщо змінна не рівна 10 - тоді НЕВІРНО
let number = 9;
if (number === 10) {
    console.log('ВІРНО')
} else {
    console.log('НЕВІРНО')
}
//
// - Задача-гра "чи ми йдемо сьогодні в OKTEN на навчання?".
//     Змінна, яка характеризує температуру. Якщо температура від +10 до +22 вивести повідомлення що ми йдемо ВЧИТИСЯ .
//     Якщо інша темпаретура, тоді виводимо повідомлення що сидимо вдома і вчимося ОНЛАЙН
let temp = -10;
if (temp >= +10 && temp <= +22) {
    console.log('ВЧИТИСЯ')
} else {
    console.log('ОНЛАЙН')
}
//
// - За допомогою switch case - реалізувати гру - вікторину, де ми вводимо число від 1 до 5. І взалежності від введеного
//     числа нам дається приз. (Авто, Мото, Телефон, і т.д ) і якщо число не підходить тоді  вивести Повідомлення - що число не вірне ... .
let quiz = 3;
switch (quiz) {
    case 1:
        console.log('Auto')
        break;
    case 2:
        console.log('Motorbike');
        break;
    case 3:
        console.log('Phone')
        break;
    case 4:
        console.log('Cucumber');
        break;
    case 5:
        console.log('Chocolate');
        break;
    default:
        console.log('Lost')
}

let age = 17;
let message = (age >= 18) ? "Взрослый" : "Несовершеннолетний";
console.log(message);

let number1 = -1
let result1 = (number1 >= 0) ? 'Положительный' : 'Отрицательный'
console.log(result1)

let number2 = 11;
let result2 = (number2 >= 1 && number2 <= 10) ? 'В диапазоне' : 'Вне диапазона'
console.log(result2)

let number3 = -10;
let result3 = (number3 === 0) ? 'Ноль' :
    (number3 > 0) ? 'Положительное число' : 'Отрицательное число';
console.log(result3)

let number4 = -3;
let result4 = (number4 >= 0) ? 'Положительный' : 'Отрицательный'
console.log(result4)

let number5 = 2;
let result5 = (number5 % 2 === 0) ? 'Чётное число' : 'Нечётное число'
console.log(result5)

let number6 = 100;
let result6 = (number6 >= 100) ? 'Число больше 100' : 'Число меньше или равно 100'
console.log(result6)

let number7 = 50;
let result7 = (number7 >= 50) ? 'Число больше 50' : 'Число меньше или равно 50'
console.log(result7)

let number8 = 15;
let result8 = (number8 % 10 === 0) ? 'Делится на 10' : 'Не делится на 10'
console.log(result8)