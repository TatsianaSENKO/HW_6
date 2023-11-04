// ЗАДАНИЕ 1
/* Дана строка 'aaa@bbb@ccc'. Замените все @ на ! с помощью глобального поиска и замены. */

let str = 'aaa@bbb@ccc';

console.log(str.replace(/@/g, '!'));

// ЗАДАНИЕ 2
/* В переменной date лежит дата в формате 2025-12-31. Преобразуйте эту дату в формат 31/12/2025. */

let date = '2025-12-31';

console.log(date.replace(/(2025)-(12)-(31)/,'$3/$2/$1'));

// ЗАДАНИЕ 3
/* Дана строка «Я учу javascript!». Вырежете из нее слово «учу» и слово «javascript» тремя разными способами (через substr, substring, slice). */

let str3 = 'Я учу javascript!';

console.log(str3.substr(2, 4));
console.log(str3.substr(6, 10));
console.log(str3.substring(2, 5));
console.log(str3.substring(6, 16));
console.log(str3.slice(2, 5));
console.log(str3.slice(6, 16));


// ЗАДАНИЕ 4
/* Дан массив с элементами 4, 2, 5, 19, 13, 0, 10. Найдите квадратный корень из суммы кубов его элементов. Для решения воспользуйтесь циклом for. */

let arr = [4, 2, 5, 19, 13, 0, 10];
sum = 0;

for (let i = 0; i < arr.length; i++) {
    arr[i];
    sum += Math.pow(arr[i],3);
}
console.log(Math.sqrt(sum));


// ЗАДАНИЕ 5
/* Даны переменные a и b. Отнимите от a переменную b и результат присвойте переменной c. Сделайте так, чтобы в любом случае в переменную c записалось положительное значение.Проверьте работу скрипта при a и b, равных соответственно 3 и 5, 6 и 1. */

function getNumber(a, b) {
    
    let c = Math.abs(a - b);
    console.log(c);
}

getNumber(3, 6);
getNumber(6, 1);


// ЗАДАНИЕ 6
/* Выведите на экран текущую дату-время в формате 12:59:59 31.12.2014. Для решения этой задачи напишите функцию, которая будет добавлять 0 перед днями и месяцами, которые состоят из одной цифры (из 1.9.2014 сделает 01.09.2014). */

let dateNow = new Date();

let time = dateNow.getHours() + ':' + dateNow.getMinutes() + ':' + dateNow.getSeconds();
let date = zero(dateNow.getDay()) + '.' + zero(dateNow.getMonth()) + '.' + dateNow.getFullYear();;

console.log(time + ' ' + date);

function zero(num) {
    if (num <= 9) {
        return num = '0' + num;
    } else {
        return num;
    }
}


// ЗАДАНИЕ 7
/* Дана строка 'aa aba abba abbba abca abea'. Напишите регулярку, которая найдет строки aba, abba, abbba по шаблону: буква 'a', буква 'b' любое количество раз, буква 'a'.
 */

let str = 'aa aba abba abbba abca abea';

let regexp = str.match(/ab+a/ig);
console.log(regexp);

// ЗАДАНИЕ 8
/* Напишите ф-цию строгой проверки ввода номер телефона в
международном формате (<код страны> <код города или сети> <номер телефона>). Функция должна возвращать true или false. Используйте регулярные выражения. */

function validPhone(phone) {
    let regexp = /^\+?375 ?\(?\-?[2-9]{2}\)? ?\-?(\d[ \-]?)+\d/gmi;

    return regexp.test(phone);

}
console.log(validPhone('80291855958'));

// ЗАДАНИЕ 9
/*  Напишите ф-цию строгой проверки адреса эл. почты с учетом следующих условия:
- весь адрес не должен содержать русские буквы и спецсимволы, кроме одной «собачки», знака подчеркивания, дефиса и точки;
- имя эл. почты (до знака @) должно быть длиной более 2 символов, причем имя может содержать только буквы, цифры, но не быть первыми и единственными в имени;
- после последней точки и после @, домен верхнего уровня (ru, by, com и т.п.) не может быть длиной менее 2 и более 11 символов.
Функция должна возвращать true или false. Используйте регулярные выражения. */

function validEmail(email) {
    
    let regexp = /^[a-z0-9](\w+[\.\-_]?)+@(\w{2,11}[\.\-]?)\.[a-z]{2,11}$/gmi;

    return regexp.test(email);

}
console.log(validEmail('an.tatsiana1@gmail.com'));


// ЗАДАНИЕ 10
/*  Напишите ф-цию, которая из полного адреса с параметрами и без, например: https://tech.onliner.by/2018/04/26/smart-do-200/? utm_source=main_tile utm_medium=smartdo200#zag3 , получит адрес доменного имени (https://tech.onliner.by), остальную часть адреса без параметров (/2018/04/26/smart-do-200/), параметры
(utm_source=main_tile&utm_medium=smartdo200) и хеш (#zag3). В адресе может и не быть каких-либо составляющих. Ф-ция должна возвращать массив. */


function urlNames(str) {

let domain = String(str.match(/https?:\/\/[a-z0-9\._]+/gmi));

let str1 = str.replace(domain, '');

let path = String(str1.match(/\/.+\//gmi));

let str2 = str1.replace(path, '');

let hash = String(str2.match(/\#.+/gmi));

let str3 = str2.replace(hash, '');

let parameter = str3;

console.log('Адрес доменного имени: ' + domain);
console.log('Остальная часть адреса без параметров: ' + path);
console.log('Параметры: ' + parameter);
console.log('Хеш: ' + hash);

}

urlNames('https://tech.onliner.by/2018/04/26/smart-do-200/? utm_source=main_tile utm_medium=smartdo200#zag3');
