//
// - Дано список імен.
// let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'

// console.log(n1.replaceAll('..', ' '));
// console.log(n2.replaceAll('---', ' '));
// console.log(n3.replaceAll('__', ' '));

//@@@@@@-----@@@@@@-----@@@@@@-----@@@@@@-----@@@@@@-----@@@@@@-----@@@@@@-----@@@@@@-----@@@@@@-----@@@@@@-----@@@@@@-----
//@@@@@@-----@@@@@@-----@@@@@@-----@@@@@@-----@@@@@@-----@@@@@@-----@@@@@@-----@@@@@@-----@@@@@@-----@@@@@@-----@@@@@@-----
// - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.

let randomNum100 =(arr)=>{
    for (let i = 0; i < 100; i++) {
        arr.push(Math.round(Math.random()*100))
    }
    return arr
}
let miMix =[];
console.log(randomNum100(miMix));

//@@@@@@-----@@@@@@-----@@@@@@-----@@@@@@-----@@@@@@-----@@@@@@-----@@@@@@-----@@@@@@-----@@@@@@-----@@@@@@-----@@@@@@-----
//@@@@@@-----@@@@@@-----@@@@@@-----@@@@@@-----@@@@@@-----@@@@@@-----@@@@@@-----@@@@@@-----@@@@@@-----@@@@@@-----@@@@@@-----
// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
// Відсортувати його за допомоги sort

// console.log(miMix.sort((a, b) => a - b));
// console.log(miMix.sort((a, b) => b - a));

//@@@@@@-----@@@@@@-----@@@@@@-----@@@@@@-----@@@@@@-----@@@@@@-----@@@@@@-----@@@@@@-----@@@@@@-----@@@@@@-----@@@@@@-----
//@@@@@@-----@@@@@@-----@@@@@@-----@@@@@@-----@@@@@@-----@@@@@@-----@@@@@@-----@@@@@@-----@@@@@@-----@@@@@@-----@@@@@@-----
// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
// Відфільтрувати  його за допомоги filter, залишивши тільки парні числа

// let num1 =  miMix.filter( (num)=>  num%2 === 0);
// console.log(num1);
//
// let num2 = miMix.filter(name => name%2)
// console.log(num2);

//@@@@@@-----@@@@@@-----@@@@@@-----@@@@@@-----@@@@@@-----@@@@@@-----@@@@@@-----@@@@@@-----@@@@@@-----@@@@@@-----@@@@@@-----
//@@@@@@-----@@@@@@-----@@@@@@-----@@@@@@-----@@@@@@-----@@@@@@-----@@@@@@-----@@@@@@-----@@@@@@-----@@@@@@-----@@@@@@-----
// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції).
// За допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.

// let strMimix = miMix.map((num) => num + '')
// console.log(strMimix);

//@@@@@@-----@@@@@@-----@@@@@@-----@@@@@@-----@@@@@@-----@@@@@@-----@@@@@@-----@@@@@@-----@@@@@@-----@@@@@@-----@@@@@@-----
//@@@@@@-----@@@@@@-----@@@@@@-----@@@@@@-----@@@@@@-----@@@@@@-----@@@@@@-----@@@@@@-----@@@@@@-----@@@@@@-----@@@@@@-----
// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
// або навпаки в залежності від значення аргументу direction.
// let nums = [11,21,3];
// sortNums('ascending') // [3,11,21]
// sortNums('descending') // [21,11,3]

// let sortNums = (direction = 'ascending', arr) =>{
//     if (direction === 'ascending'){
//         arr.sort( (a,b) => a-b)
//         return arr
//     } else if (direction === 'descending'){
//         arr.sort((a,b) => b-a)
//         return arr
//     } else {
//         console.log('I did not understand you. Specify the correct direction (ascending / descending)')
//     }
// }
//
// console.log(sortNums('ascending', miMix));
// console.log(sortNums('descending', miMix));
// console.log(sortNums('Kas', miMix));


//@@@@@@-----@@@@@@-----@@@@@@-----@@@@@@-----@@@@@@-----@@@@@@-----@@@@@@-----@@@@@@-----@@@@@@-----@@@@@@-----@@@@@@-----
//@@@@@@-----@@@@@@-----@@@@@@-----@@@@@@-----@@@@@@-----@@@@@@-----@@@@@@-----@@@@@@-----@@@@@@-----@@@@@@-----@@@@@@-----
// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

// let sortMonthDuration = coursesAndDurationArray.sort((a,b)=>{
//     return b.monthDuration - a.monthDuration
// })
// console.log(sortMonthDuration);
//
// let filterMonthDuration = coursesAndDurationArray.filter((element)=>{
//     return element.monthDuration > 5
// })
// console.log(filterMonthDuration);

