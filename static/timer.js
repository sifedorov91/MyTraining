
let minutes = document.querySelector('.minutes');
let seconds = document.querySelector('.seconds');
let timerBar = document.querySelector('#timer_bar');
let timerText = document.querySelector('#timer_bar p');
function timeFormat(value) {
    return value < 10 ? '0' + value : value
};

function startTimer () {
    let time = new Date().getTime() + (1.5 * 60 * 1000) + 1000;
    let start = setInterval(() => {
        if (time <= new Date().getTime()) {
        minutes.textContent = 're';
        seconds.textContent = 'start';
        timerBar.style.width = '100%';
        timerText.textContent = 'Перезапустить таймер'
        clearInterval(start);
        return
        };
        timerText.textContent = 'Таймер запущен!'
        minutes.textContent = timeFormat(Math.trunc((time - new Date().getTime()) / (1000 * 60), 2));
        seconds.textContent = timeFormat(Math.trunc((time - new Date().getTime()) % (1000 * 60) / 1000));
        timerBar.style.width = Math.trunc((((90000 - (time - new Date().getTime())) / 90000) * 100 ))+'%';
        console.log((time-new Date().getTime()));
        console.log(Math.trunc((((90000 - (time - new Date().getTime())) / 90000) * 100 )));
    }, 1000);
};


let timer = document.querySelector('.item5');
timer.addEventListener('click', startTimer);
//let timerStart = setInterval(() => {
//    if (time <= new Date().getTime()) {
//    minutes.textContent = '00';
//    seconds.textContent = '00';
//    clearInterval(timer);
//    return
//    };
//    minutes.textContent = timeFormat(Math.trunc((time - new Date().getTime()) / (1000 * 60), 2));
//    seconds.textContent = timeFormat(Math.trunc((time - new Date().getTime()) % (1000 * 60) / 1000));
//}, 1000);