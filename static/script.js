"use strict";

let stepCount = document.getElementById('step_count');
let time = document.getElementById('time');
let progress = document.getElementById('progress_bar');
let day = document.getElementById('day');
let day_number = day.textContent.match(/\d+/); // регуляркой вытаскиваем количество дней из строки
const arr = [5,6,7,8,9,0];
let day_func = function(){
    if (arr.includes(parseFloat(day_number)) ||
    arr.includes((parseFloat(day_number)%10)) ){
        day.textContent = (day.textContent).replace('дня','дней');
    } else if ([1].includes(parseFloat(day_number)) ||
    arr.includes((parseFloat(day_number)%10))) {
        day.textContent = (day.textContent).replace('дня','день');
};
}; //Функция динамически меняет окончание слова "День"

stepCount.addEventListener('click', function () {
    stepCount.removeAttribute('value');
});

time.addEventListener('click', function () {
    time.removeAttribute('value');
});

day_func();

let str = 'asd 12 asd 14 qe';
let re = /\d+/ ;
console.log(str.match(re)[0]);