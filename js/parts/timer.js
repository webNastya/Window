function timer() {
    let deadLine = '2019-05-29';

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
			numbers = timer.querySelectorAll('.numbers1'),
			timeInterval = setInterval(updateClock, 1000);

		function updateClock() {
			let t = getTimeRemeining(endtime);
			for (let i = 0; i < numbers.length; i++) {
				numbers[i].textContent = ('0' + t.numbers[i]).slice(-2);
			}
			if (t.total <= 0) {
				clearInterval(timeInterval);
			}
		}
	}
    setClock('timer', deadLine);
}
module.exports = timer;