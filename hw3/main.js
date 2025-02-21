//
// #y7crMeFwHcS
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
for (let i = 0; i < 10.; i++) {
    document.write(`<div>Hello</div>`);
}

// #TYj7ncx
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
for (let i = 0; i < 10; i++) {
    document.write(`<div>${i}. Hello</div>`);
}

// #uzkt71dp
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
let i = 0;
while (i < 20) {
    document.write(`<h1>Okten</h1>`);
    i++
}

//     #OeT7t3uUMFi
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
let i1 = 0;
while (i1 < 20) {
    document.write(`<h1>${i1}.Super</h1>`);
    i1++
}
let i2 = 0;
while (i2 < 20) {
    document.write(`<div>Hello</div>`);
    i2++
}
//     #vLSZKMlO
// - Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Масив:
let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
document.write(`<ul>`)
for (const listOfItem of listOfItems) {
        document.write(`<li>${listOfItem}</li>`)


}
document.write(`</ul>`)
// let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
// document.write(<ul>)
// document.write(</ul>);
//
// ШАБЛОН:
//     <ul>
//         <li>ITEM OF ARRAY</li>
//         <!--
//             і тд інші об'єкти масиву
//              ...
//              ...
//              ...
//         -->
//     </ul>
//
// замість 'ITEM OF ARRAY' підставити елемент з масиву щоб получився цілий список з даними з масиву
//
// -----------------------------------------------
//     #Hdjws7E
// Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон
//
let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://www.shutterstock.com/image-vector/vector-set-design-elements-tea-260nw-2489018697.jpg'
    },
];
for (const product of products) {
    document.write(`<div class="product-card">
                        <h3>${product.title}-${product.price} UAH</h3>
                        <img src="${product.image}" alt="product-image">

                    </div>`)

}
//
// ШАБЛОН
// <div class="product-card">
//     <h3 class="product-title">TITLE. Price - PRICE</h3>
// <img src="IMAGE" alt="" class="product-image">
// </div>
// Замість TITLE PRICE IMAGE - підставити відповідні поля з об'єкту

// --------------------
// #4WrHwFTEop0
// є масив
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];


for (const user of users) {
    if (user.status) {
        console.log(user)

    }

}
console.log('')
for (const user of users) {
    if (!user.status) {
        console.log(user)
    }
}
console.log('')
for (const user of users) {
    if (user.age > 30) {
        console.log(user)
    }
}
console.log('')
// за допомоги циклу вивести:
//     - користувачів зі статусом true
// - користувачів зі статусом false
// - користувачів які старші за 30 років
let users1 = [
    {name: 'diana', age: 27, status: true},
    {name: 'sergey', age: 35, status: false},
    {name: 'ira', age: 22, status: true},
    {name: 'dima', age: 40, status: false},
    {name: 'natasha', age: 29, status: true},
    {name: 'artem', age: 33, status: true},
    {name: 'vlad', age: 19, status: false},
    {name: 'anna', age: 26, status: true},
    {name: 'svetlana', age: 31, status: false},
    {name: 'alex', age: 38, status: true}
];
for (const user1 of users1) {
    if (user1.status) {
        console.log(user1)
    }
}
console.log('')
for (const user1 of users1) {
    if (!user1.status) {
        console.log(user1)
    }
}
console.log('')
for (const user1 of users1) {
    if (user1.age < 30) {
        console.log(user1)
    }
}
console.log('')
for (const user1 of users1) {
    if (user1.age>30){
        console.log(user1)
    }
}
console.log('')
// Використовуючи цикл, виведіть:
// - користувачів зі статусом true
// - користувачів зі статусом false
// - користувачів, які молодші за 30 років
// - користувачів, які старші за 30 років
let users2 = [
    {name: 'elena', age: 45, status: false},
    {name: 'nikolay', age: 34, status: true},
    {name: 'katya', age: 25, status: false},
    {name: 'ivan', age: 37, status: true},
    {name: 'pavel', age: 22, status: true},
    {name: 'irina', age: 29, status: false},
    {name: 'daniil', age: 31, status: true},
    {name: 'olga', age: 28, status: true},
    {name: 'sasha', age: 33, status: false},
    {name: 'marina', age: 27, status: true}
];
for (const user2 of users2) {
    if (user2.name.startsWith('i')){
        console.log(user2)
    }
}