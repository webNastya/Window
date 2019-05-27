/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/parts/calc.js":
/*!**************************!*\
  !*** ./js/parts/calc.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

function calc() {
	
}
module.exports = calc;

/***/ }),

/***/ "./js/parts/form.js":
/*!**************************!*\
  !*** ./js/parts/form.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

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

/***/ }),

/***/ "./js/parts/modal.js":
/*!***************************!*\
  !*** ./js/parts/modal.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

function modal() {
   let headerBtn = document.querySelector('.header_btn'),
     popupEngineer = document.querySelector('.popup_engineer'),
     phoneLink = document.querySelectorAll('.phone_link'),
     popup = document.querySelector('.popup'),
     mini = document.querySelectorAll('.mini'),
     lupa = document.querySelectorAll('.lupa'),
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
}
module.exports = modal;

/***/ }),

/***/ "./js/parts/tabs.js":
/*!**************************!*\
  !*** ./js/parts/tabs.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

function tabs() {
  let glazing = document.querySelectorAll('.glazing_block'),
        slickTrack = document.querySelector('.slick-list'),
        content = document.querySelectorAll('.glass');
     function hideContent(a) {
        for (var i = a; i < content.length; i++) {
          content[i].classList.remove('show');
          content[i].classList.add('hide');
        }
      }

   hideContent(1);

   function showContent(b) {
     if (content[b].classList.contains('hide')) {
       content[b].classList.remove('hide');
       content[b].classList.add('show');
     }
   }

   slickTrack.addEventListener('click', function(event) {
      let target = event.target;
      if (target && target.classList.contains('glazing_block')) {
        for (var i = 0; i < glazing.length; i++) {
            if (target == glazing[i]) {
              hideContent(0);
              showContent(i);
              break;
            }
        }
      }
  });
}
module.exports = tabs;

/***/ }),

/***/ "./js/parts/timer.js":
/*!***************************!*\
  !*** ./js/parts/timer.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

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
			days = timer.querySelector('#days'),
			hours = timer.querySelector('#hours'),
			minutes = timer.querySelector('#minutes'),
			seconds = timer.querySelector('#seconds'),
			timeInterval = setInterval(updateClock, 1000);

		function updateClock() {
			let t = getTimeRemeining(endtime);

			days.textContent = ('0' + t.days).slice(-2);
			hours.textContent = ('0' + t.hours).slice(-2);
			minutes.textContent = ('0' + t.minutes).slice(-2);
			seconds.textContent = ('0' + t.seconds).slice(-2);
      
			if (t.total <= 0) {
				clearInterval(timeInterval);
				days.textContent = '00';
				hours.textContent = '00';
				minutes.textContent = '00';
				seconds.textContent = '00';
			}
		}
	}
    setClock('timer', deadLine);
}
module.exports = timer;

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

window.addEventListener('DOMContentLoaded', function () {
    'use strict';

    let tabs = __webpack_require__(/*! ./parts/tabs.js */ "./js/parts/tabs.js"),
        timer = __webpack_require__(/*! ./parts/timer.js */ "./js/parts/timer.js"),
        modal = __webpack_require__(/*! ./parts/modal.js */ "./js/parts/modal.js"),
        calc = __webpack_require__(/*! ./parts/calc.js */ "./js/parts/calc.js"),
        form = __webpack_require__(/*! ./parts/form.js */ "./js/parts/form.js");

    tabs();
    timer();
    modal();
    calc();
    form();
});

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map