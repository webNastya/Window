function form() {
	 let message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро мы с вами свяжемся!',
        failure: 'Что-то пошло не так'
      };

      let forms = document.querySelectorAll('.form'),
          statusMessage = document.createElement('div');

      statusMessage.classList.add('status');

      function sendForm() {
        for (let i = 0; i < forms.length; i++) {
          let form = forms[i];
          form.addEventListener('submit', function (event) {
              event.preventDefault();
              form.appendChild(statusMessage);
              let input = form.querySelectorAll('.form-control'),
                  request = new XMLHttpRequest();

              request.open('POST', 'server.php');
              request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

              let formData = new FormData(form);

              request.send(formData);

              request.addEventListener('readystatechange', function () {
                  if (request.readyState < 4) {
                      statusMessage.innerHTML = message.loading;
                      setTimeout(showModal, 3000);
                  } else if (request.readyState === 4 && request.status == 200) {
                      statusMessage.innerHTML = message.success;
                      setTimeout(showModal, 3000);
                  } else {
                      statusMessage.innerHTML = message.failure;
                      setTimeout(showModal, 3000);
                  }
                  function showModal(){
                      statusMessage.style.display = 'none';
                    }
              });
              for (let i = 0; i < input.length; i++) {
                  input[i].value = '';
              }
            });
          }
      }
       sendForm();

       document.querySelectorAll('input[name="user_phone"]').forEach(item => {
           item.addEventListener('keypress', (e) => {
               if (!/\d/.test(e.key) && !/\+/.test(e.key)) {
                   e.preventDefault();
               }
           });
      });
}
module.exports = form;