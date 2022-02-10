// Всі функції повинні бути описані стрілочним типом!!!!
// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

// let minNum = (num1, num2, num3) => {
//     if (num1 <num2 && num1 < num3){
//         return num1
//     } else if (num2< num1 && num2 < num3){
//         return num2
//     } else if (num3< num1 && num3<num1) {
//         return num3
//     }
// }
//
// console.log(minNum(1,45,0.5))


// ################****----****################****----****################****----****################****----****################****----****
// ################****----****################****----****################****----****################****----****################****----****
// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)


// let minNum = (num1, num2, num3) => {
//     if (num1 >num2 && num1 > num3){
//         return num1
//     } else if (num2> num1 && num2 > num3){
//         return num2
//     } else if (num3> num1 && num3>num1) {
//         return num3
//     }
// }
//
// console.log(minNum(1,45,0.5))


// ################****----****################****----****################****----****################****----****################****----****
// ################****----****################****----****################****----****################****----****################****----****
// - створити функцію яка повертає найбільше число з масиву

// let maxNumInArr = (arr) =>{
//     let maxElemNum = arr[0];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i]>maxElemNum){
//             maxElemNum=arr[i]
//         }
//     }
//     return maxElemNum;
// }
//
// let mixArr = [45, 12,23,56,70]
// console.log(maxNumInArr(mixArr));


// ################****----****################****----****################****----****################****----****################****----****
// ################****----****################****----****################****----****################****----****################****----****
// - створити функцію яка повертає найменьше число з масиву

// let minNumInArr = (arr) =>{
//     let minElement = arr[0];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i]<minElement){
//             minElement = arr[i]
//         }
//     }
//     return minElement
// }
//
// let mixArr = [45, 12,23,56,70]
// console.log(minNumInArr(mixArr))

// ################****----****################****----****################****----****################****----****################****----****
// ################****----****################****----****################****----****################****----****################****----****
// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

// let sumatorInArrNum = (arr)=>{
//     let resulr = 0;
//     for (let i = 0; i < arr.length; i++) {
//         resulr = resulr + arr[i]
//     }
//     return resulr
// }
//
// let mixArr = [45, 12,23,56,70]
// console.log(sumatorInArrNum(mixArr));

// ################****----****################****----****################****----****################****----****################****----****
// ################****----****################****----****################****----****################****----****################****----****
// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

// let centralNumInArr = (arr)=>{
//     let sumator = 0;
//     for (let i = 0; i < arr.length; i++) {
//         let element = arr[i];
//         sumator = sumator + element
//     }
//     return sumator/arr.length
// }
//
// let mixArr1 = [5,1,2,5,7]
// console.log(centralNumInArr(mixArr1));

// ################****----****################****----****################****----****################****----****################****----****
// ################****----****################****----****################****----****################****----****################****----****
// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

// let returnMinLogMax = (...arguments) =>{
//     let min = arguments[0];
//     let max = arguments[0];
//     for (let i = 0; i < arguments.length; i++) {
//         if (arguments[i]>max){
//             max = arguments[i]
//         } else if (arguments[i]<min){
//             min = arguments[i]
//         }
//
//     }
//     console.log(max)
//     return min
// }
//
// console.log(returnMinLogMax(5,1,2,5,7));
//

// ################****----****################****----****################****----****################****----****################****----****
// ################****----****################****----****################****----****################****----****################****----****
// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.

// let randomArr100 = (arr) => {
//     for (let i = 0; i < 100; i++) {
//         arr.push(Math.round(Math.random()*100))
//     }
//     return arr
// }
// let azaza = []
// console.log(azaza);
// console.log(randomArr100(azaza));


// ################****----****################****----****################****----****################****----****################****----****
// ################****----****################****----****################****----****################****----****################****----****
// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.

// let limitRandomArr = (arr, sizeNum, sizeList ) =>{
//     for (let i = 0; i < sizeList; i++) {
//         arr.push(Math.round(Math.random()*sizeNum))
//     }
//     return arr
// }
// let azaza = []
// console.log(limitRandomArr(azaza,5,10))


// ################****----****################****----****################****----****################****----****################****----****
// ################****----****################****----****################****----****################****----****################****----****

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

// let resersArr = (arr) =>{
//     let newArr=[];
//     for (let i = arr.length-1; i >= 0 ; i--) {
//         newArr.push(arr[i])
//     }
//     return newArr;
// }
//
// let azaza = [1, 2, 3, 4, 5];
// console.log(azaza)
// console.log(resersArr(azaza));

