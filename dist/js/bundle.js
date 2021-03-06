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

const calc = () => {
 let glazingBtn = document.querySelectorAll('.glazing_price_btn'),
        popup = document.querySelector('.popup_calc'),
        popupBtn = document.querySelector('.popup_calc_button'),
        popupProfile = document.querySelector('.popup_calc_profile'),
        profileBtn = document.querySelector('.popup_calc_profile_button'),
        popupEnd = document.querySelector('.popup_calc_end'),
        forma = document.querySelector('.end_form');

      for (let i = 0; i < glazingBtn.length; i++) {
        glazingBtn[i].addEventListener('click', () => {
          popup.style.display = 'block'
        });
      }
      //tabs
      let popupCalcBalconIcons = popup.querySelector(".balcon_icons"), // родитель картинок
        smallPictures = popup.querySelectorAll(".picture"), // маленькие картинки добавить класс do_image_more
        bigPictures = popup.querySelectorAll(".big_img img"); // больше картинки

      const hidePictures = (a) => {
          for (let i = a; i < bigPictures.length; i++) {
              bigPictures[i].style.display = "none";
              smallPictures[i].classList.remove("do_image_more");
          }
      }

      const showPictures = (b) => {
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
      popupBtn.addEventListener('click', (e) => {
        e.preventDefault();
        popup.style.display = 'none'
        popupProfile.style.display = 'block'
      });
      let options = document.querySelectorAll('#width, #height');
      for (let i = 0; i < options.length; i++) {
         options[i].addEventListener('keypress', (e) => {
            if (!/\d/.test(e.key)) {
               e.preventDefault();
            }
         });
      };
      //profile
      profileBtn.addEventListener('click', () => {
         popupProfile.style.display = 'none'
         popupEnd.style.display = 'block'
      });

      let allPopup = document.querySelectorAll('.popup_calc, .popup_calc_profile, .popup_calc_end'),
          allClose = document.querySelectorAll('.popup_calc_close, .popup_calc_profile_close, .popup_calc_end_close');
      for (let i = 0; i < allClose.length; i++) {
         allClose[i].addEventListener('click', () => {
            for (let c = 0; c < allPopup.length; c++) {
               allPopup[c].style.display = 'none';
            }
         });
      }

      //calcForm
       let obj = {},
        message = {
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

    

      const sendFormCalc = () => {
        
        forma.addEventListener('submit', function(event) {
            event.preventDefault();
            forma.appendChild(statusMessage);
          let input = forma.querySelectorAll('.form-control');

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

/***/ }),

/***/ "./js/parts/form.js":
/*!**************************!*\
  !*** ./js/parts/form.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

const form = () => {
	let message = {
      loading: 'Загрузка...',
      success: 'Спасибо! Скоро мы с вами свяжемся!',
      failure: 'Что-то пошло не так'
    };

    let forms = document.querySelectorAll('.form'),
      statusMessage = document.createElement('div');

  statusMessage.classList.add('status');

  const sendForm = () => {
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
              const showModal = () => {
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

/***/ }),

/***/ "./js/parts/tabs.js":
/*!**************************!*\
  !*** ./js/parts/tabs.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

const tabs = () => {
 let tabGlazing = document.querySelectorAll('.glazing_block'),
    tabGlazingUrl = document.querySelectorAll('.glazing_block a'),
    glazingContent = document.querySelectorAll('.glazing_content'),

    tabDecoration = document.querySelectorAll('.decoration_item'),
    tabDecorationUrl = document.querySelectorAll('.decoration_item div'),
    decorationInfo = document.querySelectorAll('.decoration_info');

  const hideGlazingContent = (a, tabContent) => {
      for (let i = a; i < tabContent.length; i++) {
          tabContent[i].style.display = 'none';
      }
  }

  const showGlazingContent = (b, tabContent) => {
      if (tabContent[b].style.display = 'none') {
          tabContent[b].style.display = 'block';
      }
  }

  const linkdesactive = (c, tabsUrl, activeClass) => {
      for (let i = c; i < tabsUrl.length; i++) {
          tabsUrl[i].classList.remove(activeClass);
      }
  }

  const linkactive = (d, tabsUrl, activeClass) => {
          tabsUrl[d].classList.add(activeClass);
  }

  const toggleTabs = (tabsClasses, tabsBtn, tabsContent, tabsUrl, activeClass) => {
      document.body.addEventListener('click', e => {
          let tabs = e.target.closest(tabsClasses);
          if (tabs) {
              for (let i = 0; i < tabsBtn.length; i++) {
                  if (tabs == tabsBtn[i]) {
                      linkdesactive(0, tabsUrl, activeClass);
                      linkactive(i, tabsUrl, activeClass);
                      hideGlazingContent(0, tabsContent);
                      showGlazingContent(i, tabsContent);
                      break;
                  }
              }
          }
      });
  }
  toggleTabs('.glazing_block', tabGlazing, glazingContent, tabGlazingUrl, 'active');
  toggleTabs('.decoration_item', tabDecoration, decorationInfo, tabDecorationUrl, 'after_click');

}
module.exports = tabs;

/***/ }),

/***/ "./js/parts/timer.js":
/*!***************************!*\
  !*** ./js/parts/timer.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

const timer = () => {
    let deadLine = 'May 31 2019 21:59:59 GMT+03:00';

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

	const setClock = (id, endtime) => {
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