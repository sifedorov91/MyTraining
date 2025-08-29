let imgLFoot = document.querySelector('.img.lfoot');
let imgRFoot = document.querySelector('.img.rfoot');
let mainEl = document.querySelector('.main');
let bottomfoot = 60;
imgLFoot.style.setProperty('--topheight', window.innerHeight -bottomfoot + "px");
imgRFoot.style.setProperty('--topheight', window.innerHeight -bottomfoot + "px");
mainEl.style.height = mainEl.clientHeight + "px";
mainEl.style.width = mainEl.clientWidth + "px";

imgLFoot.style.setProperty('--deviceWidth', document.querySelector('.main').clientWidth + "px");
imgRFoot.style.setProperty('--deviceWidth', document.querySelector('.main').clientWidth + "px");

//document.querySelector('.main').offsetHeight
