function timer() {
  let deadLine = 'May 29 2019 21:00:00 GMT+03:00';

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
module.exports = timer;