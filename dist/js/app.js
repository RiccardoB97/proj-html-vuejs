/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ (() => {

var app = new Vue({
  el: '#app',
  data: {
    // Nav links
    links: [{
      name: 'Home',
      link: '#site_header'
    }, {
      name: 'Who We Are',
      link: '#meet'
    }, {
      name: 'What We Do',
      link: '#services'
    }, {
      name: 'Where We Work',
      link: '#work'
    }, {
      name: 'Careers',
      link: '#plans',
      "class": 'apply'
    }, {
      name: 'News',
      link: '#news'
    }, {
      name: 'GET IN TOUCH NOW',
      link: '#contact',
      "class": 'btn_y'
    }],
    team_cards: [{
      icon: 'fas fa-road',
      title: 'Establish Goals',
      paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad accusamus id delectus cumque eaque atque odit praesentium explicabo obcaecati rem?'
    }, {
      icon: 'fas fa-video',
      title: 'Work With A Team',
      paragraph: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora accusantium aut culpa quo, libero beatae earum architecto sapiente at. Eveniet!'
    }, {
      icon: 'fas fa-tint',
      title: 'Get Results',
      paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates odit, nesciunt repellat officiis praesentium esse voluptatum ex optio nostrum earum.'
    }],
    services_cards: [{
      icon: 'fab fa-google',
      title: 'Google SEO',
      paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis quidem eius magni dolore, molestiae nemo aliquid alias qui! Perferendis, eius?'
    }, {
      icon: 'fas fa-cog',
      title: 'Brand Strategy',
      paragraph: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis quidem nam eius quo rem numquam blanditiis porro magni recusandae quibusdam!'
    }, {
      icon: 'fas fa-chart-bar',
      title: 'Local SEO',
      paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, fuga neque quibusdam molestiae impedit numquam eum quisquam consectetur ea quam.'
    }, {
      icon: 'fas fa-building',
      title: 'SEO Analysis',
      paragraph: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima nulla voluptates asperiores qui sunt ducimus inventore vero accusantium tempora cum.'
    }],
    work_img_path: './dist/img/case-study-gallery-',
    work_cards: [{
      image_id: '3-1.jpg'
    }, {
      image_id: '2-1.jpg'
    }, {
      image_id: '1-1.jpg'
    }, {
      image_id: '4-1.jpg'
    }, {
      image_id: '5-1.jpg'
    }, {
      image_id: '6-1.jpg'
    }],
    plan_cards: [{
      name: 'Standard',
      price: '19',
      projects: '5',
      storage: '5 GB',
      users: 'Unlimited'
    }, {
      name: 'Premium',
      price: '29',
      projects: '10',
      storage: '15 GB',
      users: 'Unlimited'
    }, {
      name: 'Professional',
      price: '39',
      projects: '15',
      storage: '30 GB',
      users: 'Unlimited'
    }, {
      name: 'Extreme',
      price: '59',
      projects: 'Unlimited',
      storage: 'Unlimited',
      users: 'Unlimited'
    }],
    news_card: [{
      image: '',
      title: '',
      date: 'November 1st, 2017',
      paragraph: ''
    }, {
      image: '',
      title: '',
      date: 'November 1st, 2017',
      paragraph: ''
    }, {
      image: '',
      title: '',
      date: 'November 1st, 2017',
      paragraph: ''
    }]
  },
  methods: {}
});

/***/ }),

/***/ "./src/app.scss":
/*!**********************!*\
  !*** ./src/app.scss ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					result = fn();
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/js/app": 0,
/******/ 			"css/app": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) var result = runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkproj_html_vuejs"] = self["webpackChunkproj_html_vuejs"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["css/app"], () => (__webpack_require__("./src/app.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["css/app"], () => (__webpack_require__("./src/app.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;