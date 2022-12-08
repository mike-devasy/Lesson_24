// Строгий режим
"use strict"

// Масиви
/*
let someArray = [10, "Жека", true];
console.log(typeof someArray);
console.log(someArray);
console.log(someArray.length);
*/
/*
let usersNames = ["Вася", "Петро", "Ілдика"];
console.log(usersNames);
*/
/*
let usersNames = ["Вася", "Петро", "Ілдика"];
*/
/*
console.log(usersNames);
console.log(usersNames[1]);
*/
/*
for (let i = 0; i < usersNames.length; ++i) {
	console.log(usersNames[i]);
}
*/

// Метод перебору масиву
/*
usersNames.forEach(userName => {
	console.log(userName);
});
*/
/*
// З використанням індексу
usersNames.forEach((userName, index) => {
	console.log(index);
	console.log(userName);
});
*/

// Додати елемент в масив
// push додає елемент  кінець масиву
/*
let usersNames = ["Вася", "Петро", "Ілдика"];
console.log(usersNames);
usersNames.push("Жека");
console.log(usersNames);
*/

// Чи є елемент в масиві (пошук елемента)
/*
let usersNames = ["Вася", "Петро", "Ілдика"];
console.log(usersNames);
console.log(usersNames.includes("Петро"));

if (!usersNames.includes(10)) {
	usersNames.push(10);
	console.log(usersNames);
}
*/

// Чи це масив. Array.isArray(тут пишемо змінну)
/*
let usersNames = ["Вася", "Петро", "Ілдика"];
console.log(Array.isArray(usersNames));
*/

// Сортування чисел
/*
let arrTwo = [8, 22, 1];
console.log(arrTwo.sort());

function compareNumeric(a, b) {
	//console.log(`Порівнюємо ${a} і ${b}`);
	//if (a > b) return 1;
	//if (a == b) return 0;
	//if (a < b) return -1;
	return a - b;
}
console.log(arrTwo.sort(compareNumeric));
*/

// З масива у рядок
/*
let usersNames = ["Вася", "Петро", "Ілдика"];
let usersNamesStr = usersNames.join(' ');
console.log(usersNamesStr);
*/

// Функції
/*
Використовується для запуску
коду який повторюється,
та для використання методу функціонального
програмування (кожну дію варто помістити в окрему функцію)
*/


// Об'ява функції
// Синтаксис
/*
function ім'я(параметри){
	// тіло функції (код функції)
}
*/
/*
Наприклад, функції, починаючі с
"show..." зазвичай що-то показують,
"get..." – повертають значення,
"calc..." – що-то вичисляють,
"create..." – що-то створюють,
"check..." – що-то перевіряють і повертають логічно
значення, і т.д.
*/
/*
// Приклади імен
showMessage
getOptions
calcSum
*/
/*
function showMessage() {
	console.log("Повідомлення");
}
*/
// Виклик (запуск) функції

/*
showMessage();

function showMessage() {
	console.log("Повідомлення");
}

showMessage();
showMessage();
showMessage();

// ... code ...
// ... code ...
// ... code ...
showMessage();

// ... code ...
// ... code ...
// ... code ...
showMessage();

*/

// Параметри функції
/*
const numOne = 10;
const numTwo = 20;

// Функція суми двох чисел
function calcSum(a, b) {
	showSum(a + b);
}
// Функція виводу в консоль
function showSum(sum) {
	console.log(sum);
}

calcSum(numOne, numTwo);
*/

// Значення параметру за замовченням
/*
function someFunc(text = "Жека") {
	console.log(text);
}
someFunc();
*/


// Поовернення результату
/*
const numOne = 10;
const numTwo = 20;

// Функція суми двох чисел
function calcSum(a, b) {
	return a + b;
}
// Функція виводу в консоль
function showSum(sum) {
	console.log(sum);
}
const calcSumResult = calcSum(numOne, numTwo);
showSum(calcSumResult);
*/

// Область видимості
// Привласнення функції змінній
/*
let someVar;
let someElseFunc;

function someFunc() {
	someVar = 10;
	// Функціональний вираз
	someElseFunc = function () {
		console.log("Some Text");
	}
}
someFunc();
someElseFunc();

console.log(someVar);
*/

// Стрілочні функції

// Функція в один рядок
/*
let showText = function (text) { console.log(text); }
let showTextArrow = (text) => console.log(text);

// Функція де більше рядків
let showTextArrowMore = (text) => {
	console.log(text);
	console.log(text);
	console.log(text);
}
showTextArrow('Привіт!')
*/

// =================== DOM ========================

// WINDOW

// Отримання ширини вікна браузера (в'юпорта)
/*
let windowWidth = window.innerWidth;
console.log(windowWidth);

// Отримання висоти вікна браузера (в'юпорта)
let windowHeight = window.innerHeight;
console.log(windowHeight);
*/

//BOM
//Navigator

// Дані про браузер
// console.log(navigator.userAgent);

// Який в нас браузер
/*
if (navigator.userAgent.includes("Chrome")) {
	console.log('Браузер Хром');
} else if (navigator.userAgent.includes("Firefox")) {
	console.log('Браузер Firefox');
}*/

// Платформа
// console.log(navigator.platform);

//Location
// Адресний рядок браузера
// console.log(location.href);

// Перенаправлення користувача
// location.href = "https://google.com";

// Alert
// alert('Повідомлення');

//Сonfirm
/*
let confirmAnswer = confirm("Запитання");
console.log(confirmAnswer);
*/
//Prompt
/*
let promptAnswer = prompt("Запитання");
console.log(promptAnswer);
*/

// Document Object Model
// Об'ектна модель документу

/*
Навігація по документу
*/
/*
// До тегу html
const htmlElement = document.documentElement;
// До тегу head
const headElement = document.head;
// До тегу body
const bodyElement = document.body;
*/
// Перший та останній дочірній елемент
/*
const bodyElement = document.body;
const firstChild = bodyElement.firstElementChild;
const lastChild = bodyElement.lastElementChild;
console.log(firstChild);
console.log(lastChild);
*/

// Усі дочірні елементи (Колекція)
//const bodyElement = document.body;

// Колекція дочірніх елементів
/*
const childNodes = bodyElement.children;
console.log(childNodes);
*/
// Перебір колекції
/*
for (let i = 0; i < childNodes.length; ++i) {
	console.log(childNodes[i]);
}
*/
// For ... of метод перебору для колекцій
/*
for (let childNode of childNodes) {
	console.log(childNode);
}
*/

// Навігація до батьківських та сусідніх елементів
/*
const bodyElement = document.body;
const previousSibling = bodyElement.previousElementSibling;
const nextSibling = bodyElement.nextElementSibling;
const parentElement = bodyElement.parentElement;

console.log(previousSibling);
console.log(nextSibling);
console.log(parentElement);
*/

// !!! Найчастіше використовується !!!
// Пoшук та отримання довільного елементу

// Отримання першого знайденого об'єкту
/*
const someObject = document.querySelector('.list__item');
console.log(someObject);
*/

// Отримання список (статична колекція) знайдених об'єктів
/*
const someObjects = document.querySelectorAll('.list__item');
console.log(someObjects);

someObjects.forEach(someObject => {
	someObject.style.color = 'red';
});
*/

// Шакути можна і в будь-якому об'єкті
/*
const list = document.querySelector('.list');
const listItems = list.querySelectorAll('.list__item');
*/

// Closest
// Пошук батьківського об'єкту
// (Перевірка наявності батьківського об'єкту)
// ! Шукає не тільки батьківський об'єкт
// а й перевіряє чи є вказаний селектор у самого об'єкту
/*
const list = document.querySelector('.list');
const isPageParent = list.closest('.page');

if (isPageParent) {
	console.log('Так, є');
} else {
	console.log('Ні, немає');
}
*/

// Зміна документу
/*
const listItems = document.querySelectorAll('.list__item');

// innerHTML дає змогу отримати те що всередені об'єкту
// включно з тегами. Також дозволяє перезаписувати контент в середені об'єкту

// textContent дає змогу отримати текст всередені об'єкту. Також дозволяє перезаписувати текст в середені об'єкту

// Ці методи перезаписують усе що є в об'екті

listItems.forEach((listItem, index) => {
	listItem.innerHTML = `<span>Індекс: ${index}</span>`;
});
*/

// Створення об'єктів
/*
let newObject = document.createElement('div');
newObject.innerHTML = `<span class="big">Привіт!</span>`;
console.log(newObject);

const page = document.querySelector('.page');
*/
// Вставка створеного об'єкту
// Перед
// page.before(newObject);
// Після
// page.after(newObject);
// Всередену на початок
// page.prepend(newObject);
// Всередену в кінець
// page.append(newObject);

// insertAdjacentHTML/Text/Element

// const page = document.querySelector('.page');

/*
"beforebegin" – вставити html безпосередньо перед page,
"afterbegin" – вставити html на початок page,
"beforeend" – вставити html в кінець page,
"afterend" – вставити html безпосередньо після page.
*/

/*
// Вставка HTML коду
page.insertAdjacentHTML("beforeend", `
	<div class="block">
		<div class="block__item">
			Text
		</div>
	</div>
`);

const block = document.querySelector('.block');
console.log(block);
*/
/*
// Вставка елементу
const listItem = document.querySelector('.list__item');
page.insertAdjacentElement("beforeend", listItem);
*/

// =================================================
// Домашка  24 урок 
// Стрелочные функции,рекурсия и т.д.
// задача 1
// function showName() {
// 	console.log('Вася!');
// }
// setTimeout(showName,0);
// console.log('Коля!');
// Задача 2-3
// showName()
// showMessage();
// function showMessage() {
	// console.log('Сообщение')
// }
// showMessage();
// let showMessage = function(){
// 	console.log('Сообщение')
// };
  // Задача 4
// let showMessage;
// if (2>1) {
// 	showMessage = function () {
// 		console.log('Сообщение');
// 	}
// }
// if (showMessage) {
// 	showMessage();
// }
// =============Массивы в JS++++++++++++++
// Задача 1
// let arr = ['Ваня','Иштван','Оля',];
// let newArr = arr;
// newArr.push('Петя');
// console.log(arr.length);
// Задача 2
// let users = ['Ваня','Иштван',];
// let newUsers = users.concat('Оля');
// newUsers.splice(1,1,'Петя');
// let removed = newUsers.splice(0,1);
// console.log(removed);
// newUsers.splice(0,0,'Маша','Паша');
// console.log(newUsers)
// Задача 3
// let arr  = ['Ваня','Иштван','Оля',];
// let removed = arr.splice(1,1);
// console.log(removed);
// Задача 4
// let str = 'Ваня,Иштван,Оля';
// let arr = str.split(',');
// console.log(arr);
// Задача 5
// let arr = [9,2,8];
// let reduceValue = arrTwo.reduce(function(previousValue,item,index,array){
// 	console.log (previousValue);
// });
// ------------------DOM в JS--------------------
// Задача 1 

const  elemsOne  = document.querySelector('[data-say-hi');
if( elemsOne) 
{ console.log(elemsOne.dataset.sayHi)};

// Задача 2
// const list = document.querySelectorAll('li');
// let names = 'Нет такого имени';
// list.forEach (li => { if(li.textContent.toLowerCase () == 'йончи') return names = li})
// console.log(names);
// Задача 3
// const elemCol = document.querySelector('.like');
// console.log(elemCol);
// Задача 4
const list = document.querySelector('ul');
list.insertAdjacentHTML(
	'beforeend',
	'<li>Текст</li>');
	// ================Размеры,прокрутка и координаты....==========
	// Задача 1
	// const mainElement = document.documentElement;
	// const mainElementWidth = mainElement.clientWidth;
	// console.log(mainElementWidth);
	// const windowWidth = window.innerWidth;
	// console.log(windowWidth);
	// let scrollWidth = windowWidth - mainElementWidth
	// console.log(scrollWidth);
	// Задача 2
	function setScrolltoOptions () {window.scrollTo({
		top:100,
		left:0,
		behavior:"smooth",
	})
	setTimeout(setScrolltoOptions,1000);
	}
	// Задача 3
	const like = document.querySelector('.like');
	const getlikeCoord = like.getBoundingClientRect();
console.log(getlikeCoord);
const title = document.querySelector('.header__title');
const getTitleCoord = title.getBoundingClientRect();
console.log(getTitleCoord);
const item = document.querySelector('.item');
const getItemCoord = item.getBoundingClientRect();
console.log(getItemCoord);