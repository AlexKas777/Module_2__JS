// Всі функції повинні бути описані стрілочним типом!!!!
// - створити функцію яка обчислює та повертає площу прямокутника висотою

// let sRectangle = (a,b) => a * b;
// console.log(sRectangle(3, 2));

// ================***********-----------================***********-----------================***********-----------================***********-----------
// ================***********-----------================***********-----------================***********-----------================***********-----------
// - створити функцію яка обчислює та повертає площу кола

// let sWheel = (r) => Math.round(Math.PI*r**2);
// console.log(sWheel(5))

// ================***********-----------================***********-----------================***********-----------================***********-----------
// ================***********-----------================***********-----------================***********-----------================***********-----------
// - створити функцію яка обчислює та повертає площу циліндру

// let sCylinder = (r,h) => Math.round(2*Math.PI*r*h);
// console.log(sCylinder(4,2))

// ================***********-----------================***********-----------================***********-----------================***********-----------
// ================***********-----------================***********-----------================***********-----------================***********-----------
// - створити функцію яка приймає масив та виводить кожен його елемент

// let arrKiller = (arr) => {
//     for (let arrElement of arr) {
//         console.log(arrElement)
//     }
// }
// let anyArr = [15,12,4,78]
// arrKiller(anyArr);

// ================***********-----------================***********-----------================***********-----------================***********-----------
// ================***********-----------================***********-----------================***********-----------================***********-----------
// - створити функцію яка  створює параграф з текстом. Текст задати через аргумент

// let addParagAndTxt = (text) => {
//     document.write(`<p>${text} </p>`);
// }
//
// addParagAndTxt('Hi Kas !');


// ================***********-----------================***********-----------================***********-----------================***********-----------
// ================***********-----------================***********-----------================***********-----------================***********-----------
// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// let crietorLi = (text) =>{
//     document.write(`<ul>`)
//     for (let i = 0; i < 3; i++) {
//         document.write(`<li> ${text}</li>`)
//     }
//     document.write(`</ul>`)
// }
// crietorLi('Hi, Kas ! ')

// ================***********-----------================***********-----------================***********-----------================***********-----------
// ================***********-----------================***********-----------================***********-----------================***********-----------
// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// let crietorLi = (text, size) =>{
//     document.write(`<ul>`)
//     for (let i = 0; i < size; i++) {
//         document.write(`<li> ${text}</li>`)
//     }
//     document.write(`</ul>`)
// }
// crietorLi('Hi, Alex Kas ! ', 5)

// ================***********-----------================***********-----------================***********-----------================***********-----------
// ================***********-----------================***********-----------================***********-----------================***********-----------
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// let createdLiListForArr = (arr) => {
//     document.write(`<ul>`)
//         for (let i = 0; i < arr.length; i++) {
//             document.write(`<li> ${arr[i]} </li>`)
//
//         }
//         document.write(`</ul>`)
//
// }
// let mixArr = [45,5,'azazaz', 'Kas', 155]
// createdLiListForArr(mixArr)


// ================***********-----------================***********-----------================***********-----------================***********-----------
// ================***********-----------================***********-----------================***********-----------================***********-----------
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age ,b та виводить їх в документ. Для кожного об'єкту окремий блок.
//
// let objKiller = (arr) =>{
//     for (let arrElement of arr) {
//             document.write(`<div> id:${arrElement.id} | name: ${arrElement.name} | ${arrElement.age} </div>`)
//     }
// }
//
//
// let users = [
//     {id: 0,name: 'vasya', age: 31, status: false},
//     {id: 1,name: 'petya', age: 30, status: true},
//     {id: 2,name: 'kolya', age: 29, status: true},
//     {id: 3,name: 'olya', age: 28, status: false},
//     {id: 4,name: 'max', age: 30, status: true},
//     {id: 5,name: 'anya', age: 31, status: false},
//     {id: 6,name: 'oleg', age: 28, status: false},
//     {id: 7,name: 'andrey', age: 29, status: true},
//     {id: 8,name: 'masha', age: 30, status: true},
//     {id: 9,name: 'olya', age: 31, status: false},
//     {id: 10,name: 'max', age: 31, status: true}
// ];
// objKiller(users);