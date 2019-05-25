function modal() {
  let headerBtn = document.querySelector('.header_btn'),
     popupEngineer = document.querySelector('.popup_engineer'),
     close = document.querySelectorAll('.popup_close'),
     phoneLink = document.querySelectorAll('.phone_link'),
     popup = document.querySelector('.popup');

  setTimeout(showModal, 60000);
  function showModal(){
    popup.style.display = 'block';
  }

  // popupEngineer
  headerBtn.addEventListener('click', function(){
     popupEngineer.style.display = 'block';
  });

  //Popup
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
module.exports = modal;