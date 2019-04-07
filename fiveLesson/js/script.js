let menu = document.querySelector('.menu');
let newMenuElement = document.createElement('li');
newMenuElement.appendChild(document.createTextNode("Пятый пункт"));
newMenuElement.classList.add('menu-item');
menu.appendChild(newMenuElement);

document.body.style.background='url(\'/fiveLesson/img/apple_true.jpg\') no-repeat';

let title = document.querySelector('#title');
title.textContent='Мы продаем только подлинную технику Apple';

let banner = document.querySelector('.adv');
banner.remove();

let userData = document.querySelector('#prompt');
let getData = prompt("Каково ваше отношение к технике Apple?");
let userEvaluation = document.createElement('span');
userEvaluation.appendChild(document.createTextNode(getData));
userData.appendChild(userEvaluation);