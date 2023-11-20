// let arr = ["name", "John", "lastname", "Black", "age", "23"];
// let obj = {};
// for (let i = 0; i < arr.length; i = i + 2) {
//     let key = arr[i];
//     let value = arr[i + 1];
//     obj[key] = value;
// }
// console.log(obj);
//
// console.log()

// let users = [
//     {name: 'Ermek', age: 30},
//     {name: 'Myxa', age: 12},
//     {name: 'Ahmad', age: 17},
//     {name: 'Aalam', age: 45},
//     {name: 'Abdulaziz', age: 19},
//     {name: 'Timur', age: 24},
// ]
//
// let resultAge = users.filter(i => i.age < 18)
// let resultName = users.filter(i=>i.name.includes('a') || i.name.includes('A'))
// console.log(resultAge)
// console.log(resultName)
//
//
// let numbers = [1, 2, 3 , 4]
// let newNumbers = numbers.map((i => i * 2))
// console.log(newNumbers)
//
// let soms = [230000, 560000, 780000, 9000000]
// let dollars = soms.map(i => i / 89)
// let fixDollars = dollars.map(i =>  i.toFixed())
// console.log(fixDollars)
// console.log(dollars)
//
//
// let numbers2 = [3, 4, 5, 6, 7]
// numbers2.forEach(i => console.log(i * 4))

let arrayNum = [23, 23, 34, 4, 5, 45, 56, 67, 55, 55, 44, 34, 33, 67, 66, 6, 6, 8, 7, 9, 8, 9, 8]
let uniqueArray = [];

for (let i = 0; i < arrayNum.length; i++) {
    if (uniqueArray.indexOf(arrayNum[i]) === -1) {
        uniqueArray.push(arrayNum[i]);
    }
}
console.log(uniqueArray)

let books = [
    {title: 'Анна Каренина', author: 'Лев Толстой'},
    {title: 'Война и мир', author: 'Лев Толстой'},
    {title: 'Преступление и наказание', author: 'Фёдор Достоевский'},
    {title: '1984', author: 'Джордж Оруэлл'},
    {title: 'Улисс', author: 'Джеймс Джойс'},
    {title: 'Гарри Поттер и философский камень', author: 'Джоан Роулинг'}
]

let booksY = books.filter(book => book.title.includes('у') || book.title.includes('У'));
console.log(booksY);

const users = [
    { name: 'John', age: 25 },
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 20 },
    { name: 'Sarah', age: 35 },
    { name: 'Mike', age: 28 },
    { name: 'Emily', age: 22 },
    { name: 'David', age: 32 },
    { name: 'Olivia', age: 27 }
];

const youngestUser = users.reduce((minAgeUser, currentUser) => (currentUser.age < minAgeUser.age ? currentUser : minAgeUser));
const oldestUser = users.reduce((maxAgeUser, currentUser) => (currentUser.age > maxAgeUser.age ? currentUser : maxAgeUser));
const ageDifference = oldestUser.age - youngestUser.age;g
console.log(`Пользователь ${oldestUser.name} старше ${youngestUser.name} на ${ageDifference} лет.`);



