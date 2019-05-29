function calc() {
	let glazingBtn = document.querySelectorAll('.glazing_price_btn'),
        popup = document.querySelector('.popup_calc'),
        popupBtn = document.querySelector('.popup_calc_button'),
        popupProfile = document.querySelector('.popup_calc_profile'),
        profileBtn = document.querySelector('.popup_calc_profile_button'),
        popupEnd = document.querySelector('.popup_calc_end'),
        forma = document.querySelector('.end_form');

      for (let i = 0; i < glazingBtn.length; i++) {
        glazingBtn[i].addEventListener('click', function() {
          popup.style.display = 'block'
        });
      }
      //tabs
      let popupCalcBalconIcons = popup.querySelector(".balcon_icons"), // родитель картинок
        smallPictures = popup.querySelectorAll(".picture"), // маленькие картинки добавить класс do_image_more
        bigPictures = popup.querySelectorAll(".big_img img"); // больше картинки

      function hidePictures(a) {
          for (let i = a; i < bigPictures.length; i++) {
              bigPictures[i].style.display = "none";
              smallPictures[i].classList.remove("do_image_more");
          }
      }

      function showPictures(b) {
          if (bigPictures[b].style.display = "none") {
              bigPictures[b].style.display = "inline-block";
              smallPictures[b].classList.add("do_image_more");
          }
      }

      popupCalcBalconIcons.addEventListener("click", (event) => {
        let target = event.target;
        event.preventDefault();
        if (target && target.classList.contains("picture")) {
            for (let i = 0; i < smallPictures.length; i++) {
                if (target == smallPictures[i]) {
                    hidePictures(0);
                    showPictures(i);
                    break;
                }
            }
        }
      });
      //popup
      popupBtn.addEventListener('click', function(e) {
        e.preventDefault();
        popup.style.display = 'none'
        popupProfile.style.display = 'block'
      });
      let options = document.querySelectorAll('#width, #height');
      for (let i = 0; i < options.length; i++) {
         options[i].addEventListener('keypress', function (e) {
            if (!/\d/.test(e.key)) {
               e.preventDefault();
            }
         });
      };
      //profile
      profileBtn.addEventListener('click', function(){
         popupProfile.style.display = 'none'
         popupEnd.style.display = 'block'
      });

      let allPopup = document.querySelectorAll('.popup_calc, .popup_calc_profile, .popup_calc_end'),
          allClose = document.querySelectorAll('.popup_calc_close, .popup_calc_profile_close, .popup_calc_end_close');
      for (let i = 0; i < allClose.length; i++) {
         allClose[i].addEventListener('click', function(){
            for (let c = 0; c < allPopup.length; c++) {
               allPopup[c].style.display = 'none';
            }
         });
      }

      //calcForm
       let message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро мы с вами свяжемся!',
        failure: 'Что-то пошло не так'
      },
        statusMessage = document.createElement('div');

      statusMessage.classList.add('status');

        //write type window in obj
        for (let i = 0; i < smallPictures.length; i++) {
            smallPictures[i].addEventListener('click', (e) => {
                let target = e.target;
                if (target == smallPictures[i]) {
                    obj.type = smallPictures[i].getAttribute('alt');
                }
            })
        }
  
        //write data about window in obj
        popupBtn.addEventListener('click', function() {
            obj.width_window = document.getElementById('width').value;
            obj.height_window = document.getElementById('height').value;
        });

        //write chekbox in obj
        document.querySelector('.popup_calc_profile_button').addEventListener('click', () => {
            if (document.getElementById('Check1').checked) {
                obj.weather = 'Холодное';
            } else {
                obj.weather = 'Тёплое';
            }
        });

    

      function sendFormCalc() {
        
        forma.addEventListener('submit', function(event) {
            event.preventDefault();
            forma.appendChild(statusMessage);
            input = forma.querySelectorAll('.form-control');

            let request = new XMLHttpRequest();
            request.open('POST', 'server.php');
            request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');

            let formData = new FormData(forma);

            formData.forEach(function (value, key) {
                obj[key] = value;
            });


            let json = JSON.stringify(obj);

            request.send(json);

            request.addEventListener('readystatechange', () => {
                if (request.readyState < 4) {
                    statusMessage.innerHTML = message.loading;
                } else if (request.readyState === 4 && request.status == 200) {
                    statusMessage.innerHTML = message.success;
                } else {
                    statusMessage.innerHTML = message.failure;
                }
            });
            for (let i = 0; i < input.length; i++) {
                input[i].value = '';
            }
        });
      }
        sendFormCalc();

       document.querySelectorAll('inputs[name="user_phone"]').forEach(item => {
           item.addEventListener('keypress', (e) => {
               if (!/\d/.test(e.key) && !/\+/.test(e.key)) {
                   e.preventDefault();
               }
           });
      });
}
module.exports = calc;