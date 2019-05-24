window.addEventListener('DOMContentLoaded', function () {
    'use strict';

    //Modals
    function modal() {
        // popupEngineer
        let headerBtn = document.querySelector('.header_btn'),
            popupEngineer = document.querySelector('.popup_engineer'),
            close = document.querySelectorAll('.popup_close');

        headerBtn.addEventListener('click', function(){
            popupEngineer.style.display = 'block';
        });

        //Popup
        let phoneLink = document.querySelectorAll('.phone_link'),
            popup = document.querySelector('.popup');

        for (let i = 0; i < phoneLink.length; i++) {
            phoneLink[i].addEventListener('click', function(){
                popup.style.display = 'block';
            });
        }

        let allClose = document.querySelectorAll('.popup_engineer, .popup');
        for (let i = 0; i < close.length; i++) {
            close[i].addEventListener('click', function(){
                for (let c = 0; c < allClose.length; c++) {
                    allClose[c].style.display = 'none';
                    document.body.style.overflow = '';
                }
            });
        }
    }
    modal();

    //Form
    function form() {
        let message = {
            loading: 'Загрузка...',
            success: 'Спасибо! Скоро мы с вами свяжемся!',
            failure: 'Что-то пошло не так'
        };
    let form = document.querySelectorAll('.form'),
        statusMessage = document.createElement('div');
        statusMessage.classList.add('status');

   

    //Timer
    function timer() {
        let deadLine = 'May 29 2019 21:59:59 GMT+03:00';

        function getTimeRemeining(endtime) {
            let t = Date.parse(endtime) - Date.parse(new Date()),
                seconds = Math.floor((t/1000) % 60),
                minutes = Math.floor((t/1000/60) % 60),
                hours = Math.floor((t/(1000/60/60) % 24)),
                days = Math.floor((t/(1000*60*60*24)));

            return {
                'total' : t, //кол-во милисекунд
                'days' : days,
                'hours' : hours,
                'minutes' : minutes,
                'seconds' : seconds
            };
        }

        function setClock(id, endtime) {
            let timer = document.getElementById(id),
            //numbers = timer.querySelectorAll('.numbers1'),
            days = document.querySelector('#days'),
            hours = document.querySelector('#hours'),
            minutes = document.querySelector('#minutes'),
            seconds = document.querySelector('#seconds'),
            timeInterval = setInterval(updateClock, 1000);

            function updateClock() {
                let t = getTimeRemeining(endtime);

                days.textContent = ('0' + t.days).slice(-2);
                hours.textContent = ('0' + t.hours).slice(-2);
                minutes.textContent = ('0' + t.minutes).slice(-2);
                seconds.textContent = ('0' + t.seconds).slice(-2);
                // for (let i = 0; i < numbers.length; i++) {
                //  numbers[i].textContent = ('0' + t.numbers[i]).slice(-2);
                // }
                if (t.total <= 0) {
                    clearInterval(timeInterval);
                    days.textContent = '00';
                    hours.textContent = '00';
                    minutes.textContent = '00';
                    seconds.textContent = '00';
                }
            }
        }
        setClock('.container1', deadLine);
    }
    timer();
});