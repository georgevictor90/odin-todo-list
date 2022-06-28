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
___CSS_LOADER_EXPORT___.push([module.id, "/* variables */\n:root {\n  --primary: #F96126;\n  --secondary: #2F2E41;\n}\n\n/* reset */\nbody,p,a,ul,li,h1,h2,h3 {\n  margin: 0;\n  padding: 0;\n  text-decoration: none;\n}\nli {\n  list-style-type: none;\n}\n\n/* base styles */\nbody {\n  max-height: 100vh;\n  font-size: 14px;\n  font-family: 'Open Sans', sans-serif;\n  /* overflow: hidden; */\n}\n.content {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  height: 100vh;\n  position: relative;\n  overflow: hidden;\n}\n.test:after {\n  content: '\\2807';\n  font-size: 1.4em;\n}\n.header {\n  padding: 10px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\nh3 {\n  font-weight: 600;\n}\n.section-content {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 20px;\n}\n.section-image {\n  width: 50%;\n  max-width: 350px;\n  opacity: .8;\n}\n.section-content-info {\n  text-align: center;\n  line-height: 2;\n  font-size: 1.1em;\n  font-weight: 300;\n  padding: 10px 30px;\n}\n.section-content-info > *:last-child {\n  font-size: .8em;\n  font-weight: 400;\n  opacity: .5;\n}\n.menu-bar {\n  background: var(--primary);\n  display: flex;\n  align-items: center;\n  padding: 20px 20px 40px;\n  opacity: .9;\n  position: relative;\n}\n.hamburger-menu-img,\n.search-button,\n.notifications-button {\n  width: 22px;\n}\n.hamburger-menu-img {\n  width: 20px;\n  filter:  brightness(0) invert(1);\n}\n.search-button {\n  margin-left: auto;\n}\n.notifications-button {\n  margin-left: 15px;\n}\n.add-task-button {\n  width: 50px;\n  height: 50px;\n  background-color: var(--primary);\n  font-size: 2.5em;\n  font-weight: bold;\n  color: white;\n  border: 4px solid white;\n  border-radius: 50%;\n  position:absolute;\n  top: -25px;\n  left: 50%;\n  transform: translate(-50%);\n}\n.popup-menu {\n  box-sizing: border-box;\n  position: absolute;\n  bottom: 0;\n  background-color: white;\n  height: 100vh;\n  width: 100%;\n  border: 1px solid #f0f0f0;\n  border-top-left-radius: 15px;\n  border-top-right-radius: 15px;\n  padding: 20px;\n  opacity: 1;\n  transition: all 400ms ease;\n}\n.close{\n  transform: translateY(100%);\n  opacity: 0;\n}\n.close-button {\n  width: 32px;\n  display: block;\n  margin-left: auto;\n  margin-bottom: 20px;\n}\n.popup-menu > li {\n  margin-top: 20px;\n  cursor: pointer;\n}\n.menu-sections {\n  padding-left: 10px;\n}\n.menu-sections-list li{\n  display: flex;\n  align-items: center;\n  margin-top: 20px;\n  gap: 7px;\n}\n.section-icon {\n  width: 30px;\n}\n.projects-section {\n  margin-top: 40px;\n}\n.project-section-header{\n  display:flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.new-project-button {\n  width: 30px;\n  opacity: 0.6;\n}\n\n.projects-section-title {\n  font-weight: bold;\n  font-size: 1.5em;\n}\n.projects-section-list {\n  padding-left: 10px;\n}\n.project-item {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-top: 20px;\n}\n.circle {\n  width: 25px;\n  /* display: inline-block; */\n}\n.button-icon {\n  width: 20px;\n}\n\n/* task editor */\n.modal {\n  padding: 0;\n  background: white;\n  border: 1px solid rgba(0, 0, 0, .3);\n  border-radius: 10px;\n}\n\n.modal::backdrop {\n  background: rgba(0, 0, 0, .7);\n}\n.close-modal {\n  /* position: absolute; */\n  /* top: 2px;\n  right: 10px; */\n  grid-column: 2/3;\n  font-size: 2em;\n  background: transparent;\n  border: none;\n  opacity: .6;\n  align-self: start;\n  justify-self: center;\n}\n.task-editor {\n  display: grid;\n  grid-template-columns: 9fr 1fr;\n  /* grid-template-rows: 1fr 1fr 1fr; */\n  /* position: relative; */\n  padding: 10px;\n  flex-direction: column;\n}\n.input-fields {\n  grid-column: 1/2;\n  grid-row: 1/2;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.extra-fields{\n  grid-column: 1/2;\n  grid-row: 2/3;\n}\n.task-title-input,\n.task-description-input{\n  border: none;\n  padding: 10px;\n}\n.task-description-input{\n  font-size: .8em;\n  height: 7ch;\n  resize: none;\n}\n.pills{\n  display: flex;\n  gap: 10px;\n  padding: 6px;\n}\n.due-date-button,\n.folder-select-button {\n  padding: .5rem .3rem;\n  background-color: transparent;\n  border: 1px solid rgba(0, 0, 0, .3);\n  border-radius: 10px;\n  font-size: .9em;\n  width: 100px;\n}\n\n.due-date-button{\n  display: flex;\n  align-items: center;\n  gap: 3px;\n}\n\n.submit-button {\n  grid-column: 2/3;\n  grid-row: 3/4;\n  width: 30px;\n  display: flex;\n  justify-content: center;\n  background: transparent;\n  border: none;\n  align-self: flex-end;\n}\n\n.submit-button-icon {\n  width: 25px;\n  opacity: .6;\n}\n\n/* newProject Form */\n.new-project-form {\n  box-sizing: border-box;\n  position: absolute;\n  bottom: 0;\n  background-color: white;\n  height: 100vh;\n  width: 100%;\n  border: 1px solid #f0f0f0;\n  border-top-left-radius: 15px;\n  border-top-right-radius: 15px;\n  padding: 20px;\n  opacity: 1;\n  transition: all 400ms ease;\n}\n.close-project-form{\n  transform: translateX(100%);\n  opacity: 0;\n}\n.new-project-form-header {\n  display: flex;\n  justify-items: center;\n  align-items: center;\n}\n.new-project-form-h3 {\n  margin-left: 30px;\n  font-size: 1.5em;\n}\n.new-project-form-save {\n  margin-left: auto;\n}\n.new-project-form-back,\n.new-project-form-save {\n  width: 30px;\n  opacity: 0.6;\n}\n\n.form-group {\n  margin-top: 30px;\n  width: 100%;\n  box-sizing: border-box;\n  padding:10px;\n  border: 3px solid rgba(255, 2, 2, 0.8);\n  border-radius: 5px;\n  /* margin: 10px; */\n  position: relative;\n  opacity: .6;\n}\n.form-group>label {\n  position:absolute;\n  top: -14px;\n  left: 20px; \n  background-color: white;\n  font-size: 1.2em;\n}\n.form-group>input,\n.form-group>input:active {\n  border: none;\n  outline: none;\n  width: 90%;\n  padding: 10px;\n  font-size: 1.5em;\n}\n.color-form-group{\n  margin-top: 30px;\n  display: flex;\n  gap: 30px;\n}\n.color-label-and-name {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.color-icon {\n  width: 35px;\n}\n.selected-color-label {\n  font-size: 1.3em;\n}\n.selected-project-color {\n  font-size: 1em;\n}\n\n/* color filters */\n.charcoal {\n  filter: invert(23%) sepia(8%) saturate(1530%) hue-rotate(161deg) brightness(97%) contrast(87%);\n}\n\n.red {\n  filter: invert(15%) sepia(90%) saturate(6449%) hue-rotate(359deg) brightness(108%) contrast(114%);\n}\n\n/* color choices container */\n.color-choices-container {\n  overflow: scroll;\n  box-sizing: border-box;\n  position: absolute;\n  bottom: 0;\n  background-color: white;\n  height: 90vh;\n  width: 100%;\n  border: 1px solid #f0f0f0;\n  border-top-left-radius: 15px;\n  border-top-right-radius: 15px;\n  padding: 20px;\n  opacity: 1;\n  transition: all 400ms ease;\n}\n.close-color-choices{\n  transform: translateY(100%);\n  opacity: 0;\n}\n\n.default-color{\n  filter: invert(23%) sepia(8%) saturate(1530%) hue-rotate(161deg) brightness(97%) contrast(87%);\n}\n\n/* fonts */\n\n/* mobile styles */\n\n\n/* small tablet styles */\n@media screen and (min-width: 620px) {\n  \n}\n\n/* large tablets & laptop styles */\n@media screen and (min-width: 960px) {\n  \n}\n\n/* desktop styles */\n@media screen and (min-width: 1200px) {\n  \n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA,cAAc;AACd;EACE,kBAAkB;EAClB,oBAAoB;AACtB;;AAEA,UAAU;AACV;EACE,SAAS;EACT,UAAU;EACV,qBAAqB;AACvB;AACA;EACE,qBAAqB;AACvB;;AAEA,gBAAgB;AAChB;EACE,iBAAiB;EACjB,eAAe;EACf,oCAAoC;EACpC,sBAAsB;AACxB;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,8BAA8B;EAC9B,aAAa;EACb,kBAAkB;EAClB,gBAAgB;AAClB;AACA;EACE,gBAAgB;EAChB,gBAAgB;AAClB;AACA;EACE,aAAa;EACb,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;AACrB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,YAAY;EACZ,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,SAAS;AACX;AACA;EACE,UAAU;EACV,gBAAgB;EAChB,WAAW;AACb;AACA;EACE,kBAAkB;EAClB,cAAc;EACd,gBAAgB;EAChB,gBAAgB;EAChB,kBAAkB;AACpB;AACA;EACE,eAAe;EACf,gBAAgB;EAChB,WAAW;AACb;AACA;EACE,0BAA0B;EAC1B,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,WAAW;EACX,kBAAkB;AACpB;AACA;;;EAGE,WAAW;AACb;AACA;EACE,WAAW;EACX,gCAAgC;AAClC;AACA;EACE,iBAAiB;AACnB;AACA;EACE,iBAAiB;AACnB;AACA;EACE,WAAW;EACX,YAAY;EACZ,gCAAgC;EAChC,gBAAgB;EAChB,iBAAiB;EACjB,YAAY;EACZ,uBAAuB;EACvB,kBAAkB;EAClB,iBAAiB;EACjB,UAAU;EACV,SAAS;EACT,0BAA0B;AAC5B;AACA;EACE,sBAAsB;EACtB,kBAAkB;EAClB,SAAS;EACT,uBAAuB;EACvB,aAAa;EACb,WAAW;EACX,yBAAyB;EACzB,4BAA4B;EAC5B,6BAA6B;EAC7B,aAAa;EACb,UAAU;EACV,0BAA0B;AAC5B;AACA;EACE,2BAA2B;EAC3B,UAAU;AACZ;AACA;EACE,WAAW;EACX,cAAc;EACd,iBAAiB;EACjB,mBAAmB;AACrB;AACA;EACE,gBAAgB;EAChB,eAAe;AACjB;AACA;EACE,kBAAkB;AACpB;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,gBAAgB;EAChB,QAAQ;AACV;AACA;EACE,WAAW;AACb;AACA;EACE,gBAAgB;AAClB;AACA;EACE,YAAY;EACZ,8BAA8B;EAC9B,mBAAmB;AACrB;AACA;EACE,WAAW;EACX,YAAY;AACd;;AAEA;EACE,iBAAiB;EACjB,gBAAgB;AAClB;AACA;EACE,kBAAkB;AACpB;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,SAAS;EACT,gBAAgB;AAClB;AACA;EACE,WAAW;EACX,2BAA2B;AAC7B;AACA;EACE,WAAW;AACb;;AAEA,gBAAgB;AAChB;EACE,UAAU;EACV,iBAAiB;EACjB,mCAAmC;EACnC,mBAAmB;AACrB;;AAEA;EACE,6BAA6B;AAC/B;AACA;EACE,wBAAwB;EACxB;gBACc;EACd,gBAAgB;EAChB,cAAc;EACd,uBAAuB;EACvB,YAAY;EACZ,WAAW;EACX,iBAAiB;EACjB,oBAAoB;AACtB;AACA;EACE,aAAa;EACb,8BAA8B;EAC9B,qCAAqC;EACrC,wBAAwB;EACxB,aAAa;EACb,sBAAsB;AACxB;AACA;EACE,gBAAgB;EAChB,aAAa;EACb,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;AACA;EACE,gBAAgB;EAChB,aAAa;AACf;AACA;;EAEE,YAAY;EACZ,aAAa;AACf;AACA;EACE,eAAe;EACf,WAAW;EACX,YAAY;AACd;AACA;EACE,aAAa;EACb,SAAS;EACT,YAAY;AACd;AACA;;EAEE,oBAAoB;EACpB,6BAA6B;EAC7B,mCAAmC;EACnC,mBAAmB;EACnB,eAAe;EACf,YAAY;AACd;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,QAAQ;AACV;;AAEA;EACE,gBAAgB;EAChB,aAAa;EACb,WAAW;EACX,aAAa;EACb,uBAAuB;EACvB,uBAAuB;EACvB,YAAY;EACZ,oBAAoB;AACtB;;AAEA;EACE,WAAW;EACX,WAAW;AACb;;AAEA,oBAAoB;AACpB;EACE,sBAAsB;EACtB,kBAAkB;EAClB,SAAS;EACT,uBAAuB;EACvB,aAAa;EACb,WAAW;EACX,yBAAyB;EACzB,4BAA4B;EAC5B,6BAA6B;EAC7B,aAAa;EACb,UAAU;EACV,0BAA0B;AAC5B;AACA;EACE,2BAA2B;EAC3B,UAAU;AACZ;AACA;EACE,aAAa;EACb,qBAAqB;EACrB,mBAAmB;AACrB;AACA;EACE,iBAAiB;EACjB,gBAAgB;AAClB;AACA;EACE,iBAAiB;AACnB;AACA;;EAEE,WAAW;EACX,YAAY;AACd;;AAEA;EACE,gBAAgB;EAChB,WAAW;EACX,sBAAsB;EACtB,YAAY;EACZ,sCAAsC;EACtC,kBAAkB;EAClB,kBAAkB;EAClB,kBAAkB;EAClB,WAAW;AACb;AACA;EACE,iBAAiB;EACjB,UAAU;EACV,UAAU;EACV,uBAAuB;EACvB,gBAAgB;AAClB;AACA;;EAEE,YAAY;EACZ,aAAa;EACb,UAAU;EACV,aAAa;EACb,gBAAgB;AAClB;AACA;EACE,gBAAgB;EAChB,aAAa;EACb,SAAS;AACX;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,QAAQ;AACV;AACA;EACE,WAAW;AACb;AACA;EACE,gBAAgB;AAClB;AACA;EACE,cAAc;AAChB;;AAEA,kBAAkB;AAClB;EACE,8FAA8F;AAChG;;AAEA;EACE,iGAAiG;AACnG;;AAEA,4BAA4B;AAC5B;EACE,gBAAgB;EAChB,sBAAsB;EACtB,kBAAkB;EAClB,SAAS;EACT,uBAAuB;EACvB,YAAY;EACZ,WAAW;EACX,yBAAyB;EACzB,4BAA4B;EAC5B,6BAA6B;EAC7B,aAAa;EACb,UAAU;EACV,0BAA0B;AAC5B;AACA;EACE,2BAA2B;EAC3B,UAAU;AACZ;;AAEA;EACE,8FAA8F;AAChG;;AAEA,UAAU;;AAEV,kBAAkB;;;AAGlB,wBAAwB;AACxB;;AAEA;;AAEA,kCAAkC;AAClC;;AAEA;;AAEA,mBAAmB;AACnB;;AAEA","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700&display=swap');\n\n/* variables */\n:root {\n  --primary: #F96126;\n  --secondary: #2F2E41;\n}\n\n/* reset */\nbody,p,a,ul,li,h1,h2,h3 {\n  margin: 0;\n  padding: 0;\n  text-decoration: none;\n}\nli {\n  list-style-type: none;\n}\n\n/* base styles */\nbody {\n  max-height: 100vh;\n  font-size: 14px;\n  font-family: 'Open Sans', sans-serif;\n  /* overflow: hidden; */\n}\n.content {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  height: 100vh;\n  position: relative;\n  overflow: hidden;\n}\n.test:after {\n  content: '\\2807';\n  font-size: 1.4em;\n}\n.header {\n  padding: 10px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\nh3 {\n  font-weight: 600;\n}\n.section-content {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 20px;\n}\n.section-image {\n  width: 50%;\n  max-width: 350px;\n  opacity: .8;\n}\n.section-content-info {\n  text-align: center;\n  line-height: 2;\n  font-size: 1.1em;\n  font-weight: 300;\n  padding: 10px 30px;\n}\n.section-content-info > *:last-child {\n  font-size: .8em;\n  font-weight: 400;\n  opacity: .5;\n}\n.menu-bar {\n  background: var(--primary);\n  display: flex;\n  align-items: center;\n  padding: 20px 20px 40px;\n  opacity: .9;\n  position: relative;\n}\n.hamburger-menu-img,\n.search-button,\n.notifications-button {\n  width: 22px;\n}\n.hamburger-menu-img {\n  width: 20px;\n  filter:  brightness(0) invert(1);\n}\n.search-button {\n  margin-left: auto;\n}\n.notifications-button {\n  margin-left: 15px;\n}\n.add-task-button {\n  width: 50px;\n  height: 50px;\n  background-color: var(--primary);\n  font-size: 2.5em;\n  font-weight: bold;\n  color: white;\n  border: 4px solid white;\n  border-radius: 50%;\n  position:absolute;\n  top: -25px;\n  left: 50%;\n  transform: translate(-50%);\n}\n.popup-menu {\n  box-sizing: border-box;\n  position: absolute;\n  bottom: 0;\n  background-color: white;\n  height: 100vh;\n  width: 100%;\n  border: 1px solid #f0f0f0;\n  border-top-left-radius: 15px;\n  border-top-right-radius: 15px;\n  padding: 20px;\n  opacity: 1;\n  transition: all 400ms ease;\n}\n.close{\n  transform: translateY(100%);\n  opacity: 0;\n}\n.close-button {\n  width: 32px;\n  display: block;\n  margin-left: auto;\n  margin-bottom: 20px;\n}\n.popup-menu > li {\n  margin-top: 20px;\n  cursor: pointer;\n}\n.menu-sections {\n  padding-left: 10px;\n}\n.menu-sections-list li{\n  display: flex;\n  align-items: center;\n  margin-top: 20px;\n  gap: 7px;\n}\n.section-icon {\n  width: 30px;\n}\n.projects-section {\n  margin-top: 40px;\n}\n.project-section-header{\n  display:flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.new-project-button {\n  width: 30px;\n  opacity: 0.6;\n}\n\n.projects-section-title {\n  font-weight: bold;\n  font-size: 1.5em;\n}\n.projects-section-list {\n  padding-left: 10px;\n}\n.project-item {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-top: 20px;\n}\n.circle {\n  width: 25px;\n  /* display: inline-block; */\n}\n.button-icon {\n  width: 20px;\n}\n\n/* task editor */\n.modal {\n  padding: 0;\n  background: white;\n  border: 1px solid rgba(0, 0, 0, .3);\n  border-radius: 10px;\n}\n\n.modal::backdrop {\n  background: rgba(0, 0, 0, .7);\n}\n.close-modal {\n  /* position: absolute; */\n  /* top: 2px;\n  right: 10px; */\n  grid-column: 2/3;\n  font-size: 2em;\n  background: transparent;\n  border: none;\n  opacity: .6;\n  align-self: start;\n  justify-self: center;\n}\n.task-editor {\n  display: grid;\n  grid-template-columns: 9fr 1fr;\n  /* grid-template-rows: 1fr 1fr 1fr; */\n  /* position: relative; */\n  padding: 10px;\n  flex-direction: column;\n}\n.input-fields {\n  grid-column: 1/2;\n  grid-row: 1/2;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.extra-fields{\n  grid-column: 1/2;\n  grid-row: 2/3;\n}\n.task-title-input,\n.task-description-input{\n  border: none;\n  padding: 10px;\n}\n.task-description-input{\n  font-size: .8em;\n  height: 7ch;\n  resize: none;\n}\n.pills{\n  display: flex;\n  gap: 10px;\n  padding: 6px;\n}\n.due-date-button,\n.folder-select-button {\n  padding: .5rem .3rem;\n  background-color: transparent;\n  border: 1px solid rgba(0, 0, 0, .3);\n  border-radius: 10px;\n  font-size: .9em;\n  width: 100px;\n}\n\n.due-date-button{\n  display: flex;\n  align-items: center;\n  gap: 3px;\n}\n\n.submit-button {\n  grid-column: 2/3;\n  grid-row: 3/4;\n  width: 30px;\n  display: flex;\n  justify-content: center;\n  background: transparent;\n  border: none;\n  align-self: flex-end;\n}\n\n.submit-button-icon {\n  width: 25px;\n  opacity: .6;\n}\n\n/* newProject Form */\n.new-project-form {\n  box-sizing: border-box;\n  position: absolute;\n  bottom: 0;\n  background-color: white;\n  height: 100vh;\n  width: 100%;\n  border: 1px solid #f0f0f0;\n  border-top-left-radius: 15px;\n  border-top-right-radius: 15px;\n  padding: 20px;\n  opacity: 1;\n  transition: all 400ms ease;\n}\n.close-project-form{\n  transform: translateX(100%);\n  opacity: 0;\n}\n.new-project-form-header {\n  display: flex;\n  justify-items: center;\n  align-items: center;\n}\n.new-project-form-h3 {\n  margin-left: 30px;\n  font-size: 1.5em;\n}\n.new-project-form-save {\n  margin-left: auto;\n}\n.new-project-form-back,\n.new-project-form-save {\n  width: 30px;\n  opacity: 0.6;\n}\n\n.form-group {\n  margin-top: 30px;\n  width: 100%;\n  box-sizing: border-box;\n  padding:10px;\n  border: 3px solid rgba(255, 2, 2, 0.8);\n  border-radius: 5px;\n  /* margin: 10px; */\n  position: relative;\n  opacity: .6;\n}\n.form-group>label {\n  position:absolute;\n  top: -14px;\n  left: 20px; \n  background-color: white;\n  font-size: 1.2em;\n}\n.form-group>input,\n.form-group>input:active {\n  border: none;\n  outline: none;\n  width: 90%;\n  padding: 10px;\n  font-size: 1.5em;\n}\n.color-form-group{\n  margin-top: 30px;\n  display: flex;\n  gap: 30px;\n}\n.color-label-and-name {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.color-icon {\n  width: 35px;\n}\n.selected-color-label {\n  font-size: 1.3em;\n}\n.selected-project-color {\n  font-size: 1em;\n}\n\n/* color filters */\n.charcoal {\n  filter: invert(23%) sepia(8%) saturate(1530%) hue-rotate(161deg) brightness(97%) contrast(87%);\n}\n\n.red {\n  filter: invert(15%) sepia(90%) saturate(6449%) hue-rotate(359deg) brightness(108%) contrast(114%);\n}\n\n/* color choices container */\n.color-choices-container {\n  overflow: scroll;\n  box-sizing: border-box;\n  position: absolute;\n  bottom: 0;\n  background-color: white;\n  height: 90vh;\n  width: 100%;\n  border: 1px solid #f0f0f0;\n  border-top-left-radius: 15px;\n  border-top-right-radius: 15px;\n  padding: 20px;\n  opacity: 1;\n  transition: all 400ms ease;\n}\n.close-color-choices{\n  transform: translateY(100%);\n  opacity: 0;\n}\n\n.default-color{\n  filter: invert(23%) sepia(8%) saturate(1530%) hue-rotate(161deg) brightness(97%) contrast(87%);\n}\n\n/* fonts */\n\n/* mobile styles */\n\n\n/* small tablet styles */\n@media screen and (min-width: 620px) {\n  \n}\n\n/* large tablets & laptop styles */\n@media screen and (min-width: 960px) {\n  \n}\n\n/* desktop styles */\n@media screen and (min-width: 1200px) {\n  \n}"],"sourceRoot":""}]);
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
/* harmony export */   "Projects": () => (/* binding */ Projects),
/* harmony export */   "checkCurrentProject": () => (/* binding */ checkCurrentProject),
/* harmony export */   "emptyElement": () => (/* binding */ emptyElement),
/* harmony export */   "listenForProjectClick": () => (/* binding */ listenForProjectClick),
/* harmony export */   "newProject": () => (/* binding */ newProject),
/* harmony export */   "newTodo": () => (/* binding */ newTodo),
/* harmony export */   "removeFromDOM": () => (/* binding */ removeFromDOM),
/* harmony export */   "setCurrentProject": () => (/* binding */ setCurrentProject),
/* harmony export */   "setDefaultCurrentProjectsToFalse": () => (/* binding */ setDefaultCurrentProjectsToFalse),
/* harmony export */   "setProjectFilter": () => (/* binding */ setProjectFilter),
/* harmony export */   "updateFolderButtonOptions": () => (/* binding */ updateFolderButtonOptions),
/* harmony export */   "updateFolders": () => (/* binding */ updateFolders),
/* harmony export */   "updateProjectsSectionList": () => (/* binding */ updateProjectsSectionList),
/* harmony export */   "userProjects": () => (/* binding */ userProjects)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ "./src/index.js");
/* harmony import */ var _assets_icons_mycircle_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/icons/mycircle.svg */ "./src/assets/icons/mycircle.svg");
/* harmony import */ var _goToPage_goToPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../goToPage/goToPage */ "./src/goToPage/goToPage.js");
/* harmony import */ var _projectColors_projectColors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../projectColors/projectColors */ "./src/projectColors/projectColors.js");
// import InboxSrc from '../assets/inbox.svg';
// import TodaySrc from '../assets/bicycle.svg';






function newTodo(title, description, dueDate, priority) {
  return {
    title: title,
    description: description,
    dueDate: dueDate,
    priority: priority,
    complete: false,
  }
};

function newProjectContainer() {
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

 function newProject(name, color, isCurrentProject) {
  return {
    length: 0,
    name: name,
    color: color,
    isCurrentProject,
    addTodos: function addTodos() {
      for (let i = 0; i < arguments.length; i++) {
        [].push.call(this, arguments[i]);
      }
    },
    removeTodos: function removeTodos() {
      for (let i = 0; i < arguments.length; i++) {
        [].splice.call(this, arguments[i], 1)
      }
    },
  }
}

const Inbox = newProject('Inbox','green');
Inbox.statusText = "All clear";
Inbox.paraText = "Looks like everything's organized in the right place. \n Tap + to add a task";

const Today = newProject('Today','blue', true);
Today.statusText = "You're all done for today! \n Congratulations!";
Today.paraText = "Enjoy the rest of the day!";

const Projects = newProjectContainer();
Projects.addElem(Inbox, Today);

const userProjects = newProjectContainer();
userProjects.statusText = "What are you planning to get done?";
userProjects.paraText = "Tap + to add a task to this project";
Projects.addElem(userProjects);

function checkCurrentProject() {
  
  
  if (Projects.length == 2) {
    for (let i = 0; i < 2; i++) {
      if (Projects[i].isCurrentProject === true) {
        return Projects[i];
      }
    };
  } else {
    for (let i = 0; i < 2; i++) {
      if (Projects[i].isCurrentProject === true) {
        return Projects[i];
      }
    };
    for (let i = 0; i < Projects[2].length; i++) {
      if (Projects[2][i].isCurrentProject === true) {
        return Projects[2][i];
      }
    };
  }

  // for (let i = 0; i < Projects.length; i++) {
  //   if (Projects[i].isCurrentProject === true) {
  //     return Projects[i];
  //   }
  // };
}

// export function checkCurrentProject() {
//   for (let i = 0; i < Projects.length; i++) {
//     if (Projects[i].isCurrentProject === true) {
//       return Projects[i];
//     }
//   };
// }

function setDefaultCurrentProjectsToFalse() {
  Projects[0].isCurrentProject = false;
  Projects[1].isCurrentProject = false;
}

function setCurrentProject(container, projectname) {
  if (container === Projects) {
    for (let i = 0; i < container.length -1; i++) {
      if (container[i].name === projectname) {
        container[i].isCurrentProject = true;
      } else {
        container[i].isCurrentProject = false;
      }
    }
  } else {
    for (let i = 0; i < container.length; i++) {
      if (container[i].name === projectname) {
        container[i].isCurrentProject = true;
      } else {
        container[i].isCurrentProject = false;
      }
    }
  }
}


function updateProjectsSectionList() {
  const projectsSectionList = document.querySelector('.projects-section-list');
  for (let i = 0; i < userProjects.length; i++) {
    const projectItem = document.createElement('li');
    projectItem.classList.add('project-item');
    projectsSectionList.appendChild(projectItem);

    const circle = document.createElement('img');
    circle.src = _assets_icons_mycircle_svg__WEBPACK_IMPORTED_MODULE_1__;
    circle.classList.add('circle');
    projectItem.insertBefore(circle, projectItem.firstChild);
    circle.style.filter = userProjects[i].filter;

    const projectItemName = document.createElement('span');
    projectItemName.textContent = userProjects[i].name;
    projectItem.appendChild(projectItemName);
   }
}

const content = document.querySelector('.content');

function removeFromDOM() {
  const header = document.querySelector('.header');
  header.childNodes[0].parentNode.removeChild(header.childNodes[0]);
  header.childNodes[0].parentNode.removeChild(header.childNodes[0]);
  content.childNodes[1].parentNode.removeChild(content.childNodes[1]);
}

function listenForProjectClick() {
  const menu = document.querySelector('.popup-menu');
  const projectItems = document.querySelectorAll('.project-item');
  projectItems.forEach(projectLink => {
    projectLink.addEventListener('click', () => {
      menu.classList.toggle('close');
      setCurrentProject(userProjects, projectLink.textContent);
      removeFromDOM();
      (0,_goToPage_goToPage__WEBPACK_IMPORTED_MODULE_2__["default"])();
      setDefaultCurrentProjectsToFalse();
    })
  })
}

function emptyElement(element) {
  while (element.lastElementChild) {
    element.removeChild(element.lastElementChild);
  }
}

function setProjectFilter(project) {
  let index = _projectColors_projectColors__WEBPACK_IMPORTED_MODULE_3__.colorNamesAndFilters.findIndex(arr => arr[0] === project.color);
  project.filter = _projectColors_projectColors__WEBPACK_IMPORTED_MODULE_3__.colorNamesAndFilters[index][1];
}



function updateFolders() {
  for (let i = 0; i < userProjects.length; i++) {
    ___WEBPACK_IMPORTED_MODULE_0__.folders.push(userProjects[i].name);
  }
}

function updateFolderButtonOptions() {
  console.log('started update folder button');
  const folderButton = document.querySelector('.folder-select-button');
  folderButton.innerHTML = "";
  ___WEBPACK_IMPORTED_MODULE_0__.folders.forEach(folder => {
    const option = document.createElement('option');
    option.textContent = folder;
    option.value = folder;
    folderButton.appendChild(option);
  });
}

/***/ }),

/***/ "./src/goToPage/goToPage.js":
/*!**********************************!*\
  !*** ./src/goToPage/goToPage.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ goToPage)
/* harmony export */ });
/* harmony import */ var _assets_inbox_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/inbox.svg */ "./src/assets/inbox.svg");
/* harmony import */ var _assets_bicycle_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/bicycle.svg */ "./src/assets/bicycle.svg");
/* harmony import */ var _assets_illustrations_undraw_project_src_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/illustrations/undraw-project-src.svg */ "./src/assets/illustrations/undraw-project-src.svg");
/* harmony import */ var _application_logic_applicationLogic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../application logic/applicationLogic */ "./src/application logic/applicationLogic.js");




// import { checkCurrentPage } from '../application logic/applicationLogic';
// import { setImageSrc } from '../application logic/applicationLogic';

function goToPage() {
  const content = document.querySelector('.content');
  const header = document.querySelector('.header');
  const menuBar = document.querySelector('.menu-bar');
  let currentProject = (0,_application_logic_applicationLogic__WEBPACK_IMPORTED_MODULE_3__.checkCurrentProject)();
  
  const sectionName = document.createElement('h3');
  sectionName.textContent = currentProject.name;
  header.appendChild(sectionName);

  const kebabMenu = document.createElement('div');
  kebabMenu.classList.add('test');
  header.appendChild(kebabMenu);
  
  const sectionContent = document.createElement('div');
  sectionContent.classList.add('section-content');
  content.insertBefore(sectionContent, menuBar);

  const sectionImg = document.createElement('img');
  sectionImg.classList.add('section-image');

  let currentSectionName = currentProject.name;

  setImageSrc();
  sectionContent.appendChild(sectionImg);

  const sectionContentInfo = document.createElement('div');
  sectionContentInfo.classList.add('section-content-info');
  sectionContent.appendChild(sectionContentInfo);
  const status = document.createElement('p');
  status.setAttribute('style', 'white-space: pre;');
  sectionContentInfo.appendChild(status);

  const para = document.createElement('p');
  sectionContentInfo.appendChild(para);

  checkIfProjectIsEmpty();

  function checkIfProjectIsEmpty() {
    if (currentProject.length === 0) {
      setSectionTextContent();
    } else {
      return
    }
  }

  function setSectionTextContent() {
    if (_application_logic_applicationLogic__WEBPACK_IMPORTED_MODULE_3__.userProjects.length === 0) {
      status.textContent = currentProject.statusText;
      para.textContent = currentProject.paraText;
    } else {
      status.textContent = _application_logic_applicationLogic__WEBPACK_IMPORTED_MODULE_3__.userProjects.statusText;
      para.textContent = _application_logic_applicationLogic__WEBPACK_IMPORTED_MODULE_3__.userProjects.paraText;
    }
  }

  



  // function setSectionTextContent() {
  //   for (let i = 0 ; i < userProjects.length; i++) {
  //     if (userProjects[i] === currentProject) {
  //       status.textContent = userProjects.statusText;
  //       para.textContent = userProjects.paraText;
  //     } else {
  //       status.textContent = currentProject.statusText;
  //       para.textContent = currentProject.paraText;
  //     }
  //   }
  //   console.log(userProjects.length)
  // }

  // function setSectionTextContent() {
  //   for(let i = 0; i < 2; i++) {
  //     if (userProjects[i] === currentProject) {
  //       status.textContent = currentProject.statusText;
  //       para.textContent = currentProject.paraText;
  //     }
  //   }

  //   for (let i = 0 ; i < userProjects.length; i++) {
  //     if (userProjects[i] === currentProject) {
  //       status.textContent = userProjects.statusText;
  //       para.textContent = userProjects.paraText;
  //     }
  //   }
  // }


  function setImageSrc() {
    if (currentSectionName === 'Inbox') {
      sectionImg.src = _assets_inbox_svg__WEBPACK_IMPORTED_MODULE_0__;
    } else if (currentSectionName === 'Today') {
      sectionImg.src = _assets_bicycle_svg__WEBPACK_IMPORTED_MODULE_1__;
    } else {
      sectionImg.src = _assets_illustrations_undraw_project_src_svg__WEBPACK_IMPORTED_MODULE_2__;
    }
  }
}

/***/ }),

/***/ "./src/inbox/inbox.js":
/*!****************************!*\
  !*** ./src/inbox/inbox.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ showInbox)
/* harmony export */ });
/* harmony import */ var _inbox_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inbox.svg */ "./src/inbox/inbox.svg");


function showInbox() {
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
/* harmony import */ var _goToPage_goToPage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./goToPage/goToPage */ "./src/goToPage/goToPage.js");






















const content = document.querySelector('.content');
const header = document.createElement('div');
header.classList.add('header');
content.appendChild(header);

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

let folders = [_application_logic_applicationLogic__WEBPACK_IMPORTED_MODULE_10__.Projects[0].name, _application_logic_applicationLogic__WEBPACK_IMPORTED_MODULE_10__.Projects[1].name];


(0,_goToPage_goToPage__WEBPACK_IMPORTED_MODULE_11__["default"])();
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
const projectsSectionList = document.querySelector('.projects-section-list');

newProjectSave.addEventListener('click', () => {
  const userProject = (0,_application_logic_applicationLogic__WEBPACK_IMPORTED_MODULE_10__.newProject)(newProjectNameInput.value, selectedProjectColor.textContent);
  (0,_application_logic_applicationLogic__WEBPACK_IMPORTED_MODULE_10__.setProjectFilter)(userProject);
  _application_logic_applicationLogic__WEBPACK_IMPORTED_MODULE_10__.Projects[2].addElem(userProject);
  (0,_application_logic_applicationLogic__WEBPACK_IMPORTED_MODULE_10__.setCurrentProject)(_application_logic_applicationLogic__WEBPACK_IMPORTED_MODULE_10__.userProjects, newProjectNameInput.value);
  (0,_application_logic_applicationLogic__WEBPACK_IMPORTED_MODULE_10__.setDefaultCurrentProjectsToFalse)();
  clearNewProjectForm();
  (0,_application_logic_applicationLogic__WEBPACK_IMPORTED_MODULE_10__.emptyElement)(projectsSectionList);
  (0,_application_logic_applicationLogic__WEBPACK_IMPORTED_MODULE_10__.updateProjectsSectionList)();
  (0,_application_logic_applicationLogic__WEBPACK_IMPORTED_MODULE_10__.listenForProjectClick)();
  (0,_application_logic_applicationLogic__WEBPACK_IMPORTED_MODULE_10__.removeFromDOM)();
  (0,_goToPage_goToPage__WEBPACK_IMPORTED_MODULE_11__["default"])();
  (0,_application_logic_applicationLogic__WEBPACK_IMPORTED_MODULE_10__.updateFolders)();
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
sectionLinks.forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.toggle('close');
    (0,_application_logic_applicationLogic__WEBPACK_IMPORTED_MODULE_10__.removeFromDOM)();
    (0,_application_logic_applicationLogic__WEBPACK_IMPORTED_MODULE_10__.setCurrentProject)(_application_logic_applicationLogic__WEBPACK_IMPORTED_MODULE_10__.Projects, link.textContent);
    if (_application_logic_applicationLogic__WEBPACK_IMPORTED_MODULE_10__.Projects[2].length > 0) {
      (0,_application_logic_applicationLogic__WEBPACK_IMPORTED_MODULE_10__.setCurrentProject)(_application_logic_applicationLogic__WEBPACK_IMPORTED_MODULE_10__.Projects[2], link.textContent)
    };
    (0,_goToPage_goToPage__WEBPACK_IMPORTED_MODULE_11__["default"])();
  })
})

addTaskBtn.addEventListener('click', () => {
  modal.showModal();
  (0,_application_logic_applicationLogic__WEBPACK_IMPORTED_MODULE_10__.updateFolderButtonOptions)();
})

window.addEventListener('click', (e) => {
 if (e.target.tagName !== 'DIALOG') return
 modal.close();
})

const colorFormGroup = document.querySelector('.color-form-group');
const colorChoicesContainer = document.querySelector('.color-choices-container');
colorFormGroup.addEventListener('click', () => {
  colorChoicesContainer.classList.toggle('close-color-choices');
})

const newTaskSubmit = document.querySelector('.submit-button');
const newTaskTitle = document.querySelector('.task-title-input');
const newTaskDescription = document.querySelector('.task-description-input');
const newTaskDate = document.querySelector('.due-date-button');
const newTaskFolder = document.querySelector('.folder-select-button');

newTaskSubmit.addEventListener('click', () => {
  if (newTaskTitle.value.length === 0) return

  // console.log(newTaskTitle.value, newTaskDescription.value, newTaskDate.value, newTaskFolder.value);

  const task = (0,_application_logic_applicationLogic__WEBPACK_IMPORTED_MODULE_10__.newTodo)(newTaskTitle.value, newTaskDescription.value, newTaskDate.value);

  for (let i = 0; i < _application_logic_applicationLogic__WEBPACK_IMPORTED_MODULE_10__.userProjects.length; i++) {
    if (_application_logic_applicationLogic__WEBPACK_IMPORTED_MODULE_10__.userProjects[i].name === newTaskFolder.value) {
      // console.log(userProjects[i]);
      _application_logic_applicationLogic__WEBPACK_IMPORTED_MODULE_10__.userProjects[i].addTodos(task);
    }
  }
  // console.log(task);
  
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
/* harmony import */ var _plus_circle_solid_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./plus-circle-solid.svg */ "./src/popUpMenu/plus-circle-solid.svg");
/* harmony import */ var _application_logic_applicationLogic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../application logic/applicationLogic */ "./src/application logic/applicationLogic.js");




// import { userProjects } from '../application logic/applicationLogic';


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
 newProjectBtn.src = _plus_circle_solid_svg__WEBPACK_IMPORTED_MODULE_3__;
 newProjectBtn.classList.add('new-project-button');
 projectsSectionHeader.appendChild(newProjectBtn);

 const projectsSectionList = document.createElement('ul');
 projectsSectionList.classList.add('projects-section-list');
 projectsSection.appendChild(projectsSectionList);

 (0,_application_logic_applicationLogic__WEBPACK_IMPORTED_MODULE_4__.updateProjectsSectionList)();
}
  



/***/ }),

/***/ "./src/projectColors/projectColors.js":
/*!********************************************!*\
  !*** ./src/projectColors/projectColors.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "colorNamesAndFilters": () => (/* binding */ colorNamesAndFilters),
/* harmony export */   "default": () => (/* binding */ showColorChoices)
/* harmony export */ });
/* harmony import */ var _list_alt_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list-alt.svg */ "./src/projectColors/list-alt.svg");


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
/* harmony import */ var _application_logic_applicationLogic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../application logic/applicationLogic */ "./src/application logic/applicationLogic.js");





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
  
  // updateFolderButtonOptions();
  ___WEBPACK_IMPORTED_MODULE_2__.folders.forEach(folder => {
    const option = document.createElement('option');
    option.textContent = folder;
    option.value = folder;
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

/***/ "./src/assets/bicycle.svg":
/*!********************************!*\
  !*** ./src/assets/bicycle.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8b9423fabdf3569ffd84.svg";

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

/***/ "./src/assets/icons/mycircle.svg":
/*!***************************************!*\
  !*** ./src/assets/icons/mycircle.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "16f132178a47ac91e527.svg";

/***/ }),

/***/ "./src/assets/icons/paper-plane-right.svg":
/*!************************************************!*\
  !*** ./src/assets/icons/paper-plane-right.svg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "58a8dfa4b83f498cb2f2.svg";

/***/ }),

/***/ "./src/assets/illustrations/undraw-project-src.svg":
/*!*********************************************************!*\
  !*** ./src/assets/illustrations/undraw-project-src.svg ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "097258c734772c3c3980.svg";

/***/ }),

/***/ "./src/assets/inbox.svg":
/*!******************************!*\
  !*** ./src/assets/inbox.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4fe98a9b514f54c5378a.svg";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SyxVQUFVLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxLQUFLLEtBQUssVUFBVSxZQUFZLFdBQVcsS0FBSyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsS0FBSyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLE1BQU0sT0FBTyxVQUFVLEtBQUssS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLE1BQU0sWUFBWSxNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxNQUFNLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsS0FBSyxLQUFLLFlBQVksV0FBVyxLQUFLLE1BQU0sVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLFVBQVUsS0FBSyxNQUFNLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxZQUFZLE1BQU0sWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxLQUFLLEtBQUssVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLE1BQU0sVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxLQUFLLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE1BQU0sTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLEtBQUssS0FBSyxVQUFVLFlBQVksV0FBVyxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxPQUFPLFlBQVksTUFBTSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sWUFBWSxNQUFNLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLFdBQVcsY0FBYyxhQUFhLE9BQU8sTUFBTSxZQUFZLE9BQU8sTUFBTSxZQUFZLE9BQU8seUdBQXlHLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLHFCQUFxQiw0QkFBNEIsdUJBQXVCLHlCQUF5QixHQUFHLDBDQUEwQyxj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QzFCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQWlEO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNuQ0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7Ozs7O1VFQUE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9hcHBsaWNhdGlvbiBsb2dpYy9hcHBsaWNhdGlvbkxvZ2ljLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL2dvVG9QYWdlL2dvVG9QYWdlLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL2luYm94L2luYm94LmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL25ld1Byb2plY3RGb3JtL25ld1Byb2plY3RGb3JtLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL3BvcFVwTWVudS9tZW51LmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL3Byb2plY3RDb2xvcnMvcHJvamVjdENvbG9ycy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy90YXNrIGVkaXRvci90YXNrRWRpdG9yLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL3RvZGF5L3RvZGF5UGFnZS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU9wZW4rU2FuczppdGFsLHdnaHRAMCwzMDA7MCw0MDA7MCw1MDA7MCw2MDA7MCw3MDA7MCw4MDA7MSwzMDA7MSw0MDA7MSw1MDA7MSw2MDA7MSw3MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogdmFyaWFibGVzICovXFxuOnJvb3Qge1xcbiAgLS1wcmltYXJ5OiAjRjk2MTI2O1xcbiAgLS1zZWNvbmRhcnk6ICMyRjJFNDE7XFxufVxcblxcbi8qIHJlc2V0ICovXFxuYm9keSxwLGEsdWwsbGksaDEsaDIsaDMge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxubGkge1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbn1cXG5cXG4vKiBiYXNlIHN0eWxlcyAqL1xcbmJvZHkge1xcbiAgbWF4LWhlaWdodDogMTAwdmg7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XFxuICAvKiBvdmVyZmxvdzogaGlkZGVuOyAqL1xcbn1cXG4uY29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG4udGVzdDphZnRlciB7XFxuICBjb250ZW50OiAnXFxcXDI4MDcnO1xcbiAgZm9udC1zaXplOiAxLjRlbTtcXG59XFxuLmhlYWRlciB7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbmgzIHtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcbi5zZWN0aW9uLWNvbnRlbnQge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDIwcHg7XFxufVxcbi5zZWN0aW9uLWltYWdlIHtcXG4gIHdpZHRoOiA1MCU7XFxuICBtYXgtd2lkdGg6IDM1MHB4O1xcbiAgb3BhY2l0eTogLjg7XFxufVxcbi5zZWN0aW9uLWNvbnRlbnQtaW5mbyB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBsaW5lLWhlaWdodDogMjtcXG4gIGZvbnQtc2l6ZTogMS4xZW07XFxuICBmb250LXdlaWdodDogMzAwO1xcbiAgcGFkZGluZzogMTBweCAzMHB4O1xcbn1cXG4uc2VjdGlvbi1jb250ZW50LWluZm8gPiAqOmxhc3QtY2hpbGQge1xcbiAgZm9udC1zaXplOiAuOGVtO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIG9wYWNpdHk6IC41O1xcbn1cXG4ubWVudS1iYXIge1xcbiAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeSk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDIwcHggMjBweCA0MHB4O1xcbiAgb3BhY2l0eTogLjk7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5oYW1idXJnZXItbWVudS1pbWcsXFxuLnNlYXJjaC1idXR0b24sXFxuLm5vdGlmaWNhdGlvbnMtYnV0dG9uIHtcXG4gIHdpZHRoOiAyMnB4O1xcbn1cXG4uaGFtYnVyZ2VyLW1lbnUtaW1nIHtcXG4gIHdpZHRoOiAyMHB4O1xcbiAgZmlsdGVyOiAgYnJpZ2h0bmVzcygwKSBpbnZlcnQoMSk7XFxufVxcbi5zZWFyY2gtYnV0dG9uIHtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbn1cXG4ubm90aWZpY2F0aW9ucy1idXR0b24ge1xcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XFxufVxcbi5hZGQtdGFzay1idXR0b24ge1xcbiAgd2lkdGg6IDUwcHg7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcXG4gIGZvbnQtc2l6ZTogMi41ZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlcjogNHB4IHNvbGlkIHdoaXRlO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgcG9zaXRpb246YWJzb2x1dGU7XFxuICB0b3A6IC0yNXB4O1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSk7XFxufVxcbi5wb3B1cC1tZW51IHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGhlaWdodDogMTAwdmg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNmMGYwZjA7XFxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxNXB4O1xcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDE1cHg7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgb3BhY2l0eTogMTtcXG4gIHRyYW5zaXRpb246IGFsbCA0MDBtcyBlYXNlO1xcbn1cXG4uY2xvc2V7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwJSk7XFxuICBvcGFjaXR5OiAwO1xcbn1cXG4uY2xvc2UtYnV0dG9uIHtcXG4gIHdpZHRoOiAzMnB4O1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcbi5wb3B1cC1tZW51ID4gbGkge1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLm1lbnUtc2VjdGlvbnMge1xcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbn1cXG4ubWVudS1zZWN0aW9ucy1saXN0IGxpe1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgZ2FwOiA3cHg7XFxufVxcbi5zZWN0aW9uLWljb24ge1xcbiAgd2lkdGg6IDMwcHg7XFxufVxcbi5wcm9qZWN0cy1zZWN0aW9uIHtcXG4gIG1hcmdpbi10b3A6IDQwcHg7XFxufVxcbi5wcm9qZWN0LXNlY3Rpb24taGVhZGVye1xcbiAgZGlzcGxheTpmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLm5ldy1wcm9qZWN0LWJ1dHRvbiB7XFxuICB3aWR0aDogMzBweDtcXG4gIG9wYWNpdHk6IDAuNjtcXG59XFxuXFxuLnByb2plY3RzLXNlY3Rpb24tdGl0bGUge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBmb250LXNpemU6IDEuNWVtO1xcbn1cXG4ucHJvamVjdHMtc2VjdGlvbi1saXN0IHtcXG4gIHBhZGRpbmctbGVmdDogMTBweDtcXG59XFxuLnByb2plY3QtaXRlbSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMTBweDtcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxufVxcbi5jaXJjbGUge1xcbiAgd2lkdGg6IDI1cHg7XFxuICAvKiBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7ICovXFxufVxcbi5idXR0b24taWNvbiB7XFxuICB3aWR0aDogMjBweDtcXG59XFxuXFxuLyogdGFzayBlZGl0b3IgKi9cXG4ubW9kYWwge1xcbiAgcGFkZGluZzogMDtcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAuMyk7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4ubW9kYWw6OmJhY2tkcm9wIHtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgLjcpO1xcbn1cXG4uY2xvc2UtbW9kYWwge1xcbiAgLyogcG9zaXRpb246IGFic29sdXRlOyAqL1xcbiAgLyogdG9wOiAycHg7XFxuICByaWdodDogMTBweDsgKi9cXG4gIGdyaWQtY29sdW1uOiAyLzM7XFxuICBmb250LXNpemU6IDJlbTtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgb3BhY2l0eTogLjY7XFxuICBhbGlnbi1zZWxmOiBzdGFydDtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbn1cXG4udGFzay1lZGl0b3Ige1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogOWZyIDFmcjtcXG4gIC8qIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmciAxZnI7ICovXFxuICAvKiBwb3NpdGlvbjogcmVsYXRpdmU7ICovXFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuLmlucHV0LWZpZWxkcyB7XFxuICBncmlkLWNvbHVtbjogMS8yO1xcbiAgZ3JpZC1yb3c6IDEvMjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG4uZXh0cmEtZmllbGRze1xcbiAgZ3JpZC1jb2x1bW46IDEvMjtcXG4gIGdyaWQtcm93OiAyLzM7XFxufVxcbi50YXNrLXRpdGxlLWlucHV0LFxcbi50YXNrLWRlc2NyaXB0aW9uLWlucHV0e1xcbiAgYm9yZGVyOiBub25lO1xcbiAgcGFkZGluZzogMTBweDtcXG59XFxuLnRhc2stZGVzY3JpcHRpb24taW5wdXR7XFxuICBmb250LXNpemU6IC44ZW07XFxuICBoZWlnaHQ6IDdjaDtcXG4gIHJlc2l6ZTogbm9uZTtcXG59XFxuLnBpbGxze1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMTBweDtcXG4gIHBhZGRpbmc6IDZweDtcXG59XFxuLmR1ZS1kYXRlLWJ1dHRvbixcXG4uZm9sZGVyLXNlbGVjdC1idXR0b24ge1xcbiAgcGFkZGluZzogLjVyZW0gLjNyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgLjMpO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGZvbnQtc2l6ZTogLjllbTtcXG4gIHdpZHRoOiAxMDBweDtcXG59XFxuXFxuLmR1ZS1kYXRlLWJ1dHRvbntcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAzcHg7XFxufVxcblxcbi5zdWJtaXQtYnV0dG9uIHtcXG4gIGdyaWQtY29sdW1uOiAyLzM7XFxuICBncmlkLXJvdzogMy80O1xcbiAgd2lkdGg6IDMwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbn1cXG5cXG4uc3VibWl0LWJ1dHRvbi1pY29uIHtcXG4gIHdpZHRoOiAyNXB4O1xcbiAgb3BhY2l0eTogLjY7XFxufVxcblxcbi8qIG5ld1Byb2plY3QgRm9ybSAqL1xcbi5uZXctcHJvamVjdC1mb3JtIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGhlaWdodDogMTAwdmg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNmMGYwZjA7XFxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxNXB4O1xcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDE1cHg7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgb3BhY2l0eTogMTtcXG4gIHRyYW5zaXRpb246IGFsbCA0MDBtcyBlYXNlO1xcbn1cXG4uY2xvc2UtcHJvamVjdC1mb3Jte1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xcbiAgb3BhY2l0eTogMDtcXG59XFxuLm5ldy1wcm9qZWN0LWZvcm0taGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4ubmV3LXByb2plY3QtZm9ybS1oMyB7XFxuICBtYXJnaW4tbGVmdDogMzBweDtcXG4gIGZvbnQtc2l6ZTogMS41ZW07XFxufVxcbi5uZXctcHJvamVjdC1mb3JtLXNhdmUge1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxufVxcbi5uZXctcHJvamVjdC1mb3JtLWJhY2ssXFxuLm5ldy1wcm9qZWN0LWZvcm0tc2F2ZSB7XFxuICB3aWR0aDogMzBweDtcXG4gIG9wYWNpdHk6IDAuNjtcXG59XFxuXFxuLmZvcm0tZ3JvdXAge1xcbiAgbWFyZ2luLXRvcDogMzBweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHBhZGRpbmc6MTBweDtcXG4gIGJvcmRlcjogM3B4IHNvbGlkIHJnYmEoMjU1LCAyLCAyLCAwLjgpO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgLyogbWFyZ2luOiAxMHB4OyAqL1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgb3BhY2l0eTogLjY7XFxufVxcbi5mb3JtLWdyb3VwPmxhYmVsIHtcXG4gIHBvc2l0aW9uOmFic29sdXRlO1xcbiAgdG9wOiAtMTRweDtcXG4gIGxlZnQ6IDIwcHg7IFxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBmb250LXNpemU6IDEuMmVtO1xcbn1cXG4uZm9ybS1ncm91cD5pbnB1dCxcXG4uZm9ybS1ncm91cD5pbnB1dDphY3RpdmUge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIHdpZHRoOiA5MCU7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgZm9udC1zaXplOiAxLjVlbTtcXG59XFxuLmNvbG9yLWZvcm0tZ3JvdXB7XFxuICBtYXJnaW4tdG9wOiAzMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMzBweDtcXG59XFxuLmNvbG9yLWxhYmVsLWFuZC1uYW1lIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiA1cHg7XFxufVxcbi5jb2xvci1pY29uIHtcXG4gIHdpZHRoOiAzNXB4O1xcbn1cXG4uc2VsZWN0ZWQtY29sb3ItbGFiZWwge1xcbiAgZm9udC1zaXplOiAxLjNlbTtcXG59XFxuLnNlbGVjdGVkLXByb2plY3QtY29sb3Ige1xcbiAgZm9udC1zaXplOiAxZW07XFxufVxcblxcbi8qIGNvbG9yIGZpbHRlcnMgKi9cXG4uY2hhcmNvYWwge1xcbiAgZmlsdGVyOiBpbnZlcnQoMjMlKSBzZXBpYSg4JSkgc2F0dXJhdGUoMTUzMCUpIGh1ZS1yb3RhdGUoMTYxZGVnKSBicmlnaHRuZXNzKDk3JSkgY29udHJhc3QoODclKTtcXG59XFxuXFxuLnJlZCB7XFxuICBmaWx0ZXI6IGludmVydCgxNSUpIHNlcGlhKDkwJSkgc2F0dXJhdGUoNjQ0OSUpIGh1ZS1yb3RhdGUoMzU5ZGVnKSBicmlnaHRuZXNzKDEwOCUpIGNvbnRyYXN0KDExNCUpO1xcbn1cXG5cXG4vKiBjb2xvciBjaG9pY2VzIGNvbnRhaW5lciAqL1xcbi5jb2xvci1jaG9pY2VzLWNvbnRhaW5lciB7XFxuICBvdmVyZmxvdzogc2Nyb2xsO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgaGVpZ2h0OiA5MHZoO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZjBmMGYwO1xcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTVweDtcXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxNXB4O1xcbiAgcGFkZGluZzogMjBweDtcXG4gIG9wYWNpdHk6IDE7XFxuICB0cmFuc2l0aW9uOiBhbGwgNDAwbXMgZWFzZTtcXG59XFxuLmNsb3NlLWNvbG9yLWNob2ljZXN7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwJSk7XFxuICBvcGFjaXR5OiAwO1xcbn1cXG5cXG4uZGVmYXVsdC1jb2xvcntcXG4gIGZpbHRlcjogaW52ZXJ0KDIzJSkgc2VwaWEoOCUpIHNhdHVyYXRlKDE1MzAlKSBodWUtcm90YXRlKDE2MWRlZykgYnJpZ2h0bmVzcyg5NyUpIGNvbnRyYXN0KDg3JSk7XFxufVxcblxcbi8qIGZvbnRzICovXFxuXFxuLyogbW9iaWxlIHN0eWxlcyAqL1xcblxcblxcbi8qIHNtYWxsIHRhYmxldCBzdHlsZXMgKi9cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MjBweCkge1xcbiAgXFxufVxcblxcbi8qIGxhcmdlIHRhYmxldHMgJiBsYXB0b3Agc3R5bGVzICovXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTYwcHgpIHtcXG4gIFxcbn1cXG5cXG4vKiBkZXNrdG9wIHN0eWxlcyAqL1xcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweCkge1xcbiAgXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUEsY0FBYztBQUNkO0VBQ0Usa0JBQWtCO0VBQ2xCLG9CQUFvQjtBQUN0Qjs7QUFFQSxVQUFVO0FBQ1Y7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBLGdCQUFnQjtBQUNoQjtFQUNFLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2Ysb0NBQW9DO0VBQ3BDLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qiw4QkFBOEI7RUFDOUIsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGFBQWE7RUFDYixhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFNBQVM7QUFDWDtBQUNBO0VBQ0UsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixXQUFXO0FBQ2I7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsV0FBVztBQUNiO0FBQ0E7RUFDRSwwQkFBMEI7RUFDMUIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsV0FBVztF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RjtBQUNoRzs7QUFFQSxVQUFVOztBQUVWLGtCQUFrQjs7O0FBR2xCLHdCQUF3QjtBQUN4Qjs7QUFFQTs7QUFFQSxrQ0FBa0M7QUFDbEM7O0FBRUE7O0FBRUEsbUJBQW1CO0FBQ25COztBQUVBXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU9wZW4rU2FuczppdGFsLHdnaHRAMCwzMDA7MCw0MDA7MCw1MDA7MCw2MDA7MCw3MDA7MCw4MDA7MSwzMDA7MSw0MDA7MSw1MDA7MSw2MDA7MSw3MDAmZGlzcGxheT1zd2FwJyk7XFxuXFxuLyogdmFyaWFibGVzICovXFxuOnJvb3Qge1xcbiAgLS1wcmltYXJ5OiAjRjk2MTI2O1xcbiAgLS1zZWNvbmRhcnk6ICMyRjJFNDE7XFxufVxcblxcbi8qIHJlc2V0ICovXFxuYm9keSxwLGEsdWwsbGksaDEsaDIsaDMge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxubGkge1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbn1cXG5cXG4vKiBiYXNlIHN0eWxlcyAqL1xcbmJvZHkge1xcbiAgbWF4LWhlaWdodDogMTAwdmg7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XFxuICAvKiBvdmVyZmxvdzogaGlkZGVuOyAqL1xcbn1cXG4uY29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG4udGVzdDphZnRlciB7XFxuICBjb250ZW50OiAnXFxcXDI4MDcnO1xcbiAgZm9udC1zaXplOiAxLjRlbTtcXG59XFxuLmhlYWRlciB7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbmgzIHtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcbi5zZWN0aW9uLWNvbnRlbnQge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDIwcHg7XFxufVxcbi5zZWN0aW9uLWltYWdlIHtcXG4gIHdpZHRoOiA1MCU7XFxuICBtYXgtd2lkdGg6IDM1MHB4O1xcbiAgb3BhY2l0eTogLjg7XFxufVxcbi5zZWN0aW9uLWNvbnRlbnQtaW5mbyB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBsaW5lLWhlaWdodDogMjtcXG4gIGZvbnQtc2l6ZTogMS4xZW07XFxuICBmb250LXdlaWdodDogMzAwO1xcbiAgcGFkZGluZzogMTBweCAzMHB4O1xcbn1cXG4uc2VjdGlvbi1jb250ZW50LWluZm8gPiAqOmxhc3QtY2hpbGQge1xcbiAgZm9udC1zaXplOiAuOGVtO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIG9wYWNpdHk6IC41O1xcbn1cXG4ubWVudS1iYXIge1xcbiAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeSk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDIwcHggMjBweCA0MHB4O1xcbiAgb3BhY2l0eTogLjk7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5oYW1idXJnZXItbWVudS1pbWcsXFxuLnNlYXJjaC1idXR0b24sXFxuLm5vdGlmaWNhdGlvbnMtYnV0dG9uIHtcXG4gIHdpZHRoOiAyMnB4O1xcbn1cXG4uaGFtYnVyZ2VyLW1lbnUtaW1nIHtcXG4gIHdpZHRoOiAyMHB4O1xcbiAgZmlsdGVyOiAgYnJpZ2h0bmVzcygwKSBpbnZlcnQoMSk7XFxufVxcbi5zZWFyY2gtYnV0dG9uIHtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbn1cXG4ubm90aWZpY2F0aW9ucy1idXR0b24ge1xcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XFxufVxcbi5hZGQtdGFzay1idXR0b24ge1xcbiAgd2lkdGg6IDUwcHg7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcXG4gIGZvbnQtc2l6ZTogMi41ZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlcjogNHB4IHNvbGlkIHdoaXRlO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgcG9zaXRpb246YWJzb2x1dGU7XFxuICB0b3A6IC0yNXB4O1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSk7XFxufVxcbi5wb3B1cC1tZW51IHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGhlaWdodDogMTAwdmg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNmMGYwZjA7XFxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxNXB4O1xcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDE1cHg7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgb3BhY2l0eTogMTtcXG4gIHRyYW5zaXRpb246IGFsbCA0MDBtcyBlYXNlO1xcbn1cXG4uY2xvc2V7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwJSk7XFxuICBvcGFjaXR5OiAwO1xcbn1cXG4uY2xvc2UtYnV0dG9uIHtcXG4gIHdpZHRoOiAzMnB4O1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcbi5wb3B1cC1tZW51ID4gbGkge1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLm1lbnUtc2VjdGlvbnMge1xcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbn1cXG4ubWVudS1zZWN0aW9ucy1saXN0IGxpe1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgZ2FwOiA3cHg7XFxufVxcbi5zZWN0aW9uLWljb24ge1xcbiAgd2lkdGg6IDMwcHg7XFxufVxcbi5wcm9qZWN0cy1zZWN0aW9uIHtcXG4gIG1hcmdpbi10b3A6IDQwcHg7XFxufVxcbi5wcm9qZWN0LXNlY3Rpb24taGVhZGVye1xcbiAgZGlzcGxheTpmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLm5ldy1wcm9qZWN0LWJ1dHRvbiB7XFxuICB3aWR0aDogMzBweDtcXG4gIG9wYWNpdHk6IDAuNjtcXG59XFxuXFxuLnByb2plY3RzLXNlY3Rpb24tdGl0bGUge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBmb250LXNpemU6IDEuNWVtO1xcbn1cXG4ucHJvamVjdHMtc2VjdGlvbi1saXN0IHtcXG4gIHBhZGRpbmctbGVmdDogMTBweDtcXG59XFxuLnByb2plY3QtaXRlbSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMTBweDtcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxufVxcbi5jaXJjbGUge1xcbiAgd2lkdGg6IDI1cHg7XFxuICAvKiBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7ICovXFxufVxcbi5idXR0b24taWNvbiB7XFxuICB3aWR0aDogMjBweDtcXG59XFxuXFxuLyogdGFzayBlZGl0b3IgKi9cXG4ubW9kYWwge1xcbiAgcGFkZGluZzogMDtcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAuMyk7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4ubW9kYWw6OmJhY2tkcm9wIHtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgLjcpO1xcbn1cXG4uY2xvc2UtbW9kYWwge1xcbiAgLyogcG9zaXRpb246IGFic29sdXRlOyAqL1xcbiAgLyogdG9wOiAycHg7XFxuICByaWdodDogMTBweDsgKi9cXG4gIGdyaWQtY29sdW1uOiAyLzM7XFxuICBmb250LXNpemU6IDJlbTtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgb3BhY2l0eTogLjY7XFxuICBhbGlnbi1zZWxmOiBzdGFydDtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbn1cXG4udGFzay1lZGl0b3Ige1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogOWZyIDFmcjtcXG4gIC8qIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmciAxZnI7ICovXFxuICAvKiBwb3NpdGlvbjogcmVsYXRpdmU7ICovXFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuLmlucHV0LWZpZWxkcyB7XFxuICBncmlkLWNvbHVtbjogMS8yO1xcbiAgZ3JpZC1yb3c6IDEvMjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG4uZXh0cmEtZmllbGRze1xcbiAgZ3JpZC1jb2x1bW46IDEvMjtcXG4gIGdyaWQtcm93OiAyLzM7XFxufVxcbi50YXNrLXRpdGxlLWlucHV0LFxcbi50YXNrLWRlc2NyaXB0aW9uLWlucHV0e1xcbiAgYm9yZGVyOiBub25lO1xcbiAgcGFkZGluZzogMTBweDtcXG59XFxuLnRhc2stZGVzY3JpcHRpb24taW5wdXR7XFxuICBmb250LXNpemU6IC44ZW07XFxuICBoZWlnaHQ6IDdjaDtcXG4gIHJlc2l6ZTogbm9uZTtcXG59XFxuLnBpbGxze1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMTBweDtcXG4gIHBhZGRpbmc6IDZweDtcXG59XFxuLmR1ZS1kYXRlLWJ1dHRvbixcXG4uZm9sZGVyLXNlbGVjdC1idXR0b24ge1xcbiAgcGFkZGluZzogLjVyZW0gLjNyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgLjMpO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGZvbnQtc2l6ZTogLjllbTtcXG4gIHdpZHRoOiAxMDBweDtcXG59XFxuXFxuLmR1ZS1kYXRlLWJ1dHRvbntcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAzcHg7XFxufVxcblxcbi5zdWJtaXQtYnV0dG9uIHtcXG4gIGdyaWQtY29sdW1uOiAyLzM7XFxuICBncmlkLXJvdzogMy80O1xcbiAgd2lkdGg6IDMwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbn1cXG5cXG4uc3VibWl0LWJ1dHRvbi1pY29uIHtcXG4gIHdpZHRoOiAyNXB4O1xcbiAgb3BhY2l0eTogLjY7XFxufVxcblxcbi8qIG5ld1Byb2plY3QgRm9ybSAqL1xcbi5uZXctcHJvamVjdC1mb3JtIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGhlaWdodDogMTAwdmg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNmMGYwZjA7XFxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxNXB4O1xcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDE1cHg7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgb3BhY2l0eTogMTtcXG4gIHRyYW5zaXRpb246IGFsbCA0MDBtcyBlYXNlO1xcbn1cXG4uY2xvc2UtcHJvamVjdC1mb3Jte1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xcbiAgb3BhY2l0eTogMDtcXG59XFxuLm5ldy1wcm9qZWN0LWZvcm0taGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4ubmV3LXByb2plY3QtZm9ybS1oMyB7XFxuICBtYXJnaW4tbGVmdDogMzBweDtcXG4gIGZvbnQtc2l6ZTogMS41ZW07XFxufVxcbi5uZXctcHJvamVjdC1mb3JtLXNhdmUge1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxufVxcbi5uZXctcHJvamVjdC1mb3JtLWJhY2ssXFxuLm5ldy1wcm9qZWN0LWZvcm0tc2F2ZSB7XFxuICB3aWR0aDogMzBweDtcXG4gIG9wYWNpdHk6IDAuNjtcXG59XFxuXFxuLmZvcm0tZ3JvdXAge1xcbiAgbWFyZ2luLXRvcDogMzBweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHBhZGRpbmc6MTBweDtcXG4gIGJvcmRlcjogM3B4IHNvbGlkIHJnYmEoMjU1LCAyLCAyLCAwLjgpO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgLyogbWFyZ2luOiAxMHB4OyAqL1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgb3BhY2l0eTogLjY7XFxufVxcbi5mb3JtLWdyb3VwPmxhYmVsIHtcXG4gIHBvc2l0aW9uOmFic29sdXRlO1xcbiAgdG9wOiAtMTRweDtcXG4gIGxlZnQ6IDIwcHg7IFxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBmb250LXNpemU6IDEuMmVtO1xcbn1cXG4uZm9ybS1ncm91cD5pbnB1dCxcXG4uZm9ybS1ncm91cD5pbnB1dDphY3RpdmUge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIHdpZHRoOiA5MCU7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgZm9udC1zaXplOiAxLjVlbTtcXG59XFxuLmNvbG9yLWZvcm0tZ3JvdXB7XFxuICBtYXJnaW4tdG9wOiAzMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMzBweDtcXG59XFxuLmNvbG9yLWxhYmVsLWFuZC1uYW1lIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiA1cHg7XFxufVxcbi5jb2xvci1pY29uIHtcXG4gIHdpZHRoOiAzNXB4O1xcbn1cXG4uc2VsZWN0ZWQtY29sb3ItbGFiZWwge1xcbiAgZm9udC1zaXplOiAxLjNlbTtcXG59XFxuLnNlbGVjdGVkLXByb2plY3QtY29sb3Ige1xcbiAgZm9udC1zaXplOiAxZW07XFxufVxcblxcbi8qIGNvbG9yIGZpbHRlcnMgKi9cXG4uY2hhcmNvYWwge1xcbiAgZmlsdGVyOiBpbnZlcnQoMjMlKSBzZXBpYSg4JSkgc2F0dXJhdGUoMTUzMCUpIGh1ZS1yb3RhdGUoMTYxZGVnKSBicmlnaHRuZXNzKDk3JSkgY29udHJhc3QoODclKTtcXG59XFxuXFxuLnJlZCB7XFxuICBmaWx0ZXI6IGludmVydCgxNSUpIHNlcGlhKDkwJSkgc2F0dXJhdGUoNjQ0OSUpIGh1ZS1yb3RhdGUoMzU5ZGVnKSBicmlnaHRuZXNzKDEwOCUpIGNvbnRyYXN0KDExNCUpO1xcbn1cXG5cXG4vKiBjb2xvciBjaG9pY2VzIGNvbnRhaW5lciAqL1xcbi5jb2xvci1jaG9pY2VzLWNvbnRhaW5lciB7XFxuICBvdmVyZmxvdzogc2Nyb2xsO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgaGVpZ2h0OiA5MHZoO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZjBmMGYwO1xcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTVweDtcXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxNXB4O1xcbiAgcGFkZGluZzogMjBweDtcXG4gIG9wYWNpdHk6IDE7XFxuICB0cmFuc2l0aW9uOiBhbGwgNDAwbXMgZWFzZTtcXG59XFxuLmNsb3NlLWNvbG9yLWNob2ljZXN7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwJSk7XFxuICBvcGFjaXR5OiAwO1xcbn1cXG5cXG4uZGVmYXVsdC1jb2xvcntcXG4gIGZpbHRlcjogaW52ZXJ0KDIzJSkgc2VwaWEoOCUpIHNhdHVyYXRlKDE1MzAlKSBodWUtcm90YXRlKDE2MWRlZykgYnJpZ2h0bmVzcyg5NyUpIGNvbnRyYXN0KDg3JSk7XFxufVxcblxcbi8qIGZvbnRzICovXFxuXFxuLyogbW9iaWxlIHN0eWxlcyAqL1xcblxcblxcbi8qIHNtYWxsIHRhYmxldCBzdHlsZXMgKi9cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MjBweCkge1xcbiAgXFxufVxcblxcbi8qIGxhcmdlIHRhYmxldHMgJiBsYXB0b3Agc3R5bGVzICovXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTYwcHgpIHtcXG4gIFxcbn1cXG5cXG4vKiBkZXNrdG9wIHN0eWxlcyAqL1xcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweCkge1xcbiAgXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gaW1wb3J0IEluYm94U3JjIGZyb20gJy4uL2Fzc2V0cy9pbmJveC5zdmcnO1xuLy8gaW1wb3J0IFRvZGF5U3JjIGZyb20gJy4uL2Fzc2V0cy9iaWN5Y2xlLnN2Zyc7XG5pbXBvcnQgeyBmb2xkZXJzIH0gZnJvbSAnLi4nO1xuaW1wb3J0IENpcmNsZSBmcm9tICcuLi9hc3NldHMvaWNvbnMvbXljaXJjbGUuc3ZnJztcblxuaW1wb3J0IGdvVG9QYWdlIGZyb20gXCIuLi9nb1RvUGFnZS9nb1RvUGFnZVwiO1xuaW1wb3J0IHsgY29sb3JOYW1lc0FuZEZpbHRlcnMgfSBmcm9tIFwiLi4vcHJvamVjdENvbG9ycy9wcm9qZWN0Q29sb3JzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBuZXdUb2RvKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpIHtcbiAgcmV0dXJuIHtcbiAgICB0aXRsZTogdGl0bGUsXG4gICAgZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uLFxuICAgIGR1ZURhdGU6IGR1ZURhdGUsXG4gICAgcHJpb3JpdHk6IHByaW9yaXR5LFxuICAgIGNvbXBsZXRlOiBmYWxzZSxcbiAgfVxufTtcblxuZnVuY3Rpb24gbmV3UHJvamVjdENvbnRhaW5lcigpIHtcbiAgcmV0dXJuIHtcbiAgICBsZW5ndGg6IDAsXG4gICAgYWRkRWxlbTogZnVuY3Rpb24gYWRkRWxlbSgpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIFtdLnB1c2guY2FsbCh0aGlzLCBhcmd1bWVudHNbaV0pO1xuICAgICAgfVxuICAgIH0sXG4gICAgcmVtb3ZlRWxlbTogZnVuY3Rpb24gcmVtb3ZlRWxlbSgpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIFtdLnNwbGljZS5jYWxsKHRoaXMsIGFyZ3VtZW50c1tpXSwgMSlcbiAgICAgIH1cbiAgICB9LFxuICB9XG59XG5cbiBleHBvcnQgZnVuY3Rpb24gbmV3UHJvamVjdChuYW1lLCBjb2xvciwgaXNDdXJyZW50UHJvamVjdCkge1xuICByZXR1cm4ge1xuICAgIGxlbmd0aDogMCxcbiAgICBuYW1lOiBuYW1lLFxuICAgIGNvbG9yOiBjb2xvcixcbiAgICBpc0N1cnJlbnRQcm9qZWN0LFxuICAgIGFkZFRvZG9zOiBmdW5jdGlvbiBhZGRUb2RvcygpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIFtdLnB1c2guY2FsbCh0aGlzLCBhcmd1bWVudHNbaV0pO1xuICAgICAgfVxuICAgIH0sXG4gICAgcmVtb3ZlVG9kb3M6IGZ1bmN0aW9uIHJlbW92ZVRvZG9zKCkge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgW10uc3BsaWNlLmNhbGwodGhpcywgYXJndW1lbnRzW2ldLCAxKVxuICAgICAgfVxuICAgIH0sXG4gIH1cbn1cblxuY29uc3QgSW5ib3ggPSBuZXdQcm9qZWN0KCdJbmJveCcsJ2dyZWVuJyk7XG5JbmJveC5zdGF0dXNUZXh0ID0gXCJBbGwgY2xlYXJcIjtcbkluYm94LnBhcmFUZXh0ID0gXCJMb29rcyBsaWtlIGV2ZXJ5dGhpbmcncyBvcmdhbml6ZWQgaW4gdGhlIHJpZ2h0IHBsYWNlLiBcXG4gVGFwICsgdG8gYWRkIGEgdGFza1wiO1xuXG5jb25zdCBUb2RheSA9IG5ld1Byb2plY3QoJ1RvZGF5JywnYmx1ZScsIHRydWUpO1xuVG9kYXkuc3RhdHVzVGV4dCA9IFwiWW91J3JlIGFsbCBkb25lIGZvciB0b2RheSEgXFxuIENvbmdyYXR1bGF0aW9ucyFcIjtcblRvZGF5LnBhcmFUZXh0ID0gXCJFbmpveSB0aGUgcmVzdCBvZiB0aGUgZGF5IVwiO1xuXG5leHBvcnQgY29uc3QgUHJvamVjdHMgPSBuZXdQcm9qZWN0Q29udGFpbmVyKCk7XG5Qcm9qZWN0cy5hZGRFbGVtKEluYm94LCBUb2RheSk7XG5cbmV4cG9ydCBjb25zdCB1c2VyUHJvamVjdHMgPSBuZXdQcm9qZWN0Q29udGFpbmVyKCk7XG51c2VyUHJvamVjdHMuc3RhdHVzVGV4dCA9IFwiV2hhdCBhcmUgeW91IHBsYW5uaW5nIHRvIGdldCBkb25lP1wiO1xudXNlclByb2plY3RzLnBhcmFUZXh0ID0gXCJUYXAgKyB0byBhZGQgYSB0YXNrIHRvIHRoaXMgcHJvamVjdFwiO1xuUHJvamVjdHMuYWRkRWxlbSh1c2VyUHJvamVjdHMpO1xuXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tDdXJyZW50UHJvamVjdCgpIHtcbiAgXG4gIFxuICBpZiAoUHJvamVjdHMubGVuZ3RoID09IDIpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDI7IGkrKykge1xuICAgICAgaWYgKFByb2plY3RzW2ldLmlzQ3VycmVudFByb2plY3QgPT09IHRydWUpIHtcbiAgICAgICAgcmV0dXJuIFByb2plY3RzW2ldO1xuICAgICAgfVxuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAyOyBpKyspIHtcbiAgICAgIGlmIChQcm9qZWN0c1tpXS5pc0N1cnJlbnRQcm9qZWN0ID09PSB0cnVlKSB7XG4gICAgICAgIHJldHVybiBQcm9qZWN0c1tpXTtcbiAgICAgIH1cbiAgICB9O1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgUHJvamVjdHNbMl0ubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChQcm9qZWN0c1syXVtpXS5pc0N1cnJlbnRQcm9qZWN0ID09PSB0cnVlKSB7XG4gICAgICAgIHJldHVybiBQcm9qZWN0c1syXVtpXTtcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgLy8gZm9yIChsZXQgaSA9IDA7IGkgPCBQcm9qZWN0cy5sZW5ndGg7IGkrKykge1xuICAvLyAgIGlmIChQcm9qZWN0c1tpXS5pc0N1cnJlbnRQcm9qZWN0ID09PSB0cnVlKSB7XG4gIC8vICAgICByZXR1cm4gUHJvamVjdHNbaV07XG4gIC8vICAgfVxuICAvLyB9O1xufVxuXG4vLyBleHBvcnQgZnVuY3Rpb24gY2hlY2tDdXJyZW50UHJvamVjdCgpIHtcbi8vICAgZm9yIChsZXQgaSA9IDA7IGkgPCBQcm9qZWN0cy5sZW5ndGg7IGkrKykge1xuLy8gICAgIGlmIChQcm9qZWN0c1tpXS5pc0N1cnJlbnRQcm9qZWN0ID09PSB0cnVlKSB7XG4vLyAgICAgICByZXR1cm4gUHJvamVjdHNbaV07XG4vLyAgICAgfVxuLy8gICB9O1xuLy8gfVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0RGVmYXVsdEN1cnJlbnRQcm9qZWN0c1RvRmFsc2UoKSB7XG4gIFByb2plY3RzWzBdLmlzQ3VycmVudFByb2plY3QgPSBmYWxzZTtcbiAgUHJvamVjdHNbMV0uaXNDdXJyZW50UHJvamVjdCA9IGZhbHNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0Q3VycmVudFByb2plY3QoY29udGFpbmVyLCBwcm9qZWN0bmFtZSkge1xuICBpZiAoY29udGFpbmVyID09PSBQcm9qZWN0cykge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29udGFpbmVyLmxlbmd0aCAtMTsgaSsrKSB7XG4gICAgICBpZiAoY29udGFpbmVyW2ldLm5hbWUgPT09IHByb2plY3RuYW1lKSB7XG4gICAgICAgIGNvbnRhaW5lcltpXS5pc0N1cnJlbnRQcm9qZWN0ID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnRhaW5lcltpXS5pc0N1cnJlbnRQcm9qZWN0ID0gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29udGFpbmVyLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoY29udGFpbmVyW2ldLm5hbWUgPT09IHByb2plY3RuYW1lKSB7XG4gICAgICAgIGNvbnRhaW5lcltpXS5pc0N1cnJlbnRQcm9qZWN0ID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnRhaW5lcltpXS5pc0N1cnJlbnRQcm9qZWN0ID0gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZVByb2plY3RzU2VjdGlvbkxpc3QoKSB7XG4gIGNvbnN0IHByb2plY3RzU2VjdGlvbkxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHMtc2VjdGlvbi1saXN0Jyk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdXNlclByb2plY3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgcHJvamVjdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIHByb2plY3RJdGVtLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtaXRlbScpO1xuICAgIHByb2plY3RzU2VjdGlvbkxpc3QuYXBwZW5kQ2hpbGQocHJvamVjdEl0ZW0pO1xuXG4gICAgY29uc3QgY2lyY2xlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgY2lyY2xlLnNyYyA9IENpcmNsZTtcbiAgICBjaXJjbGUuY2xhc3NMaXN0LmFkZCgnY2lyY2xlJyk7XG4gICAgcHJvamVjdEl0ZW0uaW5zZXJ0QmVmb3JlKGNpcmNsZSwgcHJvamVjdEl0ZW0uZmlyc3RDaGlsZCk7XG4gICAgY2lyY2xlLnN0eWxlLmZpbHRlciA9IHVzZXJQcm9qZWN0c1tpXS5maWx0ZXI7XG5cbiAgICBjb25zdCBwcm9qZWN0SXRlbU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgcHJvamVjdEl0ZW1OYW1lLnRleHRDb250ZW50ID0gdXNlclByb2plY3RzW2ldLm5hbWU7XG4gICAgcHJvamVjdEl0ZW0uYXBwZW5kQ2hpbGQocHJvamVjdEl0ZW1OYW1lKTtcbiAgIH1cbn1cblxuY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVGcm9tRE9NKCkge1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyJyk7XG4gIGhlYWRlci5jaGlsZE5vZGVzWzBdLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoaGVhZGVyLmNoaWxkTm9kZXNbMF0pO1xuICBoZWFkZXIuY2hpbGROb2Rlc1swXS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGhlYWRlci5jaGlsZE5vZGVzWzBdKTtcbiAgY29udGVudC5jaGlsZE5vZGVzWzFdLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoY29udGVudC5jaGlsZE5vZGVzWzFdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxpc3RlbkZvclByb2plY3RDbGljaygpIHtcbiAgY29uc3QgbWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cC1tZW51Jyk7XG4gIGNvbnN0IHByb2plY3RJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qZWN0LWl0ZW0nKTtcbiAgcHJvamVjdEl0ZW1zLmZvckVhY2gocHJvamVjdExpbmsgPT4ge1xuICAgIHByb2plY3RMaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgbWVudS5jbGFzc0xpc3QudG9nZ2xlKCdjbG9zZScpO1xuICAgICAgc2V0Q3VycmVudFByb2plY3QodXNlclByb2plY3RzLCBwcm9qZWN0TGluay50ZXh0Q29udGVudCk7XG4gICAgICByZW1vdmVGcm9tRE9NKCk7XG4gICAgICBnb1RvUGFnZSgpO1xuICAgICAgc2V0RGVmYXVsdEN1cnJlbnRQcm9qZWN0c1RvRmFsc2UoKTtcbiAgICB9KVxuICB9KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZW1wdHlFbGVtZW50KGVsZW1lbnQpIHtcbiAgd2hpbGUgKGVsZW1lbnQubGFzdEVsZW1lbnRDaGlsZCkge1xuICAgIGVsZW1lbnQucmVtb3ZlQ2hpbGQoZWxlbWVudC5sYXN0RWxlbWVudENoaWxkKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0UHJvamVjdEZpbHRlcihwcm9qZWN0KSB7XG4gIGxldCBpbmRleCA9IGNvbG9yTmFtZXNBbmRGaWx0ZXJzLmZpbmRJbmRleChhcnIgPT4gYXJyWzBdID09PSBwcm9qZWN0LmNvbG9yKTtcbiAgcHJvamVjdC5maWx0ZXIgPSBjb2xvck5hbWVzQW5kRmlsdGVyc1tpbmRleF1bMV07XG59XG5cblxuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlRm9sZGVycygpIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB1c2VyUHJvamVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICBmb2xkZXJzLnB1c2godXNlclByb2plY3RzW2ldLm5hbWUpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVGb2xkZXJCdXR0b25PcHRpb25zKCkge1xuICBjb25zb2xlLmxvZygnc3RhcnRlZCB1cGRhdGUgZm9sZGVyIGJ1dHRvbicpO1xuICBjb25zdCBmb2xkZXJCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9sZGVyLXNlbGVjdC1idXR0b24nKTtcbiAgZm9sZGVyQnV0dG9uLmlubmVySFRNTCA9IFwiXCI7XG4gIGZvbGRlcnMuZm9yRWFjaChmb2xkZXIgPT4ge1xuICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IGZvbGRlcjtcbiAgICBvcHRpb24udmFsdWUgPSBmb2xkZXI7XG4gICAgZm9sZGVyQnV0dG9uLmFwcGVuZENoaWxkKG9wdGlvbik7XG4gIH0pO1xufSIsImltcG9ydCBJbmJveFNyYyBmcm9tICcuLi9hc3NldHMvaW5ib3guc3ZnJztcbmltcG9ydCBUb2RheVNyYyBmcm9tICcuLi9hc3NldHMvYmljeWNsZS5zdmcnO1xuaW1wb3J0IFByb2plY3RTcmMgZnJvbSAnLi4vYXNzZXRzL2lsbHVzdHJhdGlvbnMvdW5kcmF3LXByb2plY3Qtc3JjLnN2Zyc7XG5pbXBvcnQgeyBjaGVja0N1cnJlbnRQcm9qZWN0LCBQcm9qZWN0cywgdXNlclByb2plY3RzIH0gZnJvbSAnLi4vYXBwbGljYXRpb24gbG9naWMvYXBwbGljYXRpb25Mb2dpYyc7XG4vLyBpbXBvcnQgeyBjaGVja0N1cnJlbnRQYWdlIH0gZnJvbSAnLi4vYXBwbGljYXRpb24gbG9naWMvYXBwbGljYXRpb25Mb2dpYyc7XG4vLyBpbXBvcnQgeyBzZXRJbWFnZVNyYyB9IGZyb20gJy4uL2FwcGxpY2F0aW9uIGxvZ2ljL2FwcGxpY2F0aW9uTG9naWMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnb1RvUGFnZSgpIHtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXInKTtcbiAgY29uc3QgbWVudUJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51LWJhcicpO1xuICBsZXQgY3VycmVudFByb2plY3QgPSBjaGVja0N1cnJlbnRQcm9qZWN0KCk7XG4gIFxuICBjb25zdCBzZWN0aW9uTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gIHNlY3Rpb25OYW1lLnRleHRDb250ZW50ID0gY3VycmVudFByb2plY3QubmFtZTtcbiAgaGVhZGVyLmFwcGVuZENoaWxkKHNlY3Rpb25OYW1lKTtcblxuICBjb25zdCBrZWJhYk1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAga2ViYWJNZW51LmNsYXNzTGlzdC5hZGQoJ3Rlc3QnKTtcbiAgaGVhZGVyLmFwcGVuZENoaWxkKGtlYmFiTWVudSk7XG4gIFxuICBjb25zdCBzZWN0aW9uQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBzZWN0aW9uQ29udGVudC5jbGFzc0xpc3QuYWRkKCdzZWN0aW9uLWNvbnRlbnQnKTtcbiAgY29udGVudC5pbnNlcnRCZWZvcmUoc2VjdGlvbkNvbnRlbnQsIG1lbnVCYXIpO1xuXG4gIGNvbnN0IHNlY3Rpb25JbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgc2VjdGlvbkltZy5jbGFzc0xpc3QuYWRkKCdzZWN0aW9uLWltYWdlJyk7XG5cbiAgbGV0IGN1cnJlbnRTZWN0aW9uTmFtZSA9IGN1cnJlbnRQcm9qZWN0Lm5hbWU7XG5cbiAgc2V0SW1hZ2VTcmMoKTtcbiAgc2VjdGlvbkNvbnRlbnQuYXBwZW5kQ2hpbGQoc2VjdGlvbkltZyk7XG5cbiAgY29uc3Qgc2VjdGlvbkNvbnRlbnRJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHNlY3Rpb25Db250ZW50SW5mby5jbGFzc0xpc3QuYWRkKCdzZWN0aW9uLWNvbnRlbnQtaW5mbycpO1xuICBzZWN0aW9uQ29udGVudC5hcHBlbmRDaGlsZChzZWN0aW9uQ29udGVudEluZm8pO1xuICBjb25zdCBzdGF0dXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIHN0YXR1cy5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ3doaXRlLXNwYWNlOiBwcmU7Jyk7XG4gIHNlY3Rpb25Db250ZW50SW5mby5hcHBlbmRDaGlsZChzdGF0dXMpO1xuXG4gIGNvbnN0IHBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIHNlY3Rpb25Db250ZW50SW5mby5hcHBlbmRDaGlsZChwYXJhKTtcblxuICBjaGVja0lmUHJvamVjdElzRW1wdHkoKTtcblxuICBmdW5jdGlvbiBjaGVja0lmUHJvamVjdElzRW1wdHkoKSB7XG4gICAgaWYgKGN1cnJlbnRQcm9qZWN0Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgc2V0U2VjdGlvblRleHRDb250ZW50KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHNldFNlY3Rpb25UZXh0Q29udGVudCgpIHtcbiAgICBpZiAodXNlclByb2plY3RzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgc3RhdHVzLnRleHRDb250ZW50ID0gY3VycmVudFByb2plY3Quc3RhdHVzVGV4dDtcbiAgICAgIHBhcmEudGV4dENvbnRlbnQgPSBjdXJyZW50UHJvamVjdC5wYXJhVGV4dDtcbiAgICB9IGVsc2Uge1xuICAgICAgc3RhdHVzLnRleHRDb250ZW50ID0gdXNlclByb2plY3RzLnN0YXR1c1RleHQ7XG4gICAgICBwYXJhLnRleHRDb250ZW50ID0gdXNlclByb2plY3RzLnBhcmFUZXh0O1xuICAgIH1cbiAgfVxuXG4gIFxuXG5cblxuICAvLyBmdW5jdGlvbiBzZXRTZWN0aW9uVGV4dENvbnRlbnQoKSB7XG4gIC8vICAgZm9yIChsZXQgaSA9IDAgOyBpIDwgdXNlclByb2plY3RzLmxlbmd0aDsgaSsrKSB7XG4gIC8vICAgICBpZiAodXNlclByb2plY3RzW2ldID09PSBjdXJyZW50UHJvamVjdCkge1xuICAvLyAgICAgICBzdGF0dXMudGV4dENvbnRlbnQgPSB1c2VyUHJvamVjdHMuc3RhdHVzVGV4dDtcbiAgLy8gICAgICAgcGFyYS50ZXh0Q29udGVudCA9IHVzZXJQcm9qZWN0cy5wYXJhVGV4dDtcbiAgLy8gICAgIH0gZWxzZSB7XG4gIC8vICAgICAgIHN0YXR1cy50ZXh0Q29udGVudCA9IGN1cnJlbnRQcm9qZWN0LnN0YXR1c1RleHQ7XG4gIC8vICAgICAgIHBhcmEudGV4dENvbnRlbnQgPSBjdXJyZW50UHJvamVjdC5wYXJhVGV4dDtcbiAgLy8gICAgIH1cbiAgLy8gICB9XG4gIC8vICAgY29uc29sZS5sb2codXNlclByb2plY3RzLmxlbmd0aClcbiAgLy8gfVxuXG4gIC8vIGZ1bmN0aW9uIHNldFNlY3Rpb25UZXh0Q29udGVudCgpIHtcbiAgLy8gICBmb3IobGV0IGkgPSAwOyBpIDwgMjsgaSsrKSB7XG4gIC8vICAgICBpZiAodXNlclByb2plY3RzW2ldID09PSBjdXJyZW50UHJvamVjdCkge1xuICAvLyAgICAgICBzdGF0dXMudGV4dENvbnRlbnQgPSBjdXJyZW50UHJvamVjdC5zdGF0dXNUZXh0O1xuICAvLyAgICAgICBwYXJhLnRleHRDb250ZW50ID0gY3VycmVudFByb2plY3QucGFyYVRleHQ7XG4gIC8vICAgICB9XG4gIC8vICAgfVxuXG4gIC8vICAgZm9yIChsZXQgaSA9IDAgOyBpIDwgdXNlclByb2plY3RzLmxlbmd0aDsgaSsrKSB7XG4gIC8vICAgICBpZiAodXNlclByb2plY3RzW2ldID09PSBjdXJyZW50UHJvamVjdCkge1xuICAvLyAgICAgICBzdGF0dXMudGV4dENvbnRlbnQgPSB1c2VyUHJvamVjdHMuc3RhdHVzVGV4dDtcbiAgLy8gICAgICAgcGFyYS50ZXh0Q29udGVudCA9IHVzZXJQcm9qZWN0cy5wYXJhVGV4dDtcbiAgLy8gICAgIH1cbiAgLy8gICB9XG4gIC8vIH1cblxuXG4gIGZ1bmN0aW9uIHNldEltYWdlU3JjKCkge1xuICAgIGlmIChjdXJyZW50U2VjdGlvbk5hbWUgPT09ICdJbmJveCcpIHtcbiAgICAgIHNlY3Rpb25JbWcuc3JjID0gSW5ib3hTcmM7XG4gICAgfSBlbHNlIGlmIChjdXJyZW50U2VjdGlvbk5hbWUgPT09ICdUb2RheScpIHtcbiAgICAgIHNlY3Rpb25JbWcuc3JjID0gVG9kYXlTcmM7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNlY3Rpb25JbWcuc3JjID0gUHJvamVjdFNyYztcbiAgICB9XG4gIH1cbn0iLCJpbXBvcnQgSGFwcHlOZXdzIGZyb20gJy4vaW5ib3guc3ZnJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2hvd0luYm94KCkge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcicpO1xuICBjb25zdCBtZW51QmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUtYmFyJyk7XG4gIFxuICBjb25zdCBzZWN0aW9uTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gIHNlY3Rpb25OYW1lLnRleHRDb250ZW50ID0gJ0luYm94JztcbiAgaGVhZGVyLmFwcGVuZENoaWxkKHNlY3Rpb25OYW1lKTtcblxuICBjb25zdCBrZWJhYk1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAga2ViYWJNZW51LmNsYXNzTGlzdC5hZGQoJ3Rlc3QnKTtcbiAgaGVhZGVyLmFwcGVuZENoaWxkKGtlYmFiTWVudSk7XG5cbiAgY29uc3Qgc2VjdGlvbkNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgc2VjdGlvbkNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnc2VjdGlvbi1jb250ZW50Jyk7XG4gIGNvbnRlbnQuaW5zZXJ0QmVmb3JlKHNlY3Rpb25Db250ZW50LCBtZW51QmFyKTtcblxuICBjb25zdCBpbmJveEltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBpbmJveEltZy5jbGFzc0xpc3QuYWRkKCdzZWN0aW9uLWltYWdlJyk7XG4gIGluYm94SW1nLnNyYyA9IEhhcHB5TmV3cztcbiAgc2VjdGlvbkNvbnRlbnQuYXBwZW5kQ2hpbGQoaW5ib3hJbWcpO1xuXG4gIGNvbnN0IHNlY3Rpb25Db250ZW50SW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBzZWN0aW9uQ29udGVudEluZm8uY2xhc3NMaXN0LmFkZCgnc2VjdGlvbi1jb250ZW50LWluZm8nKTtcbiAgc2VjdGlvbkNvbnRlbnQuYXBwZW5kQ2hpbGQoc2VjdGlvbkNvbnRlbnRJbmZvKTtcbiAgY29uc3Qgc3RhdHVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBzdGF0dXMuc2V0QXR0cmlidXRlKCdzdHlsZScsICd3aGl0ZS1zcGFjZTogcHJlOycpO1xuICBzdGF0dXMudGV4dENvbnRlbnQgPSBcIkFsbCBjbGVhclwiO1xuICBzZWN0aW9uQ29udGVudEluZm8uYXBwZW5kQ2hpbGQoc3RhdHVzKTtcbiAgY29uc3QgcGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgLy8gcGFyYS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ3doaXRlLXNwYWNlOiBwcmU7Jyk7XG4gIHBhcmEudGV4dENvbnRlbnQgPSBcIkxvb2tzIGxpa2UgZXZlcnl0aGluZydzIG9yZ2FuaXplZCBpbiB0aGUgcmlnaHQgcGxhY2UuIFxcbiBUYXAgKyB0byBhZGQgYSB0YXNrXCI7XG4gIHNlY3Rpb25Db250ZW50SW5mby5hcHBlbmRDaGlsZChwYXJhKTtcbn0iLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBzaG93VG9kYXkgZnJvbSAnLi90b2RheS90b2RheVBhZ2UnO1xuaW1wb3J0IEhhbWJ1cmdlck1lbnUgZnJvbSAnLi9hc3NldHMvaWNvbnMvSGFtYnVyZ2VyX2ljb24uc3ZnJztcbmltcG9ydCBNYWduaWZ5aW5nR2xhc3MgZnJvbSAnLi9hc3NldHMvaWNvbnMvbWFnbmlmeWluZy1nbGFzcy5zdmcnO1xuaW1wb3J0IEJlbGwgZnJvbSAnLi9hc3NldHMvaWNvbnMvYmVsbC5zdmcnO1xuaW1wb3J0IHNob3dJbmJveCBmcm9tICcuL2luYm94L2luYm94JztcbmltcG9ydCBzaG93TWVudSBmcm9tICcuL3BvcFVwTWVudS9tZW51JztcbmltcG9ydCBzaG93VGFza0VkaXRvciBmcm9tICcuL3Rhc2sgZWRpdG9yL3Rhc2tFZGl0b3InO1xuaW1wb3J0IHNob3dOZXdQcm9qZWN0Rm9ybSBmcm9tICcuL25ld1Byb2plY3RGb3JtL25ld1Byb2plY3RGb3JtJztcbmltcG9ydCBzaG93Q29sb3JDaG9pY2VzIGZyb20gJy4vcHJvamVjdENvbG9ycy9wcm9qZWN0Q29sb3JzJztcbmltcG9ydCB7IGVtcHR5RWxlbWVudCwgbmV3UHJvamVjdCAsUHJvamVjdHMsIHVwZGF0ZVByb2plY3RzU2VjdGlvbkxpc3QsIHVzZXJQcm9qZWN0cyB9IGZyb20gJy4vYXBwbGljYXRpb24gbG9naWMvYXBwbGljYXRpb25Mb2dpYyc7XG5pbXBvcnQgZ29Ub1BhZ2UgZnJvbSAnLi9nb1RvUGFnZS9nb1RvUGFnZSc7XG5pbXBvcnQgeyBzZXRDdXJyZW50UHJvamVjdCB9IGZyb20gJy4vYXBwbGljYXRpb24gbG9naWMvYXBwbGljYXRpb25Mb2dpYyc7XG5pbXBvcnQgeyBzZXREZWZhdWx0Q3VycmVudFByb2plY3RzVG9GYWxzZSB9IGZyb20gJy4vYXBwbGljYXRpb24gbG9naWMvYXBwbGljYXRpb25Mb2dpYyc7XG5pbXBvcnQgeyBsaXN0ZW5Gb3JQcm9qZWN0Q2xpY2sgfSBmcm9tICcuL2FwcGxpY2F0aW9uIGxvZ2ljL2FwcGxpY2F0aW9uTG9naWMnO1xuaW1wb3J0IHsgcmVtb3ZlRnJvbURPTSB9IGZyb20gJy4vYXBwbGljYXRpb24gbG9naWMvYXBwbGljYXRpb25Mb2dpYyc7XG5pbXBvcnQgeyBzZXRQcm9qZWN0RmlsdGVyIH0gZnJvbSAnLi9hcHBsaWNhdGlvbiBsb2dpYy9hcHBsaWNhdGlvbkxvZ2ljJztcbmltcG9ydCB7IG5ld1RvZG8gfSBmcm9tICcuL2FwcGxpY2F0aW9uIGxvZ2ljL2FwcGxpY2F0aW9uTG9naWMnO1xuaW1wb3J0IHsgdXBkYXRlRm9sZGVycyB9IGZyb20gJy4vYXBwbGljYXRpb24gbG9naWMvYXBwbGljYXRpb25Mb2dpYyc7XG5pbXBvcnQgeyB1cGRhdGVGb2xkZXJCdXR0b25PcHRpb25zIH0gZnJvbSAnLi9hcHBsaWNhdGlvbiBsb2dpYy9hcHBsaWNhdGlvbkxvZ2ljJztcblxuXG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcbmNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2hlYWRlcicpO1xuY29udGVudC5hcHBlbmRDaGlsZChoZWFkZXIpO1xuXG5jb25zdCBtZW51QmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5tZW51QmFyLmNsYXNzTGlzdC5hZGQoJ21lbnUtYmFyJyk7XG5jb250ZW50LmFwcGVuZENoaWxkKG1lbnVCYXIpO1xuXG5jb25zdCBoYW1idXJnZXJNZW51QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcbmhhbWJ1cmdlck1lbnVCdXR0b24uc3JjID0gSGFtYnVyZ2VyTWVudTtcbmhhbWJ1cmdlck1lbnVCdXR0b24uY2xhc3NMaXN0LmFkZCgnaGFtYnVyZ2VyLW1lbnUtaW1nJyk7XG5tZW51QmFyLmFwcGVuZENoaWxkKGhhbWJ1cmdlck1lbnVCdXR0b24pO1xuXG5jb25zdCBhZGRUYXNrQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5hZGRUYXNrQnRuLmNsYXNzTGlzdC5hZGQoJ2FkZC10YXNrLWJ1dHRvbicpO1xuYWRkVGFza0J0bi50eXBlID0gJ2J1dHRvbic7XG5hZGRUYXNrQnRuLnRleHRDb250ZW50ID0gJysnO1xubWVudUJhci5hcHBlbmRDaGlsZChhZGRUYXNrQnRuKTtcblxuY29uc3Qgc2VhcmNoQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG5zZWFyY2hCdG4uY2xhc3NMaXN0LmFkZCgnc2VhcmNoLWJ1dHRvbicpO1xuc2VhcmNoQnRuLnNyYyA9IE1hZ25pZnlpbmdHbGFzcztcbm1lbnVCYXIuYXBwZW5kQ2hpbGQoc2VhcmNoQnRuKTtcblxuY29uc3Qgbm90aWZpY2F0aW9uc0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xubm90aWZpY2F0aW9uc0J0bi5jbGFzc0xpc3QuYWRkKCdub3RpZmljYXRpb25zLWJ1dHRvbicpO1xubm90aWZpY2F0aW9uc0J0bi5zcmMgPSBCZWxsO1xubWVudUJhci5hcHBlbmRDaGlsZChub3RpZmljYXRpb25zQnRuKTtcblxuZXhwb3J0IGxldCBmb2xkZXJzID0gW1Byb2plY3RzWzBdLm5hbWUsIFByb2plY3RzWzFdLm5hbWVdO1xuXG5cbmdvVG9QYWdlKCk7XG5zaG93TWVudSgpO1xuc2hvd1Rhc2tFZGl0b3IoKTtcbnNob3dOZXdQcm9qZWN0Rm9ybSgpO1xuc2hvd0NvbG9yQ2hvaWNlcygpO1xuXG5jb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbCcpO1xuY29uc3QgY2xvc2VNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZS1tb2RhbCcpO1xuXG5jb25zdCBtZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwLW1lbnUnKTtcbmhhbWJ1cmdlck1lbnVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIG1lbnUuY2xhc3NMaXN0LnRvZ2dsZSgnY2xvc2UnKTtcbn0pO1xuXG5jb25zdCBjbG9zZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZS1idXR0b24nKTtcbmNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBtZW51LmNsYXNzTGlzdC50b2dnbGUoJ2Nsb3NlJyk7XG59KTtcblxuY29uc3QgbmV3UHJvamVjdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXctcHJvamVjdC1idXR0b24nKTtcbmNvbnN0IG5ld1Byb2plY3RGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ldy1wcm9qZWN0LWZvcm0nKTtcbmNvbnN0IGJhY2tCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3LXByb2plY3QtZm9ybS1iYWNrJyk7XG5jb25zdCBuZXdQcm9qZWN0U2F2ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXctcHJvamVjdC1mb3JtLXNhdmUnKTtcbmNvbnN0IHByb2plY3RzU2VjdGlvbkxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHMtc2VjdGlvbi1saXN0Jyk7XG5cbm5ld1Byb2plY3RTYXZlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBjb25zdCB1c2VyUHJvamVjdCA9IG5ld1Byb2plY3QobmV3UHJvamVjdE5hbWVJbnB1dC52YWx1ZSwgc2VsZWN0ZWRQcm9qZWN0Q29sb3IudGV4dENvbnRlbnQpO1xuICBzZXRQcm9qZWN0RmlsdGVyKHVzZXJQcm9qZWN0KTtcbiAgUHJvamVjdHNbMl0uYWRkRWxlbSh1c2VyUHJvamVjdCk7XG4gIHNldEN1cnJlbnRQcm9qZWN0KHVzZXJQcm9qZWN0cywgbmV3UHJvamVjdE5hbWVJbnB1dC52YWx1ZSk7XG4gIHNldERlZmF1bHRDdXJyZW50UHJvamVjdHNUb0ZhbHNlKCk7XG4gIGNsZWFyTmV3UHJvamVjdEZvcm0oKTtcbiAgZW1wdHlFbGVtZW50KHByb2plY3RzU2VjdGlvbkxpc3QpO1xuICB1cGRhdGVQcm9qZWN0c1NlY3Rpb25MaXN0KCk7XG4gIGxpc3RlbkZvclByb2plY3RDbGljaygpO1xuICByZW1vdmVGcm9tRE9NKCk7XG4gIGdvVG9QYWdlKCk7XG4gIHVwZGF0ZUZvbGRlcnMoKTtcbn0pXG5cbm5ld1Byb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIG1lbnUuY2xhc3NMaXN0LnRvZ2dsZSgnY2xvc2UnKTtcbiAgbmV3UHJvamVjdEZvcm0uY2xhc3NMaXN0LnRvZ2dsZSgnY2xvc2UtcHJvamVjdC1mb3JtJyk7XG59KVxuXG5jb25zdCBuZXdQcm9qZWN0TmFtZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ldy1wcm9qZWN0LW5hbWUtaW5wdXQnKTtcbmNvbnN0IG1haW5Db2xvckljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1jb2xvci1pY29uJyk7XG5jb25zdCBzZWxlY3RlZFByb2plY3RDb2xvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWxlY3RlZC1wcm9qZWN0LWNvbG9yJyk7XG5iYWNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBjbGVhck5ld1Byb2plY3RGb3JtKCk7XG59KVxuXG5mdW5jdGlvbiBjbGVhck5ld1Byb2plY3RGb3JtKCkge1xuICBuZXdQcm9qZWN0Rm9ybS5jbGFzc0xpc3QudG9nZ2xlKCdjbG9zZS1wcm9qZWN0LWZvcm0nKTtcbiAgbmV3UHJvamVjdE5hbWVJbnB1dC52YWx1ZSA9ICcnO1xuICBtYWluQ29sb3JJY29uLnN0eWxlLmZpbHRlciA9ICd1bnNldCc7XG4gIG1haW5Db2xvckljb24uY2xhc3NMaXN0LmFkZCgnZGVmYXVsdC1jb2xvcicpO1xuICBzZWxlY3RlZFByb2plY3RDb2xvci50ZXh0Q29udGVudCA9ICdDaGFyY29hbCc7XG59XG5cbmNvbnN0IHNlY3Rpb25MaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tZW51LXNlY3Rpb25zLWxpc3Q+bGknKTtcbnNlY3Rpb25MaW5rcy5mb3JFYWNoKGxpbmsgPT4ge1xuICBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIG1lbnUuY2xhc3NMaXN0LnRvZ2dsZSgnY2xvc2UnKTtcbiAgICByZW1vdmVGcm9tRE9NKCk7XG4gICAgc2V0Q3VycmVudFByb2plY3QoUHJvamVjdHMsIGxpbmsudGV4dENvbnRlbnQpO1xuICAgIGlmIChQcm9qZWN0c1syXS5sZW5ndGggPiAwKSB7XG4gICAgICBzZXRDdXJyZW50UHJvamVjdChQcm9qZWN0c1syXSwgbGluay50ZXh0Q29udGVudClcbiAgICB9O1xuICAgIGdvVG9QYWdlKCk7XG4gIH0pXG59KVxuXG5hZGRUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBtb2RhbC5zaG93TW9kYWwoKTtcbiAgdXBkYXRlRm9sZGVyQnV0dG9uT3B0aW9ucygpO1xufSlcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiBpZiAoZS50YXJnZXQudGFnTmFtZSAhPT0gJ0RJQUxPRycpIHJldHVyblxuIG1vZGFsLmNsb3NlKCk7XG59KVxuXG5jb25zdCBjb2xvckZvcm1Hcm91cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb2xvci1mb3JtLWdyb3VwJyk7XG5jb25zdCBjb2xvckNob2ljZXNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29sb3ItY2hvaWNlcy1jb250YWluZXInKTtcbmNvbG9yRm9ybUdyb3VwLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBjb2xvckNob2ljZXNDb250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZSgnY2xvc2UtY29sb3ItY2hvaWNlcycpO1xufSlcblxuY29uc3QgbmV3VGFza1N1Ym1pdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdWJtaXQtYnV0dG9uJyk7XG5jb25zdCBuZXdUYXNrVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay10aXRsZS1pbnB1dCcpO1xuY29uc3QgbmV3VGFza0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stZGVzY3JpcHRpb24taW5wdXQnKTtcbmNvbnN0IG5ld1Rhc2tEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmR1ZS1kYXRlLWJ1dHRvbicpO1xuY29uc3QgbmV3VGFza0ZvbGRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb2xkZXItc2VsZWN0LWJ1dHRvbicpO1xuXG5uZXdUYXNrU3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBpZiAobmV3VGFza1RpdGxlLnZhbHVlLmxlbmd0aCA9PT0gMCkgcmV0dXJuXG5cbiAgLy8gY29uc29sZS5sb2cobmV3VGFza1RpdGxlLnZhbHVlLCBuZXdUYXNrRGVzY3JpcHRpb24udmFsdWUsIG5ld1Rhc2tEYXRlLnZhbHVlLCBuZXdUYXNrRm9sZGVyLnZhbHVlKTtcblxuICBjb25zdCB0YXNrID0gbmV3VG9kbyhuZXdUYXNrVGl0bGUudmFsdWUsIG5ld1Rhc2tEZXNjcmlwdGlvbi52YWx1ZSwgbmV3VGFza0RhdGUudmFsdWUpO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdXNlclByb2plY3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHVzZXJQcm9qZWN0c1tpXS5uYW1lID09PSBuZXdUYXNrRm9sZGVyLnZhbHVlKSB7XG4gICAgICAvLyBjb25zb2xlLmxvZyh1c2VyUHJvamVjdHNbaV0pO1xuICAgICAgdXNlclByb2plY3RzW2ldLmFkZFRvZG9zKHRhc2spO1xuICAgIH1cbiAgfVxuICAvLyBjb25zb2xlLmxvZyh0YXNrKTtcbiAgXG59KVxuIiwiaW1wb3J0IEFycm93IGZyb20gJy4vYXJyb3ctbGVmdC1zb2xpZC5zdmcnO1xuaW1wb3J0IENoZWNrIGZyb20gJy4vY2hlY2stc29saWQuc3ZnJztcbmltcG9ydCBMaXN0QWx0IGZyb20gJy4vbGlzdC1hbHQuc3ZnJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2hvd05ld1Byb2plY3RGb3JtKCkge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcbiAgY29uc3QgbmV3UHJvamVjdEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gIG5ld1Byb2plY3RGb3JtLmNsYXNzTGlzdC5hZGQoJ25ldy1wcm9qZWN0LWZvcm0nKTtcbiAgbmV3UHJvamVjdEZvcm0uY2xhc3NMaXN0LmFkZCgnY2xvc2UtcHJvamVjdC1mb3JtJyk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQobmV3UHJvamVjdEZvcm0pO1xuXG4gIGNvbnN0IG5ld1Byb2plY3RGb3JtSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG5ld1Byb2plY3RGb3JtSGVhZGVyLmNsYXNzTGlzdC5hZGQoJ25ldy1wcm9qZWN0LWZvcm0taGVhZGVyJyk7XG4gIG5ld1Byb2plY3RGb3JtLmFwcGVuZENoaWxkKG5ld1Byb2plY3RGb3JtSGVhZGVyKTtcblxuICBjb25zdCBiYWNrQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIGJhY2tCdG4uc3JjID0gQXJyb3c7XG4gIGJhY2tCdG4uY2xhc3NMaXN0LmFkZCgnbmV3LXByb2plY3QtZm9ybS1iYWNrJyk7XG4gIG5ld1Byb2plY3RGb3JtSGVhZGVyLmFwcGVuZENoaWxkKGJhY2tCdG4pO1xuXG4gIGNvbnN0IG5ld1Byb2plY3RGb3JtSDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICBuZXdQcm9qZWN0Rm9ybUgzLmNsYXNzTGlzdC5hZGQoJ25ldy1wcm9qZWN0LWZvcm0taDMnKTtcbiAgbmV3UHJvamVjdEZvcm1IMy50ZXh0Q29udGVudCA9ICdBZGQgcHJvamVjdCc7XG4gIG5ld1Byb2plY3RGb3JtSGVhZGVyLmFwcGVuZENoaWxkKG5ld1Byb2plY3RGb3JtSDMpO1xuXG4gIGNvbnN0IG5ld1Byb2plY3RGb3JtU2F2ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBuZXdQcm9qZWN0Rm9ybVNhdmVCdG4uc3JjID0gQ2hlY2s7XG4gIG5ld1Byb2plY3RGb3JtU2F2ZUJ0bi5jbGFzc0xpc3QuYWRkKCduZXctcHJvamVjdC1mb3JtLXNhdmUnKTtcbiAgbmV3UHJvamVjdEZvcm1IZWFkZXIuYXBwZW5kQ2hpbGQobmV3UHJvamVjdEZvcm1TYXZlQnRuKTtcblxuICBjb25zdCBmb3JtR3JvdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZm9ybUdyb3VwLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tZ3JvdXAnKTtcbiAgbmV3UHJvamVjdEZvcm0uYXBwZW5kQ2hpbGQoZm9ybUdyb3VwKTtcblxuICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gIGxhYmVsLmZvciA9ICdwcm9qZWN0TmFtZSc7XG4gIGxhYmVsLnRleHRDb250ZW50ID0gJ05hbWUnO1xuICBsYWJlbC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LW5hbWUtbGFiZWwnKTtcbiAgZm9ybUdyb3VwLmFwcGVuZENoaWxkKGxhYmVsKTtcblxuXG4gIGNvbnN0IG5ld1Byb2plY3ROYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBuZXdQcm9qZWN0TmFtZUlucHV0LnR5cGUgPSAndGV4dCc7XG4gIG5ld1Byb2plY3ROYW1lSW5wdXQuaWQgPSAncHJvamVjdE5hbWUnO1xuICBuZXdQcm9qZWN0TmFtZUlucHV0LmNsYXNzTGlzdC5hZGQoJ25ldy1wcm9qZWN0LW5hbWUtaW5wdXQnKTtcbiAgbmV3UHJvamVjdE5hbWVJbnB1dC5uYW1lID0gJ25hbWUnO1xuICBmb3JtR3JvdXAuYXBwZW5kQ2hpbGQobmV3UHJvamVjdE5hbWVJbnB1dCk7XG5cbiAgY29uc3QgY29sb3JGb3JtR3JvdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29sb3JGb3JtR3JvdXAuY2xhc3NMaXN0LmFkZCgnY29sb3ItZm9ybS1ncm91cCcpO1xuICBuZXdQcm9qZWN0Rm9ybS5hcHBlbmRDaGlsZChjb2xvckZvcm1Hcm91cCk7XG5cbiAgY29uc3QgbWFpbkNvbG9ySWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBtYWluQ29sb3JJY29uLnNyYyA9IExpc3RBbHQ7XG4gIG1haW5Db2xvckljb24uY2xhc3NMaXN0LmFkZCgnY29sb3ItaWNvbicpO1xuICBtYWluQ29sb3JJY29uLmNsYXNzTGlzdC5hZGQoJ21haW4tY29sb3ItaWNvbicpO1xuICBtYWluQ29sb3JJY29uLmNsYXNzTGlzdC5hZGQoJ2RlZmF1bHQtY29sb3InKTtcbiAgY29sb3JGb3JtR3JvdXAuYXBwZW5kQ2hpbGQobWFpbkNvbG9ySWNvbik7XG5cbiAgY29uc3QgY29sb3JMYWJlbEFuZE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29sb3JMYWJlbEFuZE5hbWUuY2xhc3NMaXN0LmFkZCgnY29sb3ItbGFiZWwtYW5kLW5hbWUnKVxuICBjb2xvckZvcm1Hcm91cC5hcHBlbmRDaGlsZChjb2xvckxhYmVsQW5kTmFtZSk7XG5cbiAgY29uc3Qgc2VsZWN0ZWRDb2xvckxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBzZWxlY3RlZENvbG9yTGFiZWwuY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQtY29sb3ItbGFiZWwnKTtcbiAgc2VsZWN0ZWRDb2xvckxhYmVsLnRleHRDb250ZW50ID0gJ0NvbG9yJztcbiAgY29sb3JMYWJlbEFuZE5hbWUuYXBwZW5kQ2hpbGQoc2VsZWN0ZWRDb2xvckxhYmVsKTtcblxuICBjb25zdCBzZWxlY3RlZFByb2plY3RDb2xvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgc2VsZWN0ZWRQcm9qZWN0Q29sb3IuY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQtcHJvamVjdC1jb2xvcicpO1xuICBzZWxlY3RlZFByb2plY3RDb2xvci50ZXh0Q29udGVudCA9ICdDaGFyY29hbCc7XG4gIGNvbG9yTGFiZWxBbmROYW1lLmFwcGVuZENoaWxkKHNlbGVjdGVkUHJvamVjdENvbG9yKTtcbn0iLCJpbXBvcnQgVHJheSBmcm9tICcuL3RyYXkuc3ZnJztcbmltcG9ydCBDYWxlbmRhciBmcm9tICcuL2NhbGVuZGFyLnN2Zyc7XG5pbXBvcnQgQ2xvc2UgZnJvbSAnLi94LnN2ZydcbmltcG9ydCBQbHVzQ2lyY2xlIGZyb20gJy4vcGx1cy1jaXJjbGUtc29saWQuc3ZnJztcbi8vIGltcG9ydCB7IHVzZXJQcm9qZWN0cyB9IGZyb20gJy4uL2FwcGxpY2F0aW9uIGxvZ2ljL2FwcGxpY2F0aW9uTG9naWMnO1xuaW1wb3J0IHsgdXBkYXRlUHJvamVjdHNTZWN0aW9uTGlzdCB9IGZyb20gJy4uL2FwcGxpY2F0aW9uIGxvZ2ljL2FwcGxpY2F0aW9uTG9naWMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzaG93TWVudSgpIHtcbiBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcbiBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2Jyk7XG4gbWVudS5jbGFzc0xpc3QuYWRkKCdwb3B1cC1tZW51Jyk7XG4gbWVudS5jbGFzc0xpc3QuYWRkKCdjbG9zZScpO1xuIG1lbnUucm9sZSA9ICduYXZpZ2F0aW9uJztcbiBjb250ZW50LmFwcGVuZENoaWxkKG1lbnUpO1xuXG4gY29uc3QgY2xvc2VCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiBjbG9zZUJ0bi5zcmMgPSBDbG9zZTtcbiBjbG9zZUJ0bi5jbGFzc0xpc3QuYWRkKCdjbG9zZS1idXR0b24nKTtcbiBtZW51LmFwcGVuZENoaWxkKGNsb3NlQnRuKTtcblxuIGNvbnN0IG1lbnVTZWN0aW9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuIG1lbnVTZWN0aW9ucy5jbGFzc0xpc3QuYWRkKCdtZW51LXNlY3Rpb25zJyk7XG4gbWVudS5hcHBlbmRDaGlsZChtZW51U2VjdGlvbnMpO1xuXG4gY29uc3QgbWVudVNlY3Rpb25zTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gbWVudVNlY3Rpb25zTGlzdC5jbGFzc0xpc3QuYWRkKCdtZW51LXNlY3Rpb25zLWxpc3QnKTtcbiBjb25zdCBpbmJveEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuIFxuIGNvbnN0IHRvZGF5SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gXG4gbWVudVNlY3Rpb25zLmFwcGVuZENoaWxkKG1lbnVTZWN0aW9uc0xpc3QpO1xuIG1lbnVTZWN0aW9uc0xpc3QuYXBwZW5kQ2hpbGQoaW5ib3hJdGVtKTtcbiBtZW51U2VjdGlvbnNMaXN0LmFwcGVuZENoaWxkKHRvZGF5SXRlbSk7XG5cbiBjb25zdCBpbmJveEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiBpbmJveEljb24uc3JjID0gVHJheTtcbiBpbmJveEl0ZW0uYXBwZW5kQ2hpbGQoaW5ib3hJY29uKTtcbiBpbmJveEljb24uY2xhc3NMaXN0LmFkZCgnc2VjdGlvbi1pY29uJyk7XG5cbiBjb25zdCB0b2RheUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiB0b2RheUljb24uc3JjID0gQ2FsZW5kYXI7XG4gdG9kYXlJdGVtLmFwcGVuZENoaWxkKHRvZGF5SWNvbik7XG4gdG9kYXlJY29uLmNsYXNzTGlzdC5hZGQoJ3NlY3Rpb24taWNvbicpO1xuXG4gY29uc3QgaW5ib3hTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuIGNvbnN0IHRvZGF5U3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiBpbmJveFNwYW4udGV4dENvbnRlbnQgPSAnSW5ib3gnO1xuIHRvZGF5U3Bhbi50ZXh0Q29udGVudCA9ICdUb2RheSc7XG4gaW5ib3hJdGVtLmFwcGVuZENoaWxkKGluYm94U3Bhbik7XG4gdG9kYXlJdGVtLmFwcGVuZENoaWxkKHRvZGF5U3Bhbik7XG5cbiBjb25zdCBwcm9qZWN0c1NlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiBwcm9qZWN0c1NlY3Rpb24uY2xhc3NMaXN0LmFkZCgncHJvamVjdHMtc2VjdGlvbicpO1xuIG1lbnUuYXBwZW5kQ2hpbGQocHJvamVjdHNTZWN0aW9uKTtcblxuIGNvbnN0IHByb2plY3RzU2VjdGlvbkhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuIHByb2plY3RzU2VjdGlvbkhlYWRlci5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LXNlY3Rpb24taGVhZGVyJyk7XG4gcHJvamVjdHNTZWN0aW9uLmFwcGVuZENoaWxkKHByb2plY3RzU2VjdGlvbkhlYWRlcik7XG5cbiBjb25zdCBwcm9qZWN0c1NlY3Rpb25UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiBwcm9qZWN0c1NlY3Rpb25UaXRsZS50ZXh0Q29udGVudCA9ICdQcm9qZWN0cyc7XG4gcHJvamVjdHNTZWN0aW9uVGl0bGUuY2xhc3NMaXN0LmFkZCgncHJvamVjdHMtc2VjdGlvbi10aXRsZScpO1xuIHByb2plY3RzU2VjdGlvbkhlYWRlci5hcHBlbmRDaGlsZChwcm9qZWN0c1NlY3Rpb25UaXRsZSk7XG5cbiBjb25zdCBuZXdQcm9qZWN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gbmV3UHJvamVjdEJ0bi5zcmMgPSBQbHVzQ2lyY2xlO1xuIG5ld1Byb2plY3RCdG4uY2xhc3NMaXN0LmFkZCgnbmV3LXByb2plY3QtYnV0dG9uJyk7XG4gcHJvamVjdHNTZWN0aW9uSGVhZGVyLmFwcGVuZENoaWxkKG5ld1Byb2plY3RCdG4pO1xuXG4gY29uc3QgcHJvamVjdHNTZWN0aW9uTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gcHJvamVjdHNTZWN0aW9uTGlzdC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0cy1zZWN0aW9uLWxpc3QnKTtcbiBwcm9qZWN0c1NlY3Rpb24uYXBwZW5kQ2hpbGQocHJvamVjdHNTZWN0aW9uTGlzdCk7XG5cbiB1cGRhdGVQcm9qZWN0c1NlY3Rpb25MaXN0KCk7XG59XG4gIFxuXG4iLCJpbXBvcnQgTGlzdEFsdCBmcm9tICcuL2xpc3QtYWx0LnN2Zyc7XG5cbmV4cG9ydCBjb25zdCBjb2xvck5hbWVzQW5kRmlsdGVycyA9IFtcbiAgWydCZXJyeSByZWQnLCAnaW52ZXJ0KDE2JSkgc2VwaWEoMTclKSBzYXR1cmF0ZSg2MDExJSkgaHVlLXJvdGF0ZSgzMjZkZWcpIGJyaWdodG5lc3MoOTQlKSBjb250cmFzdCg5NSUpJ10sXG4gIFsnUmVkJywgJ2ludmVydCgxNSUpIHNlcGlhKDkwJSkgc2F0dXJhdGUoNjQ0OSUpIGh1ZS1yb3RhdGUoMzU5ZGVnKSBicmlnaHRuZXNzKDEwOCUpIGNvbnRyYXN0KDExNCUpJ10sXG4gIFsnT3JhbmdlJywgJ2ludmVydCg2MiUpIHNlcGlhKDUyJSkgc2F0dXJhdGUoMTc5MCUpIGh1ZS1yb3RhdGUoMGRlZykgYnJpZ2h0bmVzcygxMDMlKSBjb250cmFzdCgxMDQlKSddLFxuICBbJ1llbGxvdycsICdpbnZlcnQoODUlKSBzZXBpYSg4NSUpIHNhdHVyYXRlKDEzMjIlKSBodWUtcm90YXRlKDM1NWRlZykgYnJpZ2h0bmVzcygxMDMlKSBjb250cmFzdCgxMDclKSddLFxuICBbJ09saXZlIGdyZWVuJywgJ2ludmVydCgzNiUpIHNlcGlhKDEwMCUpIHNhdHVyYXRlKDEwNjMlKSBodWUtcm90YXRlKDQwZGVnKSBicmlnaHRuZXNzKDkyJSkgY29udHJhc3QoMTA1JSknXSxcbiAgWydMaW1lIGdyZWVuJywgJ2ludmVydCg2NCUpIHNlcGlhKDI3JSkgc2F0dXJhdGUoNDczNCUpIGh1ZS1yb3RhdGUoNzZkZWcpIGJyaWdodG5lc3MoMTA3JSkgY29udHJhc3QoMTM0JSknXSxcbiAgWydHcmVlbicsICdpbnZlcnQoMzAlKSBzZXBpYSg1NSUpIHNhdHVyYXRlKDE3OTglKSBodWUtcm90YXRlKDkwZGVnKSBicmlnaHRuZXNzKDEwMyUpIGNvbnRyYXN0KDEwOSUpJ10sXG4gIFsnTWludCBncmVlbicsICdpbnZlcnQoOTUlKSBzZXBpYSgyOSUpIHNhdHVyYXRlKDMxNzglKSBodWUtcm90YXRlKDQ5ZGVnKSBicmlnaHRuZXNzKDExOSUpIGNvbnRyYXN0KDEwMCUpJ10sXG4gIFsnVGVhbCcsICdpbnZlcnQoMjQlKSBzZXBpYSg4MyUpIHNhdHVyYXRlKDIzMTAlKSBodWUtcm90YXRlKDE2MmRlZykgYnJpZ2h0bmVzcyg5NSUpIGNvbnRyYXN0KDEwMSUpJ10sXG4gIFsnU2t5IGJsdWUnLCAnaW52ZXJ0KDc5JSkgc2VwaWEoODklKSBzYXR1cmF0ZSgxODU4JSkgaHVlLXJvdGF0ZSgxNjlkZWcpIGJyaWdodG5lc3MoOTYlKSBjb250cmFzdCg5MSUpJ10sXG4gIFsnTGlnaHQgYmx1ZScsICdpbnZlcnQoODklKSBzZXBpYSg1JSkgc2F0dXJhdGUoMjEyNyUpIGh1ZS1yb3RhdGUoMTYyZGVnKSBicmlnaHRuZXNzKDEwMCUpIGNvbnRyYXN0KDgxJSknXSxcbiAgWydCbHVlJywgJ2ludmVydCg4JSkgc2VwaWEoMTAwJSkgc2F0dXJhdGUoNzI5NyUpIGh1ZS1yb3RhdGUoMjQ3ZGVnKSBicmlnaHRuZXNzKDk2JSkgY29udHJhc3QoMTQyJSknXSxcbiAgWydHcmFwZScsICdpbnZlcnQoMjUlKSBzZXBpYSg1MCUpIHNhdHVyYXRlKDIxMzQlKSBodWUtcm90YXRlKDI1MGRlZykgYnJpZ2h0bmVzcyg4OSUpIGNvbnRyYXN0KDEwNSUpJ10sXG4gIFsnVmlvbGV0JywgJ2ludmVydCg4MyUpIHNlcGlhKDI4JSkgc2F0dXJhdGUoMzU2MiUpIGh1ZS1yb3RhdGUoMjQ1ZGVnKSBicmlnaHRuZXNzKDk1JSkgY29udHJhc3QoOTYlKSddLFxuICBbJ0xhdmVuZGVyJywgJ2ludmVydCg5NSUpIHNlcGlhKDc0JSkgc2F0dXJhdGUoMTYyNSUpIGh1ZS1yb3RhdGUoMTgwZGVnKSBicmlnaHRuZXNzKDEwNyUpIGNvbnRyYXN0KDk2JSknXSxcbiAgWydNYWdlbnRhJywgJ2ludmVydCgyMSUpIHNlcGlhKDM4JSkgc2F0dXJhdGUoNzM5MiUpIGh1ZS1yb3RhdGUoMjk3ZGVnKSBicmlnaHRuZXNzKDExNSUpIGNvbnRyYXN0KDEzMCUpJ10sXG4gIFsnU2FsbW9uJywgJ2ludmVydCg2NyUpIHNlcGlhKDQ5JSkgc2F0dXJhdGUoMTY0NiUpIGh1ZS1yb3RhdGUoMzEzZGVnKSBicmlnaHRuZXNzKDEwMCUpIGNvbnRyYXN0KDk3JSknXSxcbiAgWydDaGFyY29hbCcsICdpbnZlcnQoMjMlKSBzZXBpYSg4JSkgc2F0dXJhdGUoMTUzMCUpIGh1ZS1yb3RhdGUoMTYxZGVnKSBicmlnaHRuZXNzKDk3JSkgY29udHJhc3QoODclKSddLFxuICBbJ0dyZXknLCAnaW52ZXJ0KDU0JSkgc2VwaWEoMCUpIHNhdHVyYXRlKDE0MjUlKSBodWUtcm90YXRlKDE2NWRlZykgYnJpZ2h0bmVzcyg5MiUpIGNvbnRyYXN0KDg1JSknXSxcbiAgWydUYXVwZScsICdpbnZlcnQoMjElKSBzZXBpYSgxNCUpIHNhdHVyYXRlKDc5NSUpIGh1ZS1yb3RhdGUoMzQ1ZGVnKSBicmlnaHRuZXNzKDk3JSkgY29udHJhc3QoODglKSddXG5dXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNob3dDb2xvckNob2ljZXMoKSB7XG4gIGNvbnN0IG1haW5Db2xvckljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1jb2xvci1pY29uJyk7XG4gIGNvbnN0IHNlbGVjdGVkUHJvamVjdENvbG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlbGVjdGVkLXByb2plY3QtY29sb3InKTtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XG4gIGNvbnN0IGNvbG9yQ2hvaWNlc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb2xvckNob2ljZXNDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29sb3ItY2hvaWNlcy1jb250YWluZXInKTtcbiAgY29sb3JDaG9pY2VzQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Nsb3NlLWNvbG9yLWNob2ljZXMnKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChjb2xvckNob2ljZXNDb250YWluZXIpO1xuXG4gIGNvbnN0IGgzVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICBoM1RpdGxlLnRleHRDb250ZW50ID0gJ0NvbG9yJztcbiAgY29sb3JDaG9pY2VzQ29udGFpbmVyLmFwcGVuZENoaWxkKGgzVGl0bGUpO1xuXG4gIGNvbnN0IGNvbG9yQ2hvaWNlc0xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICBjb2xvckNob2ljZXNMaXN0LmNsYXNzTGlzdC5hZGQoJ2NvbG9yLWNob2ljZXMtbGlzdCcpO1xuICBjb2xvckNob2ljZXNDb250YWluZXIuYXBwZW5kQ2hpbGQoY29sb3JDaG9pY2VzTGlzdCk7XG5cbiAgY29sb3JOYW1lc0FuZEZpbHRlcnMuZm9yRWFjaChjb2xvciA9PiB7XG4gICAgY29uc3QgY29sb3JDaG9pY2VMaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgY29sb3JDaG9pY2VMaXN0SXRlbS5jbGFzc0xpc3QuYWRkKCdjb2xvci1saXN0LWl0ZW0nKTtcbiAgICBjb2xvckNob2ljZXNDb250YWluZXIuYXBwZW5kQ2hpbGQoY29sb3JDaG9pY2VMaXN0SXRlbSk7XG5cbiAgICBjb25zdCBjb2xvckljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBjb2xvckljb24uc3JjID0gTGlzdEFsdDtcbiAgICBjb2xvckljb24uY2xhc3NMaXN0LmFkZCgnY29sb3ItaWNvbicpO1xuICAgIGNvbG9yQ2hvaWNlTGlzdEl0ZW0uYXBwZW5kQ2hpbGQoY29sb3JJY29uKTtcbiAgICBjb2xvckljb24uc3R5bGUuZmlsdGVyID0gY29sb3JbMV07XG5cbiAgICBjb25zdCBjb2xvck5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgY29sb3JOYW1lLnRleHRDb250ZW50ID0gY29sb3JbMF07XG4gICAgY29sb3JDaG9pY2VMaXN0SXRlbS5hcHBlbmRDaGlsZChjb2xvck5hbWUpO1xuICB9KVxuXG4gIGNvbnN0IGxpc3RJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb2xvci1saXN0LWl0ZW0nKTtcbiAgbGlzdEl0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAvL3JlbW92ZSBkZWZhdWx0IGNvbG9yXG4gICAgICBtYWluQ29sb3JJY29uLmNsYXNzTGlzdC5yZW1vdmUoJ2RlZmF1bHQtY29sb3InKTtcbiAgICAgIC8vIFNldCB0aGUgbWFpbiBjb2xvciBpY29uIHRvIHRoZSBjb2xvciBvZiB0aGUgbmV3IHNlbGVjdGVkIGNvbG9yXG4gICAgICBtYWluQ29sb3JJY29uLnN0eWxlLmZpbHRlciA9IGUudGFyZ2V0LmNsb3Nlc3QoJ2xpJykuZmlyc3RDaGlsZC5zdHlsZS5maWx0ZXI7XG4gICAgICAvL1NldCB0aGUgcHJvamVjdCBjb2xvciBuYW1lIHRvIHRoZSB1c2VyIHNlbGVjdGVkIGNvbG9yXG4gICAgICBzZWxlY3RlZFByb2plY3RDb2xvci50ZXh0Q29udGVudCA9IGUudGFyZ2V0LmNsb3Nlc3QoJ2xpJykuY2hpbGRyZW5bMV0udGV4dENvbnRlbnQ7XG4gICAgICAvL0Nsb3NlIHRoZSBjb2xvciBjaG9pY2UgZm9ybVxuICAgICAgY29sb3JDaG9pY2VzQ29udGFpbmVyLmNsYXNzTGlzdC50b2dnbGUoJ2Nsb3NlLWNvbG9yLWNob2ljZXMnKTtcbiAgICB9KVxuICB9KVxufSIsImltcG9ydCBDYWxlbmRhciBmcm9tICcuLi9hc3NldHMvaWNvbnMvY2FsZW5kYXIuc3ZnJztcbmltcG9ydCBQYXBlclBsYW5lIGZyb20gJy4uL2Fzc2V0cy9pY29ucy9wYXBlci1wbGFuZS1yaWdodC5zdmcnO1xuaW1wb3J0IHsgZm9sZGVycyB9IGZyb20gJy4uJztcbmltcG9ydCB7IHVwZGF0ZUZvbGRlckJ1dHRvbk9wdGlvbnMsIHVwZGF0ZUZvbGRlcnMgfSBmcm9tICcuLi9hcHBsaWNhdGlvbiBsb2dpYy9hcHBsaWNhdGlvbkxvZ2ljJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2hvd1Rhc2tFZGl0b3IoKSB7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xuICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpYWxvZycpO1xuICBtb2RhbC5jbGFzc0xpc3QuYWRkKCdtb2RhbCcpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKG1vZGFsKTtcbiAgXG4gIGNvbnN0IG5ld1Rhc2tGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICBuZXdUYXNrRm9ybS5jbGFzc0xpc3QuYWRkKCd0YXNrLWVkaXRvcicpO1xuICBtb2RhbC5hcHBlbmRDaGlsZChuZXdUYXNrRm9ybSk7XG5cbiAgY29uc3QgY2xvc2VNb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBjbG9zZU1vZGFsLmNsYXNzTGlzdC5hZGQoJ2Nsb3NlLW1vZGFsJyk7XG4gIGNsb3NlTW9kYWwuaW5uZXJIVE1MID0gJyZ0aW1lcyc7XG4gIG5ld1Rhc2tGb3JtLmFwcGVuZENoaWxkKGNsb3NlTW9kYWwpO1xuXG4gIGNvbnN0IGlucHV0RmllbGRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGlucHV0RmllbGRzLmNsYXNzTGlzdC5hZGQoJ2lucHV0LWZpZWxkcycpO1xuICBuZXdUYXNrRm9ybS5hcHBlbmRDaGlsZChpbnB1dEZpZWxkcyk7XG5cbiAgY29uc3QgZXh0cmFGaWVsZHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZXh0cmFGaWVsZHMuY2xhc3NMaXN0LmFkZCgnZXh0cmEtZmllbGRzJyk7XG4gIG5ld1Rhc2tGb3JtLmFwcGVuZENoaWxkKGV4dHJhRmllbGRzKTtcblxuICBjb25zdCB0YXNrVGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIHRhc2tUaXRsZUlucHV0LmNsYXNzTGlzdC5hZGQoJ3Rhc2stdGl0bGUtaW5wdXQnKTtcbiAgdGFza1RpdGxlSW5wdXQudHlwZSA9ICd0ZXh0JztcbiAgdGFza1RpdGxlSW5wdXQuaWQgPSAndGl0bGUnO1xuICB0YXNrVGl0bGVJbnB1dC5uYW1lID0gJ3RpdGxlJztcbiAgdGFza1RpdGxlSW5wdXQucGxhY2Vob2xkZXIgPSAnZS5nLiBSZW5ldyBneW0gZXZlcnkgTWF5IDFzdCc7XG4gIGlucHV0RmllbGRzLmFwcGVuZENoaWxkKHRhc2tUaXRsZUlucHV0KTtcblxuICBjb25zdCB0YXNrRGVzY3JpcHRpb25JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gIHRhc2tEZXNjcmlwdGlvbklucHV0LmNsYXNzTGlzdC5hZGQoJ3Rhc2stZGVzY3JpcHRpb24taW5wdXQnKTtcbiAgdGFza0Rlc2NyaXB0aW9uSW5wdXQuaWQgPSAnZGVzY3JpcHRpb24nO1xuICB0YXNrRGVzY3JpcHRpb25JbnB1dC5uYW1lID0gJ2Rlc2NyaXB0aW9uJztcbiAgdGFza0Rlc2NyaXB0aW9uSW5wdXQucGxhY2Vob2xkZXIgPSAnRGVzY3JpcHRpb24nO1xuICBpbnB1dEZpZWxkcy5hcHBlbmRDaGlsZCh0YXNrRGVzY3JpcHRpb25JbnB1dCk7XG5cbiAgY29uc3QgcGlsbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgcGlsbHMuY2xhc3NMaXN0LmFkZCgncGlsbHMnKTtcbiAgY29uc3QgaXRlbUFjdGlvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgaXRlbUFjdGlvbnMuY2xhc3NMaXN0LmFkZCgnaXRlbS1hY3Rpb25zJyk7XG4gIGV4dHJhRmllbGRzLmFwcGVuZENoaWxkKHBpbGxzKTtcbiAgZXh0cmFGaWVsZHMuYXBwZW5kQ2hpbGQoaXRlbUFjdGlvbnMpO1xuXG4gIGNvbnN0IGR1ZURhdGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBkdWVEYXRlQnV0dG9uLmlkID0gJ2RhdGUnO1xuICBkdWVEYXRlQnV0dG9uLnR5cGUgPSAnZGF0ZSc7XG4gIFxuICBmdW5jdGlvbiBnZXRGdWxsRGF0ZSgpIHtcbiAgICBjb25zdCBkID0gbmV3IERhdGUoKTtcbiAgICBsZXQgZGF5ID0gZC5nZXREYXRlKCk7XG4gICAgbGV0IG1vbnRoO1xuICAgIGlmIChkLmdldE1vbnRoKCkgPCAxMCkge1xuICAgICAgbW9udGggPSAnMCcgKyBOdW1iZXIoZC5nZXRNb250aCgpKzEpLnRvU3RyaW5nKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1vbnRoID0gTnVtYmVyKGQuZ2V0TW9udGgoKSsxKS50b1N0cmluZygpO1xuICAgIH1cbiAgICBsZXQgeWVhciA9IGQuZ2V0RnVsbFllYXIoKTtcbiAgICBsZXQgZGF0ZU1pbiA9IGAke3llYXJ9LSR7bW9udGh9LSR7ZGF5fWA7XG4gICAgcmV0dXJuIGRhdGVNaW5cbiAgfVxuXG4gIGR1ZURhdGVCdXR0b24ubWluID0gZ2V0RnVsbERhdGUoKTtcbiAgZHVlRGF0ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdkdWUtZGF0ZS1idXR0b24nKTtcbiAgcGlsbHMuYXBwZW5kQ2hpbGQoZHVlRGF0ZUJ1dHRvbik7XG5cbiAgLy8gY29uc3QgZHVlRGF0ZUJ1dHRvbkljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgLy8gZHVlRGF0ZUJ1dHRvbkljb24uc3JjID0gQ2FsZW5kYXI7XG4gIC8vIGR1ZURhdGVCdXR0b25JY29uLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbi1pY29uJyk7XG4gIC8vIGR1ZURhdGVCdXR0b24uYXBwZW5kQ2hpbGQoZHVlRGF0ZUJ1dHRvbkljb24pO1xuXG4gIC8vIGNvbnN0IGR1ZURhdGVCdXR0b25UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAvLyBkdWVEYXRlQnV0dG9uVGV4dC50ZXh0Q29udGVudCA9ICdEdWUgZGF0ZSc7XG4gIC8vIGR1ZURhdGVCdXR0b25UZXh0LmNsYXNzTGlzdC5hZGQoJ2J1dHRvbi10ZXh0Jyk7XG4gIC8vIGR1ZURhdGVCdXR0b24uYXBwZW5kQ2hpbGQoZHVlRGF0ZUJ1dHRvblRleHQpO1xuXG4gIGNvbnN0IGZvbGRlckJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICBmb2xkZXJCdXR0b24uY2xhc3NMaXN0LmFkZCgnZm9sZGVyLXNlbGVjdC1idXR0b24nKTtcbiAgcGlsbHMuYXBwZW5kQ2hpbGQoZm9sZGVyQnV0dG9uKTtcbiAgXG4gIC8vIHVwZGF0ZUZvbGRlckJ1dHRvbk9wdGlvbnMoKTtcbiAgZm9sZGVycy5mb3JFYWNoKGZvbGRlciA9PiB7XG4gICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgb3B0aW9uLnRleHRDb250ZW50ID0gZm9sZGVyO1xuICAgIG9wdGlvbi52YWx1ZSA9IGZvbGRlcjtcbiAgICBmb2xkZXJCdXR0b24uYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgfSk7XG5cbiAgY29uc3Qgc3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIHN1Ym1pdC50eXBlID0gJ3N1Ym1pdCc7XG4gIHN1Ym1pdC5mb3JtTWV0aG9kID0gJ2RpYWxvZyc7XG4gIHN1Ym1pdC5jbGFzc0xpc3QuYWRkKCdzdWJtaXQtYnV0dG9uJyk7XG4gIG5ld1Rhc2tGb3JtLmFwcGVuZENoaWxkKHN1Ym1pdCk7XG5cbiAgY29uc3Qgc3VibWl0QnRuSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIHN1Ym1pdEJ0bkltZy5zcmMgPSBQYXBlclBsYW5lO1xuICBzdWJtaXRCdG5JbWcuY2xhc3NMaXN0LmFkZCgnc3VibWl0LWJ1dHRvbi1pY29uJyk7XG4gIHN1Ym1pdC5hcHBlbmRDaGlsZChzdWJtaXRCdG5JbWcpO1xufSIsImltcG9ydCBCaWN5Y2xlIGZyb20gJy4vYmljeWNsZS5zdmcnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzaG93VG9kYXkoKSB7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyJyk7XG4gIGNvbnN0IG1lbnVCYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudS1iYXInKTtcbiAgXG4gIGNvbnN0IHNlY3Rpb25OYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgc2VjdGlvbk5hbWUudGV4dENvbnRlbnQgPSAnVG9kYXknO1xuICBoZWFkZXIuYXBwZW5kQ2hpbGQoc2VjdGlvbk5hbWUpO1xuXG4gIGNvbnN0IGtlYmFiTWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBrZWJhYk1lbnUuY2xhc3NMaXN0LmFkZCgndGVzdCcpO1xuICBoZWFkZXIuYXBwZW5kQ2hpbGQoa2ViYWJNZW51KTtcblxuICBjb25zdCBzZWN0aW9uQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBzZWN0aW9uQ29udGVudC5jbGFzc0xpc3QuYWRkKCdzZWN0aW9uLWNvbnRlbnQnKTtcbiAgY29udGVudC5pbnNlcnRCZWZvcmUoc2VjdGlvbkNvbnRlbnQsIG1lbnVCYXIpO1xuXG4gIGNvbnN0IGJpY3ljbGVJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgYmljeWNsZUltZy5jbGFzc0xpc3QuYWRkKCdzZWN0aW9uLWltYWdlJyk7XG4gIGJpY3ljbGVJbWcuc3JjID0gQmljeWNsZTtcbiAgc2VjdGlvbkNvbnRlbnQuYXBwZW5kQ2hpbGQoYmljeWNsZUltZyk7XG5cbiAgY29uc3Qgc2VjdGlvbkNvbnRlbnRJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHNlY3Rpb25Db250ZW50SW5mby5jbGFzc0xpc3QuYWRkKCdzZWN0aW9uLWNvbnRlbnQtaW5mbycpO1xuICBzZWN0aW9uQ29udGVudC5hcHBlbmRDaGlsZChzZWN0aW9uQ29udGVudEluZm8pO1xuICBjb25zdCBzdGF0dXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIHN0YXR1cy5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ3doaXRlLXNwYWNlOiBwcmU7Jyk7XG4gIHN0YXR1cy50ZXh0Q29udGVudCA9IFwiWW91J3JlIGFsbCBkb25lIGZvciB0b2RheSEgXFxuIENvbmdyYXR1bGF0aW9ucyFcIjtcbiAgc2VjdGlvbkNvbnRlbnRJbmZvLmFwcGVuZENoaWxkKHN0YXR1cyk7XG4gIGNvbnN0IHBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIHBhcmEudGV4dENvbnRlbnQgPSAnRW5qb3kgdGhlIHJlc3Qgb2YgdGhlIGRheSEnO1xuICBzZWN0aW9uQ29udGVudEluZm8uYXBwZW5kQ2hpbGQocGFyYSk7XG5cbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=