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
___CSS_LOADER_EXPORT___.push([module.id, "/* variables */\n:root {\n  --primary: #F96126;\n  --secondary: #2F2E41;\n}\n\n/* reset */\nbody,p,a,ul,li,h1,h2,h3 {\n  margin: 0;\n  padding: 0;\n  text-decoration: none;\n}\nli {\n  list-style-type: none;\n}\n\n/* base styles */\nbody {\n  max-height: 100vh;\n  font-size: 14px;\n  font-family: 'Open Sans', sans-serif;\n}\n.content {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  height: 100vh;\n  position: relative;\n}\n.test:after {\n  content: '\\2807';\n  font-size: 1.4em;\n}\n.header {\n  padding: 10px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\nh3 {\n  font-weight: 600;\n}\n.section-content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 20px;\n}\n.section-image {\n  width: 50%;\n  max-width: 350px;\n  opacity: .8;\n}\n.section-content-info {\n  text-align: center;\n  line-height: 2;\n  font-size: 1.1em;\n  font-weight: 300;\n  padding: 10px 30px;\n}\n.section-content-info > *:last-child {\n  font-size: .8em;\n  font-weight: 400;\n  opacity: .5;\n}\n.menu-bar {\n  background: var(--primary);\n  display: flex;\n  align-items: center;\n  padding: 20px 20px 40px;\n  opacity: .9;\n  position: relative;\n}\n.hamburger-menu-img,\n.search-button,\n.notifications-button {\n  width: 22px;\n}\n.hamburger-menu-img {\n  width: 20px;\n  filter:  brightness(0) invert(1);\n}\n.search-button {\n  margin-left: auto;\n}\n.notifications-button {\n  margin-left: 15px;\n}\n.add-task-button {\n  width: 50px;\n  height: 50px;\n  background-color: var(--primary);\n  font-size: 2.5em;\n  font-weight: bold;\n  color: white;\n  border: 4px solid white;\n  border-radius: 50%;\n  position:absolute;\n  top: -25px;\n  left: 50%;\n  transform: translate(-50%);\n}\n.popup-menu {\n  box-sizing: border-box;\n  position: absolute;\n  bottom: 0;\n  background-color: white;\n  height: 100vh;\n  width: 100%;\n  border: 1px solid #f0f0f0;\n  border-top-left-radius: 15px;\n  border-top-right-radius: 15px;\n  padding: 20px;\n  opacity: 1;\n  transition: all 400ms ease;\n}\n.close{\n  transform: translateY(100%);\n  opacity: 0;\n}\n.close-button {\n  width: 32px;\n  display: block;\n  margin-left: auto;\n  margin-bottom: 20px;\n}\n.popup-menu > li {\n  margin-top: 20px;\n  cursor: pointer;\n}\n.menu-sections {\n  padding-left: 10px;\n}\n.menu-sections-list li{\n  display: flex;\n  align-items: center;\n  margin-top: 20px;\n  gap: 7px;\n}\n.section-icon {\n  width: 30px;\n}\n.projects-section {\n  margin-top: 40px;\n}\n.projects-section-title {\n  font-weight: bold;\n  font-size: 1em;\n}\n.projects-section-list {\n  padding-left: 10px;\n}\n.project-item {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-top: 20px;\n}\n.circle {\n  height: 25px;\n  width: 25px;\n  border-radius: 50%;\n  display: inline-block;\n}\n/* fonts */\n\n/* mobile styles */\n\n\n/* small tablet styles */\n@media screen and (min-width: 620px) {\n  \n}\n\n/* large tablets & laptop styles */\n@media screen and (min-width: 960px) {\n  \n}\n\n/* desktop styles */\n@media screen and (min-width: 1200px) {\n  \n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA,cAAc;AACd;EACE,kBAAkB;EAClB,oBAAoB;AACtB;;AAEA,UAAU;AACV;EACE,SAAS;EACT,UAAU;EACV,qBAAqB;AACvB;AACA;EACE,qBAAqB;AACvB;;AAEA,gBAAgB;AAChB;EACE,iBAAiB;EACjB,eAAe;EACf,oCAAoC;AACtC;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,8BAA8B;EAC9B,aAAa;EACb,kBAAkB;AACpB;AACA;EACE,gBAAgB;EAChB,gBAAgB;AAClB;AACA;EACE,aAAa;EACb,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;AACrB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,SAAS;AACX;AACA;EACE,UAAU;EACV,gBAAgB;EAChB,WAAW;AACb;AACA;EACE,kBAAkB;EAClB,cAAc;EACd,gBAAgB;EAChB,gBAAgB;EAChB,kBAAkB;AACpB;AACA;EACE,eAAe;EACf,gBAAgB;EAChB,WAAW;AACb;AACA;EACE,0BAA0B;EAC1B,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,WAAW;EACX,kBAAkB;AACpB;AACA;;;EAGE,WAAW;AACb;AACA;EACE,WAAW;EACX,gCAAgC;AAClC;AACA;EACE,iBAAiB;AACnB;AACA;EACE,iBAAiB;AACnB;AACA;EACE,WAAW;EACX,YAAY;EACZ,gCAAgC;EAChC,gBAAgB;EAChB,iBAAiB;EACjB,YAAY;EACZ,uBAAuB;EACvB,kBAAkB;EAClB,iBAAiB;EACjB,UAAU;EACV,SAAS;EACT,0BAA0B;AAC5B;AACA;EACE,sBAAsB;EACtB,kBAAkB;EAClB,SAAS;EACT,uBAAuB;EACvB,aAAa;EACb,WAAW;EACX,yBAAyB;EACzB,4BAA4B;EAC5B,6BAA6B;EAC7B,aAAa;EACb,UAAU;EACV,0BAA0B;AAC5B;AACA;EACE,2BAA2B;EAC3B,UAAU;AACZ;AACA;EACE,WAAW;EACX,cAAc;EACd,iBAAiB;EACjB,mBAAmB;AACrB;AACA;EACE,gBAAgB;EAChB,eAAe;AACjB;AACA;EACE,kBAAkB;AACpB;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,gBAAgB;EAChB,QAAQ;AACV;AACA;EACE,WAAW;AACb;AACA;EACE,gBAAgB;AAClB;AACA;EACE,iBAAiB;EACjB,cAAc;AAChB;AACA;EACE,kBAAkB;AACpB;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,SAAS;EACT,gBAAgB;AAClB;AACA;EACE,YAAY;EACZ,WAAW;EACX,kBAAkB;EAClB,qBAAqB;AACvB;AACA,UAAU;;AAEV,kBAAkB;;;AAGlB,wBAAwB;AACxB;;AAEA;;AAEA,kCAAkC;AAClC;;AAEA;;AAEA,mBAAmB;AACnB;;AAEA","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700&display=swap');\n\n/* variables */\n:root {\n  --primary: #F96126;\n  --secondary: #2F2E41;\n}\n\n/* reset */\nbody,p,a,ul,li,h1,h2,h3 {\n  margin: 0;\n  padding: 0;\n  text-decoration: none;\n}\nli {\n  list-style-type: none;\n}\n\n/* base styles */\nbody {\n  max-height: 100vh;\n  font-size: 14px;\n  font-family: 'Open Sans', sans-serif;\n}\n.content {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  height: 100vh;\n  position: relative;\n}\n.test:after {\n  content: '\\2807';\n  font-size: 1.4em;\n}\n.header {\n  padding: 10px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\nh3 {\n  font-weight: 600;\n}\n.section-content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 20px;\n}\n.section-image {\n  width: 50%;\n  max-width: 350px;\n  opacity: .8;\n}\n.section-content-info {\n  text-align: center;\n  line-height: 2;\n  font-size: 1.1em;\n  font-weight: 300;\n  padding: 10px 30px;\n}\n.section-content-info > *:last-child {\n  font-size: .8em;\n  font-weight: 400;\n  opacity: .5;\n}\n.menu-bar {\n  background: var(--primary);\n  display: flex;\n  align-items: center;\n  padding: 20px 20px 40px;\n  opacity: .9;\n  position: relative;\n}\n.hamburger-menu-img,\n.search-button,\n.notifications-button {\n  width: 22px;\n}\n.hamburger-menu-img {\n  width: 20px;\n  filter:  brightness(0) invert(1);\n}\n.search-button {\n  margin-left: auto;\n}\n.notifications-button {\n  margin-left: 15px;\n}\n.add-task-button {\n  width: 50px;\n  height: 50px;\n  background-color: var(--primary);\n  font-size: 2.5em;\n  font-weight: bold;\n  color: white;\n  border: 4px solid white;\n  border-radius: 50%;\n  position:absolute;\n  top: -25px;\n  left: 50%;\n  transform: translate(-50%);\n}\n.popup-menu {\n  box-sizing: border-box;\n  position: absolute;\n  bottom: 0;\n  background-color: white;\n  height: 100vh;\n  width: 100%;\n  border: 1px solid #f0f0f0;\n  border-top-left-radius: 15px;\n  border-top-right-radius: 15px;\n  padding: 20px;\n  opacity: 1;\n  transition: all 400ms ease;\n}\n.close{\n  transform: translateY(100%);\n  opacity: 0;\n}\n.close-button {\n  width: 32px;\n  display: block;\n  margin-left: auto;\n  margin-bottom: 20px;\n}\n.popup-menu > li {\n  margin-top: 20px;\n  cursor: pointer;\n}\n.menu-sections {\n  padding-left: 10px;\n}\n.menu-sections-list li{\n  display: flex;\n  align-items: center;\n  margin-top: 20px;\n  gap: 7px;\n}\n.section-icon {\n  width: 30px;\n}\n.projects-section {\n  margin-top: 40px;\n}\n.projects-section-title {\n  font-weight: bold;\n  font-size: 1em;\n}\n.projects-section-list {\n  padding-left: 10px;\n}\n.project-item {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-top: 20px;\n}\n.circle {\n  height: 25px;\n  width: 25px;\n  border-radius: 50%;\n  display: inline-block;\n}\n/* fonts */\n\n/* mobile styles */\n\n\n/* small tablet styles */\n@media screen and (min-width: 620px) {\n  \n}\n\n/* large tablets & laptop styles */\n@media screen and (min-width: 960px) {\n  \n}\n\n/* desktop styles */\n@media screen and (min-width: 1200px) {\n  \n}"],"sourceRoot":""}]);
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

 const projectsSectionTitle = document.createElement('span');
 projectsSectionTitle.textContent = 'Projects';
 projectsSectionTitle.classList.add('projects-section-title');
 projectsSection.appendChild(projectsSectionTitle);

 const projectsSectionList = document.createElement('ul');
 projectsSectionList.classList.add('projects-section-list');
 projectsSection.appendChild(projectsSectionList);

 const arrayOfProjectTitles = ['Welcome', 'Try Boards', 'Organize your life'];
 arrayOfProjectTitles.forEach(title => {
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

/***/ "./src/assets/icons/magnifying-glass.svg":
/*!***********************************************!*\
  !*** ./src/assets/icons/magnifying-glass.svg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f6e336db448a3bd6aafc.svg";

/***/ }),

/***/ "./src/inbox/inbox.svg":
/*!*****************************!*\
  !*** ./src/inbox/inbox.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4fe98a9b514f54c5378a.svg";

/***/ }),

/***/ "./src/popUpMenu/calendar.svg":
/*!************************************!*\
  !*** ./src/popUpMenu/calendar.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c8f71cca95d5638f8603.svg";

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _today_todayPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./today/todayPage */ "./src/today/todayPage.js");
/* harmony import */ var _assets_icons_Hamburger_icon_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/icons/Hamburger_icon.svg */ "./src/assets/icons/Hamburger_icon.svg");
/* harmony import */ var _assets_icons_magnifying_glass_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/icons/magnifying-glass.svg */ "./src/assets/icons/magnifying-glass.svg");
/* harmony import */ var _assets_icons_bell_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/icons/bell.svg */ "./src/assets/icons/bell.svg");
/* harmony import */ var _inbox_inbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./inbox/inbox */ "./src/inbox/inbox.js");
/* harmony import */ var _popUpMenu_menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./popUpMenu/menu */ "./src/popUpMenu/menu.js");








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

// showToday();
(0,_inbox_inbox__WEBPACK_IMPORTED_MODULE_5__["default"])();
(0,_popUpMenu_menu__WEBPACK_IMPORTED_MODULE_6__["default"])();

const menu = document.querySelector('.popup-menu');
hamburgerMenuButton.addEventListener('click', () => {
  menu.classList.toggle('close');
});

const closeBtn = document.querySelector('.close-button');
closeBtn.addEventListener('click', () => {
  menu.classList.toggle('close');
});

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
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSx3REFBUztBQUNYLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsRUFBRSw0REFBUztBQUNYLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvaW5ib3gvaW5ib3guanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvcG9wVXBNZW51L21lbnUuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvdG9kYXkvdG9kYXlQYWdlLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1PcGVuK1NhbnM6aXRhbCx3Z2h0QDAsMzAwOzAsNDAwOzAsNTAwOzAsNjAwOzAsNzAwOzAsODAwOzEsMzAwOzEsNDAwOzEsNTAwOzEsNjAwOzEsNzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qIHZhcmlhYmxlcyAqL1xcbjpyb290IHtcXG4gIC0tcHJpbWFyeTogI0Y5NjEyNjtcXG4gIC0tc2Vjb25kYXJ5OiAjMkYyRTQxO1xcbn1cXG5cXG4vKiByZXNldCAqL1xcbmJvZHkscCxhLHVsLGxpLGgxLGgyLGgzIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcbmxpIHtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG59XFxuXFxuLyogYmFzZSBzdHlsZXMgKi9cXG5ib2R5IHtcXG4gIG1heC1oZWlnaHQ6IDEwMHZoO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xcbn1cXG4uY29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi50ZXN0OmFmdGVyIHtcXG4gIGNvbnRlbnQ6ICdcXFxcMjgwNyc7XFxuICBmb250LXNpemU6IDEuNGVtO1xcbn1cXG4uaGVhZGVyIHtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuaDMge1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuLnNlY3Rpb24tY29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDIwcHg7XFxufVxcbi5zZWN0aW9uLWltYWdlIHtcXG4gIHdpZHRoOiA1MCU7XFxuICBtYXgtd2lkdGg6IDM1MHB4O1xcbiAgb3BhY2l0eTogLjg7XFxufVxcbi5zZWN0aW9uLWNvbnRlbnQtaW5mbyB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBsaW5lLWhlaWdodDogMjtcXG4gIGZvbnQtc2l6ZTogMS4xZW07XFxuICBmb250LXdlaWdodDogMzAwO1xcbiAgcGFkZGluZzogMTBweCAzMHB4O1xcbn1cXG4uc2VjdGlvbi1jb250ZW50LWluZm8gPiAqOmxhc3QtY2hpbGQge1xcbiAgZm9udC1zaXplOiAuOGVtO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIG9wYWNpdHk6IC41O1xcbn1cXG4ubWVudS1iYXIge1xcbiAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeSk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDIwcHggMjBweCA0MHB4O1xcbiAgb3BhY2l0eTogLjk7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5oYW1idXJnZXItbWVudS1pbWcsXFxuLnNlYXJjaC1idXR0b24sXFxuLm5vdGlmaWNhdGlvbnMtYnV0dG9uIHtcXG4gIHdpZHRoOiAyMnB4O1xcbn1cXG4uaGFtYnVyZ2VyLW1lbnUtaW1nIHtcXG4gIHdpZHRoOiAyMHB4O1xcbiAgZmlsdGVyOiAgYnJpZ2h0bmVzcygwKSBpbnZlcnQoMSk7XFxufVxcbi5zZWFyY2gtYnV0dG9uIHtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbn1cXG4ubm90aWZpY2F0aW9ucy1idXR0b24ge1xcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XFxufVxcbi5hZGQtdGFzay1idXR0b24ge1xcbiAgd2lkdGg6IDUwcHg7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcXG4gIGZvbnQtc2l6ZTogMi41ZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlcjogNHB4IHNvbGlkIHdoaXRlO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgcG9zaXRpb246YWJzb2x1dGU7XFxuICB0b3A6IC0yNXB4O1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSk7XFxufVxcbi5wb3B1cC1tZW51IHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGhlaWdodDogMTAwdmg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNmMGYwZjA7XFxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxNXB4O1xcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDE1cHg7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgb3BhY2l0eTogMTtcXG4gIHRyYW5zaXRpb246IGFsbCA0MDBtcyBlYXNlO1xcbn1cXG4uY2xvc2V7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwJSk7XFxuICBvcGFjaXR5OiAwO1xcbn1cXG4uY2xvc2UtYnV0dG9uIHtcXG4gIHdpZHRoOiAzMnB4O1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcbi5wb3B1cC1tZW51ID4gbGkge1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLm1lbnUtc2VjdGlvbnMge1xcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbn1cXG4ubWVudS1zZWN0aW9ucy1saXN0IGxpe1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgZ2FwOiA3cHg7XFxufVxcbi5zZWN0aW9uLWljb24ge1xcbiAgd2lkdGg6IDMwcHg7XFxufVxcbi5wcm9qZWN0cy1zZWN0aW9uIHtcXG4gIG1hcmdpbi10b3A6IDQwcHg7XFxufVxcbi5wcm9qZWN0cy1zZWN0aW9uLXRpdGxlIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgZm9udC1zaXplOiAxZW07XFxufVxcbi5wcm9qZWN0cy1zZWN0aW9uLWxpc3Qge1xcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbn1cXG4ucHJvamVjdC1pdGVtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxMHB4O1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG59XFxuLmNpcmNsZSB7XFxuICBoZWlnaHQ6IDI1cHg7XFxuICB3aWR0aDogMjVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuLyogZm9udHMgKi9cXG5cXG4vKiBtb2JpbGUgc3R5bGVzICovXFxuXFxuXFxuLyogc21hbGwgdGFibGV0IHN0eWxlcyAqL1xcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYyMHB4KSB7XFxuICBcXG59XFxuXFxuLyogbGFyZ2UgdGFibGV0cyAmIGxhcHRvcCBzdHlsZXMgKi9cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5NjBweCkge1xcbiAgXFxufVxcblxcbi8qIGRlc2t0b3Agc3R5bGVzICovXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIwMHB4KSB7XFxuICBcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQSxjQUFjO0FBQ2Q7RUFDRSxrQkFBa0I7RUFDbEIsb0JBQW9CO0FBQ3RCOztBQUVBLFVBQVU7QUFDVjtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1YscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUEsZ0JBQWdCO0FBQ2hCO0VBQ0UsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixvQ0FBb0M7QUFDdEM7QUFDQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsOEJBQThCO0VBQzlCLGFBQWE7RUFDYixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGFBQWE7RUFDYixhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixTQUFTO0FBQ1g7QUFDQTtFQUNFLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsV0FBVztBQUNiO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLFdBQVc7QUFDYjtBQUNBO0VBQ0UsMEJBQTBCO0VBQzFCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLFdBQVc7RUFDWCxrQkFBa0I7QUFDcEI7QUFDQTs7O0VBR0UsV0FBVztBQUNiO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsZ0NBQWdDO0FBQ2xDO0FBQ0E7RUFDRSxpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixnQ0FBZ0M7RUFDaEMsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsVUFBVTtFQUNWLFNBQVM7RUFDVCwwQkFBMEI7QUFDNUI7QUFDQTtFQUNFLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsU0FBUztFQUNULHVCQUF1QjtFQUN2QixhQUFhO0VBQ2IsV0FBVztFQUNYLHlCQUF5QjtFQUN6Qiw0QkFBNEI7RUFDNUIsNkJBQTZCO0VBQzdCLGFBQWE7RUFDYixVQUFVO0VBQ1YsMEJBQTBCO0FBQzVCO0FBQ0E7RUFDRSwyQkFBMkI7RUFDM0IsVUFBVTtBQUNaO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLFFBQVE7QUFDVjtBQUNBO0VBQ0UsV0FBVztBQUNiO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsU0FBUztFQUNULGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIscUJBQXFCO0FBQ3ZCO0FBQ0EsVUFBVTs7QUFFVixrQkFBa0I7OztBQUdsQix3QkFBd0I7QUFDeEI7O0FBRUE7O0FBRUEsa0NBQWtDO0FBQ2xDOztBQUVBOztBQUVBLG1CQUFtQjtBQUNuQjs7QUFFQVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1PcGVuK1NhbnM6aXRhbCx3Z2h0QDAsMzAwOzAsNDAwOzAsNTAwOzAsNjAwOzAsNzAwOzAsODAwOzEsMzAwOzEsNDAwOzEsNTAwOzEsNjAwOzEsNzAwJmRpc3BsYXk9c3dhcCcpO1xcblxcbi8qIHZhcmlhYmxlcyAqL1xcbjpyb290IHtcXG4gIC0tcHJpbWFyeTogI0Y5NjEyNjtcXG4gIC0tc2Vjb25kYXJ5OiAjMkYyRTQxO1xcbn1cXG5cXG4vKiByZXNldCAqL1xcbmJvZHkscCxhLHVsLGxpLGgxLGgyLGgzIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcbmxpIHtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG59XFxuXFxuLyogYmFzZSBzdHlsZXMgKi9cXG5ib2R5IHtcXG4gIG1heC1oZWlnaHQ6IDEwMHZoO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xcbn1cXG4uY29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi50ZXN0OmFmdGVyIHtcXG4gIGNvbnRlbnQ6ICdcXFxcMjgwNyc7XFxuICBmb250LXNpemU6IDEuNGVtO1xcbn1cXG4uaGVhZGVyIHtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuaDMge1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuLnNlY3Rpb24tY29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDIwcHg7XFxufVxcbi5zZWN0aW9uLWltYWdlIHtcXG4gIHdpZHRoOiA1MCU7XFxuICBtYXgtd2lkdGg6IDM1MHB4O1xcbiAgb3BhY2l0eTogLjg7XFxufVxcbi5zZWN0aW9uLWNvbnRlbnQtaW5mbyB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBsaW5lLWhlaWdodDogMjtcXG4gIGZvbnQtc2l6ZTogMS4xZW07XFxuICBmb250LXdlaWdodDogMzAwO1xcbiAgcGFkZGluZzogMTBweCAzMHB4O1xcbn1cXG4uc2VjdGlvbi1jb250ZW50LWluZm8gPiAqOmxhc3QtY2hpbGQge1xcbiAgZm9udC1zaXplOiAuOGVtO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIG9wYWNpdHk6IC41O1xcbn1cXG4ubWVudS1iYXIge1xcbiAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeSk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDIwcHggMjBweCA0MHB4O1xcbiAgb3BhY2l0eTogLjk7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5oYW1idXJnZXItbWVudS1pbWcsXFxuLnNlYXJjaC1idXR0b24sXFxuLm5vdGlmaWNhdGlvbnMtYnV0dG9uIHtcXG4gIHdpZHRoOiAyMnB4O1xcbn1cXG4uaGFtYnVyZ2VyLW1lbnUtaW1nIHtcXG4gIHdpZHRoOiAyMHB4O1xcbiAgZmlsdGVyOiAgYnJpZ2h0bmVzcygwKSBpbnZlcnQoMSk7XFxufVxcbi5zZWFyY2gtYnV0dG9uIHtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbn1cXG4ubm90aWZpY2F0aW9ucy1idXR0b24ge1xcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XFxufVxcbi5hZGQtdGFzay1idXR0b24ge1xcbiAgd2lkdGg6IDUwcHg7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcXG4gIGZvbnQtc2l6ZTogMi41ZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlcjogNHB4IHNvbGlkIHdoaXRlO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgcG9zaXRpb246YWJzb2x1dGU7XFxuICB0b3A6IC0yNXB4O1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSk7XFxufVxcbi5wb3B1cC1tZW51IHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGhlaWdodDogMTAwdmg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNmMGYwZjA7XFxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxNXB4O1xcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDE1cHg7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgb3BhY2l0eTogMTtcXG4gIHRyYW5zaXRpb246IGFsbCA0MDBtcyBlYXNlO1xcbn1cXG4uY2xvc2V7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwJSk7XFxuICBvcGFjaXR5OiAwO1xcbn1cXG4uY2xvc2UtYnV0dG9uIHtcXG4gIHdpZHRoOiAzMnB4O1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcbi5wb3B1cC1tZW51ID4gbGkge1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLm1lbnUtc2VjdGlvbnMge1xcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbn1cXG4ubWVudS1zZWN0aW9ucy1saXN0IGxpe1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgZ2FwOiA3cHg7XFxufVxcbi5zZWN0aW9uLWljb24ge1xcbiAgd2lkdGg6IDMwcHg7XFxufVxcbi5wcm9qZWN0cy1zZWN0aW9uIHtcXG4gIG1hcmdpbi10b3A6IDQwcHg7XFxufVxcbi5wcm9qZWN0cy1zZWN0aW9uLXRpdGxlIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgZm9udC1zaXplOiAxZW07XFxufVxcbi5wcm9qZWN0cy1zZWN0aW9uLWxpc3Qge1xcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbn1cXG4ucHJvamVjdC1pdGVtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxMHB4O1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG59XFxuLmNpcmNsZSB7XFxuICBoZWlnaHQ6IDI1cHg7XFxuICB3aWR0aDogMjVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuLyogZm9udHMgKi9cXG5cXG4vKiBtb2JpbGUgc3R5bGVzICovXFxuXFxuXFxuLyogc21hbGwgdGFibGV0IHN0eWxlcyAqL1xcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYyMHB4KSB7XFxuICBcXG59XFxuXFxuLyogbGFyZ2UgdGFibGV0cyAmIGxhcHRvcCBzdHlsZXMgKi9cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5NjBweCkge1xcbiAgXFxufVxcblxcbi8qIGRlc2t0b3Agc3R5bGVzICovXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIwMHB4KSB7XFxuICBcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgSGFwcHlOZXdzIGZyb20gJy4vaW5ib3guc3ZnJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2hvd0luZGV4KCkge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcicpO1xuICBjb25zdCBtZW51QmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUtYmFyJyk7XG4gIFxuICBjb25zdCBzZWN0aW9uTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gIHNlY3Rpb25OYW1lLnRleHRDb250ZW50ID0gJ0luYm94JztcbiAgaGVhZGVyLmFwcGVuZENoaWxkKHNlY3Rpb25OYW1lKTtcblxuICBjb25zdCBrZWJhYk1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAga2ViYWJNZW51LmNsYXNzTGlzdC5hZGQoJ3Rlc3QnKTtcbiAgaGVhZGVyLmFwcGVuZENoaWxkKGtlYmFiTWVudSk7XG5cbiAgY29uc3Qgc2VjdGlvbkNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgc2VjdGlvbkNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnc2VjdGlvbi1jb250ZW50Jyk7XG4gIGNvbnRlbnQuaW5zZXJ0QmVmb3JlKHNlY3Rpb25Db250ZW50LCBtZW51QmFyKTtcblxuICBjb25zdCBpbmJveEltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBpbmJveEltZy5jbGFzc0xpc3QuYWRkKCdzZWN0aW9uLWltYWdlJyk7XG4gIGluYm94SW1nLnNyYyA9IEhhcHB5TmV3cztcbiAgc2VjdGlvbkNvbnRlbnQuYXBwZW5kQ2hpbGQoaW5ib3hJbWcpO1xuXG4gIGNvbnN0IHNlY3Rpb25Db250ZW50SW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBzZWN0aW9uQ29udGVudEluZm8uY2xhc3NMaXN0LmFkZCgnc2VjdGlvbi1jb250ZW50LWluZm8nKTtcbiAgc2VjdGlvbkNvbnRlbnQuYXBwZW5kQ2hpbGQoc2VjdGlvbkNvbnRlbnRJbmZvKTtcbiAgY29uc3Qgc3RhdHVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBzdGF0dXMuc2V0QXR0cmlidXRlKCdzdHlsZScsICd3aGl0ZS1zcGFjZTogcHJlOycpO1xuICBzdGF0dXMudGV4dENvbnRlbnQgPSBcIkFsbCBjbGVhclwiO1xuICBzZWN0aW9uQ29udGVudEluZm8uYXBwZW5kQ2hpbGQoc3RhdHVzKTtcbiAgY29uc3QgcGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgLy8gcGFyYS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ3doaXRlLXNwYWNlOiBwcmU7Jyk7XG4gIHBhcmEudGV4dENvbnRlbnQgPSBcIkxvb2tzIGxpa2UgZXZlcnl0aGluZydzIG9yZ2FuaXplZCBpbiB0aGUgcmlnaHQgcGxhY2UuIFxcbiBUYXAgKyB0byBhZGQgYSB0YXNrXCI7XG4gIHNlY3Rpb25Db250ZW50SW5mby5hcHBlbmRDaGlsZChwYXJhKTtcbn0iLCJpbXBvcnQgVHJheSBmcm9tICcuL3RyYXkuc3ZnJztcbmltcG9ydCBDYWxlbmRhciBmcm9tICcuL2NhbGVuZGFyLnN2Zyc7XG5pbXBvcnQgQ2xvc2UgZnJvbSAnLi94LnN2ZydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2hvd01lbnUoKSB7XG4gY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XG4gY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpO1xuIG1lbnUuY2xhc3NMaXN0LmFkZCgncG9wdXAtbWVudScpO1xuIG1lbnUuY2xhc3NMaXN0LmFkZCgnY2xvc2UnKTtcbiBtZW51LnJvbGUgPSAnbmF2aWdhdGlvbic7XG4gY29udGVudC5hcHBlbmRDaGlsZChtZW51KTtcblxuIGNvbnN0IGNsb3NlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gY2xvc2VCdG4uc3JjID0gQ2xvc2U7XG4gY2xvc2VCdG4uY2xhc3NMaXN0LmFkZCgnY2xvc2UtYnV0dG9uJyk7XG4gbWVudS5hcHBlbmRDaGlsZChjbG9zZUJ0bik7XG5cbiBjb25zdCBtZW51U2VjdGlvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiBtZW51U2VjdGlvbnMuY2xhc3NMaXN0LmFkZCgnbWVudS1zZWN0aW9ucycpO1xuIG1lbnUuYXBwZW5kQ2hpbGQobWVudVNlY3Rpb25zKTtcblxuIGNvbnN0IG1lbnVTZWN0aW9uc0xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuIG1lbnVTZWN0aW9uc0xpc3QuY2xhc3NMaXN0LmFkZCgnbWVudS1zZWN0aW9ucy1saXN0Jyk7XG4gY29uc3QgaW5ib3hJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiBcbiBjb25zdCB0b2RheUl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuIFxuIG1lbnVTZWN0aW9ucy5hcHBlbmRDaGlsZChtZW51U2VjdGlvbnNMaXN0KTtcbiBtZW51U2VjdGlvbnNMaXN0LmFwcGVuZENoaWxkKGluYm94SXRlbSk7XG4gbWVudVNlY3Rpb25zTGlzdC5hcHBlbmRDaGlsZCh0b2RheUl0ZW0pO1xuXG4gY29uc3QgaW5ib3hJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gaW5ib3hJY29uLnNyYyA9IFRyYXk7XG4gaW5ib3hJdGVtLmFwcGVuZENoaWxkKGluYm94SWNvbik7XG4gaW5ib3hJY29uLmNsYXNzTGlzdC5hZGQoJ3NlY3Rpb24taWNvbicpO1xuXG4gY29uc3QgdG9kYXlJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gdG9kYXlJY29uLnNyYyA9IENhbGVuZGFyO1xuIHRvZGF5SXRlbS5hcHBlbmRDaGlsZCh0b2RheUljb24pO1xuIHRvZGF5SWNvbi5jbGFzc0xpc3QuYWRkKCdzZWN0aW9uLWljb24nKTtcblxuIGNvbnN0IGluYm94U3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiBjb25zdCB0b2RheVNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gaW5ib3hTcGFuLnRleHRDb250ZW50ID0gJ0luYm94JztcbiB0b2RheVNwYW4udGV4dENvbnRlbnQgPSAnVG9kYXknO1xuIGluYm94SXRlbS5hcHBlbmRDaGlsZChpbmJveFNwYW4pO1xuIHRvZGF5SXRlbS5hcHBlbmRDaGlsZCh0b2RheVNwYW4pO1xuXG4gY29uc3QgcHJvamVjdHNTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gcHJvamVjdHNTZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RzLXNlY3Rpb24nKTtcbiBtZW51LmFwcGVuZENoaWxkKHByb2plY3RzU2VjdGlvbik7XG5cbiBjb25zdCBwcm9qZWN0c1NlY3Rpb25UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiBwcm9qZWN0c1NlY3Rpb25UaXRsZS50ZXh0Q29udGVudCA9ICdQcm9qZWN0cyc7XG4gcHJvamVjdHNTZWN0aW9uVGl0bGUuY2xhc3NMaXN0LmFkZCgncHJvamVjdHMtc2VjdGlvbi10aXRsZScpO1xuIHByb2plY3RzU2VjdGlvbi5hcHBlbmRDaGlsZChwcm9qZWN0c1NlY3Rpb25UaXRsZSk7XG5cbiBjb25zdCBwcm9qZWN0c1NlY3Rpb25MaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiBwcm9qZWN0c1NlY3Rpb25MaXN0LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RzLXNlY3Rpb24tbGlzdCcpO1xuIHByb2plY3RzU2VjdGlvbi5hcHBlbmRDaGlsZChwcm9qZWN0c1NlY3Rpb25MaXN0KTtcblxuIGNvbnN0IGFycmF5T2ZQcm9qZWN0VGl0bGVzID0gWydXZWxjb21lJywgJ1RyeSBCb2FyZHMnLCAnT3JnYW5pemUgeW91ciBsaWZlJ107XG4gYXJyYXlPZlByb2plY3RUaXRsZXMuZm9yRWFjaCh0aXRsZSA9PiB7XG4gICBjb25zdCBwcm9qZWN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICBwcm9qZWN0SXRlbS5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWl0ZW0nKTtcbiAgIHByb2plY3RzU2VjdGlvbkxpc3QuYXBwZW5kQ2hpbGQocHJvamVjdEl0ZW0pO1xuICAgY29uc3QgcHJvamVjdFNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICBwcm9qZWN0U3Bhbi50ZXh0Q29udGVudCA9IHRpdGxlO1xuICAgcHJvamVjdFNwYW4uY2xhc3NMaXN0LmFkZCgncHJvamVjdC1zcGFuJyk7XG4gICBwcm9qZWN0SXRlbS5hcHBlbmRDaGlsZChwcm9qZWN0U3Bhbik7XG4gfSk7XG5cbiBjb25zdCBwcm9qZWN0SXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvamVjdHMtc2VjdGlvbi1saXN0IGxpJyk7XG4gcHJvamVjdEl0ZW1zLmZvckVhY2gocHJvamVjdEl0ZW0gPT4ge1xuICAgY29uc3QgY2lyY2xlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgY2lyY2xlLmNsYXNzTGlzdC5hZGQoJ2NpcmNsZScpO1xuICAgcHJvamVjdEl0ZW0uaW5zZXJ0QmVmb3JlKGNpcmNsZSwgcHJvamVjdEl0ZW0uZmlyc3RDaGlsZCk7XG4gICBjaXJjbGUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gYCR7Z2V0Q29sb3IoKX1gO1xuIH0pXG4gXG4gZnVuY3Rpb24gZ2V0Q29sb3IoKSB7XG4gIHJldHVybiBcImhzbGEoXCIgKyB+figzNjAgKiBNYXRoLnJhbmRvbSgpKSArIFwiLFwiICtcbiAgXCI3MCUsXCIrXG4gIFwiODAlLDEpXCJcbiB9XG5cbn1cbiAgXG5cbiIsImltcG9ydCBCaWN5Y2xlIGZyb20gJy4vYmljeWNsZS5zdmcnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzaG93VG9kYXkoKSB7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyJyk7XG4gIGNvbnN0IG1lbnVCYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudS1iYXInKTtcbiAgXG4gIGNvbnN0IHNlY3Rpb25OYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgc2VjdGlvbk5hbWUudGV4dENvbnRlbnQgPSAnVG9kYXknO1xuICBoZWFkZXIuYXBwZW5kQ2hpbGQoc2VjdGlvbk5hbWUpO1xuXG4gIGNvbnN0IGtlYmFiTWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBrZWJhYk1lbnUuY2xhc3NMaXN0LmFkZCgndGVzdCcpO1xuICBoZWFkZXIuYXBwZW5kQ2hpbGQoa2ViYWJNZW51KTtcblxuICBjb25zdCBzZWN0aW9uQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBzZWN0aW9uQ29udGVudC5jbGFzc0xpc3QuYWRkKCdzZWN0aW9uLWNvbnRlbnQnKTtcbiAgY29udGVudC5pbnNlcnRCZWZvcmUoc2VjdGlvbkNvbnRlbnQsIG1lbnVCYXIpO1xuXG4gIGNvbnN0IGJpY3ljbGVJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgYmljeWNsZUltZy5jbGFzc0xpc3QuYWRkKCdzZWN0aW9uLWltYWdlJyk7XG4gIGJpY3ljbGVJbWcuc3JjID0gQmljeWNsZTtcbiAgc2VjdGlvbkNvbnRlbnQuYXBwZW5kQ2hpbGQoYmljeWNsZUltZyk7XG5cbiAgY29uc3Qgc2VjdGlvbkNvbnRlbnRJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHNlY3Rpb25Db250ZW50SW5mby5jbGFzc0xpc3QuYWRkKCdzZWN0aW9uLWNvbnRlbnQtaW5mbycpO1xuICBzZWN0aW9uQ29udGVudC5hcHBlbmRDaGlsZChzZWN0aW9uQ29udGVudEluZm8pO1xuICBjb25zdCBzdGF0dXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIHN0YXR1cy5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ3doaXRlLXNwYWNlOiBwcmU7Jyk7XG4gIHN0YXR1cy50ZXh0Q29udGVudCA9IFwiWW91J3JlIGFsbCBkb25lIGZvciB0b2RheSEgXFxuIENvbmdyYXR1bGF0aW9ucyFcIjtcbiAgc2VjdGlvbkNvbnRlbnRJbmZvLmFwcGVuZENoaWxkKHN0YXR1cyk7XG4gIGNvbnN0IHBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIHBhcmEudGV4dENvbnRlbnQgPSAnRW5qb3kgdGhlIHJlc3Qgb2YgdGhlIGRheSEnO1xuICBzZWN0aW9uQ29udGVudEluZm8uYXBwZW5kQ2hpbGQocGFyYSk7XG5cbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgc2hvd1RvZGF5IGZyb20gJy4vdG9kYXkvdG9kYXlQYWdlJztcbmltcG9ydCBIYW1idXJnZXJNZW51IGZyb20gJy4vYXNzZXRzL2ljb25zL0hhbWJ1cmdlcl9pY29uLnN2Zyc7XG5pbXBvcnQgTWFnbmlmeWluZ0dsYXNzIGZyb20gJy4vYXNzZXRzL2ljb25zL21hZ25pZnlpbmctZ2xhc3Muc3ZnJztcbmltcG9ydCBCZWxsIGZyb20gJy4vYXNzZXRzL2ljb25zL2JlbGwuc3ZnJztcbmltcG9ydCBzaG93SW5kZXggZnJvbSAnLi9pbmJveC9pbmJveCc7XG5pbXBvcnQgc2hvd01lbnUgZnJvbSAnLi9wb3BVcE1lbnUvbWVudSc7XG5cbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xuY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5oZWFkZXIuY2xhc3NMaXN0LmFkZCgnaGVhZGVyJyk7XG5jb250ZW50LmFwcGVuZENoaWxkKGhlYWRlcik7XG5jb25zdCBzZWN0aW9uTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2gzJyk7XG5jb25zdCBrZWJhYk1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGVzdCcpO1xuY29uc3Qgc2VjdGlvbkNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VjdGlvbi1jb250ZW50Jyk7XG5cbmNvbnN0IG1lbnVCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbm1lbnVCYXIuY2xhc3NMaXN0LmFkZCgnbWVudS1iYXInKTtcbmNvbnRlbnQuYXBwZW5kQ2hpbGQobWVudUJhcik7XG5cbmNvbnN0IGhhbWJ1cmdlck1lbnVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuaGFtYnVyZ2VyTWVudUJ1dHRvbi5zcmMgPSBIYW1idXJnZXJNZW51O1xuaGFtYnVyZ2VyTWVudUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdoYW1idXJnZXItbWVudS1pbWcnKTtcbm1lbnVCYXIuYXBwZW5kQ2hpbGQoaGFtYnVyZ2VyTWVudUJ1dHRvbik7XG5cbmNvbnN0IGFkZFRhc2tCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbmFkZFRhc2tCdG4uY2xhc3NMaXN0LmFkZCgnYWRkLXRhc2stYnV0dG9uJyk7XG5hZGRUYXNrQnRuLnR5cGUgPSAnYnV0dG9uJztcbmFkZFRhc2tCdG4udGV4dENvbnRlbnQgPSAnKyc7XG5tZW51QmFyLmFwcGVuZENoaWxkKGFkZFRhc2tCdG4pO1xuXG5jb25zdCBzZWFyY2hCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbnNlYXJjaEJ0bi5jbGFzc0xpc3QuYWRkKCdzZWFyY2gtYnV0dG9uJyk7XG5zZWFyY2hCdG4uc3JjID0gTWFnbmlmeWluZ0dsYXNzO1xubWVudUJhci5hcHBlbmRDaGlsZChzZWFyY2hCdG4pO1xuXG5jb25zdCBub3RpZmljYXRpb25zQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG5ub3RpZmljYXRpb25zQnRuLmNsYXNzTGlzdC5hZGQoJ25vdGlmaWNhdGlvbnMtYnV0dG9uJyk7XG5ub3RpZmljYXRpb25zQnRuLnNyYyA9IEJlbGw7XG5tZW51QmFyLmFwcGVuZENoaWxkKG5vdGlmaWNhdGlvbnNCdG4pO1xuXG4vLyBzaG93VG9kYXkoKTtcbnNob3dJbmRleCgpO1xuc2hvd01lbnUoKTtcblxuY29uc3QgbWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cC1tZW51Jyk7XG5oYW1idXJnZXJNZW51QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBtZW51LmNsYXNzTGlzdC50b2dnbGUoJ2Nsb3NlJyk7XG59KTtcblxuY29uc3QgY2xvc2VCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xvc2UtYnV0dG9uJyk7XG5jbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgbWVudS5jbGFzc0xpc3QudG9nZ2xlKCdjbG9zZScpO1xufSk7XG5cbmNvbnN0IHNlY3Rpb25MaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tZW51LXNlY3Rpb25zLWxpc3Q+bGknKTtcbnNlY3Rpb25MaW5rc1swXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgbWVudS5jbGFzc0xpc3QudG9nZ2xlKCdjbG9zZScpO1xuICByZW1vdmVGcm9tRE9NKCk7XG4gIHNob3dJbmRleCgpO1xufSk7XG5cbnNlY3Rpb25MaW5rc1sxXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgbWVudS5jbGFzc0xpc3QudG9nZ2xlKCdjbG9zZScpO1xuICByZW1vdmVGcm9tRE9NKCk7XG4gIHNob3dUb2RheSgpOyAgXG59KTtcblxuZnVuY3Rpb24gcmVtb3ZlRnJvbURPTSgpIHtcbiAgaGVhZGVyLmNoaWxkTm9kZXNbMF0ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChoZWFkZXIuY2hpbGROb2Rlc1swXSk7XG4gIGhlYWRlci5jaGlsZE5vZGVzWzBdLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoaGVhZGVyLmNoaWxkTm9kZXNbMF0pO1xuICBjb250ZW50LmNoaWxkTm9kZXNbMV0ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChjb250ZW50LmNoaWxkTm9kZXNbMV0pO1xufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==