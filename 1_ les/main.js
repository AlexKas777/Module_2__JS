
// ################  HOMEWORK  ##################


// - Створити змінні. Присвоїти кожному з них значення: 'hello,'owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
// let some1 = 'hello';
// let some2 = 'owu';
// let some3 = 'com';
// let some4 = 'ua'
// let some5 = 1;
// let some6 = 10;
// let some7 = -999;
// let some8 = 123;
// let some9 = 2.7;
// let some10 = 16;
// let some11 = true;
// let some12 = false;

//     Вивести кожну змінну за допомогою: console.log , alert, document.write
// console.log(some1,some2,some3,some4,some5,some6,some7,some8,some9,some10,some11,some12);
// -----------------------------------------------------------------------

// alert(some1);
// alert(some2);
// alert(some3);
// alert(some4);
// alert(some5);
// alert(some6);
// alert(some7);
// alert(some8);
// alert(some9);
// alert(some10);
// alert(some11);
// alert(some12);
// -----------------------------------------------------------------------
// document.write(some1  + '<br>');
// document.write(some2  + '<br>');
// document.write(some3  + '<br>');
// document.write(some4  + '<br>');
// document.write(some5  + '<br>');
// document.write(some6  + '<br>');
// document.write(some7  + '<br>');
// document.write(some8  + '<br>');
// document.write(some9  + '<br>');
// document.write(some10 + '<br>');
// document.write(some11 + '<br>');
// document.write(some12 + '<br>');
// -----------------------------------------------------------------------
// - Переприсвоїти кожнійзмінній з завдання значення на довільне.
// some1 = 'Hi';
// some2 = 'I';
// some3 = 'am';
// some4 = 'Alex'
// some5 = 'Kas';
// some6 = 'and';
// some7 = 'I';
// some8 = 'started';
// some9 = 'learning';
// some10 = 'javascript.';
// some11 = 'Wish';
// some12 = ' me luck !!!';
// -----------------------------------------------------------------------
//     Вивести кожну змінну за допомогою: console.log , alert, document.write
// console.log(some1,some2,some3,some4,some5,some6,some7,some8,some9,some10,some11,some12)
// -----------------------------------------------------------------------
// alert(some1);
// alert(some2);
// alert(some3);
// alert(some4);
// alert(some5);
// alert(some6);
// alert(some7);
// alert(some8);
// alert(some9);
// alert(some10);
// alert(some11);
// alert(some12);
// -----------------------------------------------------------------------
// document.write('<hr>')
// document.write(some1  + '<br>');
// document.write(some2  + '<br>');
// document.write(some3  + '<br>');
// document.write(some4  + '<br>');
// document.write(some5  + '<br>');
// document.write(some6  + '<br>');
// document.write(some7  + '<br>');
// document.write(some8  + '<br>');
// document.write(some9  + '<br>');
// document.write(some10 + '<br>');
// document.write(some11 + '<br>');
// document.write(some12 + '<br>');
// -----------------------------------------------------------------------
// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person. (Не об'єкт)
// -----------------------------------------------------------------------
// let firstName = 'Kasianov';
// let middleName = 'Oleksandr';
// let lastName = 'Serhiyovych';
// let person = firstName + ' ' + middleName + ' ' + lastName;
// console.log(person)
// -----------------------------------------------------------------------
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.
//     Вивести "Вітаю *Імя* *По батькові*. Тобі *вік* років".
// -----------------------------------------------------------------------
// let middleName = prompt('How you name ?');
// let lastName = prompt ('How you last name ?');
// let old = prompt('How old are you ?');
// document.write( `Hello ${middleName} ${lastName}. You have ${old} years !`)
// -----------------------------------------------------------------------
// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
// -----------------------------------------------------------------------
//     let a = 100;
// console.log(typeof a);
//
//     let b = '100';
// console.log(typeof  b);
//
//     let c = true;
// console.log(typeof c);

// #############################################################
// #############################################################
// - Визначити відповідний оператор в виразах що б вийшов відповідний результат.
//     В однакових виразах не використовувати однакові оператори!!!

//     5 ? 6 -> true
// console.log(5<6);
// ----------------------c-------------------------------------------------
// 5 ? 6 -> false
// console.log(5>6);
// -----------------------------------------------------------------------
// 5 ? 6 -> false
// console.log(5 == 6);
// -----------------------------------------------------------------------
// 5 ? 6 -> false
// console.log(5>=6);
// -----------------------------------------------------------------------
// 10 ? 10 -> true
// console.log(10===10);
// -----------------------------------------------------------------------
// 10 ? 10 -> true
// console.log(10 == 10);
// -----------------------------------------------------------------------
// 10 ? 10 -> false
// console.log(10<10);
// -----------------------------------------------------------------------
// 10 ? 10 -> false
// console.log(10>10);
// -----------------------------------------------------------------------
// 10 ? 10 -> false
// console.log(10 !== 10)
// -----------------------------------------------------------------------
// 123 ? '123' -> false
// console.log(123 === '123');
// -----------------------------------------------------------------------
// 123 ? '123' -> true
// console.log(123 == '123')


// #############################################################
// #############################################################
// - Подумайте Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?
// let str = "20";
// let a = 5;

// document.write(str + a + "<br/>");
//  -->  205 (стрічка) і  новий рядок.
// ==================================================
// document.write(str - a + "<br/>");
//  -->  15 (стрічка) і  новий рядок
// ==================================================
// document.write(str * "2" + "<br/>");
//  -->  40 (стрічка) і  новий рядоки
// ==================================================
// document.write(str / 2 + "<br/>");
//  -->  10 (стрічка)  і  новий рядок