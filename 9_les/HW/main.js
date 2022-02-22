// // Все робити за допомоги js.
// // - створити блок,
// // - додати йому класи wrap, collapse, alpha, beta
// // - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// // - додати цей блок в body.
// // - клонувати його повністю, та додати клон в body.
// // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@-------------@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@-------------@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//
// let divElement = document.createElement('div');
// divElement.classList.add('wrap')
// divElement.classList.add('collapse')
// divElement.classList.add('alpha')
// divElement.classList.add('beta')
// divElement.innerText = 'Azazaza'
// document.body.append(divElement)
//
// let cloneDivElement = divElement.cloneNode(true);
// document.body.append(cloneDivElement)

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@-------------@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@-------------@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@-------------@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@-------------@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// - Є масив:
//     ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@-------------@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@-------------@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// let someArr = ['Main','Products','About us','Contacts'];
//
//
// let ulElement = document.getElementsByClassName('menu')[0];
//
// for (let string of someArr) {
//     let li = document.createElement('li');
//     li.innerText = string;
//     ulElement.append(li)
// }

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@-------------@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@-------------@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@-------------@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@-------------@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// - Є масив
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@-------------@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@-------------@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
//
// let mainDiv = document.createElement('div');
// document.body.append(mainDiv);
// mainDiv.classList.add('courses-And-Duration')
//
//
// for (let coursesElement of coursesAndDurationArray) {
// let elementDiv = document.createElement('div');
// elementDiv.innerText = `${coursesElement.title} - ${coursesElement.monthDuration}`
// mainDiv.append(elementDiv)
//
// }

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@-------------@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@-------------@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@-------------@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@-------------@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// - Є масив
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,
// в якому буде <h1 class='heading'>  з title  елементу,
// та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@-------------@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@-------------@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
// let mainDivElement = document.createElement('div');
// mainDivElement.classList.add('courses-And-Duration')
// document.body.append(mainDivElement)
//
//
// for (let coursesElement of coursesAndDurationArray) {
//     let childDivElement = document.createElement('div');
//     childDivElement.classList.add('item');
//
//     let childHeadingElement = document.createElement('h1');
//     childHeadingElement.classList.add('heading')
//     childHeadingElement.innerText = coursesElement.title
//
//     let chidParagraphElement = document.createElement('p');
//     chidParagraphElement.classList.add('description')
//     chidParagraphElement.innerText =`${coursesElement.monthDuration}`
//
//     childDivElement.appendChild(childHeadingElement)
//     childDivElement.appendChild(chidParagraphElement)
//     mainDivElement.append(childDivElement)
// }
//
// document.body.append(mainDivElement)
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@-------------@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@-------------@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@-------------@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@-------------@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
