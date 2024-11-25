// Масиви та об'єкти
// #67kfznmiMl
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let arr = [2, 5, 'Gordey', 'Lera', true, false, 3.14, -8, 15, 'Alex'];
console.log(arr [0]);
console.log(arr [1]);
console.log(arr [2]);
console.log(arr [3]);
console.log(arr [4]);
console.log(arr [5]);
console.log(arr [6]);
console.log(arr [7]);
console.log(arr [8]);
console.log(arr [9]);

// #LARqoUj5I
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let book1 = {
    title: 'Saw',
    pageCount: 350,
    genre: 'horror'
}
console.log(book1);
let book2 = {
    title: 'Donald Duck',
    pageCount: 250,
    genre: 'children'
}
console.log(book2);
let book3 = {
    title: 'Pinokio',
    pageCount: 290,
    genre: 'children'
}
console.log(book3);

//     #sA3Gg1sCp
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors.
// Поле "автори" - являється  масивом. Кожен автор має поля name та age.
let book11 = {
    title: 'Alien',
    pageCount: 320,
    genre: 'Fantastik',
    authors: [
        {
            name: 'Fred',
            age: 53
        }
    ]
}
console.log(book11);
let book12 = {
    title: 'Game of Thrones',
    pageCount: 870,
    genre: 'Fantasy',
    authors: [
        {
            name: 'George R. R. Martin',

            age: 76
        }
    ]
}
console.log(book12);
let book13 = {
    title: 'Antic Rome',
    pageCount: 520,
    genre: 'History',
    authors: [
        {
            name: 'Dr. Nick',
            age: 57
        }
    ]
}
console.log(book13);

//     #jCHFnEbdmFd
// - Створити масив з 10 об'єктами які описують сутніть "користувач".
// Поля: name, username,password. Вивести в консоль пароль кожного користувача
let users = [
    {name: 'Alexey', username: 'Alex', password: 123},
    {name: 'Oleg', username: 'Lega', password: 456},
    {name: 'Nikolay', username: 'Kolyan', password: 789},
    {name: 'Olha', username: 'Olechka', password: 111},
    {name: 'Elena', username: 'Lenok', password: 112},
    {name: 'Leonid', username: 'Leo', password: 113},
    {name: 'Valeria', username: 'Lerochka', password: 114},
    {name: 'Gordey', username: 'King', password: 115},
    {name: 'Alexander', username: 'Sanya', password: ''},
    {name: 'Maksim', username: 'Max', password: 116}
]
console.log(users [0].username);
console.log(users [1].username);
console.log(users [2].username);
console.log(users [3].username);
console.log(users [4].username);
console.log(users [5].username);
console.log(users [6].username);
console.log(users [7].username);
console.log(users [8].username);
console.log(users [9].username);

// #coYydZuaeEB
// - описати масив, в якому буде зберігатись інформація про температуру вранці, вдень і ввечері за термін в 7 днів.
// Як зробити цей масив - вам потрібно подумати. Нормальних варіантів опису - 2.
// Варіант, коли в вас буде одновимірний масив з 21 значенням вичключаємо одразу
let temp = [
    [7, 12, 5],
    [8, 10, 4],
    [5, 7, 3],
    [8, 14, 6],
    [3, 4, 2],
    [6, 9, 4],
    [9, 10, 5]
]
console.log(temp);
let temp2 = [
    {day: '', value: [7, 12, 5]},
    {day: 'sunday', morning: 7, noon: 12, evening: 5},
    {day: 'monday', morning: 7, noon: 12, evening: 5},
    {day: 'tuesday', morning: 7, noon: 12, evening: 5},
    {day: 'wednesday', morning: 7, noon: 12, evening: 5},
    {day: 'thursday', morning: 7, noon: 12, evening: 5},
    {day: 'friday', morning: 7, noon: 12, evening: 5},
    {day: 'saturday', morning: 7, noon: 12, evening: 5},
]
console.log(temp2);

// Логічні розгалуження:
//
//     #bAUsaq6LI
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
let x1=0;
if(x1!==0){
    console.log('Вірно')
}else {
    console.log('Невірно')
}
// #3ckURgvs
// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
let time = prompt('Enter your time');
if (time >= 0 && time <= 15) {
    console.log('1 четверть');
} else if (time >= 15 && time <= 30) {
    console.log('2 четверть');
} else if (time >= 30 && time <= 45) {
    console.log('3 четверть');
} else if (time >= 45 && time <= 60) {
    console.log('4 четверть');
} else {
    console.log('ERROR')
}

// #UMoNq4biWGe
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
let day = 31;
if (day >= 1 && day <= 10) {
    console.log('First decade');
} else if (day >= 10 && day <= 20) {
    console.log('Second decade');
} else if (day >= 20 && day <= 31) {
    console.log('Third decade');
}

// #KzrtqyQ
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані
// відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
let schedule = prompt('Enter your schedule');
switch (schedule) {
    case '1':
        console.log('Monday');
        break;
    case '2':
        console.log('Tuesday');
        break;
    case '3':
        console.log('Wednesday');
        break;
    case '4':
        console.log('Thursday');
        break;
    case '5':
        console.log('Friday');
        break;
    case '6':
        console.log('Saturday');
        break;
    case '7':
        console.log('Sunday');
        break;
    default:
        console.log('There is no such day')


}

//     #uwsz1RnTQJ1
//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.
let a = 5;
let b = 2;
if (a > b) {
    console.log(a)
} else if (b > a) {
    console.log(b)
} else if (a === b) {
    console.log('равно')
}

//         #iBvqtjEm
//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         буде присвоювати змінній х значення "default"  якщо ви намагаєтесь присвоїти в неї falsy-значення
//         (хибноподібні, тобто ті, які приводиться до false, а це 0 null undefined і тд).
let x ='';
if (x === '' || x === null || x === undefined || x === 3) {
    x = 'default'
}
console.log(x)

//     #awLXL6TBzg
//     - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання.
//     У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
if (coursesAndDurationArray [0]['monthDuration'] >= 5) {
    console.log('Супер')
} else if (coursesAndDurationArray[0]['monthDuration'] <= 5) {
    console.log('Плохо')
}
if (coursesAndDurationArray [1]['monthDuration'] >= 5) {
    console.log('Супер')

} else if (coursesAndDurationArray[1]['monthDuration'] <= 5) {
    console.log('Плохо')
}
if (coursesAndDurationArray[2]['monthDuration'] >= 5) {
    console.log('Супер')
} else if (coursesAndDurationArray[2]['monthDuration'] <= 5) {
    console.log('Плохо')
}
if (coursesAndDurationArray[3]['monthDuration'] >= 5) {
    console.log('Супер')
} else if (coursesAndDurationArray[3]['monthDuration'] <= 5) {
    console.log('Плохо')
}
if (coursesAndDurationArray[4]['monthDuration'] >= 5) {
    console.log('Супер')
} else if (coursesAndDurationArray[4]['monthDuration'] <= 5) {
    console.log('Плохо')
}
if (coursesAndDurationArray[5]['monthDuration'] >= 5) {
    console.log('Супер')
} else if (coursesAndDurationArray[5]['monthDuration'] <= 5) {
    console.log('Плохо')
}