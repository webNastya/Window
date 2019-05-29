function modal() {
  let headerBtn = document.querySelector('.header_btn'),
     popupEngineer = document.querySelector('.popup_engineer'),
     phoneLink = document.querySelectorAll('.phone_link'),
     popup = document.querySelector('.popup'),
     close = document.querySelectorAll('.popup_close'),
     modals = document.querySelectorAll('.popup_engineer, .popup');

  setTimeout(showModal, 60000);
  function showModal(){
    popup.style.display = 'block';
  }

  headerBtn.addEventListener('click', function(){
    popupEngineer.style.display = 'block';
    document.body.style.overflow = 'hidden';
  });

  for (let i = 0; i < close.length; i++) {
    phoneLink[i].addEventListener('click', function(){
      popup.style.display = 'block';
      document.body.style.overflow = 'hidden';
    });
  }

  function closeModal() {
    for (let i = 0; i < close.length; i++) {
      close[i].addEventListener('click', function(){
        for (let o = 0; o < modals.length; o++) {
            modals[o].style.display = 'none';
            document.body.style.overflow = '';
          }
      });
    }
  }
  closeModal();
  // Close In Outside Click
  function outsideClick(e) {
    for (let i = 0; i < modals.length; i++) {
      if (e.target == modals[i]) {
        modals[i].style.display = 'none';
        document.body.style.overflow = '';
      }
    }
  }
  window.addEventListener('click', outsideClick);

  //Pictures
  let photoSmall = document.querySelectorAll('.mini'),
      overlay = document.querySelector('.overlay');

    for (let i = 0; i < photoSmall.length; i++) {
      photoSmall[i].addEventListener('click', () => {
        event.preventDefault();
        let div = document.createElement('div'),
            a = photoSmall[i].parentElement.href;
        div.innerHTML = photoSmall[i].parentElement.innerHTML;
        overlay.appendChild(div);
        overlay.querySelector('img').src = a;
        overlay.style.cssText = 'display: flex; justify-content: center; align-items: center;';
        document.body.style.overflow = 'hidden';
      });
    }

    window.addEventListener('click', (e) => {
      if (e.target == overlay) {
          overlay.style.display = 'none';
          overlay.innerHTML = '';
          document.body.style.overflow = '';
      }
    });
}
module.exports = modal;