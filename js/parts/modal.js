const modal = () => {
	let headerBtn = document.querySelector('.header_btn'),
         popupEngineer = document.querySelector('.popup_engineer'),
         phoneLink = document.querySelectorAll('.phone_link'),
         popup = document.querySelector('.popup'),
         close = document.querySelectorAll('.popup_close'),
         modals = document.querySelectorAll('.popup_engineer, .popup');

      setTimeout(showModal, 60000);
      function showModal() {
        popup.style.display = 'block';
      }

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

      headerBtn.addEventListener('click', () => {
        popupEngineer.style.display = 'block';
        document.body.style.overflow = 'hidden';
      });
      
      phoneLink.forEach(item => {
        item.addEventListener('click', (e) => {
          e.preventDefault();
          popup.style.display = 'block';
          document.body.style.overflow = 'hidden';
        });
      });

      const closeModal = () => {
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
      const outsideClick = (e) => {
        for (let i = 0; i < modals.length; i++) {
          if (e.target == modals[i]) {
            modals[i].style.display = 'none';
            document.body.style.overflow = '';
          }
        }
      }
      window.addEventListener('click', outsideClick);
}
module.exports = modal;