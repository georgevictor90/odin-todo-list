/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* variables */\n:root {\n  --primary: #F96126;\n  --secondary: #2F2E41;\n}\n\n/* reset */\nbody,p,a,ul,li,h1,h2,h3 {\n  margin: 0;\n  padding: 0;\n  text-decoration: none;\n}\nli {\n  list-style-type: none;\n}\n\n/* base styles */\nbody {\n  max-height: 100vh;\n  font-size: 14px;\n  font-family: 'Open Sans', sans-serif;\n  overflow: hidden;\n}\n.content {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  height: 100vh;\n  position: relative;\n}\n.test:after {\n  content: '\\2807';\n  font-size: 1.4em;\n}\n.header {\n  padding: 10px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\nh3 {\n  font-weight: 600;\n}\n.section-content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 20px;\n}\n.section-image {\n  width: 50%;\n  max-width: 350px;\n  opacity: .8;\n}\n.section-content-info {\n  text-align: center;\n  line-height: 2;\n  font-size: 1.1em;\n  font-weight: 300;\n  padding: 10px 30px;\n}\n.section-content-info > *:last-child {\n  font-size: .8em;\n  font-weight: 400;\n  opacity: .5;\n}\n.menu-bar {\n  background: var(--primary);\n  display: flex;\n  align-items: center;\n  padding: 20px 20px 40px;\n  opacity: .9;\n  position: relative;\n}\n.hamburger-menu-img,\n.search-button,\n.notifications-button {\n  width: 22px;\n}\n.hamburger-menu-img {\n  width: 20px;\n  filter:  brightness(0) invert(1);\n}\n.search-button {\n  margin-left: auto;\n}\n.notifications-button {\n  margin-left: 15px;\n}\n.add-task-button {\n  width: 50px;\n  height: 50px;\n  background-color: var(--primary);\n  font-size: 2.5em;\n  font-weight: bold;\n  color: white;\n  border: 4px solid white;\n  border-radius: 50%;\n  position:absolute;\n  top: -25px;\n  left: 50%;\n  transform: translate(-50%);\n}\n.popup-menu {\n  box-sizing: border-box;\n  position: absolute;\n  bottom: 0;\n  background-color: white;\n  height: 100vh;\n  width: 100%;\n  border: 1px solid #f0f0f0;\n  border-top-left-radius: 15px;\n  border-top-right-radius: 15px;\n  padding: 20px;\n  opacity: 1;\n  transition: all 400ms ease;\n}\n.close{\n  transform: translateY(100%);\n  opacity: 0;\n}\n.close-button {\n  width: 32px;\n  display: block;\n  margin-left: auto;\n  margin-bottom: 20px;\n}\n.popup-menu > li {\n  margin-top: 20px;\n  cursor: pointer;\n}\n.menu-sections {\n  padding-left: 10px;\n}\n.menu-sections-list li{\n  display: flex;\n  align-items: center;\n  margin-top: 20px;\n  gap: 7px;\n}\n.section-icon {\n  width: 30px;\n}\n.projects-section {\n  margin-top: 40px;\n}\n.project-section-header{\n  display:flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.new-project-button {\n  width: 30px;\n  opacity: 0.6;\n}\n\n.projects-section-title {\n  font-weight: bold;\n  font-size: 1.5em;\n}\n.projects-section-list {\n  padding-left: 10px;\n}\n.project-item {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-top: 20px;\n}\n.circle {\n  height: 25px;\n  width: 25px;\n  border-radius: 50%;\n  display: inline-block;\n}\n.button-icon {\n  width: 20px;\n}\n\n/* task editor */\n.modal {\n  padding: 0;\n  background: white;\n  border: 1px solid rgba(0, 0, 0, .3);\n  border-radius: 10px;\n}\n\n.modal::backdrop {\n  background: rgba(0, 0, 0, .7);\n}\n.close-modal {\n  /* position: absolute; */\n  /* top: 2px;\n  right: 10px; */\n  grid-column: 2/3;\n  font-size: 2em;\n  background: transparent;\n  border: none;\n  opacity: .6;\n  align-self: start;\n  justify-self: center;\n}\n.task-editor {\n  display: grid;\n  grid-template-columns: 9fr 1fr;\n  /* grid-template-rows: 1fr 1fr 1fr; */\n  /* position: relative; */\n  padding: 10px;\n  flex-direction: column;\n}\n.input-fields {\n  grid-column: 1/2;\n  grid-row: 1/2;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.extra-fields{\n  grid-column: 1/2;\n  grid-row: 2/3;\n}\n.task-title-input,\n.task-description-input{\n  border: none;\n  padding: 10px;\n}\n.task-description-input{\n  font-size: .8em;\n  height: 7ch;\n  resize: none;\n}\n.pills{\n  display: flex;\n  gap: 10px;\n  padding: 6px;\n}\n.due-date-button,\n.folder-select-button {\n  padding: .5rem .3rem;\n  background-color: transparent;\n  border: 1px solid rgba(0, 0, 0, .3);\n  border-radius: 10px;\n  font-size: .9em;\n  width: 100px;\n}\n\n.due-date-button{\n  display: flex;\n  align-items: center;\n  gap: 3px;\n}\n\n.submit-button {\n  grid-column: 2/3;\n  grid-row: 3/4;\n  width: 30px;\n  display: flex;\n  justify-content: center;\n  background: transparent;\n  border: none;\n  align-self: flex-end;\n}\n\n.submit-button-icon {\n  width: 25px;\n  opacity: .6;\n}\n\n/* newProject Form */\n.new-project-form {\n  box-sizing: border-box;\n  position: absolute;\n  bottom: 0;\n  background-color: white;\n  height: 100vh;\n  width: 100%;\n  border: 1px solid #f0f0f0;\n  border-top-left-radius: 15px;\n  border-top-right-radius: 15px;\n  padding: 20px;\n  opacity: 1;\n  transition: all 400ms ease;\n}\n.close-project-form{\n  transform: translateX(100%);\n  opacity: 0;\n}\n.new-project-form-header {\n  display: flex;\n  justify-items: center;\n  align-items: center;\n}\n.new-project-form-h3 {\n  margin-left: 30px;\n  font-size: 1.5em;\n}\n.new-project-form-save {\n  margin-left: auto;\n}\n.new-project-form-back,\n.new-project-form-save {\n  width: 30px;\n  opacity: 0.6;\n}\n\n.form-group {\n  margin-top: 30px;\n  width: 100%;\n  box-sizing: border-box;\n  padding:10px;\n  border: 3px solid rgba(255, 2, 2, 0.8);\n  border-radius: 5px;\n  /* margin: 10px; */\n  position: relative;\n  opacity: .6;\n}\n.form-group>label {\n  position:absolute;\n  top: -14px;\n  left: 20px; \n  background-color: white;\n  font-size: 1.2em;\n}\n.form-group>input,\n.form-group>input:active {\n  border: none;\n  outline: none;\n  width: 90%;\n  padding: 10px;\n  font-size: 1.5em;\n}\n.color-form-group{\n  margin-top: 30px;\n  display: flex;\n  gap: 30px;\n}\n.color-label-and-name {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.color-icon {\n  width: 35px;\n}\n.selected-color-label {\n  font-size: 1.3em;\n}\n.selected-project-color {\n  font-size: 1em;\n}\n\n/* color filters */\n.charcoal {\n  filter: invert(23%) sepia(8%) saturate(1530%) hue-rotate(161deg) brightness(97%) contrast(87%);\n}\n\n.red {\n  filter: invert(15%) sepia(90%) saturate(6449%) hue-rotate(359deg) brightness(108%) contrast(114%);\n}\n\n/* color choices container */\n.color-choices-container {\n  overflow: scroll;\n  box-sizing: border-box;\n  position: absolute;\n  bottom: 0;\n  background-color: white;\n  height: 90vh;\n  width: 100%;\n  border: 1px solid #f0f0f0;\n  border-top-left-radius: 15px;\n  border-top-right-radius: 15px;\n  padding: 20px;\n  opacity: 1;\n  transition: all 400ms ease;\n}\n.close-color-choices{\n  transform: translateY(100%);\n  opacity: 0;\n}\n\n.default-color{\n  filter: invert(23%) sepia(8%) saturate(1530%) hue-rotate(161deg) brightness(97%) contrast(87%);\n}\n\n/* fonts */\n\n/* mobile styles */\n\n\n/* small tablet styles */\n@media screen and (min-width: 620px) {\n  \n}\n\n/* large tablets & laptop styles */\n@media screen and (min-width: 960px) {\n  \n}\n\n/* desktop styles */\n@media screen and (min-width: 1200px) {\n  \n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA,cAAc;AACd;EACE,kBAAkB;EAClB,oBAAoB;AACtB;;AAEA,UAAU;AACV;EACE,SAAS;EACT,UAAU;EACV,qBAAqB;AACvB;AACA;EACE,qBAAqB;AACvB;;AAEA,gBAAgB;AAChB;EACE,iBAAiB;EACjB,eAAe;EACf,oCAAoC;EACpC,gBAAgB;AAClB;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,8BAA8B;EAC9B,aAAa;EACb,kBAAkB;AACpB;AACA;EACE,gBAAgB;EAChB,gBAAgB;AAClB;AACA;EACE,aAAa;EACb,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;AACrB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,SAAS;AACX;AACA;EACE,UAAU;EACV,gBAAgB;EAChB,WAAW;AACb;AACA;EACE,kBAAkB;EAClB,cAAc;EACd,gBAAgB;EAChB,gBAAgB;EAChB,kBAAkB;AACpB;AACA;EACE,eAAe;EACf,gBAAgB;EAChB,WAAW;AACb;AACA;EACE,0BAA0B;EAC1B,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,WAAW;EACX,kBAAkB;AACpB;AACA;;;EAGE,WAAW;AACb;AACA;EACE,WAAW;EACX,gCAAgC;AAClC;AACA;EACE,iBAAiB;AACnB;AACA;EACE,iBAAiB;AACnB;AACA;EACE,WAAW;EACX,YAAY;EACZ,gCAAgC;EAChC,gBAAgB;EAChB,iBAAiB;EACjB,YAAY;EACZ,uBAAuB;EACvB,kBAAkB;EAClB,iBAAiB;EACjB,UAAU;EACV,SAAS;EACT,0BAA0B;AAC5B;AACA;EACE,sBAAsB;EACtB,kBAAkB;EAClB,SAAS;EACT,uBAAuB;EACvB,aAAa;EACb,WAAW;EACX,yBAAyB;EACzB,4BAA4B;EAC5B,6BAA6B;EAC7B,aAAa;EACb,UAAU;EACV,0BAA0B;AAC5B;AACA;EACE,2BAA2B;EAC3B,UAAU;AACZ;AACA;EACE,WAAW;EACX,cAAc;EACd,iBAAiB;EACjB,mBAAmB;AACrB;AACA;EACE,gBAAgB;EAChB,eAAe;AACjB;AACA;EACE,kBAAkB;AACpB;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,gBAAgB;EAChB,QAAQ;AACV;AACA;EACE,WAAW;AACb;AACA;EACE,gBAAgB;AAClB;AACA;EACE,YAAY;EACZ,8BAA8B;EAC9B,mBAAmB;AACrB;AACA;EACE,WAAW;EACX,YAAY;AACd;;AAEA;EACE,iBAAiB;EACjB,gBAAgB;AAClB;AACA;EACE,kBAAkB;AACpB;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,SAAS;EACT,gBAAgB;AAClB;AACA;EACE,YAAY;EACZ,WAAW;EACX,kBAAkB;EAClB,qBAAqB;AACvB;AACA;EACE,WAAW;AACb;;AAEA,gBAAgB;AAChB;EACE,UAAU;EACV,iBAAiB;EACjB,mCAAmC;EACnC,mBAAmB;AACrB;;AAEA;EACE,6BAA6B;AAC/B;AACA;EACE,wBAAwB;EACxB;gBACc;EACd,gBAAgB;EAChB,cAAc;EACd,uBAAuB;EACvB,YAAY;EACZ,WAAW;EACX,iBAAiB;EACjB,oBAAoB;AACtB;AACA;EACE,aAAa;EACb,8BAA8B;EAC9B,qCAAqC;EACrC,wBAAwB;EACxB,aAAa;EACb,sBAAsB;AACxB;AACA;EACE,gBAAgB;EAChB,aAAa;EACb,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;AACA;EACE,gBAAgB;EAChB,aAAa;AACf;AACA;;EAEE,YAAY;EACZ,aAAa;AACf;AACA;EACE,eAAe;EACf,WAAW;EACX,YAAY;AACd;AACA;EACE,aAAa;EACb,SAAS;EACT,YAAY;AACd;AACA;;EAEE,oBAAoB;EACpB,6BAA6B;EAC7B,mCAAmC;EACnC,mBAAmB;EACnB,eAAe;EACf,YAAY;AACd;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,QAAQ;AACV;;AAEA;EACE,gBAAgB;EAChB,aAAa;EACb,WAAW;EACX,aAAa;EACb,uBAAuB;EACvB,uBAAuB;EACvB,YAAY;EACZ,oBAAoB;AACtB;;AAEA;EACE,WAAW;EACX,WAAW;AACb;;AAEA,oBAAoB;AACpB;EACE,sBAAsB;EACtB,kBAAkB;EAClB,SAAS;EACT,uBAAuB;EACvB,aAAa;EACb,WAAW;EACX,yBAAyB;EACzB,4BAA4B;EAC5B,6BAA6B;EAC7B,aAAa;EACb,UAAU;EACV,0BAA0B;AAC5B;AACA;EACE,2BAA2B;EAC3B,UAAU;AACZ;AACA;EACE,aAAa;EACb,qBAAqB;EACrB,mBAAmB;AACrB;AACA;EACE,iBAAiB;EACjB,gBAAgB;AAClB;AACA;EACE,iBAAiB;AACnB;AACA;;EAEE,WAAW;EACX,YAAY;AACd;;AAEA;EACE,gBAAgB;EAChB,WAAW;EACX,sBAAsB;EACtB,YAAY;EACZ,sCAAsC;EACtC,kBAAkB;EAClB,kBAAkB;EAClB,kBAAkB;EAClB,WAAW;AACb;AACA;EACE,iBAAiB;EACjB,UAAU;EACV,UAAU;EACV,uBAAuB;EACvB,gBAAgB;AAClB;AACA;;EAEE,YAAY;EACZ,aAAa;EACb,UAAU;EACV,aAAa;EACb,gBAAgB;AAClB;AACA;EACE,gBAAgB;EAChB,aAAa;EACb,SAAS;AACX;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,QAAQ;AACV;AACA;EACE,WAAW;AACb;AACA;EACE,gBAAgB;AAClB;AACA;EACE,cAAc;AAChB;;AAEA,kBAAkB;AAClB;EACE,8FAA8F;AAChG;;AAEA;EACE,iGAAiG;AACnG;;AAEA,4BAA4B;AAC5B;EACE,gBAAgB;EAChB,sBAAsB;EACtB,kBAAkB;EAClB,SAAS;EACT,uBAAuB;EACvB,YAAY;EACZ,WAAW;EACX,yBAAyB;EACzB,4BAA4B;EAC5B,6BAA6B;EAC7B,aAAa;EACb,UAAU;EACV,0BAA0B;AAC5B;AACA;EACE,2BAA2B;EAC3B,UAAU;AACZ;;AAEA;EACE,8FAA8F;AAChG;;AAEA,UAAU;;AAEV,kBAAkB;;;AAGlB,wBAAwB;AACxB;;AAEA;;AAEA,kCAAkC;AAClC;;AAEA;;AAEA,mBAAmB;AACnB;;AAEA","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700&display=swap');\n\n/* variables */\n:root {\n  --primary: #F96126;\n  --secondary: #2F2E41;\n}\n\n/* reset */\nbody,p,a,ul,li,h1,h2,h3 {\n  margin: 0;\n  padding: 0;\n  text-decoration: none;\n}\nli {\n  list-style-type: none;\n}\n\n/* base styles */\nbody {\n  max-height: 100vh;\n  font-size: 14px;\n  font-family: 'Open Sans', sans-serif;\n  overflow: hidden;\n}\n.content {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  height: 100vh;\n  position: relative;\n}\n.test:after {\n  content: '\\2807';\n  font-size: 1.4em;\n}\n.header {\n  padding: 10px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\nh3 {\n  font-weight: 600;\n}\n.section-content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 20px;\n}\n.section-image {\n  width: 50%;\n  max-width: 350px;\n  opacity: .8;\n}\n.section-content-info {\n  text-align: center;\n  line-height: 2;\n  font-size: 1.1em;\n  font-weight: 300;\n  padding: 10px 30px;\n}\n.section-content-info > *:last-child {\n  font-size: .8em;\n  font-weight: 400;\n  opacity: .5;\n}\n.menu-bar {\n  background: var(--primary);\n  display: flex;\n  align-items: center;\n  padding: 20px 20px 40px;\n  opacity: .9;\n  position: relative;\n}\n.hamburger-menu-img,\n.search-button,\n.notifications-button {\n  width: 22px;\n}\n.hamburger-menu-img {\n  width: 20px;\n  filter:  brightness(0) invert(1);\n}\n.search-button {\n  margin-left: auto;\n}\n.notifications-button {\n  margin-left: 15px;\n}\n.add-task-button {\n  width: 50px;\n  height: 50px;\n  background-color: var(--primary);\n  font-size: 2.5em;\n  font-weight: bold;\n  color: white;\n  border: 4px solid white;\n  border-radius: 50%;\n  position:absolute;\n  top: -25px;\n  left: 50%;\n  transform: translate(-50%);\n}\n.popup-menu {\n  box-sizing: border-box;\n  position: absolute;\n  bottom: 0;\n  background-color: white;\n  height: 100vh;\n  width: 100%;\n  border: 1px solid #f0f0f0;\n  border-top-left-radius: 15px;\n  border-top-right-radius: 15px;\n  padding: 20px;\n  opacity: 1;\n  transition: all 400ms ease;\n}\n.close{\n  transform: translateY(100%);\n  opacity: 0;\n}\n.close-button {\n  width: 32px;\n  display: block;\n  margin-left: auto;\n  margin-bottom: 20px;\n}\n.popup-menu > li {\n  margin-top: 20px;\n  cursor: pointer;\n}\n.menu-sections {\n  padding-left: 10px;\n}\n.menu-sections-list li{\n  display: flex;\n  align-items: center;\n  margin-top: 20px;\n  gap: 7px;\n}\n.section-icon {\n  width: 30px;\n}\n.projects-section {\n  margin-top: 40px;\n}\n.project-section-header{\n  display:flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.new-project-button {\n  width: 30px;\n  opacity: 0.6;\n}\n\n.projects-section-title {\n  font-weight: bold;\n  font-size: 1.5em;\n}\n.projects-section-list {\n  padding-left: 10px;\n}\n.project-item {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-top: 20px;\n}\n.circle {\n  height: 25px;\n  width: 25px;\n  border-radius: 50%;\n  display: inline-block;\n}\n.button-icon {\n  width: 20px;\n}\n\n/* task editor */\n.modal {\n  padding: 0;\n  background: white;\n  border: 1px solid rgba(0, 0, 0, .3);\n  border-radius: 10px;\n}\n\n.modal::backdrop {\n  background: rgba(0, 0, 0, .7);\n}\n.close-modal {\n  /* position: absolute; */\n  /* top: 2px;\n  right: 10px; */\n  grid-column: 2/3;\n  font-size: 2em;\n  background: transparent;\n  border: none;\n  opacity: .6;\n  align-self: start;\n  justify-self: center;\n}\n.task-editor {\n  display: grid;\n  grid-template-columns: 9fr 1fr;\n  /* grid-template-rows: 1fr 1fr 1fr; */\n  /* position: relative; */\n  padding: 10px;\n  flex-direction: column;\n}\n.input-fields {\n  grid-column: 1/2;\n  grid-row: 1/2;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.extra-fields{\n  grid-column: 1/2;\n  grid-row: 2/3;\n}\n.task-title-input,\n.task-description-input{\n  border: none;\n  padding: 10px;\n}\n.task-description-input{\n  font-size: .8em;\n  height: 7ch;\n  resize: none;\n}\n.pills{\n  display: flex;\n  gap: 10px;\n  padding: 6px;\n}\n.due-date-button,\n.folder-select-button {\n  padding: .5rem .3rem;\n  background-color: transparent;\n  border: 1px solid rgba(0, 0, 0, .3);\n  border-radius: 10px;\n  font-size: .9em;\n  width: 100px;\n}\n\n.due-date-button{\n  display: flex;\n  align-items: center;\n  gap: 3px;\n}\n\n.submit-button {\n  grid-column: 2/3;\n  grid-row: 3/4;\n  width: 30px;\n  display: flex;\n  justify-content: center;\n  background: transparent;\n  border: none;\n  align-self: flex-end;\n}\n\n.submit-button-icon {\n  width: 25px;\n  opacity: .6;\n}\n\n/* newProject Form */\n.new-project-form {\n  box-sizing: border-box;\n  position: absolute;\n  bottom: 0;\n  background-color: white;\n  height: 100vh;\n  width: 100%;\n  border: 1px solid #f0f0f0;\n  border-top-left-radius: 15px;\n  border-top-right-radius: 15px;\n  padding: 20px;\n  opacity: 1;\n  transition: all 400ms ease;\n}\n.close-project-form{\n  transform: translateX(100%);\n  opacity: 0;\n}\n.new-project-form-header {\n  display: flex;\n  justify-items: center;\n  align-items: center;\n}\n.new-project-form-h3 {\n  margin-left: 30px;\n  font-size: 1.5em;\n}\n.new-project-form-save {\n  margin-left: auto;\n}\n.new-project-form-back,\n.new-project-form-save {\n  width: 30px;\n  opacity: 0.6;\n}\n\n.form-group {\n  margin-top: 30px;\n  width: 100%;\n  box-sizing: border-box;\n  padding:10px;\n  border: 3px solid rgba(255, 2, 2, 0.8);\n  border-radius: 5px;\n  /* margin: 10px; */\n  position: relative;\n  opacity: .6;\n}\n.form-group>label {\n  position:absolute;\n  top: -14px;\n  left: 20px; \n  background-color: white;\n  font-size: 1.2em;\n}\n.form-group>input,\n.form-group>input:active {\n  border: none;\n  outline: none;\n  width: 90%;\n  padding: 10px;\n  font-size: 1.5em;\n}\n.color-form-group{\n  margin-top: 30px;\n  display: flex;\n  gap: 30px;\n}\n.color-label-and-name {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.color-icon {\n  width: 35px;\n}\n.selected-color-label {\n  font-size: 1.3em;\n}\n.selected-project-color {\n  font-size: 1em;\n}\n\n/* color filters */\n.charcoal {\n  filter: invert(23%) sepia(8%) saturate(1530%) hue-rotate(161deg) brightness(97%) contrast(87%);\n}\n\n.red {\n  filter: invert(15%) sepia(90%) saturate(6449%) hue-rotate(359deg) brightness(108%) contrast(114%);\n}\n\n/* color choices container */\n.color-choices-container {\n  overflow: scroll;\n  box-sizing: border-box;\n  position: absolute;\n  bottom: 0;\n  background-color: white;\n  height: 90vh;\n  width: 100%;\n  border: 1px solid #f0f0f0;\n  border-top-left-radius: 15px;\n  border-top-right-radius: 15px;\n  padding: 20px;\n  opacity: 1;\n  transition: all 400ms ease;\n}\n.close-color-choices{\n  transform: translateY(100%);\n  opacity: 0;\n}\n\n.default-color{\n  filter: invert(23%) sepia(8%) saturate(1530%) hue-rotate(161deg) brightness(97%) contrast(87%);\n}\n\n/* fonts */\n\n/* mobile styles */\n\n\n/* small tablet styles */\n@media screen and (min-width: 620px) {\n  \n}\n\n/* large tablets & laptop styles */\n@media screen and (min-width: 960px) {\n  \n}\n\n/* desktop styles */\n@media screen and (min-width: 1200px) {\n  \n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/application logic/applicationLogic.js":
/*!***************************************************!*\
  !*** ./src/application logic/applicationLogic.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Projects": () => (/* binding */ Projects)
/* harmony export */ });
function newTodo(title, description, dueDate, priority) {
  return {
    title: title,
    description: description,
    dueDate: dueDate,
    priority: priority,
    complete: false,
  };
};

function newProject() {
  return {
    length: 0,
    addElem: function addElem() {
      for (let i = 0; i < arguments.length; i++) {
        [].push.call(this, arguments[i]);
      }
    },
    removeElem: function removeElem() {
      for (let i = 0; i < arguments.length; i++) {
        [].splice.call(this, arguments[i], 1)
      }
    },
  }
}

const Projects = newProject();

/***/ }),

/***/ "./src/inbox/inbox.js":
/*!****************************!*\
  !*** ./src/inbox/inbox.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ showIndex)
/* harmony export */ });
/* harmony import */ var _inbox_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inbox.svg */ "./src/inbox/inbox.svg");


function showIndex() {
  const content = document.querySelector('.content');
  const header = document.querySelector('.header');
  const menuBar = document.querySelector('.menu-bar');
  
  const sectionName = document.createElement('h3');
  sectionName.textContent = 'Inbox';
  header.appendChild(sectionName);

  const kebabMenu = document.createElement('div');
  kebabMenu.classList.add('test');
  header.appendChild(kebabMenu);

  const sectionContent = document.createElement('div');
  sectionContent.classList.add('section-content');
  content.insertBefore(sectionContent, menuBar);

  const inboxImg = document.createElement('img');
  inboxImg.classList.add('section-image');
  inboxImg.src = _inbox_svg__WEBPACK_IMPORTED_MODULE_0__;
  sectionContent.appendChild(inboxImg);

  const sectionContentInfo = document.createElement('div');
  sectionContentInfo.classList.add('section-content-info');
  sectionContent.appendChild(sectionContentInfo);
  const status = document.createElement('p');
  status.setAttribute('style', 'white-space: pre;');
  status.textContent = "All clear";
  sectionContentInfo.appendChild(status);
  const para = document.createElement('p');
  // para.setAttribute('style', 'white-space: pre;');
  para.textContent = "Looks like everything's organized in the right place. \n Tap + to add a task";
  sectionContentInfo.appendChild(para);
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "arrayOfProjectTitles": () => (/* binding */ arrayOfProjectTitles),
/* harmony export */   "folders": () => (/* binding */ folders)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _today_todayPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./today/todayPage */ "./src/today/todayPage.js");
/* harmony import */ var _assets_icons_Hamburger_icon_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/icons/Hamburger_icon.svg */ "./src/assets/icons/Hamburger_icon.svg");
/* harmony import */ var _assets_icons_magnifying_glass_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/icons/magnifying-glass.svg */ "./src/assets/icons/magnifying-glass.svg");
/* harmony import */ var _assets_icons_bell_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/icons/bell.svg */ "./src/assets/icons/bell.svg");
/* harmony import */ var _inbox_inbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./inbox/inbox */ "./src/inbox/inbox.js");
/* harmony import */ var _popUpMenu_menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./popUpMenu/menu */ "./src/popUpMenu/menu.js");
/* harmony import */ var _task_editor_taskEditor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./task editor/taskEditor */ "./src/task editor/taskEditor.js");
/* harmony import */ var _newProjectForm_newProjectForm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./newProjectForm/newProjectForm */ "./src/newProjectForm/newProjectForm.js");
/* harmony import */ var _projectColors_projectColors__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./projectColors/projectColors */ "./src/projectColors/projectColors.js");
/* harmony import */ var _application_logic_applicationLogic__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./application logic/applicationLogic */ "./src/application logic/applicationLogic.js");













const content = document.querySelector('.content');
const header = document.createElement('div');
header.classList.add('header');
content.appendChild(header);
const sectionName = document.querySelector('h3');
const kebabMenu = document.querySelector('.test');
const sectionContent = document.querySelector('.section-content');

const menuBar = document.createElement('div');
menuBar.classList.add('menu-bar');
content.appendChild(menuBar);

const hamburgerMenuButton = document.createElement('img')
hamburgerMenuButton.src = _assets_icons_Hamburger_icon_svg__WEBPACK_IMPORTED_MODULE_2__;
hamburgerMenuButton.classList.add('hamburger-menu-img');
menuBar.appendChild(hamburgerMenuButton);

const addTaskBtn = document.createElement('button');
addTaskBtn.classList.add('add-task-button');
addTaskBtn.type = 'button';
addTaskBtn.textContent = '+';
menuBar.appendChild(addTaskBtn);

const searchBtn = document.createElement('img');
searchBtn.classList.add('search-button');
searchBtn.src = _assets_icons_magnifying_glass_svg__WEBPACK_IMPORTED_MODULE_3__;
menuBar.appendChild(searchBtn);

const notificationsBtn = document.createElement('img');
notificationsBtn.classList.add('notifications-button');
notificationsBtn.src = _assets_icons_bell_svg__WEBPACK_IMPORTED_MODULE_4__;
menuBar.appendChild(notificationsBtn);

const arrayOfProjectTitles = ['Welcome', 'Try Boards', 'Organize your life'];
const folders = ['Inbox', 'Today', ...arrayOfProjectTitles];
// showToday();
(0,_inbox_inbox__WEBPACK_IMPORTED_MODULE_5__["default"])();
(0,_popUpMenu_menu__WEBPACK_IMPORTED_MODULE_6__["default"])();
(0,_task_editor_taskEditor__WEBPACK_IMPORTED_MODULE_7__["default"])();
(0,_newProjectForm_newProjectForm__WEBPACK_IMPORTED_MODULE_8__["default"])();
(0,_projectColors_projectColors__WEBPACK_IMPORTED_MODULE_9__["default"])();

const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.close-modal');

const menu = document.querySelector('.popup-menu');
hamburgerMenuButton.addEventListener('click', () => {
  menu.classList.toggle('close');
});

const closeBtn = document.querySelector('.close-button');
closeBtn.addEventListener('click', () => {
  menu.classList.toggle('close');
});

const newProjectBtn = document.querySelector('.new-project-button');
const newProjectForm = document.querySelector('.new-project-form');
const backBtn = document.querySelector('.new-project-form-back');
const newProjectSave = document.querySelector('.new-project-form-save');
newProjectSave.addEventListener('click', () => {
  _application_logic_applicationLogic__WEBPACK_IMPORTED_MODULE_10__.Projects.addElem({name: newProjectNameInput.value, color: selectedProjectColor.textContent})
  console.log(_application_logic_applicationLogic__WEBPACK_IMPORTED_MODULE_10__.Projects);
  clearNewProjectForm();
})

newProjectBtn.addEventListener('click', () => {
  menu.classList.toggle('close');
  newProjectForm.classList.toggle('close-project-form');
})

const newProjectNameInput = document.querySelector('.new-project-name-input');
const mainColorIcon = document.querySelector('.main-color-icon');
const selectedProjectColor = document.querySelector('.selected-project-color');
backBtn.addEventListener('click', () => {
  clearNewProjectForm();
})

function clearNewProjectForm() {
  newProjectForm.classList.toggle('close-project-form');
  newProjectNameInput.value = '';
  mainColorIcon.style.filter = 'unset';
  mainColorIcon.classList.add('default-color');
  selectedProjectColor.textContent = 'Charcoal';
}

const sectionLinks = document.querySelectorAll('.menu-sections-list>li');
sectionLinks[0].addEventListener('click', () => {
  menu.classList.toggle('close');
  removeFromDOM();
  (0,_inbox_inbox__WEBPACK_IMPORTED_MODULE_5__["default"])();
});

sectionLinks[1].addEventListener('click', () => {
  menu.classList.toggle('close');
  removeFromDOM();
  (0,_today_todayPage__WEBPACK_IMPORTED_MODULE_1__["default"])();  
});

function removeFromDOM() {
  header.childNodes[0].parentNode.removeChild(header.childNodes[0]);
  header.childNodes[0].parentNode.removeChild(header.childNodes[0]);
  content.childNodes[1].parentNode.removeChild(content.childNodes[1]);
}

addTaskBtn.addEventListener('click', () => {
  modal.showModal();
})

// closeModal.addEventListener('click', () => {
//   modal.close();
// })

window.addEventListener('click', (e) => {
 if (e.target.tagName !== 'DIALOG') return
 modal.close();
})


// const submitBtn = document.querySelector('.submit-button');
// submitBtn.addEventListener('click', () => {
  
// })

const colorFormGroup = document.querySelector('.color-form-group');
const colorChoicesContainer = document.querySelector('.color-choices-container');
colorFormGroup.addEventListener('click', () => {
  colorChoicesContainer.classList.toggle('close-color-choices');
})


/***/ }),

/***/ "./src/newProjectForm/newProjectForm.js":
/*!**********************************************!*\
  !*** ./src/newProjectForm/newProjectForm.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ showNewProjectForm)
/* harmony export */ });
/* harmony import */ var _arrow_left_solid_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrow-left-solid.svg */ "./src/newProjectForm/arrow-left-solid.svg");
/* harmony import */ var _check_solid_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./check-solid.svg */ "./src/newProjectForm/check-solid.svg");
/* harmony import */ var _list_alt_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list-alt.svg */ "./src/newProjectForm/list-alt.svg");




function showNewProjectForm() {
  const content = document.querySelector('.content');
  const newProjectForm = document.createElement('form');
  newProjectForm.classList.add('new-project-form');
  newProjectForm.classList.add('close-project-form');
  content.appendChild(newProjectForm);

  const newProjectFormHeader = document.createElement('div');
  newProjectFormHeader.classList.add('new-project-form-header');
  newProjectForm.appendChild(newProjectFormHeader);

  const backBtn = document.createElement('img');
  backBtn.src = _arrow_left_solid_svg__WEBPACK_IMPORTED_MODULE_0__;
  backBtn.classList.add('new-project-form-back');
  newProjectFormHeader.appendChild(backBtn);

  const newProjectFormH3 = document.createElement('h3');
  newProjectFormH3.classList.add('new-project-form-h3');
  newProjectFormH3.textContent = 'Add project';
  newProjectFormHeader.appendChild(newProjectFormH3);

  const newProjectFormSaveBtn = document.createElement('img');
  newProjectFormSaveBtn.src = _check_solid_svg__WEBPACK_IMPORTED_MODULE_1__;
  newProjectFormSaveBtn.classList.add('new-project-form-save');
  newProjectFormHeader.appendChild(newProjectFormSaveBtn);

  const formGroup = document.createElement('div');
  formGroup.classList.add('form-group');
  newProjectForm.appendChild(formGroup);

  const label = document.createElement('label');
  label.for = 'projectName';
  label.textContent = 'Name';
  label.classList.add('project-name-label');
  formGroup.appendChild(label);


  const newProjectNameInput = document.createElement('input');
  newProjectNameInput.type = 'text';
  newProjectNameInput.id = 'projectName';
  newProjectNameInput.classList.add('new-project-name-input');
  newProjectNameInput.name = 'name';
  formGroup.appendChild(newProjectNameInput);

  const colorFormGroup = document.createElement('div');
  colorFormGroup.classList.add('color-form-group');
  newProjectForm.appendChild(colorFormGroup);

  const mainColorIcon = document.createElement('img');
  mainColorIcon.src = _list_alt_svg__WEBPACK_IMPORTED_MODULE_2__;
  mainColorIcon.classList.add('color-icon');
  mainColorIcon.classList.add('main-color-icon');
  mainColorIcon.classList.add('default-color');
  colorFormGroup.appendChild(mainColorIcon);

  const colorLabelAndName = document.createElement('div');
  colorLabelAndName.classList.add('color-label-and-name')
  colorFormGroup.appendChild(colorLabelAndName);

  // colorLabelAndName.addEventListener('click', () => {
  //   colorIcon.classList.remove(colorIcon.classList[1]);
  //   colorIcon.classList.add('rosu');
  // })

  const selectedColorLabel = document.createElement('span');
  selectedColorLabel.classList.add('selected-color-label');
  selectedColorLabel.textContent = 'Color';
  colorLabelAndName.appendChild(selectedColorLabel);

  const selectedProjectColor = document.createElement('span');
  selectedProjectColor.classList.add('selected-project-color');
  selectedProjectColor.textContent = 'Charcoal';
  colorLabelAndName.appendChild(selectedProjectColor);
}

/***/ }),

/***/ "./src/popUpMenu/menu.js":
/*!*******************************!*\
  !*** ./src/popUpMenu/menu.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ showMenu)
/* harmony export */ });
/* harmony import */ var _tray_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tray.svg */ "./src/popUpMenu/tray.svg");
/* harmony import */ var _calendar_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./calendar.svg */ "./src/popUpMenu/calendar.svg");
/* harmony import */ var _x_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./x.svg */ "./src/popUpMenu/x.svg");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! .. */ "./src/index.js");
/* harmony import */ var _plus_circle_solid_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./plus-circle-solid.svg */ "./src/popUpMenu/plus-circle-solid.svg");






function showMenu() {
 const content = document.querySelector('.content');
 const menu = document.createElement('nav');
 menu.classList.add('popup-menu');
 menu.classList.add('close');
 menu.role = 'navigation';
 content.appendChild(menu);

 const closeBtn = document.createElement('img');
 closeBtn.src = _x_svg__WEBPACK_IMPORTED_MODULE_2__;
 closeBtn.classList.add('close-button');
 menu.appendChild(closeBtn);

 const menuSections = document.createElement('div');
 menuSections.classList.add('menu-sections');
 menu.appendChild(menuSections);

 const menuSectionsList = document.createElement('ul');
 menuSectionsList.classList.add('menu-sections-list');
 const inboxItem = document.createElement('li');
 
 const todayItem = document.createElement('li');
 
 menuSections.appendChild(menuSectionsList);
 menuSectionsList.appendChild(inboxItem);
 menuSectionsList.appendChild(todayItem);

 const inboxIcon = document.createElement('img');
 inboxIcon.src = _tray_svg__WEBPACK_IMPORTED_MODULE_0__;
 inboxItem.appendChild(inboxIcon);
 inboxIcon.classList.add('section-icon');

 const todayIcon = document.createElement('img');
 todayIcon.src = _calendar_svg__WEBPACK_IMPORTED_MODULE_1__;
 todayItem.appendChild(todayIcon);
 todayIcon.classList.add('section-icon');

 const inboxSpan = document.createElement('span');
 const todaySpan = document.createElement('span');
 inboxSpan.textContent = 'Inbox';
 todaySpan.textContent = 'Today';
 inboxItem.appendChild(inboxSpan);
 todayItem.appendChild(todaySpan);

 const projectsSection = document.createElement('div');
 projectsSection.classList.add('projects-section');
 menu.appendChild(projectsSection);

 const projectsSectionHeader = document.createElement('div');
 projectsSectionHeader.classList.add('project-section-header');
 projectsSection.appendChild(projectsSectionHeader);

 const projectsSectionTitle = document.createElement('span');
 projectsSectionTitle.textContent = 'Projects';
 projectsSectionTitle.classList.add('projects-section-title');
 projectsSectionHeader.appendChild(projectsSectionTitle);

 const newProjectBtn = document.createElement('img');
 newProjectBtn.src = _plus_circle_solid_svg__WEBPACK_IMPORTED_MODULE_4__;
 newProjectBtn.classList.add('new-project-button');
 projectsSectionHeader.appendChild(newProjectBtn);

 const projectsSectionList = document.createElement('ul');
 projectsSectionList.classList.add('projects-section-list');
 projectsSection.appendChild(projectsSectionList);

//  const arrayOfProjectTitles = ['Welcome', 'Try Boards', 'Organize your life'];
 ___WEBPACK_IMPORTED_MODULE_3__.arrayOfProjectTitles.forEach(title => {
   const projectItem = document.createElement('li');
   projectItem.classList.add('project-item');
   projectsSectionList.appendChild(projectItem);
   const projectSpan = document.createElement('span');
   projectSpan.textContent = title;
   projectSpan.classList.add('project-span');
   projectItem.appendChild(projectSpan);
 });

 const projectItems = document.querySelectorAll('.projects-section-list li');
 projectItems.forEach(projectItem => {
   const circle = document.createElement('span');
   circle.classList.add('circle');
   projectItem.insertBefore(circle, projectItem.firstChild);
   circle.style.backgroundColor = `${getColor()}`;
 })
 
 function getColor() {
  return "hsla(" + ~~(360 * Math.random()) + "," +
  "70%,"+
  "80%,1)"
 }

}
  



/***/ }),

/***/ "./src/projectColors/projectColors.js":
/*!********************************************!*\
  !*** ./src/projectColors/projectColors.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ showColorChoices)
/* harmony export */ });
/* harmony import */ var _list_alt_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list-alt.svg */ "./src/projectColors/list-alt.svg");


function showColorChoices() {
  const mainColorIcon = document.querySelector('.main-color-icon');
  const selectedProjectColor = document.querySelector('.selected-project-color');
  const content = document.querySelector('.content');
  const colorChoicesContainer = document.createElement('div');
  colorChoicesContainer.classList.add('color-choices-container');
  colorChoicesContainer.classList.add('close-color-choices');
  content.appendChild(colorChoicesContainer);

  const h3Title = document.createElement('h3');
  h3Title.textContent = 'Color';
  colorChoicesContainer.appendChild(h3Title);

  const colorChoicesList = document.createElement('ul');
  colorChoicesList.classList.add('color-choices-list');
  colorChoicesContainer.appendChild(colorChoicesList);

  const colorNamesAndFilters = [
    ['Berry red', 'invert(16%) sepia(17%) saturate(6011%) hue-rotate(326deg) brightness(94%) contrast(95%)'],
    ['Red', 'invert(15%) sepia(90%) saturate(6449%) hue-rotate(359deg) brightness(108%) contrast(114%)'],
    ['Orange', 'invert(62%) sepia(52%) saturate(1790%) hue-rotate(0deg) brightness(103%) contrast(104%)'],
    ['Yellow', 'invert(85%) sepia(85%) saturate(1322%) hue-rotate(355deg) brightness(103%) contrast(107%)'],
    ['Olive green', 'invert(36%) sepia(100%) saturate(1063%) hue-rotate(40deg) brightness(92%) contrast(105%)'],
    ['Lime green', 'invert(64%) sepia(27%) saturate(4734%) hue-rotate(76deg) brightness(107%) contrast(134%)'],
    ['Green', 'invert(30%) sepia(55%) saturate(1798%) hue-rotate(90deg) brightness(103%) contrast(109%)'],
    ['Mint green', 'invert(95%) sepia(29%) saturate(3178%) hue-rotate(49deg) brightness(119%) contrast(100%)'],
    ['Teal', 'invert(24%) sepia(83%) saturate(2310%) hue-rotate(162deg) brightness(95%) contrast(101%)'],
    ['Sky blue', 'invert(79%) sepia(89%) saturate(1858%) hue-rotate(169deg) brightness(96%) contrast(91%)'],
    ['Light blue', 'invert(89%) sepia(5%) saturate(2127%) hue-rotate(162deg) brightness(100%) contrast(81%)'],
    ['Blue', 'invert(8%) sepia(100%) saturate(7297%) hue-rotate(247deg) brightness(96%) contrast(142%)'],
    ['Grape', 'invert(25%) sepia(50%) saturate(2134%) hue-rotate(250deg) brightness(89%) contrast(105%)'],
    ['Violet', 'invert(83%) sepia(28%) saturate(3562%) hue-rotate(245deg) brightness(95%) contrast(96%)'],
    ['Lavender', 'invert(95%) sepia(74%) saturate(1625%) hue-rotate(180deg) brightness(107%) contrast(96%)'],
    ['Magenta', 'invert(21%) sepia(38%) saturate(7392%) hue-rotate(297deg) brightness(115%) contrast(130%)'],
    ['Salmon', 'invert(67%) sepia(49%) saturate(1646%) hue-rotate(313deg) brightness(100%) contrast(97%)'],
    ['Charcoal', 'invert(23%) sepia(8%) saturate(1530%) hue-rotate(161deg) brightness(97%) contrast(87%)'],
    ['Grey', 'invert(54%) sepia(0%) saturate(1425%) hue-rotate(165deg) brightness(92%) contrast(85%)'],
    ['Taupe', 'invert(21%) sepia(14%) saturate(795%) hue-rotate(345deg) brightness(97%) contrast(88%)']
  ]

  colorNamesAndFilters.forEach(color => {
    const colorChoiceListItem = document.createElement('li');
    colorChoiceListItem.classList.add('color-list-item');
    colorChoicesContainer.appendChild(colorChoiceListItem);

    const colorIcon = document.createElement('img');
    colorIcon.src = _list_alt_svg__WEBPACK_IMPORTED_MODULE_0__;
    colorIcon.classList.add('color-icon');
    colorChoiceListItem.appendChild(colorIcon);
    colorIcon.style.filter = color[1];

    const colorName = document.createElement('span');
    colorName.textContent = color[0];
    colorChoiceListItem.appendChild(colorName);
  })

  const listItems = document.querySelectorAll('.color-list-item');
  listItems.forEach(item => {
    item.addEventListener('click', (e) => {
      //remove default color
      mainColorIcon.classList.remove('default-color');
      // Set the main color icon to the color of the new selected color
      mainColorIcon.style.filter = e.target.closest('li').firstChild.style.filter;
      //Set the project color name to the user selected color
      selectedProjectColor.textContent = e.target.closest('li').children[1].textContent;
      //Close the color choice form
      colorChoicesContainer.classList.toggle('close-color-choices');
    })
  })
}

/***/ }),

/***/ "./src/task editor/taskEditor.js":
/*!***************************************!*\
  !*** ./src/task editor/taskEditor.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ showTaskEditor)
/* harmony export */ });
/* harmony import */ var _assets_icons_calendar_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/icons/calendar.svg */ "./src/assets/icons/calendar.svg");
/* harmony import */ var _assets_icons_paper_plane_right_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/icons/paper-plane-right.svg */ "./src/assets/icons/paper-plane-right.svg");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! .. */ "./src/index.js");





function showTaskEditor() {
  const content = document.querySelector('.content');
  const modal = document.createElement('dialog');
  modal.classList.add('modal');
  content.appendChild(modal);
  
  const newTaskForm = document.createElement('form');
  newTaskForm.classList.add('task-editor');
  modal.appendChild(newTaskForm);

  const closeModal = document.createElement('button');
  closeModal.classList.add('close-modal');
  closeModal.innerHTML = '&times';
  newTaskForm.appendChild(closeModal);

  const inputFields = document.createElement('div');
  inputFields.classList.add('input-fields');
  newTaskForm.appendChild(inputFields);

  const extraFields = document.createElement('div');
  extraFields.classList.add('extra-fields');
  newTaskForm.appendChild(extraFields);

  const taskTitleInput = document.createElement('input');
  taskTitleInput.classList.add('task-title-input');
  taskTitleInput.type = 'text';
  taskTitleInput.id = 'title';
  taskTitleInput.name = 'title';
  taskTitleInput.placeholder = 'e.g. Renew gym every May 1st';
  inputFields.appendChild(taskTitleInput);

  const taskDescriptionInput = document.createElement('textarea');
  taskDescriptionInput.classList.add('task-description-input');
  taskDescriptionInput.id = 'description';
  taskDescriptionInput.name = 'description';
  taskDescriptionInput.placeholder = 'Description';
  inputFields.appendChild(taskDescriptionInput);

  const pills = document.createElement('div');
  pills.classList.add('pills');
  const itemActions = document.createElement('div');
  itemActions.classList.add('item-actions');
  extraFields.appendChild(pills);
  extraFields.appendChild(itemActions);

  const dueDateButton = document.createElement('input');
  dueDateButton.id = 'date';
  dueDateButton.type = 'date';
  
  function getFullDate() {
    const d = new Date();
    let day = d.getDate();
    let month;
    if (d.getMonth() < 10) {
      month = '0' + Number(d.getMonth()+1).toString();
    } else {
      month = Number(d.getMonth()+1).toString();
    }
    let year = d.getFullYear();
    let dateMin = `${year}-${month}-${day}`;
    return dateMin
  }

  dueDateButton.min = getFullDate();
  dueDateButton.classList.add('due-date-button');
  pills.appendChild(dueDateButton);

  // const dueDateButtonIcon = document.createElement('img');
  // dueDateButtonIcon.src = Calendar;
  // dueDateButtonIcon.classList.add('button-icon');
  // dueDateButton.appendChild(dueDateButtonIcon);

  // const dueDateButtonText = document.createElement('span');
  // dueDateButtonText.textContent = 'Due date';
  // dueDateButtonText.classList.add('button-text');
  // dueDateButton.appendChild(dueDateButtonText);

  const folderButton = document.createElement('select');
  folderButton.classList.add('folder-select-button');
  pills.appendChild(folderButton);
  ___WEBPACK_IMPORTED_MODULE_2__.folders.forEach(folder => {
    const option = document.createElement('option');
    option.textContent = folder;
    option.value = folder.toLowerCase();
    folderButton.appendChild(option);
  });

  const submit = document.createElement('button');
  submit.type = 'submit';
  submit.formMethod = 'dialog';
  submit.classList.add('submit-button');
  newTaskForm.appendChild(submit);

  const submitBtnImg = document.createElement('img');
  submitBtnImg.src = _assets_icons_paper_plane_right_svg__WEBPACK_IMPORTED_MODULE_1__;
  submitBtnImg.classList.add('submit-button-icon');
  submit.appendChild(submitBtnImg);
}

/***/ }),

/***/ "./src/today/todayPage.js":
/*!********************************!*\
  !*** ./src/today/todayPage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ showToday)
/* harmony export */ });
/* harmony import */ var _bicycle_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bicycle.svg */ "./src/today/bicycle.svg");


function showToday() {
  const content = document.querySelector('.content');
  const header = document.querySelector('.header');
  const menuBar = document.querySelector('.menu-bar');
  
  const sectionName = document.createElement('h3');
  sectionName.textContent = 'Today';
  header.appendChild(sectionName);

  const kebabMenu = document.createElement('div');
  kebabMenu.classList.add('test');
  header.appendChild(kebabMenu);

  const sectionContent = document.createElement('div');
  sectionContent.classList.add('section-content');
  content.insertBefore(sectionContent, menuBar);

  const bicycleImg = document.createElement('img');
  bicycleImg.classList.add('section-image');
  bicycleImg.src = _bicycle_svg__WEBPACK_IMPORTED_MODULE_0__;
  sectionContent.appendChild(bicycleImg);

  const sectionContentInfo = document.createElement('div');
  sectionContentInfo.classList.add('section-content-info');
  sectionContent.appendChild(sectionContentInfo);
  const status = document.createElement('p');
  status.setAttribute('style', 'white-space: pre;');
  status.textContent = "You're all done for today! \n Congratulations!";
  sectionContentInfo.appendChild(status);
  const para = document.createElement('p');
  para.textContent = 'Enjoy the rest of the day!';
  sectionContentInfo.appendChild(para);

}

/***/ }),

/***/ "./src/assets/icons/Hamburger_icon.svg":
/*!*********************************************!*\
  !*** ./src/assets/icons/Hamburger_icon.svg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b778cb1777612594612f.svg";

/***/ }),

/***/ "./src/assets/icons/bell.svg":
/*!***********************************!*\
  !*** ./src/assets/icons/bell.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f6752623936a5de40b0d.svg";

/***/ }),

/***/ "./src/assets/icons/calendar.svg":
/*!***************************************!*\
  !*** ./src/assets/icons/calendar.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c8f71cca95d5638f8603.svg";

/***/ }),

/***/ "./src/assets/icons/magnifying-glass.svg":
/*!***********************************************!*\
  !*** ./src/assets/icons/magnifying-glass.svg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f6e336db448a3bd6aafc.svg";

/***/ }),

/***/ "./src/assets/icons/paper-plane-right.svg":
/*!************************************************!*\
  !*** ./src/assets/icons/paper-plane-right.svg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "58a8dfa4b83f498cb2f2.svg";

/***/ }),

/***/ "./src/inbox/inbox.svg":
/*!*****************************!*\
  !*** ./src/inbox/inbox.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4fe98a9b514f54c5378a.svg";

/***/ }),

/***/ "./src/newProjectForm/arrow-left-solid.svg":
/*!*************************************************!*\
  !*** ./src/newProjectForm/arrow-left-solid.svg ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1ac1db5c0f8a3669caba.svg";

/***/ }),

/***/ "./src/newProjectForm/check-solid.svg":
/*!********************************************!*\
  !*** ./src/newProjectForm/check-solid.svg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fbcbcc5b197e687b300f.svg";

/***/ }),

/***/ "./src/newProjectForm/list-alt.svg":
/*!*****************************************!*\
  !*** ./src/newProjectForm/list-alt.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bf5aee781395b547b35d.svg";

/***/ }),

/***/ "./src/popUpMenu/calendar.svg":
/*!************************************!*\
  !*** ./src/popUpMenu/calendar.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c8f71cca95d5638f8603.svg";

/***/ }),

/***/ "./src/popUpMenu/plus-circle-solid.svg":
/*!*********************************************!*\
  !*** ./src/popUpMenu/plus-circle-solid.svg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1eac8b77739ebd143bb4.svg";

/***/ }),

/***/ "./src/popUpMenu/tray.svg":
/*!********************************!*\
  !*** ./src/popUpMenu/tray.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b04b0c55c726c7fe03b7.svg";

/***/ }),

/***/ "./src/popUpMenu/x.svg":
/*!*****************************!*\
  !*** ./src/popUpMenu/x.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ee088d618f681a010cce.svg";

/***/ }),

/***/ "./src/projectColors/list-alt.svg":
/*!****************************************!*\
  !*** ./src/projectColors/list-alt.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bf5aee781395b547b35d.svg";

/***/ }),

/***/ "./src/today/bicycle.svg":
/*!*******************************!*\
  !*** ./src/today/bicycle.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8b9423fabdf3569ffd84.svg";

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
/******/ 			id: moduleId,
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
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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WUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLEtBQUssS0FBSyxVQUFVLFlBQVksV0FBVyxLQUFLLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxLQUFLLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksTUFBTSxPQUFPLFVBQVUsS0FBSyxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsS0FBSyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLE1BQU0sWUFBWSxNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxNQUFNLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsS0FBSyxLQUFLLFlBQVksV0FBVyxLQUFLLE1BQU0s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Q0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOzs7OztVRUFBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvYXBwbGljYXRpb24gbG9naWMvYXBwbGljYXRpb25Mb2dpYy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9pbmJveC9pbmJveC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9uZXdQcm9qZWN0Rm9ybS9uZXdQcm9qZWN0Rm9ybS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9wb3BVcE1lbnUvbWVudS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9wcm9qZWN0Q29sb3JzL3Byb2plY3RDb2xvcnMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvdGFzayBlZGl0b3IvdGFza0VkaXRvci5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy90b2RheS90b2RheVBhZ2UuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1PcGVuK1NhbnM6aXRhbCx3Z2h0QDAsMzAwOzAsNDAwOzAsNTAwOzAsNjAwOzAsNzAwOzAsODAwOzEsMzAwOzEsNDAwOzEsNTAwOzEsNjAwOzEsNzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qIHZhcmlhYmxlcyAqL1xcbjpyb290IHtcXG4gIC0tcHJpbWFyeTogI0Y5NjEyNjtcXG4gIC0tc2Vjb25kYXJ5OiAjMkYyRTQxO1xcbn1cXG5cXG4vKiByZXNldCAqL1xcbmJvZHkscCxhLHVsLGxpLGgxLGgyLGgzIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcbmxpIHtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG59XFxuXFxuLyogYmFzZSBzdHlsZXMgKi9cXG5ib2R5IHtcXG4gIG1heC1oZWlnaHQ6IDEwMHZoO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuLmNvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4udGVzdDphZnRlciB7XFxuICBjb250ZW50OiAnXFxcXDI4MDcnO1xcbiAgZm9udC1zaXplOiAxLjRlbTtcXG59XFxuLmhlYWRlciB7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbmgzIHtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcbi5zZWN0aW9uLWNvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAyMHB4O1xcbn1cXG4uc2VjdGlvbi1pbWFnZSB7XFxuICB3aWR0aDogNTAlO1xcbiAgbWF4LXdpZHRoOiAzNTBweDtcXG4gIG9wYWNpdHk6IC44O1xcbn1cXG4uc2VjdGlvbi1jb250ZW50LWluZm8ge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbGluZS1oZWlnaHQ6IDI7XFxuICBmb250LXNpemU6IDEuMWVtO1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gIHBhZGRpbmc6IDEwcHggMzBweDtcXG59XFxuLnNlY3Rpb24tY29udGVudC1pbmZvID4gKjpsYXN0LWNoaWxkIHtcXG4gIGZvbnQtc2l6ZTogLjhlbTtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBvcGFjaXR5OiAuNTtcXG59XFxuLm1lbnUtYmFyIHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnkpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAyMHB4IDIwcHggNDBweDtcXG4gIG9wYWNpdHk6IC45O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4uaGFtYnVyZ2VyLW1lbnUtaW1nLFxcbi5zZWFyY2gtYnV0dG9uLFxcbi5ub3RpZmljYXRpb25zLWJ1dHRvbiB7XFxuICB3aWR0aDogMjJweDtcXG59XFxuLmhhbWJ1cmdlci1tZW51LWltZyB7XFxuICB3aWR0aDogMjBweDtcXG4gIGZpbHRlcjogIGJyaWdodG5lc3MoMCkgaW52ZXJ0KDEpO1xcbn1cXG4uc2VhcmNoLWJ1dHRvbiB7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG59XFxuLm5vdGlmaWNhdGlvbnMtYnV0dG9uIHtcXG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xcbn1cXG4uYWRkLXRhc2stYnV0dG9uIHtcXG4gIHdpZHRoOiA1MHB4O1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XFxuICBmb250LXNpemU6IDIuNWVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBjb2xvcjogd2hpdGU7XFxuICBib3JkZXI6IDRweCBzb2xpZCB3aGl0ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIHBvc2l0aW9uOmFic29sdXRlO1xcbiAgdG9wOiAtMjVweDtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUpO1xcbn1cXG4ucG9wdXAtbWVudSB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZjBmMGYwO1xcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTVweDtcXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxNXB4O1xcbiAgcGFkZGluZzogMjBweDtcXG4gIG9wYWNpdHk6IDE7XFxuICB0cmFuc2l0aW9uOiBhbGwgNDAwbXMgZWFzZTtcXG59XFxuLmNsb3Nle1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMCUpO1xcbiAgb3BhY2l0eTogMDtcXG59XFxuLmNsb3NlLWJ1dHRvbiB7XFxuICB3aWR0aDogMzJweDtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG4ucG9wdXAtbWVudSA+IGxpIHtcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5tZW51LXNlY3Rpb25zIHtcXG4gIHBhZGRpbmctbGVmdDogMTBweDtcXG59XFxuLm1lbnUtc2VjdGlvbnMtbGlzdCBsaXtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG4gIGdhcDogN3B4O1xcbn1cXG4uc2VjdGlvbi1pY29uIHtcXG4gIHdpZHRoOiAzMHB4O1xcbn1cXG4ucHJvamVjdHMtc2VjdGlvbiB7XFxuICBtYXJnaW4tdG9wOiA0MHB4O1xcbn1cXG4ucHJvamVjdC1zZWN0aW9uLWhlYWRlcntcXG4gIGRpc3BsYXk6ZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5uZXctcHJvamVjdC1idXR0b24ge1xcbiAgd2lkdGg6IDMwcHg7XFxuICBvcGFjaXR5OiAwLjY7XFxufVxcblxcbi5wcm9qZWN0cy1zZWN0aW9uLXRpdGxlIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgZm9udC1zaXplOiAxLjVlbTtcXG59XFxuLnByb2plY3RzLXNlY3Rpb24tbGlzdCB7XFxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxufVxcbi5wcm9qZWN0LWl0ZW0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDEwcHg7XFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcbn1cXG4uY2lyY2xlIHtcXG4gIGhlaWdodDogMjVweDtcXG4gIHdpZHRoOiAyNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cXG4uYnV0dG9uLWljb24ge1xcbiAgd2lkdGg6IDIwcHg7XFxufVxcblxcbi8qIHRhc2sgZWRpdG9yICovXFxuLm1vZGFsIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgLjMpO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuLm1vZGFsOjpiYWNrZHJvcCB7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIC43KTtcXG59XFxuLmNsb3NlLW1vZGFsIHtcXG4gIC8qIHBvc2l0aW9uOiBhYnNvbHV0ZTsgKi9cXG4gIC8qIHRvcDogMnB4O1xcbiAgcmlnaHQ6IDEwcHg7ICovXFxuICBncmlkLWNvbHVtbjogMi8zO1xcbiAgZm9udC1zaXplOiAyZW07XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG9wYWNpdHk6IC42O1xcbiAgYWxpZ24tc2VsZjogc3RhcnQ7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG59XFxuLnRhc2stZWRpdG9yIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDlmciAxZnI7XFxuICAvKiBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnIgMWZyOyAqL1xcbiAgLyogcG9zaXRpb246IHJlbGF0aXZlOyAqL1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbi5pbnB1dC1maWVsZHMge1xcbiAgZ3JpZC1jb2x1bW46IDEvMjtcXG4gIGdyaWQtcm93OiAxLzI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTBweDtcXG59XFxuLmV4dHJhLWZpZWxkc3tcXG4gIGdyaWQtY29sdW1uOiAxLzI7XFxuICBncmlkLXJvdzogMi8zO1xcbn1cXG4udGFzay10aXRsZS1pbnB1dCxcXG4udGFzay1kZXNjcmlwdGlvbi1pbnB1dHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHBhZGRpbmc6IDEwcHg7XFxufVxcbi50YXNrLWRlc2NyaXB0aW9uLWlucHV0e1xcbiAgZm9udC1zaXplOiAuOGVtO1xcbiAgaGVpZ2h0OiA3Y2g7XFxuICByZXNpemU6IG5vbmU7XFxufVxcbi5waWxsc3tcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDEwcHg7XFxuICBwYWRkaW5nOiA2cHg7XFxufVxcbi5kdWUtZGF0ZS1idXR0b24sXFxuLmZvbGRlci1zZWxlY3QtYnV0dG9uIHtcXG4gIHBhZGRpbmc6IC41cmVtIC4zcmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIC4zKTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBmb250LXNpemU6IC45ZW07XFxuICB3aWR0aDogMTAwcHg7XFxufVxcblxcbi5kdWUtZGF0ZS1idXR0b257XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogM3B4O1xcbn1cXG5cXG4uc3VibWl0LWJ1dHRvbiB7XFxuICBncmlkLWNvbHVtbjogMi8zO1xcbiAgZ3JpZC1yb3c6IDMvNDtcXG4gIHdpZHRoOiAzMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXI6IG5vbmU7XFxuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG59XFxuXFxuLnN1Ym1pdC1idXR0b24taWNvbiB7XFxuICB3aWR0aDogMjVweDtcXG4gIG9wYWNpdHk6IC42O1xcbn1cXG5cXG4vKiBuZXdQcm9qZWN0IEZvcm0gKi9cXG4ubmV3LXByb2plY3QtZm9ybSB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZjBmMGYwO1xcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTVweDtcXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxNXB4O1xcbiAgcGFkZGluZzogMjBweDtcXG4gIG9wYWNpdHk6IDE7XFxuICB0cmFuc2l0aW9uOiBhbGwgNDAwbXMgZWFzZTtcXG59XFxuLmNsb3NlLXByb2plY3QtZm9ybXtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcXG4gIG9wYWNpdHk6IDA7XFxufVxcbi5uZXctcHJvamVjdC1mb3JtLWhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLm5ldy1wcm9qZWN0LWZvcm0taDMge1xcbiAgbWFyZ2luLWxlZnQ6IDMwcHg7XFxuICBmb250LXNpemU6IDEuNWVtO1xcbn1cXG4ubmV3LXByb2plY3QtZm9ybS1zYXZlIHtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbn1cXG4ubmV3LXByb2plY3QtZm9ybS1iYWNrLFxcbi5uZXctcHJvamVjdC1mb3JtLXNhdmUge1xcbiAgd2lkdGg6IDMwcHg7XFxuICBvcGFjaXR5OiAwLjY7XFxufVxcblxcbi5mb3JtLWdyb3VwIHtcXG4gIG1hcmdpbi10b3A6IDMwcHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBwYWRkaW5nOjEwcHg7XFxuICBib3JkZXI6IDNweCBzb2xpZCByZ2JhKDI1NSwgMiwgMiwgMC44KTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIC8qIG1hcmdpbjogMTBweDsgKi9cXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG9wYWNpdHk6IC42O1xcbn1cXG4uZm9ybS1ncm91cD5sYWJlbCB7XFxuICBwb3NpdGlvbjphYnNvbHV0ZTtcXG4gIHRvcDogLTE0cHg7XFxuICBsZWZ0OiAyMHB4OyBcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgZm9udC1zaXplOiAxLjJlbTtcXG59XFxuLmZvcm0tZ3JvdXA+aW5wdXQsXFxuLmZvcm0tZ3JvdXA+aW5wdXQ6YWN0aXZlIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICB3aWR0aDogOTAlO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGZvbnQtc2l6ZTogMS41ZW07XFxufVxcbi5jb2xvci1mb3JtLWdyb3Vwe1xcbiAgbWFyZ2luLXRvcDogMzBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDMwcHg7XFxufVxcbi5jb2xvci1sYWJlbC1hbmQtbmFtZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogNXB4O1xcbn1cXG4uY29sb3ItaWNvbiB7XFxuICB3aWR0aDogMzVweDtcXG59XFxuLnNlbGVjdGVkLWNvbG9yLWxhYmVsIHtcXG4gIGZvbnQtc2l6ZTogMS4zZW07XFxufVxcbi5zZWxlY3RlZC1wcm9qZWN0LWNvbG9yIHtcXG4gIGZvbnQtc2l6ZTogMWVtO1xcbn1cXG5cXG4vKiBjb2xvciBmaWx0ZXJzICovXFxuLmNoYXJjb2FsIHtcXG4gIGZpbHRlcjogaW52ZXJ0KDIzJSkgc2VwaWEoOCUpIHNhdHVyYXRlKDE1MzAlKSBodWUtcm90YXRlKDE2MWRlZykgYnJpZ2h0bmVzcyg5NyUpIGNvbnRyYXN0KDg3JSk7XFxufVxcblxcbi5yZWQge1xcbiAgZmlsdGVyOiBpbnZlcnQoMTUlKSBzZXBpYSg5MCUpIHNhdHVyYXRlKDY0NDklKSBodWUtcm90YXRlKDM1OWRlZykgYnJpZ2h0bmVzcygxMDglKSBjb250cmFzdCgxMTQlKTtcXG59XFxuXFxuLyogY29sb3IgY2hvaWNlcyBjb250YWluZXIgKi9cXG4uY29sb3ItY2hvaWNlcy1jb250YWluZXIge1xcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGhlaWdodDogOTB2aDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2YwZjBmMDtcXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDE1cHg7XFxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTVweDtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBvcGFjaXR5OiAxO1xcbiAgdHJhbnNpdGlvbjogYWxsIDQwMG1zIGVhc2U7XFxufVxcbi5jbG9zZS1jb2xvci1jaG9pY2Vze1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMCUpO1xcbiAgb3BhY2l0eTogMDtcXG59XFxuXFxuLmRlZmF1bHQtY29sb3J7XFxuICBmaWx0ZXI6IGludmVydCgyMyUpIHNlcGlhKDglKSBzYXR1cmF0ZSgxNTMwJSkgaHVlLXJvdGF0ZSgxNjFkZWcpIGJyaWdodG5lc3MoOTclKSBjb250cmFzdCg4NyUpO1xcbn1cXG5cXG4vKiBmb250cyAqL1xcblxcbi8qIG1vYmlsZSBzdHlsZXMgKi9cXG5cXG5cXG4vKiBzbWFsbCB0YWJsZXQgc3R5bGVzICovXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjIwcHgpIHtcXG4gIFxcbn1cXG5cXG4vKiBsYXJnZSB0YWJsZXRzICYgbGFwdG9wIHN0eWxlcyAqL1xcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk2MHB4KSB7XFxuICBcXG59XFxuXFxuLyogZGVza3RvcCBzdHlsZXMgKi9cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpIHtcXG4gIFxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBLGNBQWM7QUFDZDtFQUNFLGtCQUFrQjtFQUNsQixvQkFBb0I7QUFDdEI7O0FBRUEsVUFBVTtBQUNWO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQSxnQkFBZ0I7QUFDaEI7RUFDRSxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLG9DQUFvQztFQUNwQyxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsOEJBQThCO0VBQzlCLGFBQWE7RUFDYixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGFBQWE7RUFDYixhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixTQUFTO0FBQ1g7QUFDQTtFQUNFLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsV0FBVztBQUNiO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLFdBQVc7QUFDYjtBQUNBO0VBQ0UsMEJBQTBCO0VBQzFCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLFdBQVc7RUFDWCxrQkFBa0I7QUFDcEI7QUFDQTs7O0VBR0UsV0FBVztBQUNiO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsZ0NBQWdDO0FBQ2xDO0FBQ0E7RUFDRSxpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixnQ0FBZ0M7RUFDaEMsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsVUFBVTtFQUNWLFNBQVM7RUFDVCwwQkFBMEI7QUFDNUI7QUFDQTtFQUNFLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsU0FBUztFQUNULHVCQUF1QjtFQUN2QixhQUFhO0VBQ2IsV0FBVztFQUNYLHlCQUF5QjtFQUN6Qiw0QkFBNEI7RUFDNUIsNkJBQTZCO0VBQzdCLGFBQWE7RUFDYixVQUFVO0VBQ1YsMEJBQTBCO0FBQzVCO0FBQ0E7RUFDRSwyQkFBMkI7RUFDM0IsVUFBVTtBQUNaO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLFFBQVE7QUFDVjtBQUNBO0VBQ0UsV0FBVztBQUNiO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLFlBQVk7RUFDWiw4QkFBOEI7RUFDOUIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFNBQVM7RUFDVCxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0UsV0FBVztBQUNiOztBQUVBLGdCQUFnQjtBQUNoQjtFQUNFLFVBQVU7RUFDVixpQkFBaUI7RUFDakIsbUNBQW1DO0VBQ25DLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLDZCQUE2QjtBQUMvQjtBQUNBO0VBQ0Usd0JBQXdCO0VBQ3hCO2dCQUNjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCx1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsb0JBQW9CO0FBQ3RCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLHFDQUFxQztFQUNyQyx3QkFBd0I7RUFDeEIsYUFBYTtFQUNiLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFNBQVM7QUFDWDtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7QUFDZjtBQUNBOztFQUVFLFlBQVk7RUFDWixhQUFhO0FBQ2Y7QUFDQTtFQUNFLGVBQWU7RUFDZixXQUFXO0VBQ1gsWUFBWTtBQUNkO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsU0FBUztFQUNULFlBQVk7QUFDZDtBQUNBOztFQUVFLG9CQUFvQjtFQUNwQiw2QkFBNkI7RUFDN0IsbUNBQW1DO0VBQ25DLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLFdBQVc7RUFDWCxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFdBQVc7QUFDYjs7QUFFQSxvQkFBb0I7QUFDcEI7RUFDRSxzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCx1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsNEJBQTRCO0VBQzVCLDZCQUE2QjtFQUM3QixhQUFhO0VBQ2IsVUFBVTtFQUNWLDBCQUEwQjtBQUM1QjtBQUNBO0VBQ0UsMkJBQTJCO0VBQzNCLFVBQVU7QUFDWjtBQUNBO0VBQ0UsYUFBYTtFQUNiLHFCQUFxQjtFQUNyQixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGlCQUFpQjtBQUNuQjtBQUNBOztFQUVFLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osc0NBQXNDO0VBQ3RDLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLFdBQVc7QUFDYjtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLFVBQVU7RUFDVixVQUFVO0VBQ1YsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtBQUNsQjtBQUNBOztFQUVFLFlBQVk7RUFDWixhQUFhO0VBQ2IsVUFBVTtFQUNWLGFBQWE7RUFDYixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsU0FBUztBQUNYO0FBQ0E7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFFBQVE7QUFDVjtBQUNBO0VBQ0UsV0FBVztBQUNiO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUEsa0JBQWtCO0FBQ2xCO0VBQ0UsOEZBQThGO0FBQ2hHOztBQUVBO0VBQ0UsaUdBQWlHO0FBQ25HOztBQUVBLDRCQUE0QjtBQUM1QjtFQUNFLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCx1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsNEJBQTRCO0VBQzVCLDZCQUE2QjtFQUM3QixhQUFhO0VBQ2IsVUFBVTtFQUNWLDBCQUEwQjtBQUM1QjtBQUNBO0VBQ0UsMkJBQTJCO0VBQzNCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLDhGQUE4RjtBQUNoRzs7QUFFQSxVQUFVOztBQUVWLGtCQUFrQjs7O0FBR2xCLHdCQUF3QjtBQUN4Qjs7QUFFQTs7QUFFQSxrQ0FBa0M7QUFDbEM7O0FBRUE7O0FBRUEsbUJBQW1CO0FBQ25COztBQUVBXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU9wZW4rU2FuczppdGFsLHdnaHRAMCwzMDA7MCw0MDA7MCw1MDA7MCw2MDA7MCw3MDA7MCw4MDA7MSwzMDA7MSw0MDA7MSw1MDA7MSw2MDA7MSw3MDAmZGlzcGxheT1zd2FwJyk7XFxuXFxuLyogdmFyaWFibGVzICovXFxuOnJvb3Qge1xcbiAgLS1wcmltYXJ5OiAjRjk2MTI2O1xcbiAgLS1zZWNvbmRhcnk6ICMyRjJFNDE7XFxufVxcblxcbi8qIHJlc2V0ICovXFxuYm9keSxwLGEsdWwsbGksaDEsaDIsaDMge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxubGkge1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbn1cXG5cXG4vKiBiYXNlIHN0eWxlcyAqL1xcbmJvZHkge1xcbiAgbWF4LWhlaWdodDogMTAwdmg7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG4uY29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi50ZXN0OmFmdGVyIHtcXG4gIGNvbnRlbnQ6ICdcXFxcMjgwNyc7XFxuICBmb250LXNpemU6IDEuNGVtO1xcbn1cXG4uaGVhZGVyIHtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuaDMge1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuLnNlY3Rpb24tY29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDIwcHg7XFxufVxcbi5zZWN0aW9uLWltYWdlIHtcXG4gIHdpZHRoOiA1MCU7XFxuICBtYXgtd2lkdGg6IDM1MHB4O1xcbiAgb3BhY2l0eTogLjg7XFxufVxcbi5zZWN0aW9uLWNvbnRlbnQtaW5mbyB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBsaW5lLWhlaWdodDogMjtcXG4gIGZvbnQtc2l6ZTogMS4xZW07XFxuICBmb250LXdlaWdodDogMzAwO1xcbiAgcGFkZGluZzogMTBweCAzMHB4O1xcbn1cXG4uc2VjdGlvbi1jb250ZW50LWluZm8gPiAqOmxhc3QtY2hpbGQge1xcbiAgZm9udC1zaXplOiAuOGVtO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIG9wYWNpdHk6IC41O1xcbn1cXG4ubWVudS1iYXIge1xcbiAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeSk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDIwcHggMjBweCA0MHB4O1xcbiAgb3BhY2l0eTogLjk7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5oYW1idXJnZXItbWVudS1pbWcsXFxuLnNlYXJjaC1idXR0b24sXFxuLm5vdGlmaWNhdGlvbnMtYnV0dG9uIHtcXG4gIHdpZHRoOiAyMnB4O1xcbn1cXG4uaGFtYnVyZ2VyLW1lbnUtaW1nIHtcXG4gIHdpZHRoOiAyMHB4O1xcbiAgZmlsdGVyOiAgYnJpZ2h0bmVzcygwKSBpbnZlcnQoMSk7XFxufVxcbi5zZWFyY2gtYnV0dG9uIHtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbn1cXG4ubm90aWZpY2F0aW9ucy1idXR0b24ge1xcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XFxufVxcbi5hZGQtdGFzay1idXR0b24ge1xcbiAgd2lkdGg6IDUwcHg7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcXG4gIGZvbnQtc2l6ZTogMi41ZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlcjogNHB4IHNvbGlkIHdoaXRlO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgcG9zaXRpb246YWJzb2x1dGU7XFxuICB0b3A6IC0yNXB4O1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSk7XFxufVxcbi5wb3B1cC1tZW51IHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGhlaWdodDogMTAwdmg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNmMGYwZjA7XFxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxNXB4O1xcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDE1cHg7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgb3BhY2l0eTogMTtcXG4gIHRyYW5zaXRpb246IGFsbCA0MDBtcyBlYXNlO1xcbn1cXG4uY2xvc2V7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwJSk7XFxuICBvcGFjaXR5OiAwO1xcbn1cXG4uY2xvc2UtYnV0dG9uIHtcXG4gIHdpZHRoOiAzMnB4O1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcbi5wb3B1cC1tZW51ID4gbGkge1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLm1lbnUtc2VjdGlvbnMge1xcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbn1cXG4ubWVudS1zZWN0aW9ucy1saXN0IGxpe1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgZ2FwOiA3cHg7XFxufVxcbi5zZWN0aW9uLWljb24ge1xcbiAgd2lkdGg6IDMwcHg7XFxufVxcbi5wcm9qZWN0cy1zZWN0aW9uIHtcXG4gIG1hcmdpbi10b3A6IDQwcHg7XFxufVxcbi5wcm9qZWN0LXNlY3Rpb24taGVhZGVye1xcbiAgZGlzcGxheTpmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLm5ldy1wcm9qZWN0LWJ1dHRvbiB7XFxuICB3aWR0aDogMzBweDtcXG4gIG9wYWNpdHk6IDAuNjtcXG59XFxuXFxuLnByb2plY3RzLXNlY3Rpb24tdGl0bGUge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBmb250LXNpemU6IDEuNWVtO1xcbn1cXG4ucHJvamVjdHMtc2VjdGlvbi1saXN0IHtcXG4gIHBhZGRpbmctbGVmdDogMTBweDtcXG59XFxuLnByb2plY3QtaXRlbSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMTBweDtcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxufVxcbi5jaXJjbGUge1xcbiAgaGVpZ2h0OiAyNXB4O1xcbiAgd2lkdGg6IDI1cHg7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcbi5idXR0b24taWNvbiB7XFxuICB3aWR0aDogMjBweDtcXG59XFxuXFxuLyogdGFzayBlZGl0b3IgKi9cXG4ubW9kYWwge1xcbiAgcGFkZGluZzogMDtcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAuMyk7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4ubW9kYWw6OmJhY2tkcm9wIHtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgLjcpO1xcbn1cXG4uY2xvc2UtbW9kYWwge1xcbiAgLyogcG9zaXRpb246IGFic29sdXRlOyAqL1xcbiAgLyogdG9wOiAycHg7XFxuICByaWdodDogMTBweDsgKi9cXG4gIGdyaWQtY29sdW1uOiAyLzM7XFxuICBmb250LXNpemU6IDJlbTtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgb3BhY2l0eTogLjY7XFxuICBhbGlnbi1zZWxmOiBzdGFydDtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbn1cXG4udGFzay1lZGl0b3Ige1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogOWZyIDFmcjtcXG4gIC8qIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmciAxZnI7ICovXFxuICAvKiBwb3NpdGlvbjogcmVsYXRpdmU7ICovXFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuLmlucHV0LWZpZWxkcyB7XFxuICBncmlkLWNvbHVtbjogMS8yO1xcbiAgZ3JpZC1yb3c6IDEvMjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG4uZXh0cmEtZmllbGRze1xcbiAgZ3JpZC1jb2x1bW46IDEvMjtcXG4gIGdyaWQtcm93OiAyLzM7XFxufVxcbi50YXNrLXRpdGxlLWlucHV0LFxcbi50YXNrLWRlc2NyaXB0aW9uLWlucHV0e1xcbiAgYm9yZGVyOiBub25lO1xcbiAgcGFkZGluZzogMTBweDtcXG59XFxuLnRhc2stZGVzY3JpcHRpb24taW5wdXR7XFxuICBmb250LXNpemU6IC44ZW07XFxuICBoZWlnaHQ6IDdjaDtcXG4gIHJlc2l6ZTogbm9uZTtcXG59XFxuLnBpbGxze1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMTBweDtcXG4gIHBhZGRpbmc6IDZweDtcXG59XFxuLmR1ZS1kYXRlLWJ1dHRvbixcXG4uZm9sZGVyLXNlbGVjdC1idXR0b24ge1xcbiAgcGFkZGluZzogLjVyZW0gLjNyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgLjMpO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGZvbnQtc2l6ZTogLjllbTtcXG4gIHdpZHRoOiAxMDBweDtcXG59XFxuXFxuLmR1ZS1kYXRlLWJ1dHRvbntcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAzcHg7XFxufVxcblxcbi5zdWJtaXQtYnV0dG9uIHtcXG4gIGdyaWQtY29sdW1uOiAyLzM7XFxuICBncmlkLXJvdzogMy80O1xcbiAgd2lkdGg6IDMwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbn1cXG5cXG4uc3VibWl0LWJ1dHRvbi1pY29uIHtcXG4gIHdpZHRoOiAyNXB4O1xcbiAgb3BhY2l0eTogLjY7XFxufVxcblxcbi8qIG5ld1Byb2plY3QgRm9ybSAqL1xcbi5uZXctcHJvamVjdC1mb3JtIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGhlaWdodDogMTAwdmg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNmMGYwZjA7XFxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxNXB4O1xcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDE1cHg7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgb3BhY2l0eTogMTtcXG4gIHRyYW5zaXRpb246IGFsbCA0MDBtcyBlYXNlO1xcbn1cXG4uY2xvc2UtcHJvamVjdC1mb3Jte1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xcbiAgb3BhY2l0eTogMDtcXG59XFxuLm5ldy1wcm9qZWN0LWZvcm0taGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4ubmV3LXByb2plY3QtZm9ybS1oMyB7XFxuICBtYXJnaW4tbGVmdDogMzBweDtcXG4gIGZvbnQtc2l6ZTogMS41ZW07XFxufVxcbi5uZXctcHJvamVjdC1mb3JtLXNhdmUge1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxufVxcbi5uZXctcHJvamVjdC1mb3JtLWJhY2ssXFxuLm5ldy1wcm9qZWN0LWZvcm0tc2F2ZSB7XFxuICB3aWR0aDogMzBweDtcXG4gIG9wYWNpdHk6IDAuNjtcXG59XFxuXFxuLmZvcm0tZ3JvdXAge1xcbiAgbWFyZ2luLXRvcDogMzBweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHBhZGRpbmc6MTBweDtcXG4gIGJvcmRlcjogM3B4IHNvbGlkIHJnYmEoMjU1LCAyLCAyLCAwLjgpO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgLyogbWFyZ2luOiAxMHB4OyAqL1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgb3BhY2l0eTogLjY7XFxufVxcbi5mb3JtLWdyb3VwPmxhYmVsIHtcXG4gIHBvc2l0aW9uOmFic29sdXRlO1xcbiAgdG9wOiAtMTRweDtcXG4gIGxlZnQ6IDIwcHg7IFxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBmb250LXNpemU6IDEuMmVtO1xcbn1cXG4uZm9ybS1ncm91cD5pbnB1dCxcXG4uZm9ybS1ncm91cD5pbnB1dDphY3RpdmUge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIHdpZHRoOiA5MCU7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgZm9udC1zaXplOiAxLjVlbTtcXG59XFxuLmNvbG9yLWZvcm0tZ3JvdXB7XFxuICBtYXJnaW4tdG9wOiAzMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMzBweDtcXG59XFxuLmNvbG9yLWxhYmVsLWFuZC1uYW1lIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiA1cHg7XFxufVxcbi5jb2xvci1pY29uIHtcXG4gIHdpZHRoOiAzNXB4O1xcbn1cXG4uc2VsZWN0ZWQtY29sb3ItbGFiZWwge1xcbiAgZm9udC1zaXplOiAxLjNlbTtcXG59XFxuLnNlbGVjdGVkLXByb2plY3QtY29sb3Ige1xcbiAgZm9udC1zaXplOiAxZW07XFxufVxcblxcbi8qIGNvbG9yIGZpbHRlcnMgKi9cXG4uY2hhcmNvYWwge1xcbiAgZmlsdGVyOiBpbnZlcnQoMjMlKSBzZXBpYSg4JSkgc2F0dXJhdGUoMTUzMCUpIGh1ZS1yb3RhdGUoMTYxZGVnKSBicmlnaHRuZXNzKDk3JSkgY29udHJhc3QoODclKTtcXG59XFxuXFxuLnJlZCB7XFxuICBmaWx0ZXI6IGludmVydCgxNSUpIHNlcGlhKDkwJSkgc2F0dXJhdGUoNjQ0OSUpIGh1ZS1yb3RhdGUoMzU5ZGVnKSBicmlnaHRuZXNzKDEwOCUpIGNvbnRyYXN0KDExNCUpO1xcbn1cXG5cXG4vKiBjb2xvciBjaG9pY2VzIGNvbnRhaW5lciAqL1xcbi5jb2xvci1jaG9pY2VzLWNvbnRhaW5lciB7XFxuICBvdmVyZmxvdzogc2Nyb2xsO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgaGVpZ2h0OiA5MHZoO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZjBmMGYwO1xcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTVweDtcXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxNXB4O1xcbiAgcGFkZGluZzogMjBweDtcXG4gIG9wYWNpdHk6IDE7XFxuICB0cmFuc2l0aW9uOiBhbGwgNDAwbXMgZWFzZTtcXG59XFxuLmNsb3NlLWNvbG9yLWNob2ljZXN7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwJSk7XFxuICBvcGFjaXR5OiAwO1xcbn1cXG5cXG4uZGVmYXVsdC1jb2xvcntcXG4gIGZpbHRlcjogaW52ZXJ0KDIzJSkgc2VwaWEoOCUpIHNhdHVyYXRlKDE1MzAlKSBodWUtcm90YXRlKDE2MWRlZykgYnJpZ2h0bmVzcyg5NyUpIGNvbnRyYXN0KDg3JSk7XFxufVxcblxcbi8qIGZvbnRzICovXFxuXFxuLyogbW9iaWxlIHN0eWxlcyAqL1xcblxcblxcbi8qIHNtYWxsIHRhYmxldCBzdHlsZXMgKi9cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MjBweCkge1xcbiAgXFxufVxcblxcbi8qIGxhcmdlIHRhYmxldHMgJiBsYXB0b3Agc3R5bGVzICovXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTYwcHgpIHtcXG4gIFxcbn1cXG5cXG4vKiBkZXNrdG9wIHN0eWxlcyAqL1xcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweCkge1xcbiAgXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZnVuY3Rpb24gbmV3VG9kbyh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSB7XG4gIHJldHVybiB7XG4gICAgdGl0bGU6IHRpdGxlLFxuICAgIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbixcbiAgICBkdWVEYXRlOiBkdWVEYXRlLFxuICAgIHByaW9yaXR5OiBwcmlvcml0eSxcbiAgICBjb21wbGV0ZTogZmFsc2UsXG4gIH07XG59O1xuXG5mdW5jdGlvbiBuZXdQcm9qZWN0KCkge1xuICByZXR1cm4ge1xuICAgIGxlbmd0aDogMCxcbiAgICBhZGRFbGVtOiBmdW5jdGlvbiBhZGRFbGVtKCkge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgW10ucHVzaC5jYWxsKHRoaXMsIGFyZ3VtZW50c1tpXSk7XG4gICAgICB9XG4gICAgfSxcbiAgICByZW1vdmVFbGVtOiBmdW5jdGlvbiByZW1vdmVFbGVtKCkge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgW10uc3BsaWNlLmNhbGwodGhpcywgYXJndW1lbnRzW2ldLCAxKVxuICAgICAgfVxuICAgIH0sXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IFByb2plY3RzID0gbmV3UHJvamVjdCgpOyIsImltcG9ydCBIYXBweU5ld3MgZnJvbSAnLi9pbmJveC5zdmcnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzaG93SW5kZXgoKSB7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyJyk7XG4gIGNvbnN0IG1lbnVCYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudS1iYXInKTtcbiAgXG4gIGNvbnN0IHNlY3Rpb25OYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgc2VjdGlvbk5hbWUudGV4dENvbnRlbnQgPSAnSW5ib3gnO1xuICBoZWFkZXIuYXBwZW5kQ2hpbGQoc2VjdGlvbk5hbWUpO1xuXG4gIGNvbnN0IGtlYmFiTWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBrZWJhYk1lbnUuY2xhc3NMaXN0LmFkZCgndGVzdCcpO1xuICBoZWFkZXIuYXBwZW5kQ2hpbGQoa2ViYWJNZW51KTtcblxuICBjb25zdCBzZWN0aW9uQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBzZWN0aW9uQ29udGVudC5jbGFzc0xpc3QuYWRkKCdzZWN0aW9uLWNvbnRlbnQnKTtcbiAgY29udGVudC5pbnNlcnRCZWZvcmUoc2VjdGlvbkNvbnRlbnQsIG1lbnVCYXIpO1xuXG4gIGNvbnN0IGluYm94SW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIGluYm94SW1nLmNsYXNzTGlzdC5hZGQoJ3NlY3Rpb24taW1hZ2UnKTtcbiAgaW5ib3hJbWcuc3JjID0gSGFwcHlOZXdzO1xuICBzZWN0aW9uQ29udGVudC5hcHBlbmRDaGlsZChpbmJveEltZyk7XG5cbiAgY29uc3Qgc2VjdGlvbkNvbnRlbnRJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHNlY3Rpb25Db250ZW50SW5mby5jbGFzc0xpc3QuYWRkKCdzZWN0aW9uLWNvbnRlbnQtaW5mbycpO1xuICBzZWN0aW9uQ29udGVudC5hcHBlbmRDaGlsZChzZWN0aW9uQ29udGVudEluZm8pO1xuICBjb25zdCBzdGF0dXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIHN0YXR1cy5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ3doaXRlLXNwYWNlOiBwcmU7Jyk7XG4gIHN0YXR1cy50ZXh0Q29udGVudCA9IFwiQWxsIGNsZWFyXCI7XG4gIHNlY3Rpb25Db250ZW50SW5mby5hcHBlbmRDaGlsZChzdGF0dXMpO1xuICBjb25zdCBwYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAvLyBwYXJhLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnd2hpdGUtc3BhY2U6IHByZTsnKTtcbiAgcGFyYS50ZXh0Q29udGVudCA9IFwiTG9va3MgbGlrZSBldmVyeXRoaW5nJ3Mgb3JnYW5pemVkIGluIHRoZSByaWdodCBwbGFjZS4gXFxuIFRhcCArIHRvIGFkZCBhIHRhc2tcIjtcbiAgc2VjdGlvbkNvbnRlbnRJbmZvLmFwcGVuZENoaWxkKHBhcmEpO1xufSIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHNob3dUb2RheSBmcm9tICcuL3RvZGF5L3RvZGF5UGFnZSc7XG5pbXBvcnQgSGFtYnVyZ2VyTWVudSBmcm9tICcuL2Fzc2V0cy9pY29ucy9IYW1idXJnZXJfaWNvbi5zdmcnO1xuaW1wb3J0IE1hZ25pZnlpbmdHbGFzcyBmcm9tICcuL2Fzc2V0cy9pY29ucy9tYWduaWZ5aW5nLWdsYXNzLnN2Zyc7XG5pbXBvcnQgQmVsbCBmcm9tICcuL2Fzc2V0cy9pY29ucy9iZWxsLnN2Zyc7XG5pbXBvcnQgc2hvd0luZGV4IGZyb20gJy4vaW5ib3gvaW5ib3gnO1xuaW1wb3J0IHNob3dNZW51IGZyb20gJy4vcG9wVXBNZW51L21lbnUnO1xuaW1wb3J0IHNob3dUYXNrRWRpdG9yIGZyb20gJy4vdGFzayBlZGl0b3IvdGFza0VkaXRvcic7XG5pbXBvcnQgc2hvd05ld1Byb2plY3RGb3JtIGZyb20gJy4vbmV3UHJvamVjdEZvcm0vbmV3UHJvamVjdEZvcm0nO1xuaW1wb3J0IHNob3dDb2xvckNob2ljZXMgZnJvbSAnLi9wcm9qZWN0Q29sb3JzL3Byb2plY3RDb2xvcnMnO1xuaW1wb3J0IHsgUHJvamVjdHMgfSBmcm9tICcuL2FwcGxpY2F0aW9uIGxvZ2ljL2FwcGxpY2F0aW9uTG9naWMnO1xuXG5cbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xuY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5oZWFkZXIuY2xhc3NMaXN0LmFkZCgnaGVhZGVyJyk7XG5jb250ZW50LmFwcGVuZENoaWxkKGhlYWRlcik7XG5jb25zdCBzZWN0aW9uTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2gzJyk7XG5jb25zdCBrZWJhYk1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGVzdCcpO1xuY29uc3Qgc2VjdGlvbkNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VjdGlvbi1jb250ZW50Jyk7XG5cbmNvbnN0IG1lbnVCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbm1lbnVCYXIuY2xhc3NMaXN0LmFkZCgnbWVudS1iYXInKTtcbmNvbnRlbnQuYXBwZW5kQ2hpbGQobWVudUJhcik7XG5cbmNvbnN0IGhhbWJ1cmdlck1lbnVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuaGFtYnVyZ2VyTWVudUJ1dHRvbi5zcmMgPSBIYW1idXJnZXJNZW51O1xuaGFtYnVyZ2VyTWVudUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdoYW1idXJnZXItbWVudS1pbWcnKTtcbm1lbnVCYXIuYXBwZW5kQ2hpbGQoaGFtYnVyZ2VyTWVudUJ1dHRvbik7XG5cbmNvbnN0IGFkZFRhc2tCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbmFkZFRhc2tCdG4uY2xhc3NMaXN0LmFkZCgnYWRkLXRhc2stYnV0dG9uJyk7XG5hZGRUYXNrQnRuLnR5cGUgPSAnYnV0dG9uJztcbmFkZFRhc2tCdG4udGV4dENvbnRlbnQgPSAnKyc7XG5tZW51QmFyLmFwcGVuZENoaWxkKGFkZFRhc2tCdG4pO1xuXG5jb25zdCBzZWFyY2hCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbnNlYXJjaEJ0bi5jbGFzc0xpc3QuYWRkKCdzZWFyY2gtYnV0dG9uJyk7XG5zZWFyY2hCdG4uc3JjID0gTWFnbmlmeWluZ0dsYXNzO1xubWVudUJhci5hcHBlbmRDaGlsZChzZWFyY2hCdG4pO1xuXG5jb25zdCBub3RpZmljYXRpb25zQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG5ub3RpZmljYXRpb25zQnRuLmNsYXNzTGlzdC5hZGQoJ25vdGlmaWNhdGlvbnMtYnV0dG9uJyk7XG5ub3RpZmljYXRpb25zQnRuLnNyYyA9IEJlbGw7XG5tZW51QmFyLmFwcGVuZENoaWxkKG5vdGlmaWNhdGlvbnNCdG4pO1xuXG5leHBvcnQgY29uc3QgYXJyYXlPZlByb2plY3RUaXRsZXMgPSBbJ1dlbGNvbWUnLCAnVHJ5IEJvYXJkcycsICdPcmdhbml6ZSB5b3VyIGxpZmUnXTtcbmV4cG9ydCBjb25zdCBmb2xkZXJzID0gWydJbmJveCcsICdUb2RheScsIC4uLmFycmF5T2ZQcm9qZWN0VGl0bGVzXTtcbi8vIHNob3dUb2RheSgpO1xuc2hvd0luZGV4KCk7XG5zaG93TWVudSgpO1xuc2hvd1Rhc2tFZGl0b3IoKTtcbnNob3dOZXdQcm9qZWN0Rm9ybSgpO1xuc2hvd0NvbG9yQ2hvaWNlcygpO1xuXG5jb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbCcpO1xuY29uc3QgY2xvc2VNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZS1tb2RhbCcpO1xuXG5jb25zdCBtZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwLW1lbnUnKTtcbmhhbWJ1cmdlck1lbnVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIG1lbnUuY2xhc3NMaXN0LnRvZ2dsZSgnY2xvc2UnKTtcbn0pO1xuXG5jb25zdCBjbG9zZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZS1idXR0b24nKTtcbmNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBtZW51LmNsYXNzTGlzdC50b2dnbGUoJ2Nsb3NlJyk7XG59KTtcblxuY29uc3QgbmV3UHJvamVjdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXctcHJvamVjdC1idXR0b24nKTtcbmNvbnN0IG5ld1Byb2plY3RGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ldy1wcm9qZWN0LWZvcm0nKTtcbmNvbnN0IGJhY2tCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3LXByb2plY3QtZm9ybS1iYWNrJyk7XG5jb25zdCBuZXdQcm9qZWN0U2F2ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXctcHJvamVjdC1mb3JtLXNhdmUnKTtcbm5ld1Byb2plY3RTYXZlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBQcm9qZWN0cy5hZGRFbGVtKHtuYW1lOiBuZXdQcm9qZWN0TmFtZUlucHV0LnZhbHVlLCBjb2xvcjogc2VsZWN0ZWRQcm9qZWN0Q29sb3IudGV4dENvbnRlbnR9KVxuICBjb25zb2xlLmxvZyhQcm9qZWN0cyk7XG4gIGNsZWFyTmV3UHJvamVjdEZvcm0oKTtcbn0pXG5cbm5ld1Byb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIG1lbnUuY2xhc3NMaXN0LnRvZ2dsZSgnY2xvc2UnKTtcbiAgbmV3UHJvamVjdEZvcm0uY2xhc3NMaXN0LnRvZ2dsZSgnY2xvc2UtcHJvamVjdC1mb3JtJyk7XG59KVxuXG5jb25zdCBuZXdQcm9qZWN0TmFtZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ldy1wcm9qZWN0LW5hbWUtaW5wdXQnKTtcbmNvbnN0IG1haW5Db2xvckljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1jb2xvci1pY29uJyk7XG5jb25zdCBzZWxlY3RlZFByb2plY3RDb2xvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWxlY3RlZC1wcm9qZWN0LWNvbG9yJyk7XG5iYWNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBjbGVhck5ld1Byb2plY3RGb3JtKCk7XG59KVxuXG5mdW5jdGlvbiBjbGVhck5ld1Byb2plY3RGb3JtKCkge1xuICBuZXdQcm9qZWN0Rm9ybS5jbGFzc0xpc3QudG9nZ2xlKCdjbG9zZS1wcm9qZWN0LWZvcm0nKTtcbiAgbmV3UHJvamVjdE5hbWVJbnB1dC52YWx1ZSA9ICcnO1xuICBtYWluQ29sb3JJY29uLnN0eWxlLmZpbHRlciA9ICd1bnNldCc7XG4gIG1haW5Db2xvckljb24uY2xhc3NMaXN0LmFkZCgnZGVmYXVsdC1jb2xvcicpO1xuICBzZWxlY3RlZFByb2plY3RDb2xvci50ZXh0Q29udGVudCA9ICdDaGFyY29hbCc7XG59XG5cbmNvbnN0IHNlY3Rpb25MaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tZW51LXNlY3Rpb25zLWxpc3Q+bGknKTtcbnNlY3Rpb25MaW5rc1swXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgbWVudS5jbGFzc0xpc3QudG9nZ2xlKCdjbG9zZScpO1xuICByZW1vdmVGcm9tRE9NKCk7XG4gIHNob3dJbmRleCgpO1xufSk7XG5cbnNlY3Rpb25MaW5rc1sxXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgbWVudS5jbGFzc0xpc3QudG9nZ2xlKCdjbG9zZScpO1xuICByZW1vdmVGcm9tRE9NKCk7XG4gIHNob3dUb2RheSgpOyAgXG59KTtcblxuZnVuY3Rpb24gcmVtb3ZlRnJvbURPTSgpIHtcbiAgaGVhZGVyLmNoaWxkTm9kZXNbMF0ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChoZWFkZXIuY2hpbGROb2Rlc1swXSk7XG4gIGhlYWRlci5jaGlsZE5vZGVzWzBdLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoaGVhZGVyLmNoaWxkTm9kZXNbMF0pO1xuICBjb250ZW50LmNoaWxkTm9kZXNbMV0ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChjb250ZW50LmNoaWxkTm9kZXNbMV0pO1xufVxuXG5hZGRUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBtb2RhbC5zaG93TW9kYWwoKTtcbn0pXG5cbi8vIGNsb3NlTW9kYWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4vLyAgIG1vZGFsLmNsb3NlKCk7XG4vLyB9KVxuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuIGlmIChlLnRhcmdldC50YWdOYW1lICE9PSAnRElBTE9HJykgcmV0dXJuXG4gbW9kYWwuY2xvc2UoKTtcbn0pXG5cblxuLy8gY29uc3Qgc3VibWl0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN1Ym1pdC1idXR0b24nKTtcbi8vIHN1Ym1pdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgXG4vLyB9KVxuXG5jb25zdCBjb2xvckZvcm1Hcm91cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb2xvci1mb3JtLWdyb3VwJyk7XG5jb25zdCBjb2xvckNob2ljZXNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29sb3ItY2hvaWNlcy1jb250YWluZXInKTtcbmNvbG9yRm9ybUdyb3VwLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBjb2xvckNob2ljZXNDb250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZSgnY2xvc2UtY29sb3ItY2hvaWNlcycpO1xufSlcbiIsImltcG9ydCBBcnJvdyBmcm9tICcuL2Fycm93LWxlZnQtc29saWQuc3ZnJztcbmltcG9ydCBDaGVjayBmcm9tICcuL2NoZWNrLXNvbGlkLnN2Zyc7XG5pbXBvcnQgTGlzdEFsdCBmcm9tICcuL2xpc3QtYWx0LnN2Zyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNob3dOZXdQcm9qZWN0Rm9ybSgpIHtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XG4gIGNvbnN0IG5ld1Byb2plY3RGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICBuZXdQcm9qZWN0Rm9ybS5jbGFzc0xpc3QuYWRkKCduZXctcHJvamVjdC1mb3JtJyk7XG4gIG5ld1Byb2plY3RGb3JtLmNsYXNzTGlzdC5hZGQoJ2Nsb3NlLXByb2plY3QtZm9ybScpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKG5ld1Byb2plY3RGb3JtKTtcblxuICBjb25zdCBuZXdQcm9qZWN0Rm9ybUhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBuZXdQcm9qZWN0Rm9ybUhlYWRlci5jbGFzc0xpc3QuYWRkKCduZXctcHJvamVjdC1mb3JtLWhlYWRlcicpO1xuICBuZXdQcm9qZWN0Rm9ybS5hcHBlbmRDaGlsZChuZXdQcm9qZWN0Rm9ybUhlYWRlcik7XG5cbiAgY29uc3QgYmFja0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBiYWNrQnRuLnNyYyA9IEFycm93O1xuICBiYWNrQnRuLmNsYXNzTGlzdC5hZGQoJ25ldy1wcm9qZWN0LWZvcm0tYmFjaycpO1xuICBuZXdQcm9qZWN0Rm9ybUhlYWRlci5hcHBlbmRDaGlsZChiYWNrQnRuKTtcblxuICBjb25zdCBuZXdQcm9qZWN0Rm9ybUgzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgbmV3UHJvamVjdEZvcm1IMy5jbGFzc0xpc3QuYWRkKCduZXctcHJvamVjdC1mb3JtLWgzJyk7XG4gIG5ld1Byb2plY3RGb3JtSDMudGV4dENvbnRlbnQgPSAnQWRkIHByb2plY3QnO1xuICBuZXdQcm9qZWN0Rm9ybUhlYWRlci5hcHBlbmRDaGlsZChuZXdQcm9qZWN0Rm9ybUgzKTtcblxuICBjb25zdCBuZXdQcm9qZWN0Rm9ybVNhdmVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgbmV3UHJvamVjdEZvcm1TYXZlQnRuLnNyYyA9IENoZWNrO1xuICBuZXdQcm9qZWN0Rm9ybVNhdmVCdG4uY2xhc3NMaXN0LmFkZCgnbmV3LXByb2plY3QtZm9ybS1zYXZlJyk7XG4gIG5ld1Byb2plY3RGb3JtSGVhZGVyLmFwcGVuZENoaWxkKG5ld1Byb2plY3RGb3JtU2F2ZUJ0bik7XG5cbiAgY29uc3QgZm9ybUdyb3VwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGZvcm1Hcm91cC5jbGFzc0xpc3QuYWRkKCdmb3JtLWdyb3VwJyk7XG4gIG5ld1Byb2plY3RGb3JtLmFwcGVuZENoaWxkKGZvcm1Hcm91cCk7XG5cbiAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICBsYWJlbC5mb3IgPSAncHJvamVjdE5hbWUnO1xuICBsYWJlbC50ZXh0Q29udGVudCA9ICdOYW1lJztcbiAgbGFiZWwuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1uYW1lLWxhYmVsJyk7XG4gIGZvcm1Hcm91cC5hcHBlbmRDaGlsZChsYWJlbCk7XG5cblxuICBjb25zdCBuZXdQcm9qZWN0TmFtZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgbmV3UHJvamVjdE5hbWVJbnB1dC50eXBlID0gJ3RleHQnO1xuICBuZXdQcm9qZWN0TmFtZUlucHV0LmlkID0gJ3Byb2plY3ROYW1lJztcbiAgbmV3UHJvamVjdE5hbWVJbnB1dC5jbGFzc0xpc3QuYWRkKCduZXctcHJvamVjdC1uYW1lLWlucHV0Jyk7XG4gIG5ld1Byb2plY3ROYW1lSW5wdXQubmFtZSA9ICduYW1lJztcbiAgZm9ybUdyb3VwLmFwcGVuZENoaWxkKG5ld1Byb2plY3ROYW1lSW5wdXQpO1xuXG4gIGNvbnN0IGNvbG9yRm9ybUdyb3VwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbG9yRm9ybUdyb3VwLmNsYXNzTGlzdC5hZGQoJ2NvbG9yLWZvcm0tZ3JvdXAnKTtcbiAgbmV3UHJvamVjdEZvcm0uYXBwZW5kQ2hpbGQoY29sb3JGb3JtR3JvdXApO1xuXG4gIGNvbnN0IG1haW5Db2xvckljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgbWFpbkNvbG9ySWNvbi5zcmMgPSBMaXN0QWx0O1xuICBtYWluQ29sb3JJY29uLmNsYXNzTGlzdC5hZGQoJ2NvbG9yLWljb24nKTtcbiAgbWFpbkNvbG9ySWNvbi5jbGFzc0xpc3QuYWRkKCdtYWluLWNvbG9yLWljb24nKTtcbiAgbWFpbkNvbG9ySWNvbi5jbGFzc0xpc3QuYWRkKCdkZWZhdWx0LWNvbG9yJyk7XG4gIGNvbG9yRm9ybUdyb3VwLmFwcGVuZENoaWxkKG1haW5Db2xvckljb24pO1xuXG4gIGNvbnN0IGNvbG9yTGFiZWxBbmROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbG9yTGFiZWxBbmROYW1lLmNsYXNzTGlzdC5hZGQoJ2NvbG9yLWxhYmVsLWFuZC1uYW1lJylcbiAgY29sb3JGb3JtR3JvdXAuYXBwZW5kQ2hpbGQoY29sb3JMYWJlbEFuZE5hbWUpO1xuXG4gIC8vIGNvbG9yTGFiZWxBbmROYW1lLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAvLyAgIGNvbG9ySWNvbi5jbGFzc0xpc3QucmVtb3ZlKGNvbG9ySWNvbi5jbGFzc0xpc3RbMV0pO1xuICAvLyAgIGNvbG9ySWNvbi5jbGFzc0xpc3QuYWRkKCdyb3N1Jyk7XG4gIC8vIH0pXG5cbiAgY29uc3Qgc2VsZWN0ZWRDb2xvckxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBzZWxlY3RlZENvbG9yTGFiZWwuY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQtY29sb3ItbGFiZWwnKTtcbiAgc2VsZWN0ZWRDb2xvckxhYmVsLnRleHRDb250ZW50ID0gJ0NvbG9yJztcbiAgY29sb3JMYWJlbEFuZE5hbWUuYXBwZW5kQ2hpbGQoc2VsZWN0ZWRDb2xvckxhYmVsKTtcblxuICBjb25zdCBzZWxlY3RlZFByb2plY3RDb2xvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgc2VsZWN0ZWRQcm9qZWN0Q29sb3IuY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQtcHJvamVjdC1jb2xvcicpO1xuICBzZWxlY3RlZFByb2plY3RDb2xvci50ZXh0Q29udGVudCA9ICdDaGFyY29hbCc7XG4gIGNvbG9yTGFiZWxBbmROYW1lLmFwcGVuZENoaWxkKHNlbGVjdGVkUHJvamVjdENvbG9yKTtcbn0iLCJpbXBvcnQgVHJheSBmcm9tICcuL3RyYXkuc3ZnJztcbmltcG9ydCBDYWxlbmRhciBmcm9tICcuL2NhbGVuZGFyLnN2Zyc7XG5pbXBvcnQgQ2xvc2UgZnJvbSAnLi94LnN2ZydcbmltcG9ydCB7IGFycmF5T2ZQcm9qZWN0VGl0bGVzIH0gZnJvbSAnLi4nO1xuaW1wb3J0IFBsdXNDaXJjbGUgZnJvbSAnLi9wbHVzLWNpcmNsZS1zb2xpZC5zdmcnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzaG93TWVudSgpIHtcbiBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcbiBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2Jyk7XG4gbWVudS5jbGFzc0xpc3QuYWRkKCdwb3B1cC1tZW51Jyk7XG4gbWVudS5jbGFzc0xpc3QuYWRkKCdjbG9zZScpO1xuIG1lbnUucm9sZSA9ICduYXZpZ2F0aW9uJztcbiBjb250ZW50LmFwcGVuZENoaWxkKG1lbnUpO1xuXG4gY29uc3QgY2xvc2VCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiBjbG9zZUJ0bi5zcmMgPSBDbG9zZTtcbiBjbG9zZUJ0bi5jbGFzc0xpc3QuYWRkKCdjbG9zZS1idXR0b24nKTtcbiBtZW51LmFwcGVuZENoaWxkKGNsb3NlQnRuKTtcblxuIGNvbnN0IG1lbnVTZWN0aW9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuIG1lbnVTZWN0aW9ucy5jbGFzc0xpc3QuYWRkKCdtZW51LXNlY3Rpb25zJyk7XG4gbWVudS5hcHBlbmRDaGlsZChtZW51U2VjdGlvbnMpO1xuXG4gY29uc3QgbWVudVNlY3Rpb25zTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gbWVudVNlY3Rpb25zTGlzdC5jbGFzc0xpc3QuYWRkKCdtZW51LXNlY3Rpb25zLWxpc3QnKTtcbiBjb25zdCBpbmJveEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuIFxuIGNvbnN0IHRvZGF5SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gXG4gbWVudVNlY3Rpb25zLmFwcGVuZENoaWxkKG1lbnVTZWN0aW9uc0xpc3QpO1xuIG1lbnVTZWN0aW9uc0xpc3QuYXBwZW5kQ2hpbGQoaW5ib3hJdGVtKTtcbiBtZW51U2VjdGlvbnNMaXN0LmFwcGVuZENoaWxkKHRvZGF5SXRlbSk7XG5cbiBjb25zdCBpbmJveEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiBpbmJveEljb24uc3JjID0gVHJheTtcbiBpbmJveEl0ZW0uYXBwZW5kQ2hpbGQoaW5ib3hJY29uKTtcbiBpbmJveEljb24uY2xhc3NMaXN0LmFkZCgnc2VjdGlvbi1pY29uJyk7XG5cbiBjb25zdCB0b2RheUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiB0b2RheUljb24uc3JjID0gQ2FsZW5kYXI7XG4gdG9kYXlJdGVtLmFwcGVuZENoaWxkKHRvZGF5SWNvbik7XG4gdG9kYXlJY29uLmNsYXNzTGlzdC5hZGQoJ3NlY3Rpb24taWNvbicpO1xuXG4gY29uc3QgaW5ib3hTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuIGNvbnN0IHRvZGF5U3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiBpbmJveFNwYW4udGV4dENvbnRlbnQgPSAnSW5ib3gnO1xuIHRvZGF5U3Bhbi50ZXh0Q29udGVudCA9ICdUb2RheSc7XG4gaW5ib3hJdGVtLmFwcGVuZENoaWxkKGluYm94U3Bhbik7XG4gdG9kYXlJdGVtLmFwcGVuZENoaWxkKHRvZGF5U3Bhbik7XG5cbiBjb25zdCBwcm9qZWN0c1NlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiBwcm9qZWN0c1NlY3Rpb24uY2xhc3NMaXN0LmFkZCgncHJvamVjdHMtc2VjdGlvbicpO1xuIG1lbnUuYXBwZW5kQ2hpbGQocHJvamVjdHNTZWN0aW9uKTtcblxuIGNvbnN0IHByb2plY3RzU2VjdGlvbkhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuIHByb2plY3RzU2VjdGlvbkhlYWRlci5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LXNlY3Rpb24taGVhZGVyJyk7XG4gcHJvamVjdHNTZWN0aW9uLmFwcGVuZENoaWxkKHByb2plY3RzU2VjdGlvbkhlYWRlcik7XG5cbiBjb25zdCBwcm9qZWN0c1NlY3Rpb25UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiBwcm9qZWN0c1NlY3Rpb25UaXRsZS50ZXh0Q29udGVudCA9ICdQcm9qZWN0cyc7XG4gcHJvamVjdHNTZWN0aW9uVGl0bGUuY2xhc3NMaXN0LmFkZCgncHJvamVjdHMtc2VjdGlvbi10aXRsZScpO1xuIHByb2plY3RzU2VjdGlvbkhlYWRlci5hcHBlbmRDaGlsZChwcm9qZWN0c1NlY3Rpb25UaXRsZSk7XG5cbiBjb25zdCBuZXdQcm9qZWN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gbmV3UHJvamVjdEJ0bi5zcmMgPSBQbHVzQ2lyY2xlO1xuIG5ld1Byb2plY3RCdG4uY2xhc3NMaXN0LmFkZCgnbmV3LXByb2plY3QtYnV0dG9uJyk7XG4gcHJvamVjdHNTZWN0aW9uSGVhZGVyLmFwcGVuZENoaWxkKG5ld1Byb2plY3RCdG4pO1xuXG4gY29uc3QgcHJvamVjdHNTZWN0aW9uTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gcHJvamVjdHNTZWN0aW9uTGlzdC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0cy1zZWN0aW9uLWxpc3QnKTtcbiBwcm9qZWN0c1NlY3Rpb24uYXBwZW5kQ2hpbGQocHJvamVjdHNTZWN0aW9uTGlzdCk7XG5cbi8vICBjb25zdCBhcnJheU9mUHJvamVjdFRpdGxlcyA9IFsnV2VsY29tZScsICdUcnkgQm9hcmRzJywgJ09yZ2FuaXplIHlvdXIgbGlmZSddO1xuIGFycmF5T2ZQcm9qZWN0VGl0bGVzLmZvckVhY2godGl0bGUgPT4ge1xuICAgY29uc3QgcHJvamVjdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgcHJvamVjdEl0ZW0uY2xhc3NMaXN0LmFkZCgncHJvamVjdC1pdGVtJyk7XG4gICBwcm9qZWN0c1NlY3Rpb25MaXN0LmFwcGVuZENoaWxkKHByb2plY3RJdGVtKTtcbiAgIGNvbnN0IHByb2plY3RTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgcHJvamVjdFNwYW4udGV4dENvbnRlbnQgPSB0aXRsZTtcbiAgIHByb2plY3RTcGFuLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3Qtc3BhbicpO1xuICAgcHJvamVjdEl0ZW0uYXBwZW5kQ2hpbGQocHJvamVjdFNwYW4pO1xuIH0pO1xuXG4gY29uc3QgcHJvamVjdEl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3RzLXNlY3Rpb24tbGlzdCBsaScpO1xuIHByb2plY3RJdGVtcy5mb3JFYWNoKHByb2plY3RJdGVtID0+IHtcbiAgIGNvbnN0IGNpcmNsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgIGNpcmNsZS5jbGFzc0xpc3QuYWRkKCdjaXJjbGUnKTtcbiAgIHByb2plY3RJdGVtLmluc2VydEJlZm9yZShjaXJjbGUsIHByb2plY3RJdGVtLmZpcnN0Q2hpbGQpO1xuICAgY2lyY2xlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGAke2dldENvbG9yKCl9YDtcbiB9KVxuIFxuIGZ1bmN0aW9uIGdldENvbG9yKCkge1xuICByZXR1cm4gXCJoc2xhKFwiICsgfn4oMzYwICogTWF0aC5yYW5kb20oKSkgKyBcIixcIiArXG4gIFwiNzAlLFwiK1xuICBcIjgwJSwxKVwiXG4gfVxuXG59XG4gIFxuXG4iLCJpbXBvcnQgTGlzdEFsdCBmcm9tICcuL2xpc3QtYWx0LnN2Zyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNob3dDb2xvckNob2ljZXMoKSB7XG4gIGNvbnN0IG1haW5Db2xvckljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1jb2xvci1pY29uJyk7XG4gIGNvbnN0IHNlbGVjdGVkUHJvamVjdENvbG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlbGVjdGVkLXByb2plY3QtY29sb3InKTtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XG4gIGNvbnN0IGNvbG9yQ2hvaWNlc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb2xvckNob2ljZXNDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29sb3ItY2hvaWNlcy1jb250YWluZXInKTtcbiAgY29sb3JDaG9pY2VzQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Nsb3NlLWNvbG9yLWNob2ljZXMnKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChjb2xvckNob2ljZXNDb250YWluZXIpO1xuXG4gIGNvbnN0IGgzVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICBoM1RpdGxlLnRleHRDb250ZW50ID0gJ0NvbG9yJztcbiAgY29sb3JDaG9pY2VzQ29udGFpbmVyLmFwcGVuZENoaWxkKGgzVGl0bGUpO1xuXG4gIGNvbnN0IGNvbG9yQ2hvaWNlc0xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICBjb2xvckNob2ljZXNMaXN0LmNsYXNzTGlzdC5hZGQoJ2NvbG9yLWNob2ljZXMtbGlzdCcpO1xuICBjb2xvckNob2ljZXNDb250YWluZXIuYXBwZW5kQ2hpbGQoY29sb3JDaG9pY2VzTGlzdCk7XG5cbiAgY29uc3QgY29sb3JOYW1lc0FuZEZpbHRlcnMgPSBbXG4gICAgWydCZXJyeSByZWQnLCAnaW52ZXJ0KDE2JSkgc2VwaWEoMTclKSBzYXR1cmF0ZSg2MDExJSkgaHVlLXJvdGF0ZSgzMjZkZWcpIGJyaWdodG5lc3MoOTQlKSBjb250cmFzdCg5NSUpJ10sXG4gICAgWydSZWQnLCAnaW52ZXJ0KDE1JSkgc2VwaWEoOTAlKSBzYXR1cmF0ZSg2NDQ5JSkgaHVlLXJvdGF0ZSgzNTlkZWcpIGJyaWdodG5lc3MoMTA4JSkgY29udHJhc3QoMTE0JSknXSxcbiAgICBbJ09yYW5nZScsICdpbnZlcnQoNjIlKSBzZXBpYSg1MiUpIHNhdHVyYXRlKDE3OTAlKSBodWUtcm90YXRlKDBkZWcpIGJyaWdodG5lc3MoMTAzJSkgY29udHJhc3QoMTA0JSknXSxcbiAgICBbJ1llbGxvdycsICdpbnZlcnQoODUlKSBzZXBpYSg4NSUpIHNhdHVyYXRlKDEzMjIlKSBodWUtcm90YXRlKDM1NWRlZykgYnJpZ2h0bmVzcygxMDMlKSBjb250cmFzdCgxMDclKSddLFxuICAgIFsnT2xpdmUgZ3JlZW4nLCAnaW52ZXJ0KDM2JSkgc2VwaWEoMTAwJSkgc2F0dXJhdGUoMTA2MyUpIGh1ZS1yb3RhdGUoNDBkZWcpIGJyaWdodG5lc3MoOTIlKSBjb250cmFzdCgxMDUlKSddLFxuICAgIFsnTGltZSBncmVlbicsICdpbnZlcnQoNjQlKSBzZXBpYSgyNyUpIHNhdHVyYXRlKDQ3MzQlKSBodWUtcm90YXRlKDc2ZGVnKSBicmlnaHRuZXNzKDEwNyUpIGNvbnRyYXN0KDEzNCUpJ10sXG4gICAgWydHcmVlbicsICdpbnZlcnQoMzAlKSBzZXBpYSg1NSUpIHNhdHVyYXRlKDE3OTglKSBodWUtcm90YXRlKDkwZGVnKSBicmlnaHRuZXNzKDEwMyUpIGNvbnRyYXN0KDEwOSUpJ10sXG4gICAgWydNaW50IGdyZWVuJywgJ2ludmVydCg5NSUpIHNlcGlhKDI5JSkgc2F0dXJhdGUoMzE3OCUpIGh1ZS1yb3RhdGUoNDlkZWcpIGJyaWdodG5lc3MoMTE5JSkgY29udHJhc3QoMTAwJSknXSxcbiAgICBbJ1RlYWwnLCAnaW52ZXJ0KDI0JSkgc2VwaWEoODMlKSBzYXR1cmF0ZSgyMzEwJSkgaHVlLXJvdGF0ZSgxNjJkZWcpIGJyaWdodG5lc3MoOTUlKSBjb250cmFzdCgxMDElKSddLFxuICAgIFsnU2t5IGJsdWUnLCAnaW52ZXJ0KDc5JSkgc2VwaWEoODklKSBzYXR1cmF0ZSgxODU4JSkgaHVlLXJvdGF0ZSgxNjlkZWcpIGJyaWdodG5lc3MoOTYlKSBjb250cmFzdCg5MSUpJ10sXG4gICAgWydMaWdodCBibHVlJywgJ2ludmVydCg4OSUpIHNlcGlhKDUlKSBzYXR1cmF0ZSgyMTI3JSkgaHVlLXJvdGF0ZSgxNjJkZWcpIGJyaWdodG5lc3MoMTAwJSkgY29udHJhc3QoODElKSddLFxuICAgIFsnQmx1ZScsICdpbnZlcnQoOCUpIHNlcGlhKDEwMCUpIHNhdHVyYXRlKDcyOTclKSBodWUtcm90YXRlKDI0N2RlZykgYnJpZ2h0bmVzcyg5NiUpIGNvbnRyYXN0KDE0MiUpJ10sXG4gICAgWydHcmFwZScsICdpbnZlcnQoMjUlKSBzZXBpYSg1MCUpIHNhdHVyYXRlKDIxMzQlKSBodWUtcm90YXRlKDI1MGRlZykgYnJpZ2h0bmVzcyg4OSUpIGNvbnRyYXN0KDEwNSUpJ10sXG4gICAgWydWaW9sZXQnLCAnaW52ZXJ0KDgzJSkgc2VwaWEoMjglKSBzYXR1cmF0ZSgzNTYyJSkgaHVlLXJvdGF0ZSgyNDVkZWcpIGJyaWdodG5lc3MoOTUlKSBjb250cmFzdCg5NiUpJ10sXG4gICAgWydMYXZlbmRlcicsICdpbnZlcnQoOTUlKSBzZXBpYSg3NCUpIHNhdHVyYXRlKDE2MjUlKSBodWUtcm90YXRlKDE4MGRlZykgYnJpZ2h0bmVzcygxMDclKSBjb250cmFzdCg5NiUpJ10sXG4gICAgWydNYWdlbnRhJywgJ2ludmVydCgyMSUpIHNlcGlhKDM4JSkgc2F0dXJhdGUoNzM5MiUpIGh1ZS1yb3RhdGUoMjk3ZGVnKSBicmlnaHRuZXNzKDExNSUpIGNvbnRyYXN0KDEzMCUpJ10sXG4gICAgWydTYWxtb24nLCAnaW52ZXJ0KDY3JSkgc2VwaWEoNDklKSBzYXR1cmF0ZSgxNjQ2JSkgaHVlLXJvdGF0ZSgzMTNkZWcpIGJyaWdodG5lc3MoMTAwJSkgY29udHJhc3QoOTclKSddLFxuICAgIFsnQ2hhcmNvYWwnLCAnaW52ZXJ0KDIzJSkgc2VwaWEoOCUpIHNhdHVyYXRlKDE1MzAlKSBodWUtcm90YXRlKDE2MWRlZykgYnJpZ2h0bmVzcyg5NyUpIGNvbnRyYXN0KDg3JSknXSxcbiAgICBbJ0dyZXknLCAnaW52ZXJ0KDU0JSkgc2VwaWEoMCUpIHNhdHVyYXRlKDE0MjUlKSBodWUtcm90YXRlKDE2NWRlZykgYnJpZ2h0bmVzcyg5MiUpIGNvbnRyYXN0KDg1JSknXSxcbiAgICBbJ1RhdXBlJywgJ2ludmVydCgyMSUpIHNlcGlhKDE0JSkgc2F0dXJhdGUoNzk1JSkgaHVlLXJvdGF0ZSgzNDVkZWcpIGJyaWdodG5lc3MoOTclKSBjb250cmFzdCg4OCUpJ11cbiAgXVxuXG4gIGNvbG9yTmFtZXNBbmRGaWx0ZXJzLmZvckVhY2goY29sb3IgPT4ge1xuICAgIGNvbnN0IGNvbG9yQ2hvaWNlTGlzdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGNvbG9yQ2hvaWNlTGlzdEl0ZW0uY2xhc3NMaXN0LmFkZCgnY29sb3ItbGlzdC1pdGVtJyk7XG4gICAgY29sb3JDaG9pY2VzQ29udGFpbmVyLmFwcGVuZENoaWxkKGNvbG9yQ2hvaWNlTGlzdEl0ZW0pO1xuXG4gICAgY29uc3QgY29sb3JJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgY29sb3JJY29uLnNyYyA9IExpc3RBbHQ7XG4gICAgY29sb3JJY29uLmNsYXNzTGlzdC5hZGQoJ2NvbG9yLWljb24nKTtcbiAgICBjb2xvckNob2ljZUxpc3RJdGVtLmFwcGVuZENoaWxkKGNvbG9ySWNvbik7XG4gICAgY29sb3JJY29uLnN0eWxlLmZpbHRlciA9IGNvbG9yWzFdO1xuXG4gICAgY29uc3QgY29sb3JOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGNvbG9yTmFtZS50ZXh0Q29udGVudCA9IGNvbG9yWzBdO1xuICAgIGNvbG9yQ2hvaWNlTGlzdEl0ZW0uYXBwZW5kQ2hpbGQoY29sb3JOYW1lKTtcbiAgfSlcblxuICBjb25zdCBsaXN0SXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY29sb3ItbGlzdC1pdGVtJyk7XG4gIGxpc3RJdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgLy9yZW1vdmUgZGVmYXVsdCBjb2xvclxuICAgICAgbWFpbkNvbG9ySWNvbi5jbGFzc0xpc3QucmVtb3ZlKCdkZWZhdWx0LWNvbG9yJyk7XG4gICAgICAvLyBTZXQgdGhlIG1haW4gY29sb3IgaWNvbiB0byB0aGUgY29sb3Igb2YgdGhlIG5ldyBzZWxlY3RlZCBjb2xvclxuICAgICAgbWFpbkNvbG9ySWNvbi5zdHlsZS5maWx0ZXIgPSBlLnRhcmdldC5jbG9zZXN0KCdsaScpLmZpcnN0Q2hpbGQuc3R5bGUuZmlsdGVyO1xuICAgICAgLy9TZXQgdGhlIHByb2plY3QgY29sb3IgbmFtZSB0byB0aGUgdXNlciBzZWxlY3RlZCBjb2xvclxuICAgICAgc2VsZWN0ZWRQcm9qZWN0Q29sb3IudGV4dENvbnRlbnQgPSBlLnRhcmdldC5jbG9zZXN0KCdsaScpLmNoaWxkcmVuWzFdLnRleHRDb250ZW50O1xuICAgICAgLy9DbG9zZSB0aGUgY29sb3IgY2hvaWNlIGZvcm1cbiAgICAgIGNvbG9yQ2hvaWNlc0NvbnRhaW5lci5jbGFzc0xpc3QudG9nZ2xlKCdjbG9zZS1jb2xvci1jaG9pY2VzJyk7XG4gICAgfSlcbiAgfSlcbn0iLCJpbXBvcnQgQ2FsZW5kYXIgZnJvbSAnLi4vYXNzZXRzL2ljb25zL2NhbGVuZGFyLnN2Zyc7XG5pbXBvcnQgUGFwZXJQbGFuZSBmcm9tICcuLi9hc3NldHMvaWNvbnMvcGFwZXItcGxhbmUtcmlnaHQuc3ZnJztcbmltcG9ydCB7IGZvbGRlcnMgfSBmcm9tICcuLic7XG5pbXBvcnQgeyBhcnJheU9mUHJvamVjdFRpdGxlcyB9IGZyb20gJy4uJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2hvd1Rhc2tFZGl0b3IoKSB7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xuICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpYWxvZycpO1xuICBtb2RhbC5jbGFzc0xpc3QuYWRkKCdtb2RhbCcpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKG1vZGFsKTtcbiAgXG4gIGNvbnN0IG5ld1Rhc2tGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICBuZXdUYXNrRm9ybS5jbGFzc0xpc3QuYWRkKCd0YXNrLWVkaXRvcicpO1xuICBtb2RhbC5hcHBlbmRDaGlsZChuZXdUYXNrRm9ybSk7XG5cbiAgY29uc3QgY2xvc2VNb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBjbG9zZU1vZGFsLmNsYXNzTGlzdC5hZGQoJ2Nsb3NlLW1vZGFsJyk7XG4gIGNsb3NlTW9kYWwuaW5uZXJIVE1MID0gJyZ0aW1lcyc7XG4gIG5ld1Rhc2tGb3JtLmFwcGVuZENoaWxkKGNsb3NlTW9kYWwpO1xuXG4gIGNvbnN0IGlucHV0RmllbGRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGlucHV0RmllbGRzLmNsYXNzTGlzdC5hZGQoJ2lucHV0LWZpZWxkcycpO1xuICBuZXdUYXNrRm9ybS5hcHBlbmRDaGlsZChpbnB1dEZpZWxkcyk7XG5cbiAgY29uc3QgZXh0cmFGaWVsZHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZXh0cmFGaWVsZHMuY2xhc3NMaXN0LmFkZCgnZXh0cmEtZmllbGRzJyk7XG4gIG5ld1Rhc2tGb3JtLmFwcGVuZENoaWxkKGV4dHJhRmllbGRzKTtcblxuICBjb25zdCB0YXNrVGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIHRhc2tUaXRsZUlucHV0LmNsYXNzTGlzdC5hZGQoJ3Rhc2stdGl0bGUtaW5wdXQnKTtcbiAgdGFza1RpdGxlSW5wdXQudHlwZSA9ICd0ZXh0JztcbiAgdGFza1RpdGxlSW5wdXQuaWQgPSAndGl0bGUnO1xuICB0YXNrVGl0bGVJbnB1dC5uYW1lID0gJ3RpdGxlJztcbiAgdGFza1RpdGxlSW5wdXQucGxhY2Vob2xkZXIgPSAnZS5nLiBSZW5ldyBneW0gZXZlcnkgTWF5IDFzdCc7XG4gIGlucHV0RmllbGRzLmFwcGVuZENoaWxkKHRhc2tUaXRsZUlucHV0KTtcblxuICBjb25zdCB0YXNrRGVzY3JpcHRpb25JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gIHRhc2tEZXNjcmlwdGlvbklucHV0LmNsYXNzTGlzdC5hZGQoJ3Rhc2stZGVzY3JpcHRpb24taW5wdXQnKTtcbiAgdGFza0Rlc2NyaXB0aW9uSW5wdXQuaWQgPSAnZGVzY3JpcHRpb24nO1xuICB0YXNrRGVzY3JpcHRpb25JbnB1dC5uYW1lID0gJ2Rlc2NyaXB0aW9uJztcbiAgdGFza0Rlc2NyaXB0aW9uSW5wdXQucGxhY2Vob2xkZXIgPSAnRGVzY3JpcHRpb24nO1xuICBpbnB1dEZpZWxkcy5hcHBlbmRDaGlsZCh0YXNrRGVzY3JpcHRpb25JbnB1dCk7XG5cbiAgY29uc3QgcGlsbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgcGlsbHMuY2xhc3NMaXN0LmFkZCgncGlsbHMnKTtcbiAgY29uc3QgaXRlbUFjdGlvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgaXRlbUFjdGlvbnMuY2xhc3NMaXN0LmFkZCgnaXRlbS1hY3Rpb25zJyk7XG4gIGV4dHJhRmllbGRzLmFwcGVuZENoaWxkKHBpbGxzKTtcbiAgZXh0cmFGaWVsZHMuYXBwZW5kQ2hpbGQoaXRlbUFjdGlvbnMpO1xuXG4gIGNvbnN0IGR1ZURhdGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBkdWVEYXRlQnV0dG9uLmlkID0gJ2RhdGUnO1xuICBkdWVEYXRlQnV0dG9uLnR5cGUgPSAnZGF0ZSc7XG4gIFxuICBmdW5jdGlvbiBnZXRGdWxsRGF0ZSgpIHtcbiAgICBjb25zdCBkID0gbmV3IERhdGUoKTtcbiAgICBsZXQgZGF5ID0gZC5nZXREYXRlKCk7XG4gICAgbGV0IG1vbnRoO1xuICAgIGlmIChkLmdldE1vbnRoKCkgPCAxMCkge1xuICAgICAgbW9udGggPSAnMCcgKyBOdW1iZXIoZC5nZXRNb250aCgpKzEpLnRvU3RyaW5nKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1vbnRoID0gTnVtYmVyKGQuZ2V0TW9udGgoKSsxKS50b1N0cmluZygpO1xuICAgIH1cbiAgICBsZXQgeWVhciA9IGQuZ2V0RnVsbFllYXIoKTtcbiAgICBsZXQgZGF0ZU1pbiA9IGAke3llYXJ9LSR7bW9udGh9LSR7ZGF5fWA7XG4gICAgcmV0dXJuIGRhdGVNaW5cbiAgfVxuXG4gIGR1ZURhdGVCdXR0b24ubWluID0gZ2V0RnVsbERhdGUoKTtcbiAgZHVlRGF0ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdkdWUtZGF0ZS1idXR0b24nKTtcbiAgcGlsbHMuYXBwZW5kQ2hpbGQoZHVlRGF0ZUJ1dHRvbik7XG5cbiAgLy8gY29uc3QgZHVlRGF0ZUJ1dHRvbkljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgLy8gZHVlRGF0ZUJ1dHRvbkljb24uc3JjID0gQ2FsZW5kYXI7XG4gIC8vIGR1ZURhdGVCdXR0b25JY29uLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbi1pY29uJyk7XG4gIC8vIGR1ZURhdGVCdXR0b24uYXBwZW5kQ2hpbGQoZHVlRGF0ZUJ1dHRvbkljb24pO1xuXG4gIC8vIGNvbnN0IGR1ZURhdGVCdXR0b25UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAvLyBkdWVEYXRlQnV0dG9uVGV4dC50ZXh0Q29udGVudCA9ICdEdWUgZGF0ZSc7XG4gIC8vIGR1ZURhdGVCdXR0b25UZXh0LmNsYXNzTGlzdC5hZGQoJ2J1dHRvbi10ZXh0Jyk7XG4gIC8vIGR1ZURhdGVCdXR0b24uYXBwZW5kQ2hpbGQoZHVlRGF0ZUJ1dHRvblRleHQpO1xuXG4gIGNvbnN0IGZvbGRlckJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICBmb2xkZXJCdXR0b24uY2xhc3NMaXN0LmFkZCgnZm9sZGVyLXNlbGVjdC1idXR0b24nKTtcbiAgcGlsbHMuYXBwZW5kQ2hpbGQoZm9sZGVyQnV0dG9uKTtcbiAgZm9sZGVycy5mb3JFYWNoKGZvbGRlciA9PiB7XG4gICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgb3B0aW9uLnRleHRDb250ZW50ID0gZm9sZGVyO1xuICAgIG9wdGlvbi52YWx1ZSA9IGZvbGRlci50b0xvd2VyQ2FzZSgpO1xuICAgIGZvbGRlckJ1dHRvbi5hcHBlbmRDaGlsZChvcHRpb24pO1xuICB9KTtcblxuICBjb25zdCBzdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgc3VibWl0LnR5cGUgPSAnc3VibWl0JztcbiAgc3VibWl0LmZvcm1NZXRob2QgPSAnZGlhbG9nJztcbiAgc3VibWl0LmNsYXNzTGlzdC5hZGQoJ3N1Ym1pdC1idXR0b24nKTtcbiAgbmV3VGFza0Zvcm0uYXBwZW5kQ2hpbGQoc3VibWl0KTtcblxuICBjb25zdCBzdWJtaXRCdG5JbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgc3VibWl0QnRuSW1nLnNyYyA9IFBhcGVyUGxhbmU7XG4gIHN1Ym1pdEJ0bkltZy5jbGFzc0xpc3QuYWRkKCdzdWJtaXQtYnV0dG9uLWljb24nKTtcbiAgc3VibWl0LmFwcGVuZENoaWxkKHN1Ym1pdEJ0bkltZyk7XG59IiwiaW1wb3J0IEJpY3ljbGUgZnJvbSAnLi9iaWN5Y2xlLnN2Zyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNob3dUb2RheSgpIHtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXInKTtcbiAgY29uc3QgbWVudUJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51LWJhcicpO1xuICBcbiAgY29uc3Qgc2VjdGlvbk5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICBzZWN0aW9uTmFtZS50ZXh0Q29udGVudCA9ICdUb2RheSc7XG4gIGhlYWRlci5hcHBlbmRDaGlsZChzZWN0aW9uTmFtZSk7XG5cbiAgY29uc3Qga2ViYWJNZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGtlYmFiTWVudS5jbGFzc0xpc3QuYWRkKCd0ZXN0Jyk7XG4gIGhlYWRlci5hcHBlbmRDaGlsZChrZWJhYk1lbnUpO1xuXG4gIGNvbnN0IHNlY3Rpb25Db250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHNlY3Rpb25Db250ZW50LmNsYXNzTGlzdC5hZGQoJ3NlY3Rpb24tY29udGVudCcpO1xuICBjb250ZW50Lmluc2VydEJlZm9yZShzZWN0aW9uQ29udGVudCwgbWVudUJhcik7XG5cbiAgY29uc3QgYmljeWNsZUltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBiaWN5Y2xlSW1nLmNsYXNzTGlzdC5hZGQoJ3NlY3Rpb24taW1hZ2UnKTtcbiAgYmljeWNsZUltZy5zcmMgPSBCaWN5Y2xlO1xuICBzZWN0aW9uQ29udGVudC5hcHBlbmRDaGlsZChiaWN5Y2xlSW1nKTtcblxuICBjb25zdCBzZWN0aW9uQ29udGVudEluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgc2VjdGlvbkNvbnRlbnRJbmZvLmNsYXNzTGlzdC5hZGQoJ3NlY3Rpb24tY29udGVudC1pbmZvJyk7XG4gIHNlY3Rpb25Db250ZW50LmFwcGVuZENoaWxkKHNlY3Rpb25Db250ZW50SW5mbyk7XG4gIGNvbnN0IHN0YXR1cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgc3RhdHVzLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnd2hpdGUtc3BhY2U6IHByZTsnKTtcbiAgc3RhdHVzLnRleHRDb250ZW50ID0gXCJZb3UncmUgYWxsIGRvbmUgZm9yIHRvZGF5ISBcXG4gQ29uZ3JhdHVsYXRpb25zIVwiO1xuICBzZWN0aW9uQ29udGVudEluZm8uYXBwZW5kQ2hpbGQoc3RhdHVzKTtcbiAgY29uc3QgcGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgcGFyYS50ZXh0Q29udGVudCA9ICdFbmpveSB0aGUgcmVzdCBvZiB0aGUgZGF5ISc7XG4gIHNlY3Rpb25Db250ZW50SW5mby5hcHBlbmRDaGlsZChwYXJhKTtcblxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==