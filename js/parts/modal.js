function modal() {
	let headerBtn = document.querySelector('.header_btn'),
		popupEngineer = document.querySelector('.popup_engineer'),
		close = document.querySelector('.popup_close');

	headerBtn.addEventListener('click', function(){
		popupEngineer.style.display = 'block';
	});

	close.addEventListener('click', function(){
		popupEngineer.style.display = 'none';
		document.body.style.overflow = '';
	});
}
module.exports = modal;