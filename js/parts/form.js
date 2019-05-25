function form() {
   let message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро мы с вами свяжемся!',
        failure: 'Что-то пошло не так'
      };

      let forms = document.querySelectorAll('.form'),
           inputs = document.getElementsByName('user_name, user_phone'),
           statusMessage = document.createElement('div');
           
      statusMessage.classList.add('status');

      for (let f = 0; f < forms.length; f++) {
         forms[f].addEventListener('submit', function(event) {
            event.preventDefault();
            forms[f].appendChild(statusMessage);

            let request = new XMLHttpRequest(),
                formData = new FormData(forms[f]),
                obj = {};

            request.open('POST', 'server.php');
            request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');

            formData.forEach(function(value, key){
               obj[key] = value;
            });
            let json = JSON.stringify(obj);

            request.send(json);

            request.addEventListener('readystatechange', function(){
               if (request.readyState < 4) {
                   statusMessage.innerHTML = message.loading;
               } else if (request.readyState === 4 && request.status == 200) {
                     statusMessage.innerHTML = message.success;
               } else {
                     statusMessage.innerHTML = message.failure;
               }
            });
           
            for (let i = 0; i < inputs.length; i++) {
                 inputs[i].innerHTML = '';
            } 
         });
      }
      let phone = document.getElementsByName('user_phone');
      for (let i = 0; i < phone.length; i++) {
         phone[i].addEventListener('keypress', function (e) {
              if (!/\d/.test(e.key)) {
                  e.preventDefault();
              }
         });
      };

}
module.exports = form;