// 1. Створити масив з 10 чисел (можна використовувати Math.random Та Math.floor). Скласти результат цих чисел в змінній result.
let userArr = [];
    userArr[0]= Math.floor(Math.random()*20);
    userArr[1]= Math.floor(Math.random()*20);
    userArr[2]= Math.floor(Math.random()*20);
    userArr[3]= Math.floor(Math.random()*20);
    userArr[4]= Math.floor(Math.random()*20);
    userArr[5]= Math.floor(Math.random()*20);
    userArr[6]= Math.floor(Math.random()*20);
    userArr[7]= Math.floor(Math.random()*20);
    userArr[8]= Math.floor(Math.random()*20);
    userArr[9]= Math.floor(Math.random()*20);
console.log(userArr);
let result = (userArr[0] + userArr[1] + userArr[2] + userArr[3]+ userArr[4] + userArr[5]+ userArr[6] + userArr[7]+ userArr[8] + userArr[9])
console.log(result)
// -------------------------------------------------------------------------------------------------------------
// 2. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр
let book ={
    name: 'Aquarium',
    numberOfPages: 351,
    genre: 'Biography'
}
console.log(book);
// -------------------------------------------------------------------------------------------------------------
// 3. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр, автори
let book2 = {
    name: 'The Shawshank Redemption',
    numberOfPages: 512,
    genre: 'Horror fiction',
    author: 'Stephen King'
}
console.log(book2);
// -------------------------------------------------------------------------------------------------------------
// 4. Створити маис об'єктів book з наступними полями  - назва, кількість сторінок, жанр, автори. Вивести кожну книгу як окремий об'єкт
let myLibrary = [
    {
        bookName: 'Aquarium',
        numberOfPages: 351,
        genre: 'Biography',
        author: 'Victor Suvorov'
    },
    {
        bookName: 'Kot',
        numberOfPages: '145',
        genre: 'Horror',
        author: 'Mark Tes'
    },
    {
        bookName: 'Boogi mean',
        numberOfPages: 201,
        genre: 'Horror',
        author: 'Natan Show'
    }
]
console.log(myLibrary[2]);
console.log(myLibrary[1]);
console.log(myLibrary[0]);
console.log(myLibrary);
// -------------------------------------------------------------------------------------------------------------
// 5. Напишіть код, який вираховує площу прямокутника висотою 23см. (змінна height) та шириною 10см (змінна width).
// Значення площі зберігати в змінній s.
let height = 23;
let width = 10;
let S = height*width;
console.log(S)
// -------------------------------------------------------------------------------------------------------------
// 6. Напиши код, який знаходить об'єм циліндра заввишки 10м (змінна heightC) та діаметром основи 4м (dC),
// результат помістіть у змінну v.
let heightC = 10;
let dC = 4;
let r = dC/2
let v = Math.floor(Math.PI*(r**2)*heightC);
console.log(v)

// 7. У прямокутного трикутника дві сторони n (зі значенням 3) та m (зі значенням 4).
// Знайдіть гіпотенузу k за теоремою Піфагора (потрібно використовувати функцію Math.pow (число, ступінь) або оператор зведення в ступінь **).

let n = 3;
let m = 4
let k = Math.sqrt((3**2) + (Math.pow(4, 2)));
console.log(k);

