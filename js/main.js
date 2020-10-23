//console.log('файл js подключен');
//создаем переменную в которую положим кнопку меню
let menuToggle = document.querySelector('#menu-toggle');
//создаем переменную в котоорую кладем меню
let menu =  document.querySelector('.sidebar');
//console.log(menuToggle);
 //отслеживаем клик по кнопке меню и запускаем функцию
menuToggle.addEventListener('click', function(event){
//console.log('клик');
//отменяем стандартное поведение ссылки
event.preventDefault();
//веешаем класс на меня когда кликнули по кнопке
menu.classList.toggle('visible')

});

