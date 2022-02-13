// - Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]

// let cutString= (str, n)=> {
//     let arr =[];
//     for (let i = 0; i < str.length; i+=n) {
//         arr.push(str.substr(i, n))
//     }
//     return arr
// }
// console.log(cutString('наслаждение', 3));

// @@@@@@-()-@@@@@@-()-@@@@@@-()-@@@@@@-()-@@@@@@-()-@@@@@@-()-@@@@@@-()-@@@@@@-()-@@@@@@-()-@@@@@@-()-@@@@@@-()-@@@@@@-()-@@@@@@-()-
// @@@@@@-()-@@@@@@-()-@@@@@@-()-@@@@@@-()-@@@@@@-()-@@@@@@-()-@@@@@@-()-@@@@@@-()-@@@@@@-()-@@@@@@-()-@@@@@@-()-@@@@@@-()-@@@@@@-()-

// - Створити функцію-валідатор для адрес електронної пошти.
// Перевірка повинна включати в себе :
// данні до знака равлика(@),
// наявність равлика,
// крапку яка знаходиться не меньше ніж на 2 символ далі після равлика,
// функція не чутлива до регістру (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)

// Протестувати на значеннях
// someemail@gmail.com
// someeMAIL@gmail.com
// someeMAIL@i.ua
// some.email@gmail.com
//
// Примітка
// Для тих, хто дуже розумний, та почне використовувати регулярні вирази одразу "ні".
// Своїм мозком подумайте над протоколом, з регулярками будете потім бавитись.


// let mailValidator = (str) => {
//     let a = '@';
//     let d = '.';
//     let mail = str.toLowerCase();
//
//
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === a && str[i + 1] === d) {
//             console.log('The dot must be at least 2 characters away, after the snail "@" !!!')
//             return
//         } else if (str[i] === a && str[i + 2] === d) {
//             console.log('The dot must be at least 2 characters away, after the snail "@" !!!')
//             return
//         }
//     }
//
//     if (str.indexOf('@') === -1 ) {
//         console.log('Mail must contain - "@" !!!')
//     } else if (str.startsWith('@')) {
//         console.log('Mail name cannot begin with "@" !!!')
//     }  else if (str.indexOf('.') === -1){
//         console.log('Mail must contain - "." !!!')
//
//     }
//
//     else {
//         console.log(`Done you mail - ${mail}`)
//     }
//
//
//     return mail
// }
//
// mailValidator('d@fd.ua')
// mailValidator('someemail@gmail.com')
// mailValidator('someeMAIL@gmail.com')
// mailValidator('someeMAIL@i.ua')
// mailValidator('some.email@gmail.com')




// @@@@@@-()-@@@@@@-()-@@@@@@-()-@@@@@@-()-@@@@@@-()-@@@@@@-()-@@@@@@-()-@@@@@@-()-@@@@@@-()-@@@@@@-()-@@@@@@-()-@@@@@@-()-@@@@@@-()-
// @@@@@@-()-@@@@@@-()-@@@@@@-()-@@@@@@-()-@@@@@@-()-@@@@@@-()-@@@@@@-()-@@@@@@-()-@@@@@@-()-@@@@@@-()-@@@@@@-()-@@@@@@-()-@@@@@@-()-

// - є масив
// let coursesArray = [
//     {
//         title: 'JavaScript Complex',
//         monthDuration: 5,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
//     },
//     {
//         title: 'Java Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'java core',
//             'java advanced']
//     },
//     {
//         title: 'Python Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'python core',
//             'python advanced']
//     },
//     {
//         title: 'QA Complex',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
//     },
//     {
//         title: 'FullStack',
//         monthDuration: 7,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'react',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'node.js',
//             'python',
//             'java']
//     },
//     {
//         title: 'Frontend',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
//     }
// ];

// відсортувати його в спадаючому порядку за кількістю елементів в полі modules

// let sortCoursesArray = coursesArray.sort((a,b) =>{
//     return b.modules.length - a.modules.length
// })
// console.log(sortCoursesArray)

// @@@@@@-()-@@@@@@-()-@@@@@@-()-@@@@@@-()-@@@@@@-()-@@@@@@-()-@@@@@@-()-@@@@@@-()-@@@@@@-()-@@@@@@-()-@@@@@@-()-@@@@@@-()-@@@@@@-()-
// @@@@@@-()-@@@@@@-()-@@@@@@-()-@@@@@@-()-@@@@@@-()-@@@@@@-()-@@@@@@-()-@@@@@@-()-@@@@@@-()-@@@@@@-()-@@@@@@-()-@@@@@@-()-@@@@@@-()-

// - Напишіть функцію count(str, stringsearch), яка повертає кількість символів stringsearch у рядку str.
//     let symb = "о", str = "Астрономия это наука о небесных объектах";
// document.writeln(count(str, symb)) // 5


// let count = (str, stringsearch)=>{
// let counter =[];
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === stringsearch){
//             counter.push(str[i])
//         }
//     }
//     return counter.length
// }
//     let symb = "о"
//     let strrr = "Астрономия это наука о небесных объектах";
//
// console.log(count(strrr, symb));

// @@@@@@-()-@@@@@@-()-@@@@@@-()-@@@@@@-()-@@@@@@-()-@@@@@@-()-@@@@@@-()-@@@@@@-()-@@@@@@-()-@@@@@@-()-@@@@@@-()-@@@@@@-()-@@@@@@-()-
// @@@@@@-()-@@@@@@-()-@@@@@@-()-@@@@@@-()-@@@@@@-()-@@@@@@-()-@@@@@@-()-@@@@@@-()-@@@@@@-()-@@@@@@-()-@@@@@@-()-@@@@@@-()-@@@@@@-()-

// - Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів.
//     let str = "Сила тяжести приложена к центру масс тела";
// document.writeln(cutString(str, 5)) // 'Сила тяжести приложена к центру'

// let cutString = (str, n) =>{
//     let  result =[];
//     let str1 = str.split(' ');
//
//     for (let i = 0; i < n; i++) {
//         result.push(str1[i])
//     }
//
//     return result.join(' ')
// }
//
//     let str = "Сила тяжести приложена к центру масс тела";
// console.log(cutString(str, 2));
// console.log(cutString(str, 5));
