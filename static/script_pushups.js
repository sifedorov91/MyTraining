"use strict";

let resultBtn = document.querySelector('.mybtn');
let stepCount = document.getElementById('step_count');
let time = document.getElementById('time');
let progress = document.getElementById('progress_bar');
let day = document.querySelector('div.progress-bar').children[0];
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

function statArr() {   //Возвращает массив со статистикой
    let walkStat = document.getElementById('stat').textContent.split(',');
    let walkArr = [];
    for (let i of walkStat){
        walkArr.push(i.split(' '));
    };
    walkArr.pop();
    return walkArr;
};

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

resultBtn.addEventListener('click', function() {
    progress.setAttribute('style', 'width: 18%; animation: light 1000ms alternate');
});

let dateInput = document.querySelector('.items1');
let stepInput = document.querySelector('.items3');
function changeHeight() {
    console.log(stepInput.offsetHeight, dateInput.offsetHeight)
    stepInput.style.height = dateInput.offsetHeight;
    console.log(stepInput.offsetHeight, dateInput.offsetHeight)
};


//if (document.querySelector('body').offsetWidth < 380) {
//    document.querySelector('div.progress-bar').children[0].style = 'display:none';
//    document.querySelector('div.progress-bar').children[1].style = '';
//}

day_func();  //Функция изменяет окончание слова "день" в зависимости от числа
progressBorderRadius(); // Загкруглит статус бар когда будет более 96%
changeDates();
changeHeight();

