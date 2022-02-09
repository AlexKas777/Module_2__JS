// // - створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або конкатенує їх між собою.

// function returnOneConcatTwo (){
//     let concater = arguments[0]
//
//     if (arguments.length === 1){
//         return arguments[0]
//     }
//     else if (arguments.length === 2){
//         return concater + arguments[1]
//     } else {
//         console.log('You typed for many numbers')
//     }
// }
//
// console.log(returnOneConcatTwo(10))
// console.log(returnOneConcatTwo(10, 5))
// console.log(returnOneConcatTwo(10, 5, 5))

// ######################################---------######################################---------######################################
// ######################################---------######################################---------######################################
// ######################################---------######################################---------######################################


// - створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     EXAMPLE:
// [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]

// function sumatorTwoArr(arr1, arr2) {
//     let newArr = [];
//     if (arr1.length === arr2.length) {
//
//         for (let i = 0; i < arr1.length; i++) {
//             for (let j = 0; j < arr2.length; j++) {
//                 if (i===j){
//                   newArr.push(arr1[i] + arr2[j])
//                 }
//             }
//         }
//     }
//     return newArr;
// }
//
// let mixArr1 = [1,2,3,4];
// let mixArr2 = [2,3,4,5];
//
// console.log(sumatorTwoArr(mixArr1,mixArr2));
//
//

// ######################################---------######################################---------######################################
// ######################################---------######################################---------######################################
// ######################################---------######################################---------######################################


// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]

// function keyInObjAddArr(arr){
//     let arrKey=[];
//     for (let arrElement of arr) {
//         for (let arrKeys in arrElement) {
//             arrKey.push(arrKeys)
//         }
//     }
//     return arrKey
// }
// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];
//
// console.log(users);
// //
// console.log(keyInObjAddArr(users));

// ######################################---------######################################---------######################################
// ######################################---------######################################---------######################################
// ######################################---------######################################---------######################################

//     - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]
//

// function keyInObjAddArr(arr){
//     let arrKey=[];
//     for (let arrElement of arr) {
//         for (let arrKeys in arrElement) {
//             arrKey.push(arrElement[arrKeys])
//         }
//     }
//     return arrKey
// }
//
// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];
//
// console.log(users);
// console.log(keyInObjAddArr(users))



