"use strict";

let stepCount = document.getElementById('step_count');
let time = document.getElementById('time');
let progress = document.getElementById('progress_bar');
let day = document.getElementById('day');
let day_number = day.textContent.match(/\d+/); // регуляркой вытаскиваем количество дней из строки
const arr = [5,6,7,8,9,0];
function day_func(){                 //Функция динамически меняет окончание слова "День"
    if (arr.includes(parseFloat(day_number)) ||
    arr.includes((parseFloat(day_number)%10)) ){
        day.textContent = (day.textContent).replace('дня','дней');
    } else if ([1].includes(parseFloat(day_number)) ||
    arr.includes((parseFloat(day_number)%10))) {
        day.textContent = (day.textContent).replace('дня','день');
};
};
function progressBorderRadius(){
    if (parseFloat(progress.style.width) > 96) {
    progress.style.borderBottomRightRadius = '25px';
    progress.style.borderTopRightRadius = '25px';
    };
};
stepCount.addEventListener('click', function () {
    //stepCount.removeAttribute('value');
    step_count.value = null;
});


time.addEventListener('click', function () {
    //time.removeAttribute('value');
    time.value = null;
});


let changeDate = document.querySelectorAll('td.date');
function changeDates() {
        for (let i of changeDate) {
        let date = new Date(i.textContent);
        let day = date.getDate();
        let monthIndex = date.getMonth();
        let months = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];
        let monthName = months[monthIndex];
        let year = date.getFullYear();
        let formattedDate = day + " " + monthName + " " + year;
        i.textContent = formattedDate;
    };
};
function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

let statBlock = document.getElementById('statistic');
let myBlock = document.querySelector('.myblock');
let bodyEl = document.querySelector('body');
let formBlock = document.querySelector('#formblock');
let progressBlock = document.querySelector('#progressblock');

const elementIsVisibleInViewport = (el, partiallyVisible = false) => {  // Фкнуция проверяет полностью виден элемент или нет
  const { top, left, bottom, right } = el.getBoundingClientRect();
  const { innerHeight, innerWidth } = window;
  return partiallyVisible
    ? ((top > 0 && top < innerHeight) ||
        (bottom > 0 && bottom < innerHeight)) &&
        ((left > 0 && left < innerWidth) || (right > 0 && right < innerWidth))
    : top >= 0 && left >= 0 && bottom <= innerHeight && right <= innerWidth;
};

function setAttr(obj, atr, value){
    obj.setAttribute(atr, `${value}`);
};
 myBlock.addEventListener('click',function() {
    setAttr(myBlock,'style','display:none');
    setAttr(statBlock,'style','display:block');
    if (!elementIsVisibleInViewport(formBlock)) {
        setAttr(formBlock, 'style', 'display:none');
       };
    if ((!elementIsVisibleInViewport(progressBlock))) {
        setAttr(progressBlock, 'style', 'display:none');
        };

});

statBlock.addEventListener('click', function() {
    statBlock.style.opacity = 0;
    statBlock.style.display = 'none';
    myBlock.style.display = 'block';
    myBlock.style.opacity = 0.99;
    setAttr(formBlock, 'style','display:block');
    setAttr(progressBlock, 'style', 'display:block');
});

let dateInput = document.querySelector('.items1');
let stepInput = document.querySelector('.items2');
let timeInput = document.querySelector('.items3');
function changeHeight() {
    stepInput.style.height = dateInput.offsetHeight;
    timeInput.style.height = dateInput.offsetHeight;
};






day_func();  //Функция изменяет окончание слова "день" в зависимости от числа
progressBorderRadius() // Загкруглит статус бар когда будет более 96%
changeDates()
changeHeight()

