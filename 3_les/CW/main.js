// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:

// -#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#
//     1. перебрати його циклом while
// -#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#

// let arr = [2,17,13,6,22,31,45,66,100,-18];
// i=0;
// while (i<arr.length){
//     let arrElem = arr[i]
//     console.log(arrElem)
//     i++
// }

// let arr = [2,17,13,6,22,31,45,66,100,-18];
// i=arr.length-1;
// while (i>=0){
//     let arrElem = arr[i]
//     console.log(arrElem)
//     i--
// }

// -#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#
//     2. перебрати його циклом for
// -#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#

// let arr = [2,17,13,6,22,31,45,66,100,-18];
// for (let i = 0; i < arr.length; i++) {
//     const arrElement = arr[i];
//     console.log(arrElement);
// }

// let arr = [2,17,13,6,22,31,45,66,100,-18];
// for (let i = arr.length-1; i >=0; i--) {
//     const arrElement = arr[i];
//     console.log(arrElement);
// }

// -#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#
//     3. перебрати циклом while та вивести  числа тільки з непарним індексом
// -#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#

// let arr = [2,17,13,6,22,31,45,66,100,-18];
// i=0;
// while (i<arr.length){
//     if (i%2){
//         console.log(`index:${i} - key: ${arr[i]}`)
//     }
//     i++
// }

// let arr = [2,17,13,6,22,31,45,66,100,-18];
// i=arr.length-1;
// while (i>=0){
//     if (i%2){
//         console.log(`index:${i} - key: ${arr[i]}`)
//     }
//     i--
// }

// -#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// -#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#

// let arr = [2,17,13,6,22,31,45,66,100,-18];
// for (let i = 0; i < arr.length; i++) {
//     const arrElement = arr[i];
//     if (i%2){
//         console.log(`index: ${i} - key: ${arrElement}`)
//     }
// }

// let arr = [2,17,13,6,22,31,45,66,100,-18];
// for (let i = arr.length-1; i >=0 ; i--) {
//     const arrElement = arr[i];
//     if (i%2){
//         console.log(`index: ${i} - key: ${arrElement}`)
//     }
// }

// -#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#
// 5. перебрати циклом while та вивести  числа тільки парні  значення
// -#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#

// let arr = [2,17,13,6,22,31,45,66,100,-18];
//
// i=0;
// while (i<arr.length){
//     if (!(arr[i]%2)){
//         console.log(`index: ${i} - key: ${arr[i]}`)
//     }
//     i++
// }

// let arr = [2,17,13,6,22,31,45,66,100,-18];
//
// i=arr.length-1;
// while (i>=0){
//     if (!(arr[i]%2)){
//         console.log(`index: ${i} - key: ${arr[i]}`)
//     }
//     i--
// }

// -#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#\
// 6. перебрати циклом for та вивести  числа тільки парні  значення
// -#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#

// let arr = [2,17,13,6,22,31,45,66,100,-18];
// for (let i = 0; i < arr.length; i++) {
//     const arrayElement = arr[i];
//     if (!(arrayElement%2)){
//         console.log(`index: ${i} - key: ${arr[i]}`)
//     }
// }

// let arr = [2,17,13,6,22,31,45,66,100,-18];
// for (let i = arr.length-1; i >=0; i--) {
//     const arrayElement = arr[i];
//     if (!(arrayElement%2)){
//         console.log(`index: ${i} - key: ${arr[i]}`)
//     }
// }

// -#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#
// 7. замінити кожне число кратне 3 на слово "okten"
// -#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#

// let arr = [2,17,13,6,22,31,45,66,100,-18];
// console.log(arr)
// for (let i = 0; i < arr.length; i++) {
//    if (arr[i]%3 === 0){
//        arr[i]='okten'
//    }
// }
// console.log(arr)

// let arr = [2,17,13,6,22,31,45,66,100,-18];
// for (let i = arr.length-1; i >=0 ; i--) {
//    if (arr[i]%3 === 0){
//        arr[i]='okten'
//    }
//     console.log(arr[i])
// }

// -#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#
// 8. вивести масив в зворотньому порядку.
// -#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#

// let arr = [2,17,13,6,22,31,45,66,100,-18];
// for (let i = arr.length-1; i>= 0; i--) {
//     const arrElement = arr[i];
//     console.log(arrElement)
// }

// -#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#
// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
// -#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#


